import { dbConnect } from "@/lib/dbConnect";

//Find featured Products
export const findFeaturedProducts = async (query = {}, options = {}) => {
  const { limit, projection } = options;

  return await dbConnect("products")
    .find(query, { projection })
    .limit(limit)
    .toArray();
};
