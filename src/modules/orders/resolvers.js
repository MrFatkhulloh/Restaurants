const model = require('./model')


module.exports = {
    Query: {
        orders: async() => await model.getOrders()
    },

    Mutation: {
        newOrder: async(_, { name, password }) => await model.newOrder(name, password),
        deleteOrder: async(_, { id }) => await model.deleteOrder(id)
    },

    Order: {
        id: g => g.order_id,
        date: g => g.delivery_date
    }
}