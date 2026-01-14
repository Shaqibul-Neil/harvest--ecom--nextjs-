import {
  getAllProducts,
  getASingleProduct,
  getFeaturedProducts,
} from "@/services/productServices";

// --------------------PUBLIC API------------------------
export const getFeaturedProductsController = async () => {
  return await getFeaturedProducts();
};
export const getAllProductsController = async () => {
  return await getAllProducts();
};
export const getSingleProductController = async (id) => {
  return await getASingleProduct(id);
};
