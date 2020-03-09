/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($id: ID, $skill: String) {
    onCreateSkill(id: $id, skill: $skill) {
      id
      skill
      empId
    }
  }
`;
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($id: ID, $skill: String) {
    onUpdateSkill(id: $id, skill: $skill) {
      id
      skill
      empId
    }
  }
`;
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($id: ID, $skill: String) {
    onDeleteSkill(id: $id, skill: $skill) {
      id
      skill
      empId
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress(
    $id: ID
    $line1: String
    $line2: String
    $city: String
    $state: String
  ) {
    onCreateAddress(
      id: $id
      line1: $line1
      line2: $line2
      city: $city
      state: $state
    ) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress(
    $id: ID
    $line1: String
    $line2: String
    $city: String
    $state: String
  ) {
    onUpdateAddress(
      id: $id
      line1: $line1
      line2: $line2
      city: $city
      state: $state
    ) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress(
    $id: ID
    $line1: String
    $line2: String
    $city: String
    $state: String
  ) {
    onDeleteAddress(
      id: $id
      line1: $line1
      line2: $line2
      city: $city
      state: $state
    ) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $id: ID
    $firstname: String
    $lastname: String
  ) {
    onCreateEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $id: ID
    $firstname: String
    $lastname: String
  ) {
    onUpdateEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $id: ID
    $firstname: String
    $lastname: String
  ) {
    onDeleteEmployee(id: $id, firstname: $firstname, lastname: $lastname) {
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
