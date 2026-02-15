"use client";

import { useRouter } from "next/navigation";

interface Order {
  id: string;
  items: { productName: string; quantity: number }[];
  total: number;
  customerEmail: string;
  customerName: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  const router = useRouter();

  const handleStatusChange = async (orderId: string, status: Order["status"]) => {
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, status }),
    });
    router.refresh();
  };

  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Customer</th>
          <th>Items</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td style={{ fontWeight: 500, fontFamily: "monospace", fontSize: "0.8rem" }}>
              {order.id}
            </td>
            <td>
              <div>{order.customerName}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{order.customerEmail}</div>
            </td>
            <td>
              {order.items.map((item, i) => (
                <div key={i} style={{ fontSize: "0.8rem" }}>
                  {item.productName} × {item.quantity}
                </div>
              ))}
            </td>
            <td style={{ fontWeight: 600 }}>${order.total.toFixed(2)}</td>
            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            <td>
              <span className={`status-badge status-${order.status}`}>
                {order.status}
              </span>
            </td>
            <td>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value as Order["status"])}
                className="filter-select"
                style={{ fontSize: "0.75rem", padding: "0.35rem 0.5rem" }}
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
