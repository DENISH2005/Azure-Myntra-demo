import { Sparkles, ShieldCheck, HeartHandshake, Leaf, Award, ArrowRight } from 'lucide-react';

interface AboutUsProps {
  onExploreCatalog: () => void;
}

export default function AboutUs({ onExploreCatalog }: AboutUsProps) {
  return (
    <div className="bg-[#fafaf9] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Hero Narrative */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Our Story & Philosophy</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Curating India's and the world's most <span className="italic font-normal text-rose-700">inspiring silhouettes</span>.
          </h1>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Inspired by the vibrancy of Indian textiles and the minimalism of European ateliers, 
            MYRA was founded to bridge the gap between runway aesthetics and accessible everyday luxury.
          </p>
        </div>

        {/* Editorial Image & Mission Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80"
                alt="Atelier workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-stone-200 hidden sm:block max-w-xs">
              <span className="text-[11px] font-bold uppercase tracking-widest text-rose-600">
                Ethical Sourcing
              </span>
              <p className="text-xs font-semibold text-stone-800 mt-1">
                "Fashion is an emotional canvas. Every garment carries the heartbeat of the artisan who tailored it."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              The MYRA Difference: Where Craftsmanship Meets Culture
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              We reject fleeting fast-fashion disposable trends. Instead, we partner with certified master weavers in Chanderi, Varanasi, and Maheshwar, as well as forward-thinking sustainable denim mills and European leather workshops.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Whether you are dressing for a festive wedding, a boardroom presentation, or an effortless Sunday brunch, our catalog is curated with strict criteria: breathability, timeless tailoring, and enduring quality.
            </p>

            <div className="pt-2">
              <button
                id="about-explore-btn"
                onClick={onExploreCatalog}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group"
              >
                <span>Discover Our Collections</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-stone-900">
              Our 4 Customer Guarantees
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Built on transparency, rigorous authenticity audits, and customer-first service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">100% Verified Genuine</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Zero tolerance for replicas. Every piece is sourced directly from brand creators or authorized ateliers with verified provenance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">30-Day Doorstep Returns</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Try at home with confidence. If the fit isn't immaculate, our courier picks up from your doorstep with instant zero-fee refunds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">Eco-Conscious Packaging</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                100% plastic-free mailers, recycled FSC-certified garment boxes, and natural vegetable inks that protect the planet.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-stone-900">24/7 Styling Concierge</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our in-house fashion advisors assist with sizing recommendations, outfit coordination, and order inquiries around the clock.
              </p>
            </div>
          </div>
        </div>

        {/* Numbers & Impact */}
        <div className="p-8 sm:p-12 rounded-3xl bg-stone-900 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-rose-400">
                2.5M+
              </div>
              <div className="text-xs font-semibold text-stone-300 mt-1 uppercase tracking-wider">
                Happy Customers
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-rose-400">
                450+
              </div>
              <div className="text-xs font-semibold text-stone-300 mt-1 uppercase tracking-wider">
                Curated Brands
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-rose-400">
                18,000+
              </div>
              <div className="text-xs font-semibold text-stone-300 mt-1 uppercase tracking-wider">
                Pincodes Covered
              </div>
            </div>
            <div className="p-4">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-rose-400">
                4.8 / 5
              </div>
              <div className="text-xs font-semibold text-stone-300 mt-1 uppercase tracking-wider">
                Average Trust Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
