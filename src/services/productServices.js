import {
  findAllProducts,
  findFeaturedProducts,
  findSingleProduct,
} from "@/repositories/productRepository";
import { transformProduct } from "@/utils/helper";
import { ObjectId } from "mongodb";

// --------------------PUBLIC API------------------------

//Get Featured Products
export const getFeaturedProducts = async () => {
  try {
    const query = { isFeatured: true };
    const limit = 4;
    const projection = {
      title: 1,
      category: 1,
      mainImage: 1,
      rating: 1,
      price: 1,
      unit: 1,stock: 1
    };

    const result = await findFeaturedProducts(query, { limit, projection });

    //format object id to string and add discounted price with helper function
    const formattedResult = result.map((product) => transformProduct(product));

    return {
      success: true,
      message: "Successfully fetched data",
      result: formattedResult,
    };
  } catch (error) {
    return { success: false, message: "Failed to fetch data", error };
  }
};
//Get All Products
export const getAllProducts = async () => {
  try {
    const projection = {
      title: 1,
      category: 1,
      mainImage: 1,
      rating: 1,
      price: 1,
      unit: 1,stock: 1
    };

    const result = await findAllProducts({ projection });

    //format object id to string and add discounted price with the helper function
    const formattedResult = result.map((product) => transformProduct(product));

    return {
      success: true,
      message: "Successfully fetched data",
      result: formattedResult,
    };
  } catch (error) {
    return { success: false, message: "Failed to fetch data", error };
  }
};

//Get A Single Product
export const getASingleProduct = async (id) => {
  try {
    if (id.length != 24) return { success: false, message: "Invalid Id" };
    const query = { _id: new ObjectId(id) };
    const result = await findSingleProduct(query);
    if (!result) return { success: false, message: "Product not found" };
    //format object id to string and add discounted price with the helper function
    const formattedProduct = transformProduct(result);
    return {
      success: true,
      message: "Successfully fetched data",
      result: formattedProduct,
    };
  } catch (error) {
    return { success: false, message: "Failed to fetch data", error };
  }
};
