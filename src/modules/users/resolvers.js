const model = require('./model')


module.exports = {
    Query: {
        users: async() => await model.getUsers()
    },

    Mutation: {
        newUser: async(_, { name, password }) => await model.newUser(name, password),
        deleteUser: async(_, { id }) => await model.deleteUser(id)
    },

    User: {
        id: g => g.user_id,
        name: g => g.user_name,
        password: g => g.user_password
    }
}