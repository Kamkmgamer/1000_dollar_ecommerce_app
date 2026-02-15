import Link from "next/link";
import { products, getCategories } from "@/lib/products";
import ProductGrid from "./ProductGrid";

export default async function Home() {
  const categories = getCategories();

  return (
    <div>
      <section className="hero">
        <h1>Curated for the<br /><span className="hero-accent">Modern Lifestyle</span></h1>
        <p>
          Handpicked fashion, accessories, and home goods from independent designers worldwide. Quality craftsmanship, thoughtfully selected.
        </p>
        <div className="hero-actions">
          <Link href="#products" className="btn">Explore Collection</Link>
          <Link href="/?sort=rating" className="btn btn-secondary">Top Rated</Link>
        </div>
      </section>

      <div className="trust-banner">
        <div className="trust-item">
          <span>✦</span>
          Free Shipping
        </div>
        <div className="trust-item">
          <span>◈</span>
          Secure Checkout
        </div>
        <div className="trust-item">
          <span>❋</span>
          Easy Returns
        </div>
        <div className="trust-item">
          <span>✧</span>
          Quality Guaranteed
        </div>
      </div>

      <section id="products">
        <ProductGrid products={products} categories={categories} />
      </section>
    </div>
  );
}
