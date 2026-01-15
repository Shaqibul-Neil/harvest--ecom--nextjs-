import ProductDetailsCard from "@/components/cards/ProductDetailsCard";
import { getSingleProductController } from "@/controllers/productsController";
import React from "react";

export const metadata = {
  title: "Product Details",
  description: "An E-commerce app for fresh vegetables and fruits",
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const { result } = await getSingleProductController(id);
  console.log(result);
  return (
    <div>
      <ProductDetailsCard product={result} />
    </div>
  );
};

export default ProductDetails;
