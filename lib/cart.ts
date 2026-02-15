"use server";

import { cookies } from "next/headers";
import { products, Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

async function getCartFromCookie(): Promise<Record<number, number>> {
  const cookieStore = await cookies();
  const cartCookie = cookieStore.get("cart");
  if (!cartCookie) return {};
  try {
    return JSON.parse(cartCookie.value);
  } catch {
    return {};
  }
}

async function saveCartToCookie(cart: Record<number, number>) {
  const cookieStore = await cookies();
  cookieStore.set("cart", JSON.stringify(cart), {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function getCart(): Promise<Cart> {
  const cartData = await getCartFromCookie();
  const items: CartItem[] = [];
  let total = 0;

  for (const [productId, quantity] of Object.entries(cartData)) {
    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      items.push({ product, quantity });
      total += price * quantity;
    }
  }

  return { 
    items, 
    total,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  };
}

export async function addToCart(productId: number, quantity: number = 1): Promise<Cart> {
  const cartData = await getCartFromCookie();
  cartData[productId] = (cartData[productId] || 0) + quantity;
  await saveCartToCookie(cartData);
  return getCart();
}

export async function removeFromCart(productId: number): Promise<Cart> {
  const cartData = await getCartFromCookie();
  delete cartData[productId];
  await saveCartToCookie(cartData);
  return getCart();
}

export async function updateQuantity(productId: number, quantity: number): Promise<Cart> {
  const cartData = await getCartFromCookie();
  if (quantity <= 0) {
    delete cartData[productId];
  } else {
    cartData[productId] = quantity;
  }
  await saveCartToCookie(cartData);
  return getCart();
}

export async function clearCart(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("cart");
}
