import { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Tag, 
  ShieldCheck, 
  ArrowRight, 
  Truck, 
  Sparkles,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatPrice } from '../utils/format';
import { AVAILABLE_COUPONS } from '../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderSuccess,
}) {
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart');

  // Customer shipping details for the simulated order
  const [shippingForm, setShippingForm] = useState({
    name: 'Ananya Sharma',
    street: '42, Boulevard Garden Residences, Indiranagar',
    city: 'Bengaluru, Karnataka',
    pincode: '560038',
    phone: '+91 98765 43210'
  });

  if (!isOpen) return null;

  // Pricing calculations
  const totalMRP = cartItems.reduce(
    (sum, item) => sum + item.product.originalPrice * item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const discountOnMRP = totalMRP - subtotal;

  let couponDiscount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      couponDiscount = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.flatDiscount) {
      couponDiscount = Math.min(appliedCoupon.flatDiscount, subtotal);
    }
  }

  const freeShippingThreshold = 50;
  const freeShippingUnlocked = subtotal >= freeShippingThreshold;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingFee = subtotal === 0 || freeShippingUnlocked ? 0 : 5;
  const finalTotal = Math.max(0, subtotal - couponDiscount + shippingFee);

  const handleApplyCoupon = (codeToApply) => {
    const code = (codeToApply || couponCodeInput).trim().toUpperCase();
    setCouponError('');
    const found = AVAILABLE_COUPONS.find((c) => c.code.toUpperCase() === code);
    if (!found) {
      setCouponError('Invalid coupon code. Try MYRA15 or FIRSTBUY.');
      return;
    }
    if (subtotal < found.minCartValue) {
      setCouponError(`Minimum cart value for ${found.code} is $${found.minCartValue}`);
      return;
    }
    setAppliedCoupon(found);
    setCouponCodeInput('');
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
  };

  const handleProceedToShipping = () => {
    setCheckoutStep('shipping');
  };

  const handleFinalPlaceOrder = () => {
    setIsCheckingOut(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      const newOrder = {
        orderId: `MYRA-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        }),
        items: [...cartItems],
        subtotal,
        discount: discountOnMRP,
        couponDiscount,
        shipping: shippingFee,
        total: finalTotal,
        paymentMethod: 'Cash on Delivery / UPI Verified',
        estimatedDelivery: '3 Business Days (Express Doorstep)',
        shippingAddress: { ...shippingForm }
      };

      onOrderSuccess(newOrder);
      onClearCart();
      setIsCheckingOut(false);
      setCheckoutStep('cart');
      onClose();
    }, 750);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50/80">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose-600" />
            <h2 className="text-base sm:text-lg font-serif font-bold text-stone-900">
              {checkoutStep === 'cart' ? 'Shopping Bag' : 'Shipping & Payment'}
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
            </span>
          </div>

          <div className="flex items-center gap-2">
            {checkoutStep === 'shipping' && (
              <button
                onClick={() => setCheckoutStep('cart')}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900 px-2 py-1 rounded-md cursor-pointer"
              >
                Back to Cart
              </button>
            )}
            <button
              id="close-cart-drawer-btn"
              onClick={onClose}
              className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Shipping Progress Indicator */}
        {cartItems.length > 0 && checkoutStep === 'cart' && (
          <div className="bg-rose-50/80 px-4 py-2.5 border-b border-rose-100 text-xs">
            {freeShippingUnlocked ? (
              <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>You've unlocked <strong>FREE Express Shipping!</strong></span>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between text-stone-700 mb-1">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-rose-600" />
                    <span>Add {formatPrice(amountToFreeShipping, currency)} more for <strong>FREE Delivery</strong></span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {Math.round((subtotal / freeShippingThreshold) * 100)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-600 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-18 h-18 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                <ShoppingBag className="w-9 h-9" />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-900">
                Your Shopping Bag is Empty
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mb-6">
                Explore our festive edit and trending styles to add pieces to your wardrobe.
              </p>
              <button
                id="cart-empty-browse-btn"
                onClick={onClose}
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
              >
                Start Shopping Now
              </button>
            </div>
          ) : checkoutStep === 'cart' ? (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 p-3 rounded-2xl border border-stone-200 bg-white hover:border-stone-300 transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-[10px] uppercase font-bold text-stone-500 tracking-wider">
                            {item.product.brand}
                          </span>
                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                            title="Remove from bag"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="text-xs font-semibold text-stone-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] font-semibold bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md">
                            Size: {item.selectedSize}
                          </span>
                        </div>
                      </div>

                      {/* Price & Quantity Controls */}
                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-stone-100">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xs sm:text-sm font-bold text-stone-900">
                            {formatPrice(item.product.price * item.quantity, currency)}
                          </span>
                          {item.product.originalPrice > item.product.price && (
                            <span className="text-[11px] text-stone-400 line-through">
                              {formatPrice(item.product.originalPrice * item.quantity, currency)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center border border-stone-200 rounded-lg overflow-hidden bg-stone-50">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-stone-200 text-stone-600 transition-colors cursor-pointer"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupons & Offers Section */}
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800 uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5 text-rose-600" />
                    <span>Apply Promo Coupon</span>
                  </div>
                  {appliedCoupon && (
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Coupon Active
                    </span>
                  )}
                </div>

                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-bold text-emerald-900">{appliedCoupon.code} Applied!</div>
                        <div className="text-[11px] text-emerald-700">
                          You saved {formatPrice(couponDiscount, currency)} extra
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleRemoveCoupon}
                      className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCodeInput}
                      onChange={(e) => setCouponCodeInput(e.target.value)}
                      placeholder="Enter MYRA15 or FIRSTBUY"
                      className="flex-1 uppercase px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-xs font-mono text-stone-800 focus:outline-none focus:border-rose-500"
                    />
                    <button
                      id="apply-coupon-btn"
                      onClick={() => handleApplyCoupon()}
                      className="px-4 py-1.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}

                {couponError && (
                  <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>
                )}

                {/* Available Quick Coupon Chips */}
                {!appliedCoupon && (
                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {AVAILABLE_COUPONS.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => handleApplyCoupon(c.code)}
                        className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 cursor-pointer transition-colors"
                      >
                        {c.code} ({c.discountPercent ? `${c.discountPercent}% OFF` : `$${c.flatDiscount} OFF`})
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Breakdown Bill Details */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
                <div className="font-bold uppercase tracking-wider text-stone-500 text-[11px] mb-1">
                  Price Breakdown
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Total MRP</span>
                  <span className="font-mono">{formatPrice(totalMRP, currency)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Discount on MRP</span>
                  <span className="font-mono">-{formatPrice(discountOnMRP, currency)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon Savings ({appliedCoupon.code})</span>
                    <span className="font-mono">-{formatPrice(couponDiscount, currency)}</span>
                  </div>
                )}
                <div className="flex justify-between text-stone-600">
                  <span>Shipping & Handling</span>
                  <span>
                    {shippingFee === 0 ? (
                      <strong className="text-emerald-700 uppercase text-[11px]">Free</strong>
                    ) : (
                      formatPrice(shippingFee, currency)
                    )}
                  </span>
                </div>

                <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline text-sm font-bold text-stone-900">
                  <span>Total Payable</span>
                  <span className="text-base text-rose-700 font-mono">
                    {formatPrice(finalTotal, currency)}
                  </span>
                </div>
              </div>
            </>
          ) : (
            /* Shipping Step */
            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-rose-600" />
                  <span>Delivery Address</span>
                </div>

                <div className="space-y-2">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600">Full Name</label>
                    <input
                      type="text"
                      value={shippingForm.name}
                      onChange={(e) => setShippingForm({ ...shippingForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-600">Street & Apartment</label>
                    <input
                      type="text"
                      value={shippingForm.street}
                      onChange={(e) => setShippingForm({ ...shippingForm, street: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600">City & State</label>
                      <input
                        type="text"
                        value={shippingForm.city}
                        onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600">Pincode / Postal</label>
                      <input
                        type="text"
                        value={shippingForm.pincode}
                        onChange={(e) => setShippingForm({ ...shippingForm, pincode: e.target.value })}
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-600">Mobile Number for Updates</label>
                    <input
                      type="text"
                      value={shippingForm.phone}
                      onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Select Payment Option
                </div>

                <div className="space-y-1.5">
                  <label className="flex items-center justify-between p-2.5 rounded-xl border border-rose-400 bg-rose-50/50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment-method" defaultChecked className="accent-rose-600" />
                      <span className="font-bold text-stone-900">Pay on Delivery (Cash / UPI at Doorstep)</span>
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-1.5 py-0.5 rounded-xs">
                      Zero Surcharge
                    </span>
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="payment-method" className="accent-rose-600" />
                      <span className="text-stone-700 font-medium">Credit / Debit Card / Net Banking</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Final Order Price Reminder */}
              <div className="p-3 rounded-xl bg-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700">Total Payable Amount:</span>
                <span className="text-base font-bold text-stone-950 font-mono">
                  {formatPrice(finalTotal, currency)}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Drawer Footer with Action Button */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-white space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-stone-500 font-medium">Total Amount</span>
              <span className="text-lg font-bold text-stone-900 font-mono">
                {formatPrice(finalTotal, currency)}
              </span>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                id="cart-proceed-checkout-btn"
                onClick={handleProceedToShipping}
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="cart-place-order-btn"
                onClick={handleFinalPlaceOrder}
                disabled={isCheckingOut}
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-rose-300" />
                    <span>Confirm & Place Order</span>
                  </>
                )}
              </button>
            )}

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Safe & Secure 256-Bit SSL Encrypted Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
