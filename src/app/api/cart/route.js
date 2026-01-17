import { handleAddToCart, handleDeleteCartItem } from "@/controllers/cartController";
import { authOptions } from "@/lib/authOptions";
import { findCartByOwner } from "@/repositories/cartRepository";
import { getServerSession } from "next-auth";

// POST - Add item to cart
export async function POST(req) {
  return await handleAddToCart(req);
}

// GET - Fetch cart items
export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);
    // If not logged in, return empty cart
    if (!session) {
      return Response.json({ success: true, cartItems: [] });
    }

    // If logged in, find the cart from database
    const cart = await findCartByOwner(session.user.id);

    // Return items if cart exists, otherwise empty array
    return Response.json({
      success: true,
      cartItems: cart?.items || [],
    });
  } catch (error) {
    console.error("Get Cart Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE - Remove item from cart
export async function DELETE(req) {
  return await handleDeleteCartItem(req);
}
