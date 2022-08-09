const model = require('./model')


module.exports = {
    Query: {
        orders: async() => await model.getOrders()
    },

    Mutation: {
        newOrder: async(_, { product, client }) => await model.newOrder(product, client),
        deleteOrder: async(_, { id }) => await model.deleteOrder(id)
    },

    Order: {
        id: g => g.order_id,
        products: g => g.ordered_products,
        client: g => g.client_info,
        time: g => g.ordered_at
    }
}