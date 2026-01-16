import { authOptions } from "@/lib/authOptions";
import { syncCartService } from "@/services/cartService";
import { getServerSession } from "next-auth";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return Response.json({ success: false }, { status: 401 });
    const { localItems } = await req.json();
    //call the merge service
    const updatedCart = await syncCartService(session.user.id, localItems);
    console.log("updatedCart in route", updatedCart);
    return Response.json({ success: true, cartItems: updatedCart.items });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
