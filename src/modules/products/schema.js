const { gql } = require('apollo-server-express')

module.exports = gql`
    type Product {
        id: ID!
        name: String!
        img_url: String!
        price: Int!
    }

    extend type Query {
        products: [ Product! ]!
        productByBrand(brandId: ID!): [ Product ]
    }

    extend type Mutation {
        newProduct(name: String! image: String! brandId: ID! price: Int): Product!
        deleteProduct(id: ID!): Product
    }
`