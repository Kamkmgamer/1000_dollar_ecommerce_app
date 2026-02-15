# Verdant Store - $1000 Budget

A growing brand e-commerce application demonstrating a $1000 budget implementation with Next.js, Clerk authentication, and fast performance.

## Overview

- **Budget**: $1000
- **Target Business**: Growing brand / Startup
- **Max Products**: 1000-5000
- **Performance**: Fast (no artificial delays)

## Features

- Full product catalog with 25 products and advanced filtering
- User accounts and authentication via Clerk
- Order history and tracking
- Wishlists
- Shopping cart with persistence
- Admin dashboard with analytics
- Fast performance (native Next.js speed)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Authentication**: Clerk
- **Styling**: CSS with CSS Variables
- **State**: Server Actions + Cookie-based persistence

## Getting Started

### Prerequisites

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application in Clerk dashboard
3. Copy your publishable key and secret key

### Setup

```bash
# Install dependencies
pnpm install

# Create .env.local file with your Clerk keys
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key
# CLERK_SECRET_KEY=sk_test_your_key

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the store.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Product catalog with filtering |
| `/product/[id]` | Product detail page |
| `/cart` | Shopping cart |
| `/checkout` | Checkout flow |
| `/checkout/success` | Order confirmation |
| `/wishlist` | User wishlist |
| `/account` | Account page (requires auth) |
| `/admin` | Analytics dashboard |

## Performance Characteristics

This tier has **no artificial delays** - native Next.js speed:
- Optimized server components
- Fast page loads (~0.5-1s)
- Efficient data fetching

## Cost Breakdown

| Item | Cost |
|------|------|
| Development | ~$700 |
| Monthly Hosting (Vercel) | ~$25/mo |
| Headless CMS | ~$50/mo |
| Stripe Fees | ~2.9% + 30¢ per transaction |
| Clerk Auth | Free tier / ~$25/mo |
| **Total First Year** | ~$1000 |
| **Monthly Cost** | ~$90/mo + transaction fees |

## Best For

- Growing brands
- Startups scaling their e-commerce
- Businesses needing user accounts
- Those wanting fast, modern experience

## License

MIT
