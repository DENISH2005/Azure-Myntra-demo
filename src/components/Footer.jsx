import { Heart, ShieldCheck, RotateCcw, Truck, Award, Mail } from 'lucide-react';

export default function Footer({ onNavigate, onSelectCategory }) {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Value Badges Banner */}
      <div className="border-b border-stone-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-rose-400 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  100% Authentic
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Direct artisan guild guarantees
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-rose-400 flex items-center justify-center shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  14-Day Returns
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Hassle-free reverse door pickup
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-rose-400 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Complimentary Transit
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  On all qualifying orders over $50
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-rose-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Secure Checkout
                </h4>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  256-Bit SSL encrypted payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-black tracking-widest text-white">
                MYRA
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
              <span className="text-xs text-stone-400 font-sans uppercase tracking-widest pl-1">
                Atelier & Studio
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              MYRA is a modern aesthetic fashion destination celebrating slow luxury, hand-embroidered artisanal silks, breathable organic linens, and contemporary wardrobe staples.
            </p>

            {/* Newsletter input */}
            <div className="pt-2">
              <div className="text-xs font-bold text-stone-200 uppercase tracking-wider mb-2">
                Join The Atelier Circle
              </div>
              <div className="flex max-w-sm gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-stone-900 border border-stone-800 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:border-rose-500"
                />
                <button
                  onClick={() => alert('Thank you for subscribing to MYRA Atelier!')}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </div>
              <span className="text-[10px] text-stone-500 mt-1 block">
                Receive private seasonal drop previews & styling notes.
              </span>
            </div>
          </div>

          {/* Online Shopping Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Online Shopping
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('womenswear');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modern Womenswear
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('menswear');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Menswear (T-Shirts & Street)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('footwear');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modern Footwear & Derbies
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('sports-footwear');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sports Footwear & Marathon
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('accessories');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Leather Totes & Eyewear
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onSelectCategory('beauty');
                    onNavigate('catalog');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Scents & Silk Self-Care
                </button>
              </li>
            </ul>
          </div>

          {/* Useful Links & Policy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Customer Policies
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  14-Day Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Shipping & Dispatch Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy & Data Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Philosophy & Story
                </button>
              </li>
            </ul>
          </div>

          {/* Concierge & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Studio Concierge
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <p>
                <strong className="text-stone-200">Email:</strong> care@myrastudio.com
              </p>
              <p>
                <strong className="text-stone-200">Phone:</strong> +1 (800) 419-MYRA
              </p>
              <p>
                <strong className="text-stone-200">Hours:</strong> 9:00 AM - 9:00 PM IST (Daily)
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 font-bold"
                >
                  <span>Learn more about us</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} MYRA Atelier & Studio Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for timeless aesthetics</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
