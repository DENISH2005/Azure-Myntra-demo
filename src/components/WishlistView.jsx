import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function WishlistView({
  wishlistProducts,
  currency,
  onRemoveFromWishlist,
  onAddToCart,
  onExploreCatalog,
  onQuickView,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-600 fill-rose-600" />
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              My Wishlist
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {wishlistProducts.length} items saved for later
          </p>
        </div>

        {wishlistProducts.length > 0 && (
          <button
            onClick={onExploreCatalog}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 max-w-md mx-auto my-12 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-serif font-bold text-stone-900">
            Your Wishlist is Empty
          </h3>
          <p className="text-xs text-stone-500 mt-2 mb-6">
            Tap the heart icon on any product in our catalog to save items you love for later.
          </p>
          <button
            id="wishlist-start-exploring-btn"
            onClick={onExploreCatalog}
            className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Explore Trending Styles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {wishlistProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div
                className="relative aspect-[3/4] overflow-hidden bg-stone-100 cursor-pointer"
                onClick={() => onQuickView(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFromWishlist(product);
                  }}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-stone-500 hover:text-rose-600 transition-colors shadow-xs cursor-pointer"
                  title="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3.5 space-y-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    {product.brand}
                  </span>
                  <h3
                    className="text-xs font-semibold text-stone-900 line-clamp-1 cursor-pointer hover:text-rose-600"
                    onClick={() => onQuickView(product)}
                  >
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-stone-950">
                    {formatPrice(product.price, currency)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-stone-400 line-through">
                      {formatPrice(product.originalPrice, currency)}
                    </span>
                  )}
                  {product.discountPercent > 0 && (
                    <span className="text-[11px] font-bold text-rose-600">
                      ({product.discountPercent}% OFF)
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onAddToCart(product, product.sizes[0] || 'Standard')}
                  className="w-full py-2 bg-stone-900 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Move to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
