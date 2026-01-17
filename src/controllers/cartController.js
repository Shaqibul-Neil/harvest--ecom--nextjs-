import { authOptions } from "@/lib/authOptions";
import {
  addToCartService,
  clearCartService,
  deleteCartItemService,
  getCartService,
  updateCartQuantityService,
} from "@/services/cartService";
import { getServerSession } from "next-auth";

// GET - Fetch cart items
export const getCartController = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json({ success: true, cartItems: [] });
    }

    const cartItems = await getCartService(session.user.id);
    return Response.json({ success: true, cartItems });
  } catch (error) {
    console.error("Get Cart Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
};

// POST - Add item to cart
export const addToCartController = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required" },
        { status: 401 },
      );
    }

    const { productId, quantity } = await req.json();
    const result = await addToCartService(session.user.id, productId, quantity);

    return Response.json(result);
  } catch (error) {
    console.error("Add to Cart Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }
};

// PATCH - Update quantity
export const updateCartQuantityController = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required" },
        { status: 401 },
      );
    }

    const { productId, action } = await req.json();
    const result = await updateCartQuantityService(
      session.user.id,
      productId,
      action,
    );

    return Response.json(result);
  } catch (error) {
    console.error("Update Cart Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }
};

// DELETE - Remove item from cart (Amazon Style - productId only)
export const deleteCartItemController = async (req) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required" },
        { status: 401 },
      );
    }

    const { productId } = await req.json();
    const result = await deleteCartItemService(session.user.id, productId);

    return Response.json(result);
  } catch (error) {
    console.error("Delete Cart Item Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }
};

// DELETE ALL - Clear cart (for checkout)
export const clearCartController = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required" },
        { status: 401 },
      );
    }

    const result = await clearCartService(session.user.id);
    return Response.json(result);
  } catch (error) {
    console.error("Clear Cart Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }
};
