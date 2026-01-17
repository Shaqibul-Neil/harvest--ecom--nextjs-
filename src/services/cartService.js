import {
  createCart,
  findCartByOwner,
  updateCart,
} from "@/repositories/cartRepository";
import { findSingleProduct } from "@/repositories/productRepository";
import { ObjectId } from "mongodb";

//Add cart and update (For Logged-in users only now)
export const addToCartService = async (ownerInfo, productId, quantity) => {
  //1. Only userId needed now (no guestId in Daraz style)
  const { userId } = ownerInfo;

  // If no userId, reject (should not happen as AddToCartButton checks)
  if (!userId) {
    throw new Error("User must be logged in to add to cart");
  }

  //2.find the particular product
  const product = await findSingleProduct({ _id: new ObjectId(productId) });
  if (!product) throw new Error("Product not found");

  // Calculate the correct price (use sellingPrice or calculate from discount)
  let currentPrice = product.sellingPrice || product.price?.mrp || 0;
  if (!product.sellingPrice && product.price?.discount > 0) {
    if (product.price.discountType === "PERCENT") {
      currentPrice =
        product.price.mrp - (product.price.mrp * product.price.discount) / 100;
    } else {
      currentPrice = product.price.mrp - product.price.discount;
    }
  }

  //3. find the owners cart (using userId only)
  const cart = await findCartByOwner(userId);

  //4. create a clean cart object
  const cartItem = {
    productId: product._id,
    title: product.title,
    image: product.mainImage,
    price: currentPrice * quantity, // Total price for this item
    quantity: quantity,
    stock: product.stock?.quantity || 0,
  };

  //5.If no cart then create cart
  if (!cart) {
    return await createCart({
      items: [cartItem],
      userId: userId,
      status: "active",
      updatedAt: new Date().toISOString(),
    });
  }

  //6. Check if item already exists in cart
  const itemIndex = cart.items.findIndex(
    (i) => i.productId.toString() === productId && i.price === currentPrice * quantity,
  );

  if (itemIndex > -1) {
    //if cart item exists then add the particular items quantity and price
    cart.items[itemIndex].quantity += quantity;
    cart.items[itemIndex].price += currentPrice * quantity;
  } else {
    //if not then push the whole cart object
    cart.items.push(cartItem);
  }

  //7. Update the database
  return await updateCart(cart._id, {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });
};

/* ====================================================================
   COMMENTED OUT: SYNC/MERGE SERVICE (Daraz Style - No longer needed)
   ==================================================================== */

// //Merging the guest cart with the logged in user cart for same user
// export const syncCartService = async (ownerId, localItems) => {
//   //get the user's current cart from database
//   let cart = await findCartByOwner(ownerId);
//   //if no cart in database then create with the local cart info
//   if (!cart) {
//     const result = await createCart({
//       userId: ownerId,
//       items: localItems,
//       status: "active",
//       updatedAt: new Date().toISOString(),
//     });
//     return await findCartByOwner(ownerId);
//   }
//   //if cart exists then merge the cart
//   localItems.forEach((localItem) => {
//     //check if the same local item is in database with same id and same price
//     const dbItemIndex = cart.items.findIndex(
//       (dbItem) =>
//         dbItem.productId.toString() === localItem.productId &&
//         dbItem.price === localItem.price,
//     );
//     if (dbItemIndex > -1) {
//       //if there is similar product then just increase the quantity
//       cart.items[dbItemIndex].quantity += localItem.quantity;
//     } else {
//       //if the product is different or same product with different price
//       cart.items.push(localItem);
//     }
//   });
//   //update the  database
//   await updateCart(cart._id, {
//     items: cart.items,
//     updatedAt: new Date().toISOString(),
//   });
//   //return the updated cart to get the items array in frontend
//   return await findCartByOwner(ownerId);
// };

//Get cart for logged-in user
export const getCartService = async (userId) => {
  if (!userId) return null;
  return await findCartByOwner(userId);
};

// Delete item from cart
export const deleteCartItemService = async (userId, productId, price) => {
  if (!userId) {
    throw new Error("User must be logged in");
  }

  // Find the user's cart
  const cart = await findCartByOwner(userId);
  if (!cart) {
    throw new Error("Cart not found");
  }

  // Filter out the item to delete (match both productId and price)
  const updatedItems = cart.items.filter(
    (item) => !(item.productId.toString() === productId && item.price === price)
  );

  // Update the database
  return await updateCart(cart._id, {
    items: updatedItems,
    updatedAt: new Date().toISOString(),
  });
};
