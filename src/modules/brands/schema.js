const { gql } = require('apollo-server-express')

module.exports = gql`
    type Brand {
        id: ID!
        name: String!
        img_url: String!
    }

    extend type Query {
        brands: [ Brand! ]!
        typeBrands(typeId: ID!): [ Brand! ]!
    }

    extend type Mutation {
        newBrand(name: String! image: String! typeId: ID!): Brand!
        deleteBrand(id: ID!): Brand
    }
`