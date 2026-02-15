"use client";

import Link from "next/link";
import { useUser, SignOutButton } from "@clerk/nextjs";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Order {
  id: string;
  total: number;
  status: string;
  createdAt: string;
  items: { productName: string; quantity: number }[];
}

interface AccountContentProps {
  user: User;
  orders: Order[];
}

export default function AccountContent({ user, orders }: AccountContentProps) {
  const { user: clerkUser } = useUser();

  return (
    <>
      <section id="profile">
        <h3>Profile Information</h3>
        
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            disabled
            style={{ background: "var(--bg-secondary)" }}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            disabled
            style={{ background: "var(--bg-secondary)" }}
          />
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
          Profile information is managed through your Clerk account.
        </p>

        <SignOutButton>
          <button className="btn btn-secondary">Sign Out</button>
        </SignOutButton>
      </section>

      <section id="orders" style={{ marginTop: "3rem" }}>
        <h3>Order History</h3>

        {orders.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem 0", color: "var(--text-muted)" }}>
            <p>No orders yet</p>
            <Link href="/" className="btn btn-secondary" style={{ marginTop: "1rem" }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td style={{ fontWeight: 500 }}>{order.id}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span className={`status-badge status-${order.status}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
