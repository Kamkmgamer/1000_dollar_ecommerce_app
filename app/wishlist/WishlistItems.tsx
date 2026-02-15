"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface WishlistItem {
  product: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
    stock: number;
  };
  addedAt: Date;
}

interface WishlistItemsProps {
  items: WishlistItem[];
}

export default function WishlistItems({ items }: WishlistItemsProps) {
  const router = useRouter();

  const handleRemove = async (productId: number) => {
    await fetch("/api/wishlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    router.refresh();
  };

  const handleAddToCart = async (productId: number) => {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, quantity: 1 }),
    });
    await handleRemove(productId);
    router.refresh();
  };

  return (
    <div className="product-grid">
      {items.map((item, index) => (
        <article
          key={item.product.id}
          className="product-card animate-fade-in-up"
          style={{ animationDelay: `${(index % 8) * 0.05}s` }}
        >
          <Link href={`/product/${item.product.id}`}>
            <div className="product-card-img-wrap">
              <img src={item.product.image} alt={item.product.name} />
            </div>
          </Link>
          <div className="product-card-actions" style={{ opacity: 1 }}>
            <button
              onClick={() => handleRemove(item.product.id)}
              className="product-action-btn in-wishlist"
              aria-label="Remove from wishlist"
            >
              ♥
            </button>
          </div>
          <div className="product-card-content">
            <span className="product-category">{item.product.category}</span>
            <h3>
              <Link href={`/product/${item.product.id}`}>{item.product.name}</Link>
            </h3>
            <div className="product-meta-row">
              <p className="product-price">{item.product.price}</p>
            </div>
            <p className={`product-stock ${item.product.stock < 10 ? "low" : ""}`}>
              {item.product.stock} in stock
            </p>
            <button
              onClick={() => handleAddToCart(item.product.id)}
              className="btn btn-sm"
              style={{ width: "100%", marginTop: "0.75rem" }}
            >
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
