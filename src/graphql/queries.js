/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      skill
      empId
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: TableSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        skill
        empId
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
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
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: TableAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        line1
        line2
        city
        state
        zipcode
        empId
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: TableEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
      }
      nextToken
    }
  }
`;
