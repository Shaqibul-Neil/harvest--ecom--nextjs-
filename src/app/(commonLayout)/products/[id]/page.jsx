import ProductDetailsCard from "@/components/cards/ProductDetailsCard";
import { getSingleProductController } from "@/controllers/productsController";
import React from "react";

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
