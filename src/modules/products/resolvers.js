const model = require("./model");

module.exports = {
	Query: {
		products: async () => await model.getProducts(),
		productByBrand: async (_, { brandId }) => await model.productByBrand(brandId),
	},

	Mutation: {
		newProduct: async (_, { name, image, brandId, price }) =>
			await model.newProduct(name, image, brandId, price),
		deleteProduct: async (_, { id }) => await model.deleteProduct(id),
	},

	Product: {
		id: (g) => g.product_id,
		name: (g) => g.product_name,
		img_url: (g) => g.product_image,
		price: (g) => g.product_price,
	},
};
