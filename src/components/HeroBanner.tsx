import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Truck, RotateCcw, ShieldCheck, Clock } from 'lucide-react';
import { CategoryId } from '../types';

interface HeroBannerProps {
  onShopNow: (category?: CategoryId) => void;
}

export default function HeroBanner({ onShopNow }: HeroBannerProps) {
  // Countdown timer for simulated flash deal
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 38,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-stone-100">
      {/* Editorial Main Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 text-rose-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>THE GRAND FESTIVE & AUTUMN COUTURE '26</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.1]">
              Elevate your everyday <span className="italic font-normal text-rose-700">silhouette</span> with timeless grace.
            </h1>

            <p className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Explore meticulously curated luxury textiles, handcrafted raw silk kurtas, 
              European washed linens, and quiet-luxury accessories tailored for modern living.
            </p>

            {/* Flash Deal Countdown Bar */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-wrap items-center justify-between gap-3 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    Flash Sale Ends In
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Flat 50% Off On Curated Festive Picks
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-stone-900">
                <span className="bg-stone-900 text-white px-2 py-1 rounded-md">
                  {String(timeLeft.hours).padStart(2, '0')}h
                </span>
                <span>:</span>
                <span className="bg-stone-900 text-white px-2 py-1 rounded-md">
                  {String(timeLeft.minutes).padStart(2, '0')}m
                </span>
                <span>:</span>
                <span className="bg-stone-900 text-white px-2 py-1 rounded-md">
                  {String(timeLeft.seconds).padStart(2, '0')}s
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-shop-women"
                onClick={() => onShopNow('women')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Shop Women's Edit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-shop-men"
                onClick={() => onShopNow('men')}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold text-sm shadow-sm transition-all cursor-pointer"
              >
                <span>Shop Men's Collection</span>
              </button>

              <button
                id="hero-browse-all"
                onClick={() => onShopNow('all')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 rounded-xl font-semibold text-sm transition-all cursor-pointer"
              >
                <span>View Full Catalog</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
                  alt="MYRA Heritage Collection"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold">
                    The Heritage Edition
                  </span>
                  <p className="text-xl font-serif font-bold">
                    Pure Silk Chanderi Weaves
                  </p>
                  <p className="text-xs text-stone-300 mt-1">
                    Up to 50% Off • Handcrafted with Gold Zari
                  </p>
                </div>
              </div>

              {/* Floating Floating Micro Card 1 */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=300&q=80"
                    alt="Leather Tote"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-rose-600 tracking-wider">Top Rated 4.9 ★</div>
                  <div className="text-xs font-bold text-stone-900">Handcrafted Leather Tote</div>
                  <div className="text-xs text-stone-500 font-medium">Flat 49% Off Today</div>
                </div>
              </div>

              {/* Floating Floating Micro Card 2 */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-stone-200/80 items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-stone-800">45,000+ Happy Shoppers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Trust Bar */}
        <div className="mt-10 pt-8 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">100% Authentic</div>
              <div className="text-[11px] text-stone-500">Curated certified brands</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">30-Day Easy Returns</div>
              <div className="text-[11px] text-stone-500">Free doorstep pickup</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">Express Delivery</div>
              <div className="text-[11px] text-stone-500">Dispatched in 24 hours</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-stone-900">Luxury Packaging</div>
              <div className="text-[11px] text-stone-500">Gift-ready premium boxes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
