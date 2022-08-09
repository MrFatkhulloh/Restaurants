const model = require('./model')


module.exports = {
    Query: {
        marketTypes: async() => await model.getTypes()
    },

    Mutation: {
        newType: async(_, { name, image }) => await model.newType(name, image),
        deleteType: async(_, { id }) => await model.deleteType(id)
    },

    MarketType: {
        id: g => g.type_id,
        name: g => g.type_name,
        title: g => g.type_title,
        img_url: g => g.type_image
    }
}