/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSkill = /* GraphQL */ `
  mutation CreateSkill($input: CreateSkillInput!) {
    createSkill(input: $input) {
      id
      skill
      empId
    }
  }
`;
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill($input: UpdateSkillInput!) {
    updateSkill(input: $input) {
      id
      skill
      empId
    }
  }
`;
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill($input: DeleteSkillInput!) {
    deleteSkill(input: $input) {
      id
      skill
      empId
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress($input: CreateAddressInput!) {
    createAddress(input: $input) {
      id
      line1
      line2
      city
      state
      zipcode
      empId
    }
  }
`;
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress($input: UpdateAddressInput!) {
    updateAddress(input: $input) {
      id
      line1
      line2
      city
      state
      zipcode
      empId
    }
  }
`;
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress($input: DeleteAddressInput!) {
    deleteAddress(input: $input) {
      id
      line1
      line2
      city
      state
      zipcode
      empId
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      id
      firstname
      lastname
      addresses {
        id
        line1
        line2
        city
        state
        zipcode
        empId
      }
      skills {
        id
        skill
        empId
      }
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee($input: UpdateEmployeeInput!) {
    updateEmployee(input: $input) {
      id
      firstname
      lastname
      addresses {
        id
        line1
        line2
        city
        state
        zipcode
        empId
      }
      skills {
        id
        skill
        empId
      }
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee($input: DeleteEmployeeInput!) {
    deleteEmployee(input: $input) {
      id
      firstname
      lastname
      addresses {
        id
        line1
        line2
        city
        state
        zipcode
        empId
      }
      skills {
        id
        skill
        empId
      }
    }
  }
`;
