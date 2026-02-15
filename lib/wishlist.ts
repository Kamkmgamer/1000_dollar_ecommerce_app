"use server";

import { cookies } from "next/headers";
import { products, Product } from "./products";

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Wishlist {
  items: WishlistItem[];
  itemCount: number;
}

const WISHLIST_COOKIE = "growing_brand_wishlist";

async function getWishlistFromCookie(): Promise<number[]> {
  const cookieStore = await cookies();
  const wishlistCookie = cookieStore.get(WISHLIST_COOKIE);
  if (!wishlistCookie) return [];
  try {
    return JSON.parse(wishlistCookie.value);
  } catch {
    return [];
  }
}

async function saveWishlistToCookie(wishlist: number[]) {
  const cookieStore = await cookies();
  cookieStore.set(WISHLIST_COOKIE, JSON.stringify(wishlist), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function getWishlist(): Promise<Wishlist> {
  const wishlistIds = await getWishlistFromCookie();
  const items: WishlistItem[] = [];

  for (const productId of wishlistIds) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      items.push({ 
        product, 
        addedAt: new Date() 
      });
    }
  }

  return { 
    items, 
    itemCount: items.length,
  };
}

export async function addToWishlist(productId: number): Promise<Wishlist> {
  const wishlistIds = await getWishlistFromCookie();
  if (!wishlistIds.includes(productId)) {
    wishlistIds.push(productId);
    await saveWishlistToCookie(wishlistIds);
  }
  return getWishlist();
}

export async function removeFromWishlist(productId: number): Promise<Wishlist> {
  const wishlistIds = await getWishlistFromCookie();
  const filtered = wishlistIds.filter((id) => id !== productId);
  await saveWishlistToCookie(filtered);
  return getWishlist();
}

export async function isInWishlist(productId: number): Promise<boolean> {
  const wishlistIds = await getWishlistFromCookie();
  return wishlistIds.includes(productId);
}

export async function toggleWishlist(productId: number): Promise<{ inWishlist: boolean; wishlist: Wishlist }> {
  const wishlistIds = await getWishlistFromCookie();
  const exists = wishlistIds.includes(productId);
  
  if (exists) {
    const filtered = wishlistIds.filter((id) => id !== productId);
    await saveWishlistToCookie(filtered);
  } else {
    wishlistIds.push(productId);
    await saveWishlistToCookie(wishlistIds);
  }
  
  const wishlist = await getWishlist();
  return { inWishlist: !exists, wishlist };
}

export async function moveAllToCart(): Promise<void> {
  const wishlistIds = await getWishlistFromCookie();
  const cookieStore = await cookies();
  
  const cartCookie = cookieStore.get("cart");
  let cartData: Record<number, number> = {};
  if (cartCookie) {
    try {
      cartData = JSON.parse(cartCookie.value);
    } catch {}
  }
  
  for (const productId of wishlistIds) {
    if (!cartData[productId]) {
      cartData[productId] = 1;
    }
  }
  
  cookieStore.set("cart", JSON.stringify(cartData), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  
  await saveWishlistToCookie([]);
}
