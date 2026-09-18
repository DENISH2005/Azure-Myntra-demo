import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  ShoppingBag, 
  Star, 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { Product } from '../types';
import { formatPrice, Currency } from '../utils/format';

interface ProductDetailModalProps {
  product: Product | null;
  currency: Currency;
  isWishlisted: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function ProductDetailModal({
  product,
  currency,
  isWishlisted,
  onClose,
  onToggleWishlist,
  onAddToCart,
}: ProductDetailModalProps) {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || '');
  const [pincode, setPincode] = useState<string>('');
  const [pincodeStatus, setPincodeStatus] = useState<'idle' | 'checking' | 'verified'>('idle');
  const [addedNotice, setAddedNotice] = useState(false);

  const checkPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length < 3) return;
    setPincodeStatus('checking');
    setTimeout(() => {
      setPincodeStatus('verified');
    }, 450);
  };

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          id="close-detail-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-100/90 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          title="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Gallery Section */}
          <div className="md:col-span-6 p-4 sm:p-6 bg-stone-50 flex flex-col items-center">
            {/* Main Featured Image */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 shadow-xs">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
              {product.tags && product.tags.length > 0 && (
                <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {product.tags[0]}
                </div>
              )}
            </div>

            {/* Thumbnail Carousel */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-2 mt-3 overflow-x-auto w-full py-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                      activeImage === img ? 'border-rose-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Details Section */}
          <div className="md:col-span-6 p-5 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Brand & Title */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-500">
                  {product.brand}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 mt-0.5">
                  {product.name}
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <div className="inline-flex items-center gap-1 bg-stone-100 px-2.5 py-1 rounded-md text-xs font-bold text-stone-800">
                    <span>{product.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-stone-400 font-normal border-l border-stone-300 pl-1.5 ml-0.5">
                      {product.reviewCount} verified reviews
                    </span>
                  </div>
                  <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> In Stock & Ready to Ship
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div className="border-t border-b border-stone-200/80 py-3 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-stone-950 font-mono">
                  {formatPrice(product.price, currency)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-stone-400 line-through">
                    {formatPrice(product.originalPrice, currency)}
                  </span>
                )}
                {product.discountPercent > 0 && (
                  <span className="text-xs font-bold text-rose-600 px-2 py-0.5 rounded-full bg-rose-50">
                    {product.discountPercent}% OFF
                  </span>
                )}
                <span className="text-[11px] text-stone-400 ml-auto">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Select Size:
                  </span>
                  <span className="text-[11px] text-stone-500 hover:text-rose-600 underline cursor-pointer">
                    Size Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`min-w-[44px] h-10 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                          : 'bg-white text-stone-700 border-stone-300 hover:border-stone-500'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                    Available Tone: <span className="font-semibold text-stone-900">{selectedColor}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                          selectedColor === c.name ? 'border-rose-600 scale-110' : 'border-stone-200'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Live Delivery Pincode Checker */}
              <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Check Delivery Date & Services</span>
                </div>

                <form onSubmit={checkPincode} className="flex gap-2">
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode / Zip"
                    className="flex-1 px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-rose-500"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Check
                  </button>
                </form>

                {pincodeStatus === 'verified' && (
                  <div className="mt-2.5 pt-2 border-t border-stone-200/70 text-xs text-stone-700 space-y-1 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Delivery in 2 - 3 Days (Express Available)</span>
                    </div>
                    <div className="text-[11px] text-stone-500 flex items-center gap-2">
                      <span>• Free shipping on this item</span>
                      <span>• Cash on Delivery available</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Fabric & Product Specifications */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-2 border-t border-stone-100">
                <div className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-1">
                  Product Details & Fabric
                </div>
                <p className="text-stone-600 leading-relaxed text-xs">
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-2 text-[11px]">
                  <div><strong className="text-stone-700">Fabric:</strong> {product.details.fabric}</div>
                  <div><strong className="text-stone-700">Fit:</strong> {product.details.fit}</div>
                  <div><strong className="text-stone-700">Care:</strong> {product.details.care}</div>
                  <div><strong className="text-stone-700">Origin:</strong> {product.details.origin}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Add to Bag & Wishlist */}
            <div className="pt-4 border-t border-stone-200 flex items-center gap-3">
              <button
                id="modal-add-to-bag-btn"
                onClick={handleAdd}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
                  addedNotice
                    ? 'bg-emerald-600 text-white'
                    : 'bg-rose-600 hover:bg-rose-700 text-white'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{addedNotice ? 'Added to Bag!' : `Add to Bag (${selectedSize})`}</span>
              </button>

              <button
                id="modal-wishlist-toggle-btn"
                onClick={() => onToggleWishlist(product)}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  isWishlisted
                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                    : 'bg-white border-stone-300 text-stone-700 hover:text-rose-600 hover:border-rose-300'
                }`}
                title={isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
