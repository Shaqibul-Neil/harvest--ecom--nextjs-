import { authOptions } from "@/lib/authOptions";
import { getGuestId } from "@/lib/guestSession";
import { addToCartService } from "@/services/cartService";
import { getServerSession } from "next-auth";

export const handleAddToCart = async (req) => {
  try {
    const { productId, quantity } = await req.json(); //stream object
    //1. getting the user or guest id
    const session = await getServerSession(authOptions);
    const guestId = await getGuestId();
     //console.log("Server side guestId check:", guestId); 
    //2.call the add to cart service with owner info
    const result = await addToCartService(
      { userId: session?.user?.id, guestId },
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
