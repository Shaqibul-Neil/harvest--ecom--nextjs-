// --- Helper Functions ---
//Calculate Discounted Price
export const calculateDiscountedPrice = (mrp, discount, discountType) => {
  const discountAmount =
    discountType === "PERCENT"
      ? (mrp * discount) / 100
      : discount;
  const sellingPrice = Math.round(mrp - discountAmount);
  return {
    sellingPrice,
    discountAmount,
  };
};

export const formattedId = (id) => {
  return id.toString();
};

export const transformProduct = (product) => {
  if (!product) return null;
  const mrp = product.price?.mrp || 0;
  const discount = product.price?.discount || 0;
  const discountType = product.price?.discountType || "PERCENT";
  const { sellingPrice, discountAmount } = calculateDiscountedPrice(
    mrp,
    discount,
    discountType
  );
  return {
    ...product,
    _id: formattedId(product._id),
    sellingPrice,
    discountAmount,
  };
};