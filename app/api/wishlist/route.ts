import { NextResponse } from "next/server";
import { getWishlist, toggleWishlist, isInWishlist } from "@/lib/wishlist";

export async function GET() {
  const wishlist = await getWishlist();
  return NextResponse.json(wishlist);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { productId } = body;
  const result = await toggleWishlist(productId);
  return NextResponse.json(result);
}
