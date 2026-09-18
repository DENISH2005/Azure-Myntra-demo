import { CheckCircle2, MapPin, Truck, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function OrderConfirmationModal({
  order,
  currency,
  onClose,
  onContinueShopping,
}) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-stone-200 animate-in zoom-in-95 duration-200">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full">
            Order Confirmed & Placed
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-950">
            Thank you for shopping with MYRA!
          </h2>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Your package is being carefully prepared at our artisanal fulfillment center. An SMS confirmation has been sent to {order.shippingAddress.phone}.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="my-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <span className="text-[10px] text-stone-400 uppercase font-semibold">Order ID</span>
              <div className="font-mono font-bold text-stone-900">{order.orderId}</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-stone-400 uppercase font-semibold">Date</span>
              <div className="font-semibold text-stone-800">{order.date}</div>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-stone-700">
              <Truck className="w-4 h-4 text-rose-600 shrink-0" />
              <span><strong>Estimated Delivery:</strong> {order.estimatedDelivery}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
              <span className="truncate"><strong>Deliver to:</strong> {order.shippingAddress.name}, {order.shippingAddress.city}</span>
            </div>
          </div>

          {/* Ordered items miniature preview */}
          <div className="pt-2 border-t border-stone-200">
            <span className="text-[10px] uppercase font-bold text-stone-400 block mb-2">
              Package Items ({order.items.length})
            </span>
            <div className="flex gap-2 overflow-x-auto py-1">
              {order.items.map((item) => (
                <div key={item.id} className="w-12 h-14 rounded-lg overflow-hidden shrink-0 border border-stone-200 relative group">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-stone-900 text-white text-[9px] font-bold px-1 rounded-tl-xs">
                    x{item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-stone-200 flex justify-between items-baseline font-bold">
            <span className="text-stone-800">Total Paid (COD):</span>
            <span className="text-base text-rose-700 font-mono">
              {formatPrice(order.total, currency)}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            id="continue-shopping-btn"
            onClick={onContinueShopping}
            className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
}
