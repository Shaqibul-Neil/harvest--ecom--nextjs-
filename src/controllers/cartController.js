import { authOptions } from "@/lib/authOptions";
import { addToCartService, deleteCartItemService } from "@/services/cartService";
import { getServerSession } from "next-auth";

// Add item to cart
export const handleAddToCart = async (req) => {
  try {
    const { productId, quantity } = await req.json();

    const session = await getServerSession(authOptions);

    // Reject if not logged in
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required to add to cart" },
        { status: 401 }
      );
    }

    const result = await addToCartService(
      { userId: session.user.id },
      productId,
      quantity
    );

    return Response.json({
      success: true,
      message: "Cart updated successfully",
    });
  } catch (error) {
    console.error("Cart Update Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
};

// Delete item from cart
export const handleDeleteCartItem = async (req) => {
  try {
    const { productId, price } = await req.json();

    const session = await getServerSession(authOptions);

    // Reject if not logged in
    if (!session?.user?.id) {
      return Response.json(
        { success: false, message: "Login required" },
        { status: 401 }
      );
    }

    const result = await deleteCartItemService(session.user.id, productId, price);

    return Response.json({
      success: true,
      message: "Item removed from cart",
    });
  } catch (error) {
    console.error("Cart Delete Error:", error);
    return Response.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
};
