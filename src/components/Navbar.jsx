import { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

export default function Navbar({
  currentView,
  setCurrentView,
  selectedCategory,
  setSelectedCategory,
  cartCount,
  wishlistCount,
  currency,
  setCurrency,
  onOpenCart,
  searchQuery,
  setSearchQuery,
  onOpenSearch,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'womenswear', label: 'Womenswear' },
    { id: 'menswear', label: 'Menswear (T-Shirts & Street)' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'sports-footwear', label: 'Sports Footwear' },
    { id: 'accessories', label: 'Accessories' },
    { id: 'beauty', label: 'Beauty & Scents' },
  ];

  const isCatActive = (catId) => {
    if (selectedCategory === catId) return true;
    if (catId === 'womenswear' && selectedCategory === 'women') return true;
    if (catId === 'menswear' && selectedCategory === 'men') return true;
    if (catId === 'footwear' && selectedCategory === 'footware') return true;
    if (catId === 'sports-footwear' && selectedCategory === 'sports-footware') return true;
    return false;
  };

  const handleSelectCat = (catId) => {
    setSelectedCategory(catId);
    if (currentView !== 'catalog') {
      setCurrentView('catalog');
    }
    setShowCategoryDropdown(false);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (view) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all shadow-2xs">
      {/* Top micro-bar: Shipping ticker + Currency Switcher */}
      <div className="bg-stone-900 text-stone-300 text-[11px] py-1.5 px-4 sm:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          <p className="truncate">
            Complimentary doorstep shipping on orders over $50 / ₹999 • 14-Day easy returns
          </p>
        </div>

        <div className="flex items-center gap-4 shrink-0 font-medium">
          <div className="flex items-center gap-1.5 text-[11px]">
            <span className="text-stone-400">Currency:</span>
            <button
              id="currency-usd-btn"
              onClick={() => setCurrency('USD')}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                currency === 'USD'
                  ? 'bg-rose-600 text-white font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              USD ($)
            </button>
            <span className="text-stone-600">|</span>
            <button
              id="currency-inr-btn"
              onClick={() => setCurrency('INR')}
              className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                currency === 'INR'
                  ? 'bg-rose-600 text-white font-bold'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-3 sm:gap-6">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="group flex flex-col text-left cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-serif font-black tracking-widest text-stone-950 group-hover:text-rose-600 transition-colors">
                  MYRA
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-rose-600 mb-2" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-semibold -mt-1">
                Atelier & Studio
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                id="nav-home-btn"
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-xs uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer ${
                  currentView === 'home'
                    ? 'text-rose-600 bg-rose-50/70'
                    : 'text-stone-700 hover:text-rose-600 hover:bg-stone-50'
                }`}
              >
                Home
              </button>

              {/* Categories Popover / Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowCategoryDropdown(true)}
                onMouseLeave={() => setShowCategoryDropdown(false)}
              >
                <button
                  id="nav-catalog-btn"
                  onClick={() => handleNavClick('catalog')}
                  className={`px-3 py-2 text-xs uppercase font-bold tracking-wider rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    currentView === 'catalog'
                      ? 'text-rose-600 bg-rose-50/70'
                      : 'text-stone-700 hover:text-rose-600 hover:bg-stone-50'
                  }`}
                >
                  <span>Catalog</span>
                  <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-1 text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                      Shop Categories
                    </div>
                    {categories.map((c) => {
                      const active = isCatActive(c.id) && currentView === 'catalog';
                      return (
                        <button
                          key={c.id}
                          onClick={() => handleSelectCat(c.id)}
                          className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between hover:bg-rose-50/60 hover:text-rose-600 transition-colors cursor-pointer ${
                            active
                              ? 'text-rose-600 font-bold bg-rose-50/40'
                              : 'text-stone-700'
                          }`}
                        >
                          <span>{c.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                id="nav-about-btn"
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 text-xs uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer ${
                  currentView === 'about'
                    ? 'text-rose-600 bg-rose-50/70'
                    : 'text-stone-700 hover:text-rose-600 hover:bg-stone-50'
                }`}
              >
                About Us
              </button>

              <button
                id="nav-terms-btn"
                onClick={() => handleNavClick('terms')}
                className={`px-3 py-2 text-xs uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer ${
                  currentView === 'terms'
                    ? 'text-rose-600 bg-rose-50/70'
                    : 'text-stone-700 hover:text-rose-600 hover:bg-stone-50'
                }`}
              >
                T&C & Policy
              </button>
            </nav>
          </div>

          {/* Search bar in middle */}
          <div className="flex-1 max-w-md mx-2 sm:mx-4">
            <div className="relative">
              <input
                id="global-catalog-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (currentView !== 'catalog') {
                    setCurrentView('catalog');
                  }
                  if (onOpenSearch) onOpenSearch();
                }}
                placeholder="Search for kurtas, linen shirts, totes, shoes..."
                className="w-full pl-9 pr-8 py-2 bg-stone-100 hover:bg-stone-100/90 focus:bg-white text-xs text-stone-900 placeholder-stone-400 rounded-full border border-transparent focus:border-stone-300 focus:outline-none transition-all shadow-inner"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons: Wishlist + Shopping Bag */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wishlist Icon */}
            <button
              id="header-wishlist-btn"
              onClick={() => handleNavClick('wishlist')}
              className="relative p-2.5 rounded-full hover:bg-stone-100 text-stone-700 hover:text-rose-600 transition-colors cursor-pointer"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-600 fill-rose-100' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-rose-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              id="header-cart-btn"
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white transition-all shadow-xs cursor-pointer group"
              title="Open Shopping Cart"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-stone-900">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                Bag
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-2 px-3 rounded-lg text-xs font-bold text-left ${
                currentView === 'home' ? 'bg-rose-50 text-rose-700' : 'text-stone-700'
              }`}
            >
              Home Page
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className={`py-2 px-3 rounded-lg text-xs font-bold text-left ${
                currentView === 'catalog' ? 'bg-rose-50 text-rose-700' : 'text-stone-700'
              }`}
            >
              Full Catalog
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`py-2 px-3 rounded-lg text-xs font-bold text-left ${
                currentView === 'about' ? 'bg-rose-50 text-rose-700' : 'text-stone-700'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('terms')}
              className={`py-2 px-3 rounded-lg text-xs font-bold text-left ${
                currentView === 'terms' ? 'bg-rose-50 text-rose-700' : 'text-stone-700'
              }`}
            >
              T&C & Policy
            </button>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
              Browse Categories
            </span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => {
                const active = isCatActive(c.id) && currentView === 'catalog';
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelectCat(c.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      active
                        ? 'bg-rose-600 text-white border-rose-600 font-bold'
                        : 'bg-stone-50 text-stone-700 border-stone-200'
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
