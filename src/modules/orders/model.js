const { fetch, fetchAll } = require('../../utils/postgres')

const ORDERS = `
    SELECT * FROM orders
`
const NEW_ORDER = `
    INSERT INTO orders(delivery_date) VALUES($1) RETURNING *
`
const DELETE_ORDER = `
    DELETE FROM orders WHERE order_id = $1 RETURNING *
`


const getOrders = () => fetchAll(ORDERS)
const newOrder = date => fetch(NEW_ORDER, date)
const deleteOrder = id => fetch(DELETE_ORDER, id)


module.exports = {
    getOrders,
    newOrder,
    deleteOrder
}