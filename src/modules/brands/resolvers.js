const model = require("./model");

module.exports = {
	Query: {
		brands: async () => await model.getBrands(),
		typeBrands: async (_, { typeId }) => await model.typeBrands(typeId),
	},

	Mutation: {
		newBrand: async (_, { name, image, typeId }) =>
			await model.newBrand(name, image, typeId),
		deleteBrand: async (_, { id }) => await model.deleteBrand(id),
	},

	Brand: {
		id: (g) => g.brand_id,
		name: (g) => g.brand_name,
		img_url: (g) => g.brand_image,
	},
};
