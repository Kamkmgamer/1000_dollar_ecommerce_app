"use client";

import { useState } from "react";

interface WishlistToggleProps {
  productId: number;
  initialInWishlist?: boolean;
  size?: "sm" | "md";
}

export default function WishlistToggle({ productId, initialInWishlist = false, size = "md" }: WishlistToggleProps) {
  const [inWishlist, setInWishlist] = useState(initialInWishlist);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      setInWishlist(data.inWishlist);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleToggle}
      disabled={loading}
      className={`product-action-btn ${inWishlist ? "in-wishlist" : ""}`}
      aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      {inWishlist ? "♥" : "♡"}
    </button>
  );
}
