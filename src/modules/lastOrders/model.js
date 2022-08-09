const { fetch, fetchAll } = require('../../utils/postgres')

const ORDERS = `
    SELECT * FROM order_last
`
const NEW_ORDER = `
    INSERT INTO order_last(ordered_products, client_info) VALUES($1, $2) RETURNING *
`
const DELETE_ORDER = `
    DELETE FROM order_last WHERE order_id = $1 RETURNING *
`


const getOrders = () => fetchAll(ORDERS)
const newOrder = (products, client) => fetch(NEW_ORDER, products, client)
const deleteOrder = id => fetch(DELETE_ORDER, id)


module.exports = {
    getOrders,
    newOrder,
    deleteOrder
}