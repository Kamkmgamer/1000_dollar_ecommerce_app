"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import WishlistToggle from "@/components/WishlistToggle";
import { Product } from "@/lib/products";

interface ProductActionsProps {
  product: Product;
  initialInWishlist: boolean;
}

export default function ProductActions({ product, initialInWishlist }: ProductActionsProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = async () => {
    if (loading || product.stock === 0) return;
    setLoading(true);

    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product.id, quantity }),
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 2500);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", fontSize: "0.7rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Quantity
        </label>
        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}>+</button>
        </div>
      </div>

      <div className="product-actions-row">
        <button
          onClick={handleAddToCart}
          disabled={loading || product.stock === 0}
          className="btn btn-lg"
          style={{ background: added ? "var(--accent)" : undefined }}
        >
          {added ? "✓ Added to Cart" : loading ? "Adding..." : product.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
        <WishlistToggle productId={product.id} initialInWishlist={initialInWishlist} />
      </div>
    </>
  );
}
