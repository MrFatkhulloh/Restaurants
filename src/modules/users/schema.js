const { gql } = require('apollo-server-express')

module.exports = gql`
    type User {
        id: ID!
        name: String!
        password: String!
    }

    extend type Query {
        users: [ User! ]!
    }

    extend type Mutation {
        newUser(name: String! password: String!): User!
        deleteUser(id: ID!): User
    }
`