const { fetch, fetchAll } = require('../../utils/postgres')

const USERS = `
    SELECT * FROM users
`
const NEW_USER = `
    INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING *
`
const DELETE_USER = `
    DELETE FROM users WHERE user_id = $1 RETURNING *
`


const getUsers = () => fetchAll(USERS)
const newUser = (name, password) => fetch(NEW_USER, name, password)
const deleteUser = id => fetch(DELETE_USER, id)


module.exports = {
    getUsers,
    newUser,
    deleteUser
}