import { getFeaturedProducts } from "@/services/productServices";

export const getProducts = async () => {
  return await getFeaturedProducts();
};
