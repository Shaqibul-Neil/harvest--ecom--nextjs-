import { collections } from "@/lib/constants";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const cartCollection = () => dbConnect(collections.CARTS);

// Find cart by owner (userId)
export const findCartByOwner = async (ownerId) => {
  return await cartCollection().findOne({ userId: ownerId });
};

// Create a new cart
export const createCart = async (cartData) => {
  return await cartCollection().insertOne(cartData);
};

// Update entire cart
export const updateCart = async (cartId, cartData) => {
  return await cartCollection().updateOne(
    { _id: new ObjectId(cartId) },
    { $set: cartData },
    { upsert: true },
  );
};

// Delete entire cart (for checkout complete)
export const deleteCart = async (cartId) => {
  return await cartCollection().deleteOne({ _id: new ObjectId(cartId) });
};

// Get cart items only
export const getCartItems = async (userId) => {
  const cart = await findCartByOwner(userId);
  return cart?.items || [];
};
