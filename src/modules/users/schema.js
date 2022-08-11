const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!
        name: String!
        password: String!
        isadmin: Boolean!
    }

    extend type Query {
        users: [ User! ]!
    }

    extend type Mutation {
        newUser(name: String! password: String! isadmin: Boolean!): User!
        deleteUser(id: ID!): User
    }
`