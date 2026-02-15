import { currentUser } from "@clerk/nextjs/server";
import { getOrders } from "@/lib/orders";
import AccountContent from "./AccountContent";

export default async function AccountPage() {
  const user = await currentUser();
  
  if (!user) {
    return (
      <div className="account-page">
        <h1>My Account</h1>
        <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "4rem 0" }}>
          Please sign in to view your account.
        </p>
      </div>
    );
  }

  const orders = await getOrders();
  
  const serializedOrders = orders.map((order) => ({
    ...order,
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
  }));

  return (
    <div className="account-page">
      <h1>My Account</h1>

      <div className="account-grid">
        <div className="account-sidebar">
          <div className="account-user">
            <div className="account-user-avatar">
              {user.firstName?.charAt(0) || user.emailAddresses[0]?.emailAddress?.charAt(0) || "U"}
            </div>
            <p className="account-user-name">{user.firstName} {user.lastName}</p>
            <p className="account-user-email">{user.emailAddresses[0]?.emailAddress}</p>
          </div>
          <nav className="account-nav">
            <a href="#profile" className="active">Profile</a>
            <a href="#orders">Order History</a>
            <a href="/wishlist">Wishlist</a>
          </nav>
        </div>

        <AccountContent 
          user={{
            id: user.id,
            name: `${user.firstName || ""} ${user.lastName || ""}`.trim() || "User",
            email: user.emailAddresses[0]?.emailAddress || "",
          }} 
          orders={serializedOrders} 
        />
      </div>
    </div>
  );
}
