"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import WishlistToggle from "@/components/WishlistToggle";
import { Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
  categories: string[];
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    // Filter by Search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.tags.some((t) => t.toLowerCase().includes(lowerQuery))
      );
    }

    // Sort
    return [...result].sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""));
        case "price-desc":
          return parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""));
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return b.id - a.id;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });
  }, [products, activeCategory, searchQuery, sortBy]);

  return (
    <>
      <div className="section-header">
        <h2>Our Collection</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", margin: 0 }}>
          {filteredProducts.length} products
        </p>
      </div>

      <div className="filters-row">
        <div className="category-filter">
          <button
            onClick={() => setActiveCategory("All")}
            className={`category-btn ${activeCategory === "All" ? "active" : ""}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginLeft: "auto", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            style={{ width: "200px" }}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="filter-select"
          >
            <option value="name">Name</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</p>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2rem" }}>
            No products found. Try adjusting your filters.
          </p>
          <button
            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
            className="btn"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <article
              key={product.id}
              className="product-card animate-fade-in-up"
              style={{ animationDelay: `${(index % 8) * 0.05}s` }}
            >
              <Link href={`/product/${product.id}`}>
                <div className="product-card-img-wrap">
                  <img src={product.image} alt={product.name} />
                </div>
              </Link>
              <div className="product-card-actions">
                <WishlistToggle productId={product.id} />
              </div>
              <div className="product-card-content">
                <span className="product-category">{product.category}</span>
                <h3>
                  <Link href={`/product/${product.id}`}>{product.name}</Link>
                </h3>
                <div className="product-meta-row">
                  <p className="product-price">{product.price}</p>
                  <div className="product-rating">
                    ★ {product.rating} <span>({product.reviews})</span>
                  </div>
                </div>
                <p className={`product-stock ${product.stock < 10 ? "low" : ""} ${product.stock === 0 ? "out" : ""}`}>
                  {product.stock === 0 ? "Out of stock" : `${product.stock} in stock`}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
