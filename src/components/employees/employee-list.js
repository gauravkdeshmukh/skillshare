import React, { useEffect, useState } from 'react';
import {
    Fab,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import LoadingIndicator from '../loading-indicator';
import Api from '../../services/api.service';
import EmployeeListRow from './employee-list-item';
import AddEmployeeModal from '../modals/employee-modal';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: '10px'
    },

    extendedIcon: {
        marginRight: theme.spacing(1)
    }
}));

export default function EmployeeList({ onViewEmployee }) {
    const classes = useStyles();

    const [employeeList, setEmployeeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // Load existing employees.
    useEffect(() => {
        fetchEmployees();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    async function fetchEmployees() {
        try {
            setIsLoading(true);
            const employees = await Api.getAllEmployees();
            setEmployeeList(employees);
            setIsLoading(false);

            if (employees.length) {
                onViewEmployee(employees[0]);
            }
        } catch (error) {
            console.log('ERROR FETCH EMPS...', error);
        }
    }

    function openModal() {
        setModalIsOpen(true);
    }

    /**
     * @param {*} reloadList When true will force a reload of the user list.
     */
    function closeModal(reloadList = false) {
        setModalIsOpen(false);

        if (reloadList === true) {
            fetchEmployees();
        }
    }

    async function deleteEmployee(employee) {
        await Api.deleteEmployee(employee.id);
        fetchEmployees();
    }

    function addNewEmployee(data) {
        return Api.createEmployee(data);
    }

    return (
        <React.Fragment>
            <Typography variant="h5" className="margin-bottom-2">
                Employees
            </Typography>

            <Fab
                color="primary"
                aria-label="Add"
                className={classes.fab}
                onClick={openModal}
            >
                <AddIcon />
            </Fab>

            <AddEmployeeModal
                isOpen={modalIsOpen}
                onCloseModal={closeModal}
                persistData={addNewEmployee}
            />

            {isLoading && <LoadingIndicator />}

            {!isLoading && (
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>First</TableCell>
                            <TableCell>Last</TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {!isLoading &&
                            employeeList.map(employee => {
                                return (
                                    <EmployeeListRow
                                        key={employee.id}
                                        employee={employee}
                                        onDeleteEmployee={deleteEmployee}
                                        onViewEmployee={onViewEmployee}
                                    />
                                );
                            })}

                        {!employeeList.length && (
                            <TableRow>
                                <TableCell
                                    style={{ textAlign: 'center' }}
                                    colSpan={3}
                                >
                                    Add your first employee
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </React.Fragment>
    );
}
