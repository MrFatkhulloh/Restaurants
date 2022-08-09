const { fetch, fetchAll } = require('../../utils/postgres')

const PRODUCTS = `
    SELECT * FROM products
`
const NEW_PRODUCT = `
    INSERT INTO products(product_name, product_image, brand_id, product_price) VALUES($1, $2, $3, $4) RETURNING *
`
const DELETE_PRODUCT = `
    DELETE FROM products WHERE product_id = $1 RETURNING *
`

const PRODUCT_BY_BRAND = `
    SELECT * FROM products WHERE brand_id = $1
`


const getProducts = () => fetchAll(PRODUCTS)
const newProduct = (name, image, brandId, price) => fetch(NEW_PRODUCT, name, image, brandId, price)
const deleteProduct = id => fetch(DELETE_PRODUCT, id)
const productByBrand = brandId => fetchAll(PRODUCT_BY_BRAND, brandId)


module.exports = {
    getProducts,
    newProduct,
    deleteProduct,
    productByBrand
}