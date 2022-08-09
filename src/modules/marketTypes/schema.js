const { gql } = require('apollo-server-express')

module.exports = gql`
    type MarketType {
        id: ID!
        name: String!
        title: String!
        img_url: String!
    }

    extend type Query {
        marketTypes: [ MarketType! ]!
    }

    extend type Mutation {
        newType(name: String! image: String!): MarketType!
        deleteType(id: ID!): MarketType
    }
`