import { collections } from "@/lib/constants";
import { dbConnect } from "@/lib/dbConnect";
const cartCollection = () => dbConnect(collections.CARTS);

//Check cart by owner
export const findCartByOwner = async (ownerId) => {
  return await cartCollection().findOne({
    $or: [{ userId: ownerId }, { guestId: ownerId }],
  });
};
//Update cart
export const updateCart = async (cartId, cartData) => {
  return await cartCollection().updateOne(
    { _id: cartId },
    { $set: cartData },
    { upsert: true }, //if no cart then creates new cart
  );
};
//Create a new cart
export const createCart = async (cartData) => {
  return await cartCollection().insertOne(cartData);
};
//Delete cart
export const deleteCart = async (cartId) => {
  return await cartCollection().deleteOne({ _id: cartId });
};

//Get all cart
export const getCart = async (ownerId) => {
  return await cartCollection()
    .find({
      $or: [{ userId: ownerId }, { guestId: ownerId }],
    })
    .toArray();
};

// User একটা item delete করে
// deleteCartItemService()
// Checkout complete
// deleteCart()
//  ← পুরো cart delete
// Clear All items
// deleteCart()
//  ← পুরো cart delete
// Abandoned cart cleanup
// deleteCart()
//  ← পুরো cart delete
