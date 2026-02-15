export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
  stock: number;
  tags: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vintage Denim Jacket",
    description: "Classic vintage denim jacket with a modern fit. Features distressed details and comfortable stretch denim. Perfect for layering in any season.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Outerwear",
    price: "$89.99",
    stock: 45,
    tags: ["vintage", "denim", "casual"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Handwoven Market Tote",
    description: "Artisan-crafted market tote made from natural seagrass. Spacious interior with cotton lining. Each piece is unique with slight variations.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$48.00",
    stock: 23,
    tags: ["handmade", "sustainable", "artisan"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Premium organic cotton t-shirt with a relaxed fit. Pre-washed for extra softness. Available in multiple earth-tone colors.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Tops",
    price: "$34.99",
    stock: 120,
    tags: ["organic", "cotton", "basics"],
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 4,
    name: "Ceramic Pour-Over Set",
    description: "Handmade ceramic pour-over coffee set with matching carafe. Includes reusable stainless steel filter. Dishwasher safe.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    category: "Home",
    price: "$65.00",
    stock: 18,
    tags: ["ceramic", "coffee", "handmade"],
    rating: 4.9,
    reviews: 67,
  },
  {
    id: 5,
    name: "Linen Blend Trousers",
    description: "Breathable linen-cotton blend trousers with a relaxed fit. Perfect for warm weather. Features side pockets and drawstring waist.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop",
    category: "Bottoms",
    price: "$78.00",
    stock: 56,
    tags: ["linen", "summer", "relaxed"],
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 6,
    name: "Beeswax Candle Set",
    description: "Set of 3 hand-poured beeswax candles in glass vessels. Natural honey scent with cotton wicks. Burn time of 40 hours each.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&h=400&fit=crop",
    category: "Home",
    price: "$42.00",
    stock: 67,
    tags: ["beeswax", "natural", "gift"],
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    description: "Full-grain leather crossbody bag with adjustable strap. Features multiple compartments and brass hardware. Ages beautifully over time.",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$145.00",
    stock: 12,
    tags: ["leather", "handcrafted", "classic"],
    rating: 4.9,
    reviews: 201,
  },
  {
    id: 8,
    name: "Wool Blend Cardigan",
    description: "Cozy wool-cotton blend cardigan with mother-of-pearl buttons. Relaxed fit perfect for layering. Hand-knit details on cuffs.",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
    category: "Outerwear",
    price: "$125.00",
    stock: 34,
    tags: ["wool", "cozy", "handcrafted"],
    rating: 4.7,
    reviews: 78,
  },
  {
    id: 9,
    name: "Stone Washed Bedding Set",
    description: "100% linen bedding set in queen size. Includes duvet cover and two pillowcases. Stone-washed for ultimate softness.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=400&fit=crop",
    category: "Home",
    price: "$220.00",
    stock: 8,
    tags: ["linen", "bedding", "luxury"],
    rating: 4.9,
    reviews: 45,
  },
  {
    id: 10,
    name: "Silk Blend Scarf",
    description: "Luxurious silk-modal blend scarf with hand-rolled edges. Abstract botanical print in muted tones. 70cm x 180cm.",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$68.00",
    stock: 41,
    tags: ["silk", "botanical", "elegant"],
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 11,
    name: "Bamboo Kitchen Set",
    description: "Complete bamboo kitchen utensil set. Includes spatula, spoon, fork, and serving tongs. Naturally antibacterial and eco-friendly.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop",
    category: "Home",
    price: "$38.00",
    stock: 52,
    tags: ["bamboo", "eco-friendly", "kitchen"],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: 12,
    name: "Canvas Sneakers",
    description: "Classic canvas sneakers with natural rubber soles. Comfortable memory foam insole. Available in off-white and natural grey.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop",
    category: "Footwear",
    price: "$72.00",
    stock: 89,
    tags: ["canvas", "comfortable", "everyday"],
    rating: 4.5,
    reviews: 234,
  },
  {
    id: 13,
    name: "Hand-Poured Soap Bar",
    description: "Cold-process soap bar made with olive oil and shea butter. Scented with natural lavender essential oil. Gentle for sensitive skin.",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&h=400&fit=crop",
    category: "Body Care",
    price: "$12.00",
    stock: 156,
    tags: ["natural", "lavender", "handmade"],
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 14,
    name: "Cashmere Beanie",
    description: "100% pure cashmere beanie in a relaxed fit. Lightweight yet incredibly warm. Hand-knit in small batches.",
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$55.00",
    stock: 28,
    tags: ["cashmere", "luxury", "warm"],
    rating: 4.8,
    reviews: 156,
  },
  {
    id: 15,
    name: "Recycled Glass Vase",
    description: "Handblown vase made from 100% recycled glass. Unique blue-green tint with subtle texture. Perfect for dried or fresh flowers.",
    image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400&h=400&fit=crop",
    category: "Home",
    price: "$45.00",
    stock: 19,
    tags: ["recycled", "glass", "artisan"],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 16,
    name: "Merino Wool Sweater",
    description: "Ultra-soft merino wool sweater in a relaxed silhouette. Temperature-regulating and moisture-wicking. Perfect for transitional weather.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop",
    category: "Tops",
    price: "$98.00",
    stock: 42,
    tags: ["merino", "wool", "versatile"],
    rating: 4.8,
    reviews: 189,
  },
  {
    id: 17,
    name: "Japanese Tea Set",
    description: "Traditional Japanese-inspired tea set with four cups and teapot. Hand-glazed ceramic with minimalist aesthetic.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    category: "Home",
    price: "$85.00",
    stock: 15,
    tags: ["japanese", "ceramic", "tea"],
    rating: 4.9,
    reviews: 56,
  },
  {
    id: 18,
    name: "Leather Belt",
    description: "Full-grain leather belt with solid brass buckle. Hand-stitched edges. Will develop a beautiful patina over time.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$58.00",
    stock: 67,
    tags: ["leather", "handcrafted", "classic"],
    rating: 4.7,
    reviews: 145,
  },
  {
    id: 19,
    name: "Organic Body Oil",
    description: "Nourishing body oil blend with jojoba, almond, and vitamin E. Light citrus scent. Absorbs quickly without greasy residue.",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop",
    category: "Body Care",
    price: "$32.00",
    stock: 89,
    tags: ["organic", "nourishing", "natural"],
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 20,
    name: "Woven Beach Tote",
    description: "Spacious woven beach tote with cotton lining and interior pocket. Durable construction perfect for beach days or farmers markets.",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
    category: "Accessories",
    price: "$52.00",
    stock: 34,
    tags: ["woven", "summer", "beach"],
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 21,
    name: "Cotton Robe",
    description: "Luxurious Turkish cotton robe with shawl collar. Ultra-absorbent and quick-drying. Perfect for spa days at home.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop",
    category: "Home",
    price: "$78.00",
    stock: 23,
    tags: ["cotton", "luxury", "spa"],
    rating: 4.9,
    reviews: 134,
  },
  {
    id: 22,
    name: "Suede Ankle Boots",
    description: "Handcrafted suede ankle boots with leather sole. Memory foam insole for all-day comfort. Timeless silhouette.",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
    category: "Footwear",
    price: "$165.00",
    stock: 18,
    tags: ["suede", "handcrafted", "comfortable"],
    rating: 4.8,
    reviews: 167,
  },
  {
    id: 23,
    name: "Linen Shirt",
    description: "Relaxed linen shirt with mother-of-pearl buttons. Breathable and lightweight. Perfect for warm days and layered looks.",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    category: "Tops",
    price: "$68.00",
    stock: 78,
    tags: ["linen", "breathable", "summer"],
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 24,
    name: "Copper Coffee Mug Set",
    description: "Set of 4 hand-hammered copper coffee mugs. Tinned interior for safe drinking. Includes wooden serving tray.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    category: "Home",
    price: "$95.00",
    stock: 12,
    tags: ["copper", "handcrafted", "coffee"],
    rating: 4.8,
    reviews: 67,
  },
  {
    id: 25,
    name: "Alpaca Wool Throw",
    description: "Ultra-soft alpaca wool throw blanket in natural cream. Lightweight yet incredibly warm. Hand-loomed by artisans.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    category: "Home",
    price: "$180.00",
    stock: 9,
    tags: ["alpaca", "luxury", "handmade"],
    rating: 4.9,
    reviews: 45,
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function getTags(): string[] {
  const allTags = products.flatMap((p) => p.tags);
  return [...new Set(allTags)];
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

export function filterProducts(filters: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  inStock?: boolean;
}): Product[] {
  return products.filter((p) => {
    const price = parseFloat(p.price.replace("$", ""));

    if (filters.category && p.category !== filters.category) return false;
    if (filters.minPrice !== undefined && price < filters.minPrice) return false;
    if (filters.maxPrice !== undefined && price > filters.maxPrice) return false;
    if (filters.tags && filters.tags.length > 0) {
      if (!filters.tags.some((t) => p.tags.includes(t))) return false;
    }
    if (filters.inStock && p.stock === 0) return false;

    return true;
  });
}

export function sortProducts(productsList: Product[], sortBy: string): Product[] {
  const sorted = [...productsList];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) =>
        parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", ""))
      );
    case "price-desc":
      return sorted.sort((a, b) =>
        parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", ""))
      );
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "newest":
      return sorted.sort((a, b) => b.id - a.id);
    case "name":
    default:
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
}
