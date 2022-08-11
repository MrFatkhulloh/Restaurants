const { fetch, fetchAll } = require('../../utils/postgres')

const USERS = `
    SELECT * FROM users
`
const NEW_USER = `
    INSERT INTO users(user_name, user_password, isadmin) VALUES($1, $2, $3) RETURNING *
`
const DELETE_USER = `
    DELETE FROM users WHERE user_id = $1 RETURNING *
`


const getUsers = () => fetchAll(USERS)
const newUser = (name, password, isadmin) => fetch(NEW_USER, name, password, isadmin)
const deleteUser = id => fetch(DELETE_USER, id)


module.exports = {
    getUsers,
    newUser,
    deleteUser
}