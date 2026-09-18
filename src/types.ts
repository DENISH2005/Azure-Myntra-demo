export type CategoryId = 'all' | 'women' | 'men' | 'accessories' | 'footwear' | 'beauty';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryId;
  subcategory: string;
  price: number; // in USD or INR base (we'll provide seamless currency toggle)
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  tags: string[];
  sizes: string[];
  inStock: boolean;
  colors: { name: string; hex: string }[];
  description: string;
  details: {
    fabric: string;
    fit: string;
    care: string;
    origin: string;
    neck?: string;
    pattern?: string;
  };
}

export interface CartItem {
  id: string; // unique item id (productId + size)
  product: Product;
  selectedSize: string;
  selectedColor?: string;
  quantity: number;
}

export type NavView = 'home' | 'catalog' | 'about' | 'terms' | 'wishlist';

export interface FilterState {
  category: CategoryId;
  subcategory: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  minDiscount: number;
  selectedBrands: string[];
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'rating' | 'discount' | 'newest';
}

export interface Coupon {
  code: string;
  discountPercent?: number;
  flatDiscount?: number;
  minCartValue: number;
  description: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  couponDiscount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  estimatedDelivery: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    pincode: string;
    phone: string;
  };
}
