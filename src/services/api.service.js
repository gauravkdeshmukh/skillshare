import { API, graphqlOperation } from 'aws-amplify';
import {
    onCreateEmployee,
    onDeleteEmployee,
    onUpdateEmployee,
    onDeleteAddress,
    onDeleteSkill,
} from '../graphql/subscriptions';
import {
    createEmployee,
    deleteEmployee,
    createAddress,
    createSkill,
    deleteAddress,
    updateAddress,
    updateSkill,
    updateEmployee,
    deleteSkill
} from '../graphql/mutations';
import { getEmployee, listEmployees, listAddresses, listSkills } from '../graphql/queries';

export default {
    _unwrap(result, key) {
         const data = result.data[key];
         return data && data.items ? data.items : data; // handle arrays and objects
    },

    _subscribe(subscription, fn) {
        return API.graphql(graphqlOperation(subscription)).subscribe({
            next: fn
        });
    },

    onCreateEmployee(fn) {
        return this._subscribe(onCreateEmployee, fn);
    },

    onUpdateEmployee(fn) {
        return this._subscribe(onUpdateEmployee, fn);
    },

    onDeleteEmployee(fn) {
        return this._subscribe(onDeleteEmployee, fn);
    },

    onDeleteAddress(fn) {
        return this._subscribe(onDeleteAddress, fn);
    },

    onDeleteSkill(fn) {
        return this._subscribe(onDeleteSkill, fn);
    },

    async getOneEmployee(id) {
        const result = await API.graphql(graphqlOperation(getEmployee, { id }));
        let employeeResult = this._unwrap(result, 'getEmployee');
        if(employeeResult && employeeResult.addresses == null){
            const addresses = this._unwrap(await API.graphql(graphqlOperation(listAddresses, { empId: id })), 'listAddresses');
            employeeResult.addresses = addresses.filter((address) => address.empId === id);
        }
        if(employeeResult && employeeResult.skills == null){
             const skills = this._unwrap(await API.graphql(graphqlOperation(listSkills, { empId: id })), 'listSkills');
             employeeResult.skills = skills.filter((skill) => skill.empId === id);
        }
        return employeeResult;
    },

    async getAllEmployees() {
        const result = await API.graphql(graphqlOperation(listEmployees));
        return this._unwrap(result, 'listEmployees');
    },

    async createEmployee({firstname, lastname, address, skills}) {
        const employeeResult = this._unwrap(await API.graphql(
            graphqlOperation(createEmployee, {
                input: { firstname, lastname }
            })
        ), 'createEmployee');
        const empId = employeeResult.id;
        await Promise.all([
            await this.processAddresses(address, empId, createAddress),
            await this.processSkills(skills, empId, createSkill),
        ]);
        return employeeResult;
    },

    async updateEmployee({firstname, lastname, address, skills}) {
        const employeeResult = this._unwrap(await API.graphql(
            graphqlOperation(updateEmployee, {
                input: { firstname, lastname }
            })
        ), 'updateEmployee');
        const empId = employeeResult.id;
        const result = await Promise.all([
            await this.processAddresses(address, empId, updateAddress),
            await this.processSkills(skills, empId, updateSkill),
        ]);
        return this._unwrap(result[0], 'updateEmployee');
    },

    async processAddresses(addresses, empId, operation){
        const results = [];
        ;
        addresses.forEach(address => {
            results.push(API.graphql(
                graphqlOperation(operation, {
                    input: { ...address, empId }
                }),
            ));
        });
        return Promise.all(results);
    },

    async processSkills(skills, empId, operation){
        const results = [];
        ;
        skills.forEach(skill => {
            results.push(API.graphql(
                graphqlOperation(operation, {
                    input: { skill, empId }
                }),
            ));
        });
        return Promise.all(results);
    },

    async deleteEmployee(id) {
        const deletedEmployee = await API.graphql(graphqlOperation(deleteEmployee, { input: { id } }));
        deletedEmployee.id = id;
        if(deletedEmployee.addresses == null){
            const addresses = this._unwrap(await API.graphql(graphqlOperation(listAddresses, { empId: id })), 'listAddresses');
            addresses.filter((a) => a.empId === id).forEach(async (address) => {
                await this.deleteAddress(deletedEmployee, address);
            });
        }
        if(deletedEmployee.skills == null){
             const skills = this._unwrap(await API.graphql(graphqlOperation(listSkills, { empId: id })), 'listSkills');
             skills.filter((a) => a.empId === id).forEach(async (skill) => {
                await this.deleteSkill(deletedEmployee, skill);
            });
        }
        return deletedEmployee;
    },

    async deleteSkill(employee, skill) {
        await API.graphql(
            graphqlOperation(deleteSkill, { input: { id: skill.id } })
        );       
        return await this.getOneEmployee(employee.id);
    },

    async deleteAddress(employee, address) {
        await API.graphql(
            graphqlOperation(deleteAddress, { input: { id: address.id } })
        );
        return await this.getOneEmployee(employee.id);
    }
};
