const { gql } = require('apollo-server-express')

module.exports = gql`
    type Order {
        id: ID!
        date: Date!
    }

    extend type Query {
        orders: [ Order! ]!
    }

    extend type Mutation {
        newOrder(date: Date!): Order!
        deleteOrder(id: ID!): Order
    }
`