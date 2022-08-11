const { AuthenticationError } = require('apollo-server-express')
const { sign } = require('../../utils/jwt')
const model = require('./model')


module.exports = {
    Mutation: {
        login: async(_, { name, password }) => {
            const foundUser = await model.login(name, password)

            if(!foundUser) {
                return new AuthenticationError("Unauthorized")
            }

            const { user_id: id } = foundUser

            return {
                status: "OK",
                access_token: sign({ id })
            }
        }
    },
}