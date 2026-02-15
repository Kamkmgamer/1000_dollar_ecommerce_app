import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Cart from "@/components/Cart";
import { ClerkProvider } from "@clerk/nextjs";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Artisan Collective | Modern E-Commerce for Growing Brands",
  description: "Discover curated fashion, accessories, and home goods from independent designers. Quality craftsmanship for the modern lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <div className="announcement-bar">
            <span>Free shipping on all orders over $100 · Handpicked from independent makers worldwide</span>
          </div>
          <header className="site-header">
            <div className="header-inner">
              <nav className="nav-left">
                <Link href="/">Shop</Link>
                <Link href="/wishlist">Wishlist</Link>
              </nav>
              <p className="site-title">
                <Link href="/">Artisan Collective</Link>
              </p>
              <nav className="nav">
                <Link href="/account">Account</Link>
                <Link href="/admin">Admin</Link>
                <Cart />
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="btn btn-sm">Sign In</button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </nav>
            </div>
          </header>
          <main className="main-content">{children}</main>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-grid">
                <div className="footer-col footer-brand">
                  <p className="brand-name">Artisan Collective</p>
                  <p>
                    Curated fashion, accessories, and home goods from independent designers worldwide. We believe in quality craftsmanship and sustainable practices that honor both maker and material.
                  </p>
                </div>
                <div className="footer-col">
                  <h5>Shop</h5>
                  <p>
                    <Link href="/">All Products</Link>
                    <br />
                    <Link href="/?category=Tops">Tops</Link>
                    <br />
                    <Link href="/?category=Outerwear">Outerwear</Link>
                    <br />
                    <Link href="/?category=Accessories">Accessories</Link>
                  </p>
                </div>
                <div className="footer-col">
                  <h5>Account</h5>
                  <p>
                    <Link href="/account">My Account</Link>
                    <br />
                    <Link href="/wishlist">Wishlist</Link>
                    <br />
                    <Link href="/cart">Shopping Cart</Link>
                    <br />
                    <Link href="/checkout">Checkout</Link>
                  </p>
                </div>
                <div className="footer-col">
                  <h5>Support</h5>
                  <p>
                    <a href="mailto:hello@artisancollective.com">hello@artisancollective.com</a>
                    <br />
                    <a href="tel:+18005551234">1-800-555-1234</a>
                    <br />
                    <span>Mon — Fri, 9am — 6pm EST</span>
                  </p>
                </div>
                <div className="footer-col">
                  <h5>Connect</h5>
                  <p>
                    <a href="#">Instagram</a>
                    <br />
                    <a href="#">Pinterest</a>
                    <br />
                    <a href="#">Twitter</a>
                  </p>
                </div>
              </div>

              <div className="footer-bottom">
                <p>© 2026 Artisan Collective. All Rights Reserved.</p>
                <p>
                  <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a> · <a href="#">Shipping</a> · <a href="#">Returns</a>
                </p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
