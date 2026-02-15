"use server";

import { cookies } from "next/headers";
import { getCart, clearCart } from "./cart";

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: string;
  image: string;
}

export interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const ORDERS_COOKIE = "growing_brand_orders";

async function getOrdersFromCookie(): Promise<Order[]> {
  const cookieStore = await cookies();
  const ordersCookie = cookieStore.get(ORDERS_COOKIE);
  if (!ordersCookie) return [];
  try {
    const orders = JSON.parse(ordersCookie.value);
    return orders.map((o: Order) => ({
      ...o,
      createdAt: new Date(o.createdAt),
      updatedAt: new Date(o.updatedAt),
    }));
  } catch {
    return [];
  }
}

async function saveOrdersToCookie(orders: Order[]) {
  const cookieStore = await cookies();
  cookieStore.set(ORDERS_COOKIE, JSON.stringify(orders), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export async function createOrder(data: {
  customerEmail: string;
  customerName: string;
  customerPhone: string;
  shippingAddress: {
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}): Promise<Order> {
  const cart = await getCart();
  const orders = await getOrdersFromCookie();
  
  const subtotal = cart.total;
  const shipping = subtotal >= 100 ? 0 : 9.99;
  
  const order: Order = {
    id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
    items: cart.items.map((item) => ({
      productId: item.product.id,
      productName: item.product.name,
      quantity: item.quantity,
      price: item.product.price,
      image: item.product.image,
    })),
    subtotal,
    shipping,
    total: subtotal + shipping,
    customerEmail: data.customerEmail,
    customerName: data.customerName,
    customerPhone: data.customerPhone,
    shippingAddress: data.shippingAddress,
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  orders.push(order);
  await saveOrdersToCookie(orders);
  await clearCart();
  
  return order;
}

export async function getOrders(): Promise<Order[]> {
  const orders = await getOrdersFromCookie();
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

export async function getOrderById(orderId: string): Promise<Order | undefined> {
  const orders = await getOrdersFromCookie();
  return orders.find((o) => o.id === orderId);
}

export async function updateOrderStatus(orderId: string, status: Order["status"]): Promise<void> {
  const orders = await getOrdersFromCookie();
  const orderIndex = orders.findIndex((o) => o.id === orderId);
  if (orderIndex >= 0) {
    orders[orderIndex].status = status;
    orders[orderIndex].updatedAt = new Date();
    await saveOrdersToCookie(orders);
  }
}

export async function getOrderStats(): Promise<{
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  processingOrders: number;
  shippedOrders: number;
  deliveredOrders: number;
}> {
  const orders = await getOrdersFromCookie();
  
  return {
    totalOrders: orders.length,
    totalRevenue: orders.reduce((sum, o) => sum + o.total, 0),
    pendingOrders: orders.filter((o) => o.status === "pending").length,
    processingOrders: orders.filter((o) => o.status === "processing").length,
    shippedOrders: orders.filter((o) => o.status === "shipped").length,
    deliveredOrders: orders.filter((o) => o.status === "delivered").length,
  };
}

export async function getRecentOrders(limit: number = 5): Promise<Order[]> {
  const orders = await getOrders();
  return orders.slice(0, limit);
}
