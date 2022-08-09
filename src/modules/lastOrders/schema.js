const { gql } = require('apollo-server-express')

module.exports = gql`
    type Order {
        id: ID!
        products: String!
        client: String!
        time: Date!
    }

    extend type Query {
        orders: [ Order! ]!
    }

    extend type Mutation {
        newOrder(product: String! client: String!): Order!
        deleteOrder(id: ID!): Order
    }
`