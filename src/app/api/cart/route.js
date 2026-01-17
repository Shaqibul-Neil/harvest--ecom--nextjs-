import {
  getCartController,
  addToCartController,
  updateCartQuantityController,
  deleteCartItemController,
} from "@/controllers/cartController";

export async function GET() {
  return await getCartController();
}

export async function POST(req) {
  return await addToCartController(req);
}

export async function PATCH(req) {
  return await updateCartQuantityController(req);
}

export async function DELETE(req) {
  return await deleteCartItemController(req);
}
