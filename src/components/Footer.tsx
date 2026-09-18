import React, { useState } from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Mail, 
  Check, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Sparkles,
  Smartphone
} from 'lucide-react';
import { NavView, CategoryId } from '../types';

interface FooterProps {
  onNavigate: (view: NavView, category?: CategoryId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Guarantee Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-stone-800">
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                100% ORIGINAL guarantee
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                All products are sourced directly from verified ateliers and brand houses.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Return within 30 days
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Free doorstep returns and instant exchange across all orders.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-800/40 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                Artisanal Assurance
              </h4>
              <p className="text-xs text-stone-400 mt-0.5">
                Handcrafted touches, breathable fibers, and eco-friendly mailers.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
          {/* Col 1: Shop */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Online Shopping
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'women')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Women's Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'men')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Men's Fashion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'accessories')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Accessories & Bags
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'footwear')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Footwear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'beauty')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Beauty & Fragrances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', 'all')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Special Offers & Festive Picks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Customer Policies
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  30-Day Return Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Shipping & Tracking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Privacy & Cookies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  FAQ & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: About MYRA */}
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Experience MYRA
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  About Our Brand
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Artisanal Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Ethical Sourcing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-rose-400 transition-colors cursor-pointer"
                >
                  Editorial Lookbook
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4 & 5: Newsletter & App Experience */}
          <div className="col-span-2 space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Stay in the Couture Loop
            </h5>
            <p className="text-stone-400 text-xs leading-relaxed">
              Subscribe for exclusive seasonal lookbooks, early VIP access to flash sales, and private couture drops.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-3.5 py-2.5 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-stone-500 text-xs focus:outline-none focus:border-rose-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <p className="text-emerald-400 text-xs font-medium">
                  ✓ Welcome to the MYRA Club! Check your inbox for $20 off code.
                </p>
              )}
            </form>

            <div className="pt-2 flex items-center gap-4 text-stone-400">
              <span className="text-[11px] font-semibold text-stone-500 uppercase">Connect:</span>
              <a href="#instagram" className="hover:text-rose-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#facebook" className="hover:text-rose-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#twitter" className="hover:text-rose-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="hover:text-rose-400 transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-white tracking-widest uppercase">
              MYRA.
            </span>
            <span>© 2026 MYRA Fashion & Lifestyle Private Limited. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('terms')} className="hover:text-stone-400 cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-stone-400 cursor-pointer">
              Terms of Use
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('terms')} className="hover:text-stone-400 cursor-pointer">
              Security
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
