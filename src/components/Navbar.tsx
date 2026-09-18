import { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  Percent, 
  ShieldCheck, 
  ChevronDown
} from 'lucide-react';
import { NavView, CategoryId } from '../types';
import { Currency } from '../utils/format';

interface NavbarProps {
  currentView: NavView;
  setCurrentView: (view: NavView) => void;
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
}

export default function Navbar({
  currentView,
  setCurrentView,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  cartCount,
  wishlistCount,
  onOpenCart,
  currency,
  setCurrency,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  const quickSearchSuggestions = [
    'Silk Kurta Sets',
    'Linen Shirts',
    'Satin Maxi Dress',
    'Minimalist Sneakers',
    'Leather Tote',
    'Mulberry Silk',
  ];

  const handleNavClick = (view: NavView, category?: CategoryId) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-stone-900 text-stone-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
              <Percent className="w-3 h-3" /> FESTIVE DROP
            </span>
            <span className="font-medium text-rose-100/90 text-[11px] sm:text-xs">
              Extra 15% OFF with code <strong className="text-white underline font-semibold">MYRA15</strong> • Express Free Delivery over $40
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-stone-300">
            <button
              id="nav-currency-toggle"
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="flex items-center gap-1 hover:text-white font-medium bg-white/10 px-2.5 py-0.5 rounded-md border border-white/15 transition-colors cursor-pointer"
              title="Click to toggle currency"
            >
              <span>Currency:</span>
              <strong className="text-amber-300">{currency === 'INR' ? '₹ INR' : '$ USD'}</strong>
            </button>
            <div className="flex items-center gap-1 text-emerald-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Genuine Brands</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-2 sm:gap-6">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-rose-900 flex items-center justify-center text-white font-serif font-black text-xl shadow-sm tracking-tighter">
                M
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-bold text-stone-950 uppercase flex items-center">
                  MYRA<span className="text-rose-600 text-2xl leading-none">.</span>
                </span>
                <span className="hidden sm:block text-[9px] tracking-[0.25em] text-stone-500 uppercase font-semibold -mt-1">
                  Atelier & Studio
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Categories Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wide">
            <button
              id="nav-home-btn"
              onClick={() => handleNavClick('home')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'home'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              HOME
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-catalog-btn"
              onClick={() => handleNavClick('catalog', 'all')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'catalog' && selectedCategory === 'all'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              ALL PRODUCTS
              {currentView === 'catalog' && selectedCategory === 'all' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-women-btn"
              onClick={() => handleNavClick('catalog', 'women')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'catalog' && selectedCategory === 'women'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              WOMEN
              {currentView === 'catalog' && selectedCategory === 'women' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-men-btn"
              onClick={() => handleNavClick('catalog', 'men')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'catalog' && selectedCategory === 'men'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              MEN
              {currentView === 'catalog' && selectedCategory === 'men' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-accessories-btn"
              onClick={() => handleNavClick('catalog', 'accessories')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'catalog' && selectedCategory === 'accessories'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              ACCESSORIES
            </button>

            <button
              id="nav-about-btn"
              onClick={() => handleNavClick('about')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'about'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              ABOUT US
              {currentView === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>

            <button
              id="nav-terms-btn"
              onClick={() => handleNavClick('terms')}
              className={`py-1 relative transition-colors cursor-pointer ${
                currentView === 'terms'
                  ? 'text-rose-600 font-bold'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              T&C POLICY
              {currentView === 'terms' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Search Bar with live quick suggestions */}
          <div className="relative flex-1 max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-stone-400 pointer-events-none" />
              <input
                id="search-input-header"
                type="text"
                value={searchQuery}
                onFocus={() => setShowSearchDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (currentView !== 'catalog') {
                    setCurrentView('catalog');
                  }
                }}
                placeholder="Search for kurtas, shirts, dresses, bags..."
                className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-stone-100 hover:bg-stone-100/80 focus:bg-white text-stone-800 placeholder-stone-400 rounded-lg border border-stone-200 focus:border-rose-400 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  id="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 p-1 text-stone-400 hover:text-stone-700 rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick search popup suggestions */}
            {showSearchDropdown && !searchQuery && (
              <div 
                className="absolute top-full left-0 right-0 mt-1.5 p-3 bg-white border border-stone-200 rounded-xl shadow-lg z-50 animate-in fade-in zoom-in-95 duration-100"
                onMouseLeave={() => setShowSearchDropdown(false)}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-rose-500" /> Popular Searches
                  </span>
                  <button 
                    onClick={() => setShowSearchDropdown(false)}
                    className="text-[10px] text-stone-400 hover:text-stone-600"
                  >
                    Close
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickSearchSuggestions.map((term) => (
                    <button
                      key={term}
                      onClick={() => {
                        setSearchQuery(term);
                        setShowSearchDropdown(false);
                        setCurrentView('catalog');
                      }}
                      className="text-xs px-2.5 py-1 bg-stone-100 hover:bg-rose-50 hover:text-rose-700 text-stone-700 rounded-full transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Icons: Currency (Mobile) + Wishlist + Cart */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Mobile Currency Toggle */}
            <button
              id="mobile-currency-toggle"
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="sm:hidden px-2 py-1 text-[11px] font-bold text-stone-700 bg-stone-100 rounded-md border border-stone-200 cursor-pointer"
              title="Toggle currency"
            >
              {currency === 'INR' ? '₹' : '$'}
            </button>

            {/* Wishlist Button */}
            <button
              id="wishlist-nav-btn"
              onClick={() => handleNavClick('wishlist')}
              className={`relative p-2 rounded-xl text-stone-700 hover:text-rose-600 hover:bg-stone-100 transition-colors cursor-pointer ${
                currentView === 'wishlist' ? 'text-rose-600 bg-rose-50' : ''
              }`}
              title="View Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Cart Bag Button */}
            <button
              id="cart-bag-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl transition-all shadow-xs cursor-pointer group"
              title="View Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300 group-hover:scale-110 transition-transform" />
              <div className="hidden sm:flex flex-col items-start leading-none text-left">
                <span className="text-[10px] uppercase font-semibold text-stone-300">Bag</span>
                <span className="text-xs font-bold text-white">{cartCount} items</span>
              </div>
              {cartCount > 0 && (
                <span className="sm:hidden w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'home' ? 'bg-rose-50 text-rose-700' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'catalog' && selectedCategory === 'all'
                ? 'bg-rose-50 text-rose-700'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            All Products Catalog
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'women')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'catalog' && selectedCategory === 'women'
                ? 'bg-rose-50 text-rose-700'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            Women's Fashion
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'men')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'catalog' && selectedCategory === 'men'
                ? 'bg-rose-50 text-rose-700'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            Men's Fashion
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'accessories')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'catalog' && selectedCategory === 'accessories'
                ? 'bg-rose-50 text-rose-700'
                : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            Accessories & Eyewear
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'about' ? 'bg-rose-50 text-rose-700' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('terms')}
            className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold cursor-pointer ${
              currentView === 'terms' ? 'bg-rose-50 text-rose-700' : 'text-stone-800 hover:bg-stone-50'
            }`}
          >
            Terms & Conditions & Policy
          </button>

          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 px-3">
            <span>Currency selected:</span>
            <button
              onClick={() => setCurrency(currency === 'INR' ? 'USD' : 'INR')}
              className="font-bold text-rose-600 bg-stone-100 px-3 py-1 rounded-md"
            >
              {currency === 'INR' ? '₹ INR (Indian Rupee)' : '$ USD (US Dollar)'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
