import {
  createCart,
  findCartByOwner,
  updateCart,
} from "@/repositories/cartRepository";
import { findSingleProduct } from "@/repositories/productRepository";
import { ObjectId } from "mongodb";

//Add cart and update
export const addToCartService = async (ownerInfo, productId, quantity) => {
  //1.check cart by ownerID or guestID
  const { userId, guestId } = ownerInfo;

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

  //3. find the owners cart
  const cart = await findCartByOwner(userId || guestId);

  //4. create a clean cart object
  const cartItem = {
    productId: product._id,
    title: product.title,
    image: product.mainImage,
    price: currentPrice * quantity, // Total price for this item
    quantity: quantity,
  };

  //4.If no cart then add cart
  if (!cart) {
    return await createCart({
      items: [cartItem],
      userId: userId || null,
      guestId: userId ? null : guestId,
      status: "active",
      updatedAt: new Date().toISOString(),
    });
  }

  //5. do cart already exist or not
  const itemIndex = cart.items.findIndex(
    (i) => i.productId.toString() === productId
  ); //must use toString()

  if (itemIndex > -1) {
    //if cart item exists then add the particular items quantity and price
    cart.items[itemIndex].quantity += quantity;
    cart.items[itemIndex].price += currentPrice * quantity; // Add to existing subtotal
  } else {
    //if not then push the whole cart object
    cart.items.push(cartItem);
  }

  //6. now update the database
  return await updateCart(cart._id, {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });
};

//Merging the guest cart with the logged in user cart for same user
export const syncCartService = async (ownerId, localItems) => {
  //get the user's current cart from database
  let cart = await findCartByOwner(ownerId);
  //if no cart in database then create with the local cart info
  if (!cart) {
    return await createCart({
      userId: ownerId,
      items: localItems,
      status: "active",
      updatedAt: new Date().toISOString(),
    });
  }
  //if cart exists then merge the cart
  localItems.forEach((localItem) => {
    //check if the same local item is in database with same id and same price
    const dbItemIndex = cart.items.findIndex(
      (dbItem) =>
        dbItem.productId.toString() === localItem.productId &&
        dbItem.price === localItem.price
    );
    if (dbItemIndex > -1) {
      //if there is similar product then just increase the quantity
      cart.items[dbItemIndex].quantity += localItem.quantity;
    } else {
      //if the product is different or same product with different price
      cart.items.push(localItem);
    }
  });
  //update the cart and save database
  return updateCart(cart._id, {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });
};
