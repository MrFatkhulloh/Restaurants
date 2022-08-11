const { fetch, fetchAll } = require('../../utils/postgres')

const LOGIN = `
    SELECT * FROM users WHERE user_name = $1 AND user_password = $2 LIMIT 1
`

const login = (name, password) => fetch(LOGIN, name, password)

module.exports = {
    login
}