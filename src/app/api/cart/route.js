import { handleAddToCart } from "@/controllers/cartController";

export async function POST(req) {
    return await handleAddToCart(req)
    
}