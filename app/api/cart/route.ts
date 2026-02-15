import { NextResponse } from "next/server";
import { getCart, addToCart, removeFromCart, updateQuantity, clearCart } from "@/lib/cart";

export async function GET() {
  const cart = await getCart();
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { productId, quantity } = body;
  const cart = await addToCart(productId, quantity || 1);
  return NextResponse.json(cart);
}

export async function PATCH(request: Request) {
  const body = await request.json();
  const { productId, quantity } = body;
  const cart = await updateQuantity(productId, quantity);
  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  const body = await request.json().catch(() => ({}));
  if (body.productId) {
    const cart = await removeFromCart(body.productId);
    return NextResponse.json(cart);
  } else {
    await clearCart();
    return NextResponse.json({ items: [], total: 0, itemCount: 0 });
  }
}
