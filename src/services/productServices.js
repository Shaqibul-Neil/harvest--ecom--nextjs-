import { findFeaturedProducts } from "@/repositories/productRepository";

//find featured products
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
      unit: 1,
    };

    const result = await findFeaturedProducts(query, { limit, projection });

    //format object id to string
    const formattedResult = result.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return {
      success: true,
      message: "Successfully fetched data",
      result: formattedResult,
    };
  } catch (error) {
    return { success: false, message: "Failed to fetche data", error };
  }
};
