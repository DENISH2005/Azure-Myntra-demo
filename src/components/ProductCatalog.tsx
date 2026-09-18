import { useState, useMemo } from 'react';
import { 
  SlidersHorizontal, 
  X, 
  ArrowUpDown, 
  RotateCcw,
  Sparkles,
  ShoppingBag
} from 'lucide-react';
import { Product, CategoryId, FilterState } from '../types';
import { Currency } from '../utils/format';
import { BRANDS } from '../data/products';
import ProductCard from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  currency: Currency;
  selectedCategory: CategoryId;
  setSelectedCategory: (cat: CategoryId) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onQuickView: (product: Product) => void;
}

export default function ProductCatalog({
  products,
  currency,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  wishlistIds,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}: ProductCatalogProps) {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [minDiscount, setMinDiscount] = useState<number>(0);
  const [sortBy, setSortBy] = useState<FilterState['sortBy']>('recommended');
  const [maxPrice, setMaxPrice] = useState<number>(250);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setMinRating(0);
    setMinDiscount(0);
    setMaxPrice(250);
    setSearchQuery('');
    setSortBy('recommended');
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = p.name.toLowerCase().includes(q);
          const matchBrand = p.brand.toLowerCase().includes(q);
          const matchSub = p.subcategory.toLowerCase().includes(q);
          const matchTags = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchName && !matchBrand && !matchSub && !matchTags) {
            return false;
          }
        }

        // Price filter
        if (p.price > maxPrice) {
          return false;
        }

        // Brand filter
        if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) {
          return false;
        }

        // Rating filter
        if (minRating > 0 && p.rating < minRating) {
          return false;
        }

        // Discount filter
        if (minDiscount > 0 && p.discountPercent < minDiscount) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
        if (sortBy === 'newest') return b.id.localeCompare(a.id);
        return 0; // recommended default
      });
  }, [
    products,
    selectedCategory,
    searchQuery,
    maxPrice,
    selectedBrands,
    minRating,
    minDiscount,
    sortBy,
  ]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedBrands.length +
    (minRating > 0 ? 1 : 0) +
    (minDiscount > 0 ? 1 : 0) +
    (maxPrice < 250 ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const categoriesList = [
    { id: 'all' as CategoryId, label: 'All Collections' },
    { id: 'women' as CategoryId, label: "Women's Couture & Ethnic" },
    { id: 'men' as CategoryId, label: "Men's Apparel & Streetwear" },
    { id: 'accessories' as CategoryId, label: 'Accessories & Totes' },
    { id: 'footwear' as CategoryId, label: 'Footwear & Heels' },
    { id: 'beauty' as CategoryId, label: 'Beauty & Fragrances' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Bar: Title, Count, Sort By */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-950">
              {selectedCategory === 'all'
                ? 'Curated Catalog'
                : categoriesList.find((c) => c.id === selectedCategory)?.label}
            </h1>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600">
              {filteredProducts.length} Items
            </span>
          </div>
          {searchQuery && (
            <p className="text-xs text-stone-500 mt-1">
              Showing matching results for <strong className="text-stone-900">"{searchQuery}"</strong>
            </p>
          )}
        </div>

        {/* Controls: Mobile Filter Toggle + Sort By Dropdown */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <button
            id="mobile-filter-open-btn"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-bold shadow-2xs cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4 text-stone-600" />
            <span>Filters ({activeFilterCount})</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Sort By:
            </span>
            <div className="relative">
              <select
                id="catalog-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as FilterState['sortBy'])}
                className="appearance-none pl-3 pr-8 py-2 bg-white border border-stone-300 rounded-xl text-xs font-semibold text-stone-800 focus:outline-none focus:border-rose-500 cursor-pointer shadow-2xs"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="discount">Biggest Discount</option>
                <option value="newest">New Arrivals</option>
              </select>
              <ArrowUpDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Tags */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider mr-1">
            Active:
          </span>

          {selectedCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold">
              Category: {selectedCategory}
              <button onClick={() => setSelectedCategory('all')} className="hover:text-rose-900 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold">
              Query: "{searchQuery}"
              <button onClick={() => setSearchQuery('')} className="hover:text-stone-950 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {selectedBrands.map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold"
            >
              {b}
              <button onClick={() => toggleBrand(b)} className="hover:text-stone-950 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {minRating > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold">
              {minRating}★ & Above
              <button onClick={() => setMinRating(0)} className="hover:text-amber-950 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {minDiscount > 0 && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold">
              {minDiscount}%+ Off
              <button onClick={() => setMinDiscount(0)} className="hover:text-rose-950 cursor-pointer">
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            onClick={handleResetFilters}
            className="text-xs text-rose-600 hover:text-rose-800 font-bold ml-2 underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Grid + Desktop Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Desktop Left Filter Sidebar */}
        <aside className="hidden lg:block lg:col-span-3 space-y-6 pr-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Filters
            </span>
            {activeFilterCount > 0 && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Categories Filter */}
          <div className="space-y-2 border-t border-stone-200 pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
              Categories
            </div>
            {categoriesList.map((c) => (
              <label
                key={c.id}
                className="flex items-center justify-between text-xs text-stone-700 hover:text-stone-950 cursor-pointer group py-0.5"
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="category-filter"
                    checked={selectedCategory === c.id}
                    onChange={() => setSelectedCategory(c.id)}
                    className="accent-rose-600 cursor-pointer"
                  />
                  <span className={selectedCategory === c.id ? 'font-bold text-rose-700' : ''}>
                    {c.label}
                  </span>
                </span>
              </label>
            ))}
          </div>

          {/* Brands Filter */}
          <div className="space-y-2 border-t border-stone-200 pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
              Featured Brands
            </div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {BRANDS.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-2 text-xs text-stone-700 hover:text-stone-950 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="rounded-xs border-stone-300 accent-rose-600 cursor-pointer"
                  />
                  <span className={selectedBrands.includes(brand) ? 'font-bold text-stone-900' : ''}>
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Max Price Filter */}
          <div className="space-y-3 border-t border-stone-200 pt-4">
            <div className="flex items-center justify-between text-xs font-bold text-stone-900">
              <span className="uppercase tracking-wider">Price Range</span>
              <span className="text-rose-600 font-mono">Up to ${maxPrice}</span>
            </div>
            <input
              type="range"
              min="30"
              max="250"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-rose-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-stone-400">
              <span>$30</span>
              <span>$250+</span>
            </div>
          </div>

          {/* Discount Filter */}
          <div className="space-y-2 border-t border-stone-200 pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
              Discount
            </div>
            {[0, 30, 45, 50].map((disc) => (
              <label
                key={disc}
                className="flex items-center gap-2 text-xs text-stone-700 hover:text-stone-950 cursor-pointer"
              >
                <input
                  type="radio"
                  name="discount-filter"
                  checked={minDiscount === disc}
                  onChange={() => setMinDiscount(disc)}
                  className="accent-rose-600 cursor-pointer"
                />
                <span>{disc === 0 ? 'All Discounts' : `${disc}% and above`}</span>
              </label>
            ))}
          </div>

          {/* Rating Filter */}
          <div className="space-y-2 border-t border-stone-200 pt-4">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
              Customer Rating
            </div>
            {[0, 4.5, 4.7].map((rating) => (
              <label
                key={rating}
                className="flex items-center gap-2 text-xs text-stone-700 hover:text-stone-950 cursor-pointer"
              >
                <input
                  type="radio"
                  name="rating-filter"
                  checked={minRating === rating}
                  onChange={() => setMinRating(rating)}
                  className="accent-rose-600 cursor-pointer"
                />
                <span>{rating === 0 ? 'All Ratings' : `${rating}★ and above`}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* Product Cards Grid */}
        <main className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200/80 shadow-xs max-w-md mx-auto my-8">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                No items matched your filters
              </h3>
              <p className="text-xs text-stone-500 mt-2 mb-6">
                Try widening your price range, clearing brand selections, or searching with another term.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3.5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  isWishlisted={wishlistIds.has(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile Filters Slide-in Modal */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <h3 className="text-base font-bold text-stone-900 uppercase tracking-wider">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Categories */}
              <div>
                <div className="text-xs font-bold uppercase text-stone-900 mb-2">Category</div>
                <div className="space-y-1">
                  {categoriesList.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedCategory(c.id)}
                      className={`w-full text-left text-xs py-1.5 px-2 rounded-md ${
                        selectedCategory === c.id
                          ? 'bg-rose-50 text-rose-700 font-bold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="border-t border-stone-200 pt-4">
                <div className="text-xs font-bold uppercase text-stone-900 mb-2">Brands</div>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {BRANDS.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 text-xs text-stone-700">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded-xs accent-rose-600"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Max Price */}
              <div className="border-t border-stone-200 pt-4">
                <div className="flex justify-between text-xs font-bold text-stone-900 mb-2">
                  <span>Max Price:</span>
                  <span className="text-rose-600 font-mono">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="250"
                  step="10"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-rose-600"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 flex gap-2">
              <button
                onClick={handleResetFilters}
                className="flex-1 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl"
              >
                Reset
              </button>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs"
              >
                Apply ({filteredProducts.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
