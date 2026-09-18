import { useState } from 'react';
import { Heart, Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function ProductCard({
  product,
  currency,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onQuickView,
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [showSizePicker, setShowSizePicker] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    if (product.sizes.length > 1 && !showSizePicker) {
      setShowSizePicker(true);
      return;
    }
    onAddToCart(product, selectedSize);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setShowSizePicker(false);
    }, 1200);
  };

  const handleSelectSizeAndAdd = (e, size) => {
    e.stopPropagation();
    setSelectedSize(size);
    onAddToCart(product, size);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      setShowSizePicker(false);
    }, 1200);
  };

  return (
    <div
      id={`product-card-${product.id}`}
      onClick={() => onQuickView(product)}
      className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-rose-200 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Primary Tag Badge */}
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
            {product.tags[0]}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          id={`wishlist-toggle-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-xs cursor-pointer ${
            isWishlisted
              ? 'bg-rose-50 text-rose-600'
              : 'bg-white/80 text-stone-700 hover:bg-white hover:text-rose-600'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          aria-label="Toggle wishlist"
        >
          <Heart
            className={`w-4 h-4 transition-transform active:scale-125 ${
              isWishlisted ? 'fill-rose-600 text-rose-600' : ''
            }`}
          />
        </button>

        {/* Rating Pill */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1 text-[11px] font-bold text-stone-800 shadow-xs">
          <span>{product.rating}</span>
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-stone-400 font-normal border-l border-stone-200 pl-1 text-[10px]">
            {product.reviewCount}
          </span>
        </div>

        {/* Quick View Hover Action */}
        <button
          id={`quick-view-${product.id}`}
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/85 hover:bg-stone-950 text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-md cursor-pointer"
          title="Quick View details"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Size Selection Overlay when adding to bag */}
        {showSizePicker && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-x-0 bottom-0 bg-white/98 backdrop-blur-md p-3 border-t border-stone-200 shadow-md animate-in slide-in-from-bottom-2 duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600">
                Select Size:
              </span>
              <button
                onClick={() => setShowSizePicker(false)}
                className="text-[10px] text-stone-400 hover:text-stone-600 font-medium"
              >
                Cancel
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={(e) => handleSelectSizeAndAdd(e, s)}
                  className={`text-xs px-2.5 py-1 rounded-md font-semibold border transition-colors cursor-pointer ${
                    selectedSize === s
                      ? 'bg-stone-900 text-white border-stone-900'
                      : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-0.5">
            {product.brand}
          </div>
          <h3 className="text-sm font-semibold text-stone-900 line-clamp-1 group-hover:text-rose-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Pricing & Add to Bag Row */}
        <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm sm:text-base font-bold text-stone-950">
                {formatPrice(product.price, currency)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-stone-400 line-through">
                  {formatPrice(product.originalPrice, currency)}
                </span>
              )}
            </div>
            {product.discountPercent > 0 && (
              <span className="text-[11px] font-bold text-rose-600">
                ({product.discountPercent}% OFF)
              </span>
            )}
          </div>

          <button
            id={`add-bag-btn-${product.id}`}
            onClick={handleAdd}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-stone-100 hover:bg-rose-600 hover:text-white text-stone-800'
            }`}
            title="Add item to shopping bag"
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
