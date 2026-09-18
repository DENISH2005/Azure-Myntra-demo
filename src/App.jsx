import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Check, 
  Heart 
} from 'lucide-react';
import { PRODUCTS, BRANDS } from './data/products';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import CategoryPills from './components/CategoryPills';
import ProductCatalog from './components/ProductCatalog';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import WishlistView from './components/WishlistView';
import AboutUs from './components/AboutUs';
import TermsAndConditions from './components/TermsAndConditions';
import Footer from './components/Footer';

export default function App() {
  // Navigation & View State
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem('myra_currency') || 'INR';
  });

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('myra_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlistIds, setWishlistIds] = useState(() => {
    try {
      const saved = localStorage.getItem('myra_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Modals
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('myra_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('myra_wishlist', JSON.stringify(Array.from(wishlistIds)));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem('myra_currency', currency);
  }, [currency]);

  // Toast trigger helper
  const showToast = (text, type = 'bag') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  // Cart Handlers
  const handleAddToCart = (product, selectedSize) => {
    setCartItems((prev) => {
      const cartItemId = `${product.id}-${selectedSize}`;
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          product,
          selectedSize,
          quantity: 1,
        },
      ];
    });
    showToast(`Added "${product.name.slice(0, 24)}..." (Size: ${selectedSize}) to Bag`, 'bag');
  };

  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleRemoveCartItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Wishlist Handlers
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast('Removed from Wishlist', 'wishlist');
      } else {
        next.add(product.id);
        showToast('Saved to Wishlist', 'wishlist');
      }
      return next;
    });
  };

  const handleRemoveFromWishlist = (product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(product.id);
      return next;
    });
  };

  // Switch to catalog with optional category selection
  const handleShopCategory = (category = 'all') => {
    setSelectedCategory(category);
    setCurrentView('catalog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Derived collections for home view
  const trendingProducts = PRODUCTS.slice(0, 4);
  const flashSaleProducts = PRODUCTS.filter((p) => p.discountPercent >= 48).slice(0, 4);
  const wishlistedProductList = PRODUCTS.filter((p) => wishlistIds.has(p.id));

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-stone-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900/95 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-stone-800 animate-in slide-in-from-bottom-5 duration-200">
          {toastMessage.type === 'wishlist' ? (
            <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
          ) : (
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4" />
            </div>
          )}
          <span className="text-xs font-semibold">{toastMessage.text}</span>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setCartOpen(true)}
        currency={currency}
        setCurrency={setCurrency}
      />

      {/* Page Views Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <div>
            {/* Hero Banner with Countdown & Deals */}
            <HeroBanner onShopNow={handleShopCategory} />

            {/* Quick Category Circles / Pills */}
            <CategoryPills
              selectedCategory={selectedCategory}
              onSelectCategory={handleShopCategory}
            />

            {/* Section 1: Trending Now / Festive Edit */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex items-end justify-between mb-6 pb-2 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-1.5 text-rose-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Curator's Spotlight</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                    Trending This Season
                  </h2>
                </div>
                <button
                  onClick={() => handleShopCategory('all')}
                  className="text-xs sm:text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>View All 12 Items</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {trendingProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    isWishlisted={wishlistIds.has(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            </section>

            {/* Mid-Page Promo Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-stone-900 to-rose-950 text-white p-8 sm:p-12 shadow-xl border border-stone-800">
                <div className="max-w-xl space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-400/30">
                    Limited Period Offer
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                    Get Flat 50% Off On Handcrafted Silk Kurtas & Washed Linens
                  </h2>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    Use promo code <strong className="text-white font-mono bg-white/15 px-2 py-0.5 rounded-md">MYRA15</strong> at checkout for an extra 15% instant savings. Free doorstep pickup on all exchanges.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => handleShopCategory('women')}
                      className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
                    >
                      Shop Festive Edit
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Flash Deals (Flat 48-55% Off) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="flex items-end justify-between mb-6 pb-2 border-b border-stone-200">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Steal Deals</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
                    Deals of the Day (Up to 55% Off)
                  </h2>
                </div>
                <button
                  onClick={() => handleShopCategory('all')}
                  className="text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore All Deals</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {flashSaleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    currency={currency}
                    isWishlisted={wishlistIds.has(product.id)}
                    onToggleWishlist={handleToggleWishlist}
                    onAddToCart={handleAddToCart}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            </section>

            {/* Brands Marquee Showcase */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-stone-200">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                  Featured Couture & High-Street Brands
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-75">
                {BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs sm:text-sm font-bold tracking-wider text-stone-600 uppercase border border-stone-200 bg-white px-4 py-2 rounded-xl shadow-2xs hover:text-stone-900 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentView === 'catalog' && (
          <ProductCatalog
            products={PRODUCTS}
            currency={currency}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {currentView === 'wishlist' && (
          <WishlistView
            wishlistProducts={wishlistedProductList}
            currency={currency}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onAddToCart={handleAddToCart}
            onExploreCatalog={() => setCurrentView('catalog')}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {currentView === 'about' && (
          <AboutUs onExploreCatalog={() => setCurrentView('catalog')} />
        )}

        {currentView === 'terms' && (
          <TermsAndConditions />
        )}
      </main>

      {/* Quick View Inspection Modal */}
      <ProductDetailModal
        product={quickViewProduct}
        currency={currency}
        isWishlisted={quickViewProduct ? wishlistIds.has(quickViewProduct.id) : false}
        onClose={() => setQuickViewProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      {/* Slide-over Shopping Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onOrderSuccess={(order) => setConfirmedOrder(order)}
      />

      {/* Order Confirmation Celebratory Modal */}
      <OrderConfirmationModal
        order={confirmedOrder}
        currency={currency}
        onClose={() => setConfirmedOrder(null)}
        onContinueShopping={() => {
          setConfirmedOrder(null);
          setCurrentView('catalog');
        }}
      />

      {/* Footer */}
      <Footer
        onNavigate={(view, cat) => {
          setCurrentView(view);
          if (cat) setSelectedCategory(cat);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
