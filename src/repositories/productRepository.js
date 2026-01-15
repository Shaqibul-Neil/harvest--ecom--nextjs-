import { collections } from "@/lib/constants";
import { dbConnect } from "@/lib/dbConnect";
const productsCollection = () => dbConnect(collections.PRODUCTS);

// --------------------PUBLIC API------------------------
//Find Featured Products
export const findFeaturedProducts = async (query = {}, options = {}) => {
  const { limit, projection } = options;

  return await productsCollection()
    .find(query, { projection })
    .limit(limit)
    .toArray();
};

//Find All Products
export const findAllProducts = async (options = {}) => {
  const { projection } = options;
  return await productsCollection().find({}, { projection }).toArray();
};

//Find A Single Product
export const findSingleProduct = async (query) => {
  return await productsCollection().findOne(query);
};
