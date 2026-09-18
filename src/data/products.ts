import { Product, Coupon } from '../types';

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'MYRA15',
    discountPercent: 15,
    minCartValue: 50,
    description: '15% instant off on orders over $50'
  },
  {
    code: 'FESTIVE25',
    discountPercent: 25,
    minCartValue: 100,
    description: 'Special 25% off on luxury festive collections'
  },
  {
    code: 'FIRSTBUY',
    flatDiscount: 20,
    minCartValue: 40,
    description: 'Flat $20 instant discount for new shoppers'
  }
];

export const BRANDS = [
  'ANOUK ATELIER',
  'ROADSTER CASUALS',
  'MANGO HERITAGE',
  'VERO MODA STUDIO',
  'WROGN URBAN',
  'MAST & HARBOUR',
  'ZARA EDIT',
  'FOSSIL SIGNATURE'
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Hand-Embroidered Raw Silk Chanderi Kurta Set',
    brand: 'ANOUK ATELIER',
    category: 'women',
    subcategory: 'Ethnic Wear',
    price: 68,
    originalPrice: 135,
    discountPercent: 50,
    rating: 4.8,
    reviewCount: 1420,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Festive Pick', 'Bestseller'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Ochre Gold', hex: '#D4AF37' },
      { name: 'Rose Petal', hex: '#E0A9AF' },
      { name: 'Ivory Cream', hex: '#FFFDD0' }
    ],
    description: 'An exquisite hand-embroidered raw silk chanderi kurta set paired with scalloped organza dupatta and tailored straight pants. Ideal for festivities and celebrations.',
    details: {
      fabric: '100% Chanderi Silk with Cotton Voile Lining',
      fit: 'Relaxed Straight Silhouette',
      care: 'Dry Clean Recommended',
      origin: 'Crafted in Chanderi, India',
      neck: 'Mandarin V-Notch with Zari embroidery',
      pattern: 'Intricate Floral Foliage & Threadwork'
    }
  },
  {
    id: 'prod-2',
    name: 'Oversized Washed Pure Linen Casual Shirt',
    brand: 'ROADSTER CASUALS',
    category: 'men',
    subcategory: 'Shirts',
    price: 42,
    originalPrice: 84,
    discountPercent: 50,
    rating: 4.6,
    reviewCount: 980,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Trending', 'Summer Core'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    colors: [
      { name: 'Sage Green', hex: '#879F84' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Sand Beige', hex: '#D2B48C' }
    ],
    description: 'Breathable European linen shirt garment-washed for extraordinary softness and laid-back structure. Cut in an effortless boxy fit.',
    details: {
      fabric: '100% Normandy Linen',
      fit: 'Relaxed Boxy Fit',
      care: 'Machine Wash Cold Delicate',
      origin: 'Made responsibly in Portugal',
      neck: 'Camp Cuban Collar',
      pattern: 'Solid Garment Dye'
    }
  },
  {
    id: 'prod-3',
    name: 'Satin Bias-Cut Draped Evening Maxi Dress',
    brand: 'MANGO HERITAGE',
    category: 'women',
    subcategory: 'Dresses',
    price: 89,
    originalPrice: 160,
    discountPercent: 44,
    rating: 4.9,
    reviewCount: 2310,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Editor Choice', 'Party Edit'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    colors: [
      { name: 'Emerald Jewel', hex: '#004B23' },
      { name: 'Champagne Gold', hex: '#F7E7CE' },
      { name: 'Midnight Onyx', hex: '#0B0C10' }
    ],
    description: 'Fluid satin gown cut on the bias to graze your curves with understated elegance. Features a cowl neckline and delicate adjustable criss-cross back.',
    details: {
      fabric: 'Heavyweight Lustrous Satin Charmeuse',
      fit: 'Body-skimming Bias Cut',
      care: 'Dry Clean Only',
      origin: 'Crafted in Milan, Italy',
      neck: 'Soft Cowl Neckline',
      pattern: 'Solid Liquid Sheen'
    }
  },
  {
    id: 'prod-4',
    name: 'Structured Double-Breasted Wool Blend Blazer',
    brand: 'WROGN URBAN',
    category: 'men',
    subcategory: 'Outerwear',
    price: 115,
    originalPrice: 210,
    discountPercent: 45,
    rating: 4.7,
    reviewCount: 760,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Premium Cut', 'Trending'],
    sizes: ['38R', '40R', '42R', '44R'],
    inStock: true,
    colors: [
      { name: 'Charcoal Houndstooth', hex: '#36454F' },
      { name: 'Midnight Navy', hex: '#000080' }
    ],
    description: 'Tailored with sharp peak lapels and horn buttons, this double-breasted jacket balances Savile Row sharpness with modern effortless styling.',
    details: {
      fabric: '70% Merino Wool, 30% Fine Cashmere Blend',
      fit: 'Tailored Athletic Fit',
      care: 'Specialist Dry Clean Only',
      origin: 'Imported',
      neck: 'Broad Peak Lapel',
      pattern: 'Subtle Micro-check weave'
    }
  },
  {
    id: 'prod-5',
    name: 'Minimalist Handcrafted Vegetable-Tanned Leather Tote',
    brand: 'FOSSIL SIGNATURE',
    category: 'accessories',
    subcategory: 'Bags',
    price: 79,
    originalPrice: 155,
    discountPercent: 49,
    rating: 4.9,
    reviewCount: 1890,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Genuine Leather', 'Bestseller'],
    sizes: ['One Size'],
    inStock: true,
    colors: [
      { name: 'Cognac Saddle', hex: '#8B4513' },
      { name: 'Pitch Black', hex: '#111111' },
      { name: 'Warm Taupe', hex: '#B38B6D' }
    ],
    description: 'Roomy interior with magnetic clasp, zipped tech sleeve fitting a 15-inch laptop, and solid brass hardware designed to patina beautifully with age.',
    details: {
      fabric: 'Full-Grain Tuscan Cowhide Leather',
      fit: 'Spacious Structured Tote (40cm x 32cm x 14cm)',
      care: 'Wipe with damp cloth & apply leather conditioner',
      origin: 'Artisan Crafted in Florence',
      pattern: 'Natural Grain'
    }
  },
  {
    id: 'prod-6',
    name: 'Retro Court Minimalist Low-Top Leather Sneakers',
    brand: 'MAST & HARBOUR',
    category: 'footwear',
    subcategory: 'Sneakers',
    price: 54,
    originalPrice: 105,
    discountPercent: 48,
    rating: 4.7,
    reviewCount: 3100,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Iconic Essential', 'Comfort Walk'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Chalk White & Forest', hex: '#F0EFEA' },
      { name: 'Triple White', hex: '#FFFFFF' }
    ],
    description: 'Clean Scandinavian low-profile sneakers with butter-soft calfskin leather uppers, OrthoLite cushioned footbed, and durable vulcanized rubber soles.',
    details: {
      fabric: 'Supple Nappa Leather Upper & Eco-rubber outsole',
      fit: 'True to Size, Standard Fit',
      care: 'Clean with sneaker soft bristle brush',
      origin: 'Portugal',
      pattern: 'Clean Perforated Toe-box'
    }
  },
  {
    id: 'prod-7',
    name: 'Botanical Extrait de Parfum - Santal & Amber Glow (100ml)',
    brand: 'VERO MODA STUDIO',
    category: 'beauty',
    subcategory: 'Fragrances',
    price: 62,
    originalPrice: 120,
    discountPercent: 48,
    rating: 4.9,
    reviewCount: 1650,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Niche Luxury', 'Cruelty Free'],
    sizes: ['50ml', '100ml'],
    inStock: true,
    colors: [
      { name: 'Amber Gold Glass', hex: '#FFBF00' }
    ],
    description: 'An alluring, long-lasting formulation of Mysore sandalwood, Cardamom, Italian Bergamot, and rich smoky amber. Blended for unisex sophistication.',
    details: {
      fabric: '28% Concentration Pure Perfume Oils',
      fit: 'All-Day 14-Hour Longevity',
      care: 'Keep in cool, dark place away from direct sunlight',
      origin: 'Formulated in Grasse, France',
      pattern: 'Warm Woody Oriental'
    }
  },
  {
    id: 'prod-8',
    name: 'Floral Print Organza Saree with Embroidered Border',
    brand: 'ANOUK ATELIER',
    category: 'women',
    subcategory: 'Ethnic Wear',
    price: 74,
    originalPrice: 165,
    discountPercent: 55,
    rating: 4.8,
    reviewCount: 3410,
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Wedding Guest', 'Hot Seller'],
    sizes: ['Free Size (5.5m + Blouse 0.8m)'],
    inStock: true,
    colors: [
      { name: 'Blush Powder Rose', hex: '#FFD1DC' },
      { name: 'Pistachio Mint', hex: '#98FF98' },
      { name: 'Lilac Haze', hex: '#C8A2C8' }
    ],
    description: 'Featherlight sheer organza saree decorated with delicate hand-block botanical motifs and finished with a shimmering scalloped gota patti lace border.',
    details: {
      fabric: 'Pure Silk Sheer Organza',
      fit: 'Fluid Draped Fall',
      care: 'Professional Dry Clean',
      origin: 'Varanasi, India',
      pattern: 'Hand-painted watercolor floral blooms'
    }
  },
  {
    id: 'prod-9',
    name: 'Heavyweight Terry Cotton Relaxed Streetwear Hoodie',
    brand: 'ROADSTER CASUALS',
    category: 'men',
    subcategory: 'Sweatshirts',
    price: 46,
    originalPrice: 90,
    discountPercent: 49,
    rating: 4.6,
    reviewCount: 1540,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Drop Shoulder', 'Heavyweight 450 GSM'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Faded Washed Black', hex: '#2A2A2A' },
      { name: 'Oatmeal Heather', hex: '#EAE6DF' },
      { name: 'Vintage Olive', hex: '#556B2F' }
    ],
    description: 'Crafted from luxury 450 GSM French Terry loopback cotton, featuring double-lined seamless hood, kangaroo pocket, and tight ribbed hem.',
    details: {
      fabric: '100% Organic Ring-Spun Cotton',
      fit: 'Drop-Shoulder Boxy Silhouette',
      care: 'Cold Machine Wash Inside Out',
      origin: 'Made ethically in Turkey',
      pattern: 'Minimal Tonal Embroidered Chest Monogram'
    }
  },
  {
    id: 'prod-10',
    name: 'Vintage Acetate Cat-Eye Polarized Sunglasses',
    brand: 'ZARA EDIT',
    category: 'accessories',
    subcategory: 'Eyewear',
    price: 38,
    originalPrice: 75,
    discountPercent: 49,
    rating: 4.5,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['UV400 Protected', 'New Season'],
    sizes: ['One Size'],
    inStock: true,
    colors: [
      { name: 'Tortoiseshell Amber', hex: '#79443B' },
      { name: 'Gloss Obsidian', hex: '#050505' }
    ],
    description: 'Polished Italian cellulose acetate frame equipped with category 3 polarized lenses offering complete 100% UVA/UVB blockage.',
    details: {
      fabric: 'Bio-Acetate & German Engineered 5-Barrel Hinges',
      fit: 'Medium Face Contour',
      care: 'Microfiber cloth clean & hard shell protective case',
      origin: 'Imported',
      pattern: 'Classic Havana Tortoise'
    }
  },
  {
    id: 'prod-11',
    name: 'Block-Heel Ankle Strap Suede Evening Sandals',
    brand: 'MANGO HERITAGE',
    category: 'footwear',
    subcategory: 'Heels',
    price: 65,
    originalPrice: 125,
    discountPercent: 48,
    rating: 4.7,
    reviewCount: 1120,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Party Essential', 'Comfort Cushion'],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    inStock: true,
    colors: [
      { name: 'Nude Almond', hex: '#EED9C4' },
      { name: 'Velvet Midnight', hex: '#1C1D24' },
      { name: 'Gilded Gold', hex: '#D4AF37' }
    ],
    description: '70mm architectural cylindrical block heel with padded memory foam footbed and dainty adjustable buckle ankle strap for dance-all-night comfort.',
    details: {
      fabric: 'Kid Suede Leather Upper & Eco Leather Lining',
      fit: 'Standard Fit with 7cm Heel Lift',
      care: 'Suede eraser and protective weather spray',
      origin: 'Spain',
      pattern: 'Smooth Velvety Texture'
    }
  },
  {
    id: 'prod-12',
    name: 'Pure Mulberry Silk Pillowcase & Sleeping Eye Mask Set',
    brand: 'VERO MODA STUDIO',
    category: 'beauty',
    subcategory: 'Self Care',
    price: 36,
    originalPrice: 70,
    discountPercent: 48,
    rating: 4.9,
    reviewCount: 2200,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Anti-Frizz', 'Skin Rejuvenating'],
    sizes: ['Queen Standard (50x75cm)'],
    inStock: true,
    colors: [
      { name: 'Pearl Champagne', hex: '#F3E5AB' },
      { name: 'Silver Mist', hex: '#C5C6C7' }
    ],
    description: 'Grade 6A 22-Momme pure mulberry silk that locks in hair moisture, eliminates friction split ends, and prevents sleep creases on delicate facial skin.',
    details: {
      fabric: '100% Pure Long-Strand Mulberry Silk',
      fit: 'Standard Envelope Closure',
      care: 'Hand Wash in Cold Water with pH Neutral detergent',
      origin: 'Imported',
      pattern: 'Hypoallergenic Gloss Finish'
    }
  }
];
