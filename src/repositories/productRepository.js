import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// --------------------PUBLIC API------------------------
//Find Featured Products
export const findFeaturedProducts = async (query = {}, options = {}) => {
  const { limit, projection } = options;

  return await dbConnect("products")
    .find(query, { projection })
    .limit(limit)
    .toArray();
};

//Find All Products
export const findAllProducts = async (options = {}) => {
  const { projection } = options;
  return await dbConnect("products").find({}, { projection }).toArray();
};

//Find A Single Product
export const findSingleProduct = async (query) => {
  return await dbConnect("products").findOne(query);
};
