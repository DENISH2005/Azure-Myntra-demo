export const AVAILABLE_COUPONS = [
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
    description: 'Special 25% off on luxury drops & runway editions'
  },
  {
    code: 'FIRSTBUY',
    flatDiscount: 20,
    minCartValue: 40,
    description: 'Flat $20 instant discount for new shoppers'
  },
  {
    code: 'RUNFAST',
    discountPercent: 20,
    minCartValue: 80,
    description: '20% off on pro performance & sports footwear'
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
  'KINETIC LAB',
  'NOVA SPORT',
  'STRIDE AESTHETICS',
  'FOSSIL SIGNATURE'
];

export const PRODUCTS = [
  // ================= WOMENSWEAR (MODERN) =================
  {
    id: 'prod-w1',
    name: 'Oversized Sculptural Wool-Blend Blazer',
    brand: 'ZARA EDIT',
    category: 'womenswear',
    subcategory: 'Outerwear',
    price: 89,
    originalPrice: 175,
    discountPercent: 49,
    rating: 4.9,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Modern Tailoring', 'Oversized Fit', 'Bestseller'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Oat Melange', hex: '#D9D2C9' },
      { name: 'Pitch Black', hex: '#1A1A1A' },
      { name: 'Warm Taupe', hex: '#A89F91' }
    ],
    description: 'An architectural double-breasted oversized blazer featuring structured padded shoulders, peak lapels, horn-effect buttons, and a fluid drape designed for contemporary power layering.',
    details: {
      fabric: '68% Recycled Polyester, 28% Fine Wool, 4% Spandex',
      fit: 'Relaxed Oversized Silhouette (size down for regular)',
      care: 'Dry Clean Only',
      origin: 'Portugal',
      pattern: 'Textured Melange Weave'
    }
  },
  {
    id: 'prod-w2',
    name: 'Ribbed Cut-Out Asymmetric Knit Midi Dress',
    brand: 'VERO MODA STUDIO',
    category: 'womenswear',
    subcategory: 'Dresses',
    price: 62,
    originalPrice: 110,
    discountPercent: 43,
    rating: 4.8,
    reviewCount: 780,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Modern Silhouette', 'Trending', 'Sculpt Knit'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    colors: [
      { name: 'Olive Moss', hex: '#606C38' },
      { name: 'Charcoal Noir', hex: '#28282B' },
      { name: 'Terracotta', hex: '#C05A46' }
    ],
    description: 'Contoured compact-rib knit midi dress showcasing an asymmetric diagonal neckline, subtle waist cutout, and high side slit for effortless modern evening sophistication.',
    details: {
      fabric: '80% Viscose Rayon, 20% Recycled Polyamide',
      fit: 'Body-Contouring Stretch Fit',
      care: 'Hand Wash Cold or Gentle Machine Cycle',
      origin: 'Italy',
      pattern: 'Fine Gauge Ribbed Weave'
    }
  },
  {
    id: 'prod-w3',
    name: 'Crisp Poplin Cropped Shirt & Pleated Wide-Leg Trouser Set',
    brand: 'MANGO HERITAGE',
    category: 'womenswear',
    subcategory: 'Co-ord Sets',
    price: 78,
    originalPrice: 145,
    discountPercent: 46,
    rating: 4.7,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Scandinavian Minimal', 'Co-ord Set', 'Pure Cotton'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Alabaster White', hex: '#F4F4F4' },
      { name: 'Sky Chambray', hex: '#99BADD' },
      { name: 'Sage Leaf', hex: '#879F84' }
    ],
    description: 'Two-piece matching set crafted from organic papery cotton poplin. Features an ultra-clean boxy crop shirt with concealed placket and high-rise double-pleated floor-skimming trousers.',
    details: {
      fabric: '100% GOTS Certified Organic Cotton Poplin',
      fit: 'Boxy Top with High-Waisted Wide Leg Bottom',
      care: 'Machine Wash Delicate at 30°C',
      origin: 'Turkey',
      pattern: 'Solid Matte Finish'
    }
  },
  {
    id: 'prod-w4',
    name: 'Bias-Cut Heavyweight Silk Satin Slip Maxi Skirt',
    brand: 'ANOUK ATELIER',
    category: 'womenswear',
    subcategory: 'Skirts',
    price: 54,
    originalPrice: 98,
    discountPercent: 44,
    rating: 4.9,
    reviewCount: 1120,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Liquid Satin', 'Versatile Chic', 'Viral Edit'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    colors: [
      { name: 'Champagne Pearl', hex: '#F0E6D2' },
      { name: 'Espresso Satin', hex: '#3B2F2F' },
      { name: 'Silver Slate', hex: '#C0C0C0' }
    ],
    description: 'An iconic wardrobe staple cut on the true bias to drape like liquid over hips and legs. Elasticated inner waistband for seamless day-to-night ease.',
    details: {
      fabric: 'Grade-A Heavyweight Sandwashed Silk Charmeuse',
      fit: 'Fluid Bias Drape that skims natural curves',
      care: 'Hand Wash Cold or Steam Clean',
      origin: 'India',
      pattern: 'Subtle Lustrous Sheen'
    }
  },
  {
    id: 'prod-w5',
    name: 'Sculpted Boned Denim Bustier Corset Top',
    brand: 'ZARA EDIT',
    category: 'womenswear',
    subcategory: 'Tops',
    price: 42,
    originalPrice: 75,
    discountPercent: 44,
    rating: 4.6,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Street Luxe', 'Contour Boning', 'New Arrival'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    colors: [
      { name: 'Washed Medium Indigo', hex: '#4B6F96' },
      { name: 'Vintage Mineral Black', hex: '#2B2B2B' }
    ],
    description: 'Modern structured corset bustier crafted from rigid 12oz denim with tonal topstitching, flexible internal boning, and an exposed silver-tone two-way metal back zip.',
    details: {
      fabric: '99% Cotton Denim, 1% Elastane',
      fit: 'Sculpted Fitted Corset Silhouette',
      care: 'Machine Wash Cold Inside Out',
      origin: 'Portugal',
      pattern: 'Enzyme Washed Denim'
    }
  },
  {
    id: 'prod-w6',
    name: 'Hand-Embroidered Raw Silk Chanderi Kurta Set',
    brand: 'ANOUK ATELIER',
    category: 'womenswear',
    subcategory: 'Ethnic Wear',
    price: 68,
    originalPrice: 135,
    discountPercent: 50,
    rating: 4.8,
    reviewCount: 1420,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Festive Pick', 'Modern Ethnic', 'Bestseller'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Ochre Gold', hex: '#D4AF37' },
      { name: 'Rose Petal', hex: '#E0A9AF' },
      { name: 'Ivory Cream', hex: '#FFFDD0' }
    ],
    description: 'An exquisite hand-embroidered raw silk chanderi kurta set paired with scalloped organza dupatta and tailored straight pants. Designed for timeless celebrations.',
    details: {
      fabric: 'Pure Chanderi Silk Blend with Cotton Mulmul Lining',
      fit: 'Straight Relaxed Fit with Side Slits',
      care: 'Dry Clean Recommended',
      origin: 'Chanderi, India',
      pattern: 'Artisanal Zari Threadwork'
    }
  },

  // ================= MENSWEAR (MODERN T-SHIRTS & STREETWEAR) =================
  {
    id: 'prod-m1',
    name: '280 GSM Heavyweight Drop-Shoulder Boxy T-Shirt',
    brand: 'WROGN URBAN',
    category: 'menswear',
    subcategory: 'T-Shirts',
    price: 34,
    originalPrice: 60,
    discountPercent: 43,
    rating: 4.9,
    reviewCount: 1840,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['280 GSM Heavyweight', 'Drop Shoulder', 'Bestseller'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    colors: [
      { name: 'Raw Ecru Chalk', hex: '#EAE6DF' },
      { name: 'Washed Phantom Black', hex: '#222222' },
      { name: 'Deep Moss Forest', hex: '#314438' }
    ],
    description: 'Cut from ultra-dense 280 GSM combed organic cotton with a substantial structured drape. Features an authentic drop shoulder, wide boxy silhouette, and high-density 1.25" rib collar that retains form forever.',
    details: {
      fabric: '100% Combed Heavy Organic Cotton (280 GSM)',
      fit: 'Boxy Oversized with Dropped Shoulders',
      care: 'Machine Wash Cold, Hang Dry',
      origin: 'Portugal',
      pattern: 'Solid Heavyweight Fabric'
    }
  },
  {
    id: 'prod-m2',
    name: 'Acid-Washed Vintage Typography Oversized Street Tee',
    brand: 'ROADSTER CASUALS',
    category: 'menswear',
    subcategory: 'T-Shirts',
    price: 38,
    originalPrice: 70,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 1210,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Acid Wash', 'Streetwear Icon', 'Limited Drop'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    colors: [
      { name: 'Mineral Faded Charcoal', hex: '#3A3B3C' },
      { name: 'Sun-Bleached Sand', hex: '#D2B48C' }
    ],
    description: 'Heavy enzyme-washed t-shirt with an authentic 90s vintage patina. Embellished with understated puff-print atelier typographic coordinates on the chest and a distressed micro-rib neck.',
    details: {
      fabric: '260 GSM French Organic Cotton Jersey',
      fit: 'Relaxed Streetwear Fit',
      care: 'Machine Wash Cold Inside Out',
      origin: 'Turkey',
      pattern: 'Custom Acid Mineral Wash'
    }
  },
  {
    id: 'prod-m3',
    name: 'Waffle-Textured Heavy Knit Crewneck T-Shirt',
    brand: 'MAST & HARBOUR',
    category: 'menswear',
    subcategory: 'T-Shirts',
    price: 32,
    originalPrice: 55,
    discountPercent: 41,
    rating: 4.7,
    reviewCount: 650,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Textured Waffle', 'Thermal Breathable', 'Clean Casual'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Sage Mist', hex: '#8F9E8B' },
      { name: 'Oatmeal Heather', hex: '#E6E0D4' },
      { name: 'Midnight Navy', hex: '#1C2833' }
    ],
    description: 'Dimensional honeycomb waffle knit tee offering superior thermal breathability and tactile luxury. Features a side-split hem and reinforced coverstitch seams.',
    details: {
      fabric: '100% Cotton Textured Honeycomb Waffle',
      fit: 'Standard Relaxed Cut',
      care: 'Machine Wash Gentle Cycle',
      origin: 'India',
      pattern: 'Tactile Waffle Knit'
    }
  },
  {
    id: 'prod-m4',
    name: 'Mercerized Supima Cotton Minimalist Luxury Tee',
    brand: 'ZARA EDIT',
    category: 'menswear',
    subcategory: 'T-Shirts',
    price: 45,
    originalPrice: 80,
    discountPercent: 43,
    rating: 4.9,
    reviewCount: 920,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['100% Supima Cotton', 'Silk-Touch Luster', 'Luxury Essential'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Crisp White', hex: '#FFFFFF' },
      { name: 'Obsidian Black', hex: '#0B0B0B' },
      { name: 'Smoke Graphite', hex: '#4A4E51' }
    ],
    description: 'Double-mercerized American Supima extra-long staple cotton delivering a mirror-like silken sheen and cloud-soft handfeel. Designed to be worn under tailored blazers or effortlessly on its own.',
    details: {
      fabric: '100% California Extra-Long Staple Supima Cotton',
      fit: 'Tailored Modern Regular',
      care: 'Delicate Wash, Do Not Tumble Dry',
      origin: 'USA Fabric / Assembled in Portugal',
      pattern: 'Ultra-Smooth Mercerized Luster'
    }
  },
  {
    id: 'prod-m5',
    name: 'Technical Nylon Ripstop Utility Overshirt',
    brand: 'WROGN URBAN',
    category: 'menswear',
    subcategory: 'Shirts & Overshirts',
    price: 65,
    originalPrice: 120,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 540,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Water-Resistant', 'City Utility', 'Lightweight'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Matte Olive', hex: '#4A5340' },
      { name: 'Stealth Black', hex: '#1E1E1E' },
      { name: 'Concrete Grey', hex: '#7D8489' }
    ],
    description: 'Contemporary technical overshirt constructed from water-repellent micro-ripstop nylon. Outfitted with dual bellows chest pockets, matte snap closures, and an articulated sleeve pattern.',
    details: {
      fabric: '100% Recycled DWR Technical Ripstop Nylon',
      fit: 'Boxy Modular Overshirt Layering Fit',
      care: 'Wipe Clean or Cold Machine Wash',
      origin: 'Vietnam',
      pattern: 'Micro-Grid Ripstop'
    }
  },
  {
    id: 'prod-m6',
    name: 'Relaxed-Tapered Double-Pleat Linen Trousers',
    brand: 'MANGO HERITAGE',
    category: 'menswear',
    subcategory: 'Trousers',
    price: 58,
    originalPrice: 110,
    discountPercent: 47,
    rating: 4.8,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Pure French Linen', 'Double Pleat', 'Fluid Tailoring'],
    sizes: ['30', '32', '34', '36'],
    inStock: true,
    colors: [
      { name: 'Sand Taupe', hex: '#C2B280' },
      { name: 'Midnight Charcoal', hex: '#232B2B' }
    ],
    description: 'Modern relaxed tailoring crafted from pre-washed pure French flax. Double forward pleats create an elegant drape through the thigh that gently tapers towards the ankle.',
    details: {
      fabric: '100% Normandy Flax Linen',
      fit: 'Relaxed Thigh with Subtle Ankle Taper',
      care: 'Cold Delicate Wash, Line Dry in Shade',
      origin: 'France / Sewn in Morocco',
      pattern: 'Natural Slub Texture'
    }
  },
  {
    id: 'prod-m7',
    name: 'Normandy Pure Linen Relaxed Camp-Collar Shirt',
    brand: 'ROADSTER CASUALS',
    category: 'menswear',
    subcategory: 'Shirts',
    price: 44,
    originalPrice: 85,
    discountPercent: 48,
    rating: 4.7,
    reviewCount: 890,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Resort Chic', 'Breathable Linen', 'Bestseller'],
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    colors: [
      { name: 'Aegean Light Blue', hex: '#87CEEB' },
      { name: 'Pure Chalk White', hex: '#FAF9F6' }
    ],
    description: 'Airy summer camp-collar shirt with natural mother-of-pearl buttons and a straight hem cut designed to wear untucked for seaside breezes or city afternoons.',
    details: {
      fabric: '100% French Normandy Flax',
      fit: 'Relaxed Camp-Collar Boxy Cut',
      care: 'Machine Wash Gentle at 30°C',
      origin: 'India',
      pattern: 'Plain Weave Slub'
    }
  },

  // ================= FOOTWEAR (MODERN LIFESTYLE, LEATHER & BOOTS) =================
  {
    id: 'prod-f1',
    name: 'Chunky Commando Lug-Sole Polished Leather Derby',
    brand: 'ZARA EDIT',
    category: 'footwear',
    subcategory: 'Casual & Formal',
    price: 94,
    originalPrice: 180,
    discountPercent: 47,
    rating: 4.9,
    reviewCount: 860,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Commando Lug Sole', 'Full-Grain Calfskin', 'Modern Icon'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Polished Onyx', hex: '#141414' },
      { name: 'Cordovan Oxblood', hex: '#4A0E17' }
    ],
    description: 'Bold contemporary derby shoe balancing architectural chunk with refined gentleman tailoring. Built with a 40mm exaggerated commando lug outsole and mirror-buffed full-grain box calf leather.',
    details: {
      fabric: '100% Full-Grain European Box Calfskin Upper & Calf Lining',
      fit: 'True to Size with Cushioned Leather Insole',
      care: 'Nourish with Saphir Renovateur and Polish Wax',
      origin: 'Portugal',
      pattern: 'Glossy Buffed Finish'
    }
  },
  {
    id: 'prod-f2',
    name: 'Minimalist Italian Calfskin Clean Court Sneaker',
    brand: 'MAST & HARBOUR',
    category: 'footwear',
    subcategory: 'Sneakers',
    price: 82,
    originalPrice: 160,
    discountPercent: 48,
    rating: 4.8,
    reviewCount: 1650,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Hand-Buffed Leather', 'Margom Sole', 'Minimalist Icon'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Monochrome Alabaster', hex: '#F9F9F9' },
      { name: 'Bone White with Natural Gum', hex: '#E8E3D9' }
    ],
    description: 'The definitive minimalist low-profile sneaker. Stripped of loud branding, crafted from buttery supple Italian Nappa leather, mounted on stitched vulcanized Margom rubber cup-soles.',
    details: {
      fabric: 'Buttery Nappa Leather with Anti-Microbial Pigskin Lining',
      fit: 'Standard Fit with OrthoLite Arch Support',
      care: 'Wipe Clean with Damp Microfiber and Leather Foam',
      origin: 'Civitanova Marche, Italy',
      pattern: 'Clean Uncluttered Silhouette'
    }
  },
  {
    id: 'prod-f3',
    name: 'Sleek Square-Toe Handcrafted Chelsea Boots',
    brand: 'ROADSTER CASUALS',
    category: 'footwear',
    subcategory: 'Boots',
    price: 115,
    originalPrice: 210,
    discountPercent: 45,
    rating: 4.9,
    reviewCount: 710,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Oiled Pull-Up Leather', 'Goodyear Welt', 'Modern Chisel Toe'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Deep Espresso Brown', hex: '#2F1F17' },
      { name: 'Matte Obsidian', hex: '#151515' }
    ],
    description: 'A modern chisel-toe silhouette featuring heavyweight elastic side gussets, dual woven nylon pull-tabs, and a storm-welted leather sole with inset rubber traction pods.',
    details: {
      fabric: '2.2mm Waxed Pull-Up Cowhide Leather',
      fit: 'Snug Ankle Slip-On Fit (Size True)',
      care: 'Condition with Mink Oil or Leather Balm',
      origin: 'Spain',
      pattern: 'Hand-Burnished Toe'
    }
  },
  {
    id: 'prod-f4',
    name: 'Architectural Sculptural Kitten-Heel Leather Mules',
    brand: 'VERO MODA STUDIO',
    category: 'footwear',
    subcategory: 'Heels & Mules',
    price: 74,
    originalPrice: 140,
    discountPercent: 47,
    rating: 4.7,
    reviewCount: 520,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Architectural Heel', 'Memory Foam', 'Modern Chic'],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    inStock: true,
    colors: [
      { name: 'Butter Yellow', hex: '#F7E7B4' },
      { name: 'Minimalist Black', hex: '#171717' },
      { name: 'Oatmeal Beige', hex: '#E3DAC9' }
    ],
    description: '55mm flared architectural block kitten heel slide mule. Built with high-resilience memory foam footbeds and smooth glove leather upper for pain-free gallery walks and cocktail hours.',
    details: {
      fabric: 'Kid Glove Leather Upper with Synthetic Resilient Sole',
      fit: 'Square-Toe Slip-on Wide Cut',
      care: 'Store in Cotton Dust Bag with Cedar Inserts',
      origin: 'Spain',
      pattern: 'Smooth Satin Glaze'
    }
  },
  {
    id: 'prod-f5',
    name: 'Hand-Stitched Penny Loafers with Lightweight Lug Sole',
    brand: 'MANGO HERITAGE',
    category: 'footwear',
    subcategory: 'Loafers',
    price: 88,
    originalPrice: 165,
    discountPercent: 46,
    rating: 4.8,
    reviewCount: 630,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Hand-Stitched', 'Featherlight EVA', 'Modern Prep'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Cognac Saddle Brown', hex: '#9A461C' },
      { name: 'Midnight Black', hex: '#111111' }
    ],
    description: 'Heritage prep reimagined through modern proportions. Classic penny keeper cutout upper paired with a serrated featherlight XL Extralight EVA sole that delivers all-day bounce.',
    details: {
      fabric: 'Brushed Saddle Leather with Antibacterial Sockliner',
      fit: 'Standard Width D with Cushioned Heel Counter',
      care: 'Cream Polish and Buff with Horsehair Brush',
      origin: 'Portugal',
      pattern: 'Artisan Moccasin Stitch'
    }
  },

  // ================= SPORTS FOOTWEAR (HIGH PERFORMANCE & ATHLEISURE) =================
  {
    id: 'prod-sf1',
    name: 'Carbon-Fiber Plate Pro Marathon Running Shoes',
    brand: 'KINETIC LAB',
    category: 'sports-footwear',
    subcategory: 'Pro Performance Running',
    price: 138,
    originalPrice: 240,
    discountPercent: 42,
    rating: 4.9,
    reviewCount: 1950,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Full Carbon Plate', 'Supercritical Nitrogen Foam', 'Pro Marathon Racer'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Volt Lime & Hyper Violet', hex: '#D4FF00' },
      { name: 'Phantom Carbon Black', hex: '#1C1C1C' },
      { name: 'Electric Cyan & Glacier', hex: '#00F0FF' }
    ],
    description: 'Tested and proven on marathon race courses worldwide. Houses a spoon-shaped 3K stiff carbon-fiber propulsion plate embedded inside supercritical nitrogen-infused PEBA foam that rebounds 88% kinetic energy back into your stride.',
    details: {
      fabric: 'Vapor-Weave Hydrophobic Single-Layer Engineered Mesh',
      fit: 'Snug Locked-in Performance Race Fit (198g)',
      care: 'Spot Clean with Cold Water, Air Dry in Shade',
      origin: 'Germany R&D / Assembled in Vietnam',
      pattern: 'Laser-Etched Speed Wave'
    }
  },
  {
    id: 'prod-sf2',
    name: 'Trail-Tech All-Weather GORE-TEX Rugged Trail Runner',
    brand: 'NOVA SPORT',
    category: 'sports-footwear',
    subcategory: 'Trail Running & Hiking',
    price: 125,
    originalPrice: 210,
    discountPercent: 40,
    rating: 4.9,
    reviewCount: 1420,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['GORE-TEX Waterproof', 'Vibram Megagrip Lugs', 'Quick-Lace System'],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Stealth Graphite & Amber', hex: '#373A36' },
      { name: 'Alpine Forest & Blaze', hex: '#445137' },
      { name: 'Desert Dune Khaki', hex: '#B8A47E' }
    ],
    description: 'Built for relentless mountain conditions, muddy ascents, and gravel descents. Features waterproof GORE-TEX Invisible Fit membrane, quick-pull Kevlar speed lacing, and 5mm multi-angle Vibram Megagrip traction lugs.',
    details: {
      fabric: 'Ballistic Cordura Mesh with GORE-TEX Invisible Fit',
      fit: 'Secure Heel Hold with Protective Rock Plate Guard',
      care: 'Rinse Off Heavy Mud with Hose, Air Dry',
      origin: 'Italy Sole / Assembled in Vietnam',
      pattern: 'Mud-Shedding Deep Cleats'
    }
  },
  {
    id: 'prod-sf3',
    name: 'Quantum-Float Maximum Cushion Road Running Shoes',
    brand: 'STRIDE AESTHETICS',
    category: 'sports-footwear',
    subcategory: 'Road Running & Recovery',
    price: 98,
    originalPrice: 170,
    discountPercent: 42,
    rating: 4.8,
    reviewCount: 1180,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['38mm Max Cushion', 'Smooth Rocker Geometry', 'Joint Protection'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Cloud White & Neon Coral', hex: '#F0F2F5' },
      { name: 'Deep Space Navy', hex: '#162238' },
      { name: 'Sage Ice', hex: '#A8C3B5' }
    ],
    description: 'Plush high-mileage road trainer engineered to soak up heavy impact. Sculpted early-stage rocker geometry propels transitions effortlessly, while 38mm of dual-density foam cradles tired knees and joints.',
    details: {
      fabric: 'Circular Engineered Jacquard Air-Knit Upper',
      fit: 'Generous Accommodating Forefoot with Padded Collar',
      care: 'Gentle Hand Wash with Mild Sports Detergent',
      origin: 'Vietnam',
      pattern: 'Gradient Micro-Perforations'
    }
  },
  {
    id: 'prod-sf4',
    name: 'Barefoot-Zero Anatomical Gym & Cross-Trainer',
    brand: 'KINETIC LAB',
    category: 'sports-footwear',
    subcategory: 'Cross-Training & Gym',
    price: 79,
    originalPrice: 130,
    discountPercent: 39,
    rating: 4.9,
    reviewCount: 880,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Zero-Drop 0mm', 'Wide Natural Toe Box', 'Sticky Rubber Grip'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Stealth Noir & Matte Gold', hex: '#1E1E1E' },
      { name: 'Concrete Gray & Neon', hex: '#7D7D7D' }
    ],
    description: 'Engineered for heavy barbell squats, kettlebell work, and functional agility drills. Zero-drop offset with a wide anatomical foot shape allows toes to splay naturally for rock-solid kinetic grounding.',
    details: {
      fabric: 'Tough Abrasion-Resistant Ripstop & Breathable Mesh',
      fit: 'Anatomical Natural Splay Wide Toe Box (Zero Drop)',
      care: 'Air Dry after Workouts, Insole Removable',
      origin: 'Indonesia',
      pattern: 'Honeycomb Sticky Grip Tread'
    }
  },
  {
    id: 'prod-sf5',
    name: 'Kinetic-Glide Futuristic Sculpted Athleisure Sneaker',
    brand: 'STRIDE AESTHETICS',
    category: 'sports-footwear',
    subcategory: 'Athleisure & Street',
    price: 110,
    originalPrice: 190,
    discountPercent: 42,
    rating: 4.8,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Futuristic Sculpted', 'Adaptive Primeknit', 'Street-Tech'],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    inStock: true,
    colors: [
      { name: 'Liquid Chrome & Chalk', hex: '#DCDCDC' },
      { name: 'Solar Flame & Carbon', hex: '#FF5722' },
      { name: 'Triple Pitch Black', hex: '#181818' }
    ],
    description: 'Where high-fashion runway aesthetics meet high-rebound athletic cushioning. Showcases an open 3D printed lattice heel cage, dynamic reflective webbing, and ultra-adaptive seamless knit sockliner.',
    details: {
      fabric: 'Seamless Recycled Monofilament Knit with TPU Accents',
      fit: 'Adaptive Ergonomic Sock-Like Glove Fit',
      care: 'Spot Clean with Soft Bristle Sneaker Brush',
      origin: 'Vietnam',
      pattern: 'Reflective Geometric Waveform'
    }
  },

  // ================= ACCESSORIES & BEAUTY =================
  {
    id: 'prod-a1',
    name: 'Full-Grain Tuscan Leather Commuter Tote',
    brand: 'MAST & HARBOUR',
    category: 'accessories',
    subcategory: 'Bags & Totes',
    price: 92,
    originalPrice: 180,
    discountPercent: 49,
    rating: 4.9,
    reviewCount: 1650,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Vegetable-Tanned', 'Laptop Sleeve 16"', 'Heirloom Grade'],
    sizes: ['One Size (16L Capacity)'],
    inStock: true,
    colors: [
      { name: 'Cognac Amber', hex: '#9E4717' },
      { name: 'Espresso Roast', hex: '#362B28' },
      { name: 'Jet Noir', hex: '#1C1D24' }
    ],
    description: 'Handcrafted by Tuscan leather artisans using vegetable tannins and organic oils. Features reinforced rivets, dedicated padded 16-inch laptop chamber, and brass key tether.',
    details: {
      fabric: '100% Certified Full-Grain Tuscan Cowhide with Cotton Twill Lining',
      fit: 'Spacious Daily Commuter Dimensions: 42cm x 34cm x 14cm',
      care: 'Apply Natural Beeswax Conditioner Twice a Year',
      origin: 'Florence, Italy',
      pattern: 'Pebbled Natural Grain'
    }
  },
  {
    id: 'prod-a2',
    name: 'Handcrafted Acetate Square-Frame Polarized Sunglasses',
    brand: 'FOSSIL SIGNATURE',
    category: 'accessories',
    subcategory: 'Eyewear',
    price: 52,
    originalPrice: 95,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 880,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['UV400 Polarized', 'Italian Mazzucchelli Acetate'],
    sizes: ['Standard 51-20-145mm'],
    inStock: true,
    colors: [
      { name: 'Havana Tortoise', hex: '#664228' },
      { name: 'Champagne Crystal', hex: '#F0E6CE' },
      { name: 'Gloss Piano Black', hex: '#0B0B0C' }
    ],
    description: 'Cut from blocks of cured Italian Mazzucchelli cellulose acetate with custom five-barrel German hinges and scratch-resistant Cat 3 polarized CR-39 sun lenses.',
    details: {
      fabric: 'Cellulose Acetate with Stainless Steel Wire Core Temples',
      fit: 'Universal Bridge Fit with Gentle Temple Taper',
      care: 'Clean with Included Microfiber Cloth; Keep in Hard Shell Case',
      origin: 'Hand-Assembled in Japan',
      pattern: 'Natural Tortoiseshell Swirl'
    }
  },
  {
    id: 'prod-b1',
    name: 'Cedarwood & Saffron Artisanal Extrait De Parfum',
    brand: 'ANOUK ATELIER',
    category: 'beauty',
    subcategory: 'Fine Fragrance',
    price: 72,
    originalPrice: 120,
    discountPercent: 40,
    rating: 4.9,
    reviewCount: 1340,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=80'
    ],
    tags: ['Extrait 28% Concentration', 'Artisanal Batch', 'Unisex'],
    sizes: ['50ml Glass Flacon', '100ml Luxury Flacon'],
    inStock: true,
    colors: [
      { name: 'Golden Amber Glass', hex: '#E29A38' }
    ],
    description: 'An evocative woody oriental scent opening with Kashmiri saffron and sun-dried bergamot, descending into smoky Atlas cedarwood and velvety white amber.',
    details: {
      fabric: '28% Pure Fragrance Oils, Organic Sugar Cane Alcohol',
      fit: 'Long-Lasting 12+ Hour Sillage and Projection',
      care: 'Store in Cool, Dark Place Away from Direct Sunlight',
      origin: 'Grasse, France',
      pattern: 'Heavyweight Fluted Crystal Flacon'
    }
  },
  {
    id: 'prod-b2',
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
    tags: ['Anti-Frizz', 'Skin Rejuvenating', 'Grade 6A Silk'],
    sizes: ['Queen Standard (50x75cm)'],
    inStock: true,
    colors: [
      { name: 'Pearl Champagne', hex: '#F3E5AB' },
      { name: 'Silver Mist', hex: '#C5C6C7' }
    ],
    description: 'Grade 6A 22-Momme pure mulberry silk that locks in hair moisture, eliminates friction split ends, and prevents sleep creases on delicate facial skin.',
    details: {
      fabric: '100% Pure Long-Strand Mulberry Silk (22 Momme)',
      fit: 'Standard Envelope Closure',
      care: 'Hand Wash in Cold Water with pH Neutral detergent',
      origin: 'Imported',
      pattern: 'Hypoallergenic Gloss Finish'
    }
  }
];
