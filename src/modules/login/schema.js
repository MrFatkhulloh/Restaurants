const { gql } = require('apollo-server-express')

module.exports = gql`
    extend type Mutation {
        login(name: String! password: String!): TokenResponse
    }
`