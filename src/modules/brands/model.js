const { fetch, fetchAll } = require('../../utils/postgres')

const BRANDS = `
    SELECT * FROM brand
`
const NEW_BRAND = `
    INSERT INTO brand(brand_name, brand_image, market_type) VALUES($1, $2, $3) RETURNING *
`
const DELETE_BRAND = `
    DELETE FROM brand WHERE brand_id = $1 RETURNING *
`

const TYPE_BRAND = `
    SELECT * FROM brand WHERE market_type = $1
`


const getBrands = () => fetchAll(BRANDS)
const newBrand = (name, image, typeId) => fetch(NEW_BRAND, name, image, typeId)
const deleteBrand = id => fetch(DELETE_BRAND, id)
const typeBrands = typeId => fetchAll(TYPE_BRAND, typeId)


module.exports = {
    getBrands,
    newBrand,
    deleteBrand,
    typeBrands,
}