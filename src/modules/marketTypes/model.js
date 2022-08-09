const { fetch, fetchAll } = require('../../utils/postgres')

const MARKET_TYPES = `
    SELECT * FROM market_types ORDER BY type_id
`
const NEW_TYPE = `
    INSERT INTO market_types(type_name, type_image) VALUES($1, $2) RETURNING *
`
const DELETE_TYPE = `
    DELETE FROM market_types WHERE type_id = $1 RETURNING *
`


const getTypes = () => fetchAll(MARKET_TYPES)
const newType = (name, image) => fetch(NEW_TYPE, name, image)
const deleteType = id => fetch(DELETE_TYPE, id)


module.exports = {
    getTypes,
    newType,
    deleteType
}