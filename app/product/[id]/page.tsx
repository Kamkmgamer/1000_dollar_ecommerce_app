import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { isInWishlist } from "@/lib/wishlist";
import ProductActions from "./ProductActions";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} — Artisan Collective`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(parseInt(id));

  if (!product) {
    notFound();
  }

  const inWishlist = await isInWishlist(product.id);

  return (
    <div>
      <Link href="/" className="back-link">
        ← Back to collection
      </Link>

      <div className="single-product">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <h1 style={{ marginTop: "0.5rem" }}>{product.name}</h1>
          <p className="product-price-large">{product.price}</p>

          <div className="product-rating" style={{ marginBottom: "1.25rem" }}>
            ★ {product.rating} <span>({product.reviews} reviews)</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-details-list">
            <div className="product-detail-item">
              <span>Availability</span>
              <span style={{ color: product.stock > 0 ? "var(--accent)" : "var(--rose)" }}>
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>
            <div className="product-detail-item">
              <span>Tags</span>
              <span>{product.tags.join(", ")}</span>
            </div>
            <div className="product-detail-item">
              <span>Shipping</span>
              <span>Free on orders over $100</span>
            </div>
          </div>

          <ProductActions product={product} initialInWishlist={inWishlist} />
        </div>
      </div>
    </div>
  );
}
