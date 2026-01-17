import { collections } from "@/lib/constants";
import { dbConnect } from "@/lib/dbConnect";
import {
  createCart,
  findCartByOwner,
  updateCart,
  deleteCart,
  getCartItems,
} from "@/repositories/cartRepository";
import { findSingleProduct } from "@/repositories/productRepository";
import { ObjectId } from "mongodb";
const productCollection = () => dbConnect(collections.PRODUCTS);

// Get cart for user
export const getCartService = async (userId) => {
  if (!userId) return [];
  //get users cart from database
  const cartItems = await getCartItems(userId);
  if (!cartItems?.length) return [];
  //get all the product id for all the cart
  const productIds = cartItems.map((item) => item.productId);
  //now get all the products from database
  //$in = array এর মধ্যে match করে এমন document বের করো
  const products = await productCollection()
    .find({ _id: { $in: productIds } })
    .toArray();
  //creating a product look up table
  const productMap = {};
  products.forEach((product) => {
    productMap[product._id.toString()] = product;
  });
  //update every cart items price
  return cartItems.map((item) => {
    const product = productMap[item.productId.toString()];
    //if item doesn't exist im the look up table return main cart item for Main Product DELETED scenario
    if (!product) return item;
    //now calculate the current price
    const currentPrice = product.sellingPrice || product.price?.mrp || 0;
    //check if rice changed
    const priceChanged = item.price !== currentPrice;
    //now return the updated item
    return {
      ...item,
      price: currentPrice, // new price
      previousPrice: priceChanged ? item.price : item.previousPrice, // old price track for front end ui show
      hasPriceChanged: priceChanged, // flag set if price change
      stock: product.stock?.quantity || 0, // update stock if applicable
    };
  });
};

// Add item to cart
export const addToCartService = async (userId, productId, quantity) => {
  if (!userId) throw new Error("User must be logged in");

  // Find product
  const product = await findSingleProduct({ _id: new ObjectId(productId) });
  if (!product) throw new Error("Product not found");

  // Calculate current price
  let currentPrice = product.sellingPrice || product.price?.mrp || 0;
  if (!product.sellingPrice && product.price?.discount > 0) {
    if (product.price.discountType === "PERCENT") {
      currentPrice =
        product.price.mrp - (product.price.mrp * product.price.discount) / 100;
    } else {
      currentPrice = product.price.mrp - product.price.discount;
    }
  }

  // Find user's cart
  const cart = await findCartByOwner(userId);

  // Create cart item
  const cartItem = {
    productId: product._id,
    title: product.title,
    image: product.mainImage,
    price: currentPrice,
    previousPrice: null, // No previous price when first added
    originalPrice: currentPrice, // Track original price
    hasPriceChanged: false,
    quantity: quantity,
    stock: product.stock?.quantity || 0,
  };

  // If no cart, create new
  if (!cart) {
    await createCart({
      items: [cartItem],
      userId: userId,
      status: "active",
      updatedAt: new Date().toISOString(),
    });
    return { success: true, message: "Item added to cart" };
  }

  // Check by productId
  const itemIndex = cart.items.findIndex(
    (i) => i.productId.toString() === productId,
  );

  if (itemIndex > -1) {
    const existingItem = cart.items[itemIndex];
    const priceChanged = existingItem.price !== currentPrice;

    // Update existing item
    cart.items[itemIndex].quantity += quantity;
    cart.items[itemIndex].price = currentPrice;

    // Track price change (always update previousPrice if changed)
    if (priceChanged) {
      cart.items[itemIndex].previousPrice = existingItem.price;
      cart.items[itemIndex].hasPriceChanged = true;
    }

    // Keep original price if not set
    if (!existingItem.originalPrice) {
      cart.items[itemIndex].originalPrice = existingItem.price;
    }
  } else {
    // Add new item
    cart.items.push(cartItem);
  }

  await updateCart(cart._id, {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });

  return { success: true, message: "Cart updated" };
};

// Update item quantity (for API - if needed)
export const updateCartQuantityService = async (userId, productId, action) => {
  if (!userId) throw new Error("User must be logged in");

  const cart = await findCartByOwner(userId);
  if (!cart) throw new Error("Cart not found");

  // Find by productId ONLY
  const itemIndex = cart.items.findIndex(
    (i) => i.productId.toString() === productId,
  );

  if (itemIndex === -1) throw new Error("Item not found in cart");

  if (action === "increase") {
    // Stock check
    if (cart.items[itemIndex].quantity >= cart.items[itemIndex].stock) {
      throw new Error("Stock limit reached");
    }
    cart.items[itemIndex].quantity += 1;
  } else if (action === "decrease") {
    if (cart.items[itemIndex].quantity <= 1) {
      throw new Error("Minimum quantity is 1");
    }
    cart.items[itemIndex].quantity -= 1;
  }

  await updateCart(cart._id, {
    items: cart.items,
    updatedAt: new Date().toISOString(),
  });

  return { success: true, items: cart.items };
};

// Delete item from cart
export const deleteCartItemService = async (userId, productId) => {
  if (!userId) throw new Error("User must be logged in");

  const cart = await findCartByOwner(userId);
  if (!cart) throw new Error("Cart not found");

  // Filter by productId ONLY
  const updatedItems = cart.items.filter(
    (item) => item.productId.toString() !== productId,
  );

  await updateCart(cart._id, {
    items: updatedItems,
    updatedAt: new Date().toISOString(),
  });

  return { success: true, items: updatedItems };
};

// Clear entire cart (after checkout)
export const clearCartService = async (userId) => {
  if (!userId) throw new Error("User must be logged in");

  const cart = await findCartByOwner(userId);
  if (!cart) return { success: true };

  await deleteCart(cart._id);
  return { success: true };
};
