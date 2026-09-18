import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroBanner({ onShopNow, onExplore, onSelectCategory }) {
  const slides = [
    {
      id: 1,
      tag: 'Modern Womenswear Drop',
      title: 'Sculptural Tailoring & Fluid Silks',
      subtitle: 'Double-breasted oversized wool blazers, asymmetric ribbed knit midi dresses, and crisp Scandinavian poplin co-ord sets.',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1600&q=80',
      cta: 'Shop Modern Womenswear',
      category: 'womenswear',
      accent: 'from-amber-950/85 via-stone-950/65 to-transparent'
    },
    {
      id: 2,
      tag: 'Modern Menswear & Streetwear',
      title: '280 GSM Heavyweight Tees & Boxy Street Cuts',
      subtitle: 'Drop-shoulder organic cotton silhouettes, mineral acid washes, tactile waffle knits, and relaxed double-pleated trousers.',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1600&q=80',
      cta: 'Explore Men’s T-Shirts & Fits',
      category: 'menswear',
      accent: 'from-slate-950/85 via-stone-950/65 to-transparent'
    },
    {
      id: 3,
      tag: 'Pro Performance Runners',
      title: 'Carbon-Plate Speed & Supercritical Foam',
      subtitle: 'Elite sub-2:30 marathon race shoes, GORE-TEX waterproof trail conquerors, and high-stack maximum cushion road trainers.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80',
      cta: 'Discover Sports Footwear',
      category: 'sports-footwear',
      accent: 'from-neutral-950/90 via-stone-950/70 to-transparent'
    },
    {
      id: 4,
      tag: 'Modern Footwear Studio',
      title: 'Chunky Commando Derbies & Italian Court Sneakers',
      subtitle: 'Substantial lug soles, hand-buffed calfskin leather, chisel-toe Chelsea boots, and architectural kitten-heel mules.',
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1600&q=80',
      cta: 'Shop Modern Footwear',
      category: 'footwear',
      accent: 'from-stone-950/85 via-stone-950/60 to-transparent'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  const handleAction = (cat) => {
    if (onShopNow) {
      onShopNow(cat);
    } else {
      if (onSelectCategory) onSelectCategory(cat);
      if (onExplore) onExplore();
    }
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-900 group">
        {/* Background slide image */}
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-1000 scale-105 group-hover:scale-100"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay for high-contrast legibility */}
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent}`} />

        {/* Content Box */}
        <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-end max-w-2xl text-white">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/30 backdrop-blur-md border border-rose-300/40 text-rose-200 text-xs font-bold w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-300" />
            <span>{slide.tag}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white mb-2 leading-tight">
            {slide.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-stone-200 line-clamp-2 sm:line-clamp-3 mb-6 max-w-xl font-normal leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="flex items-center gap-3">
            <button
              id={`hero-cta-btn-${slide.id}`}
              onClick={() => handleAction(slide.category)}
              className="px-5 sm:px-7 py-3 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
            >
              <span>{slide.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {onExplore && (
              <button
                onClick={onExplore}
                className="px-4 sm:px-5 py-3 bg-white/15 hover:bg-white/25 active:bg-white/30 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer"
              >
                Browse All
              </button>
            )}
          </div>
        </div>

        {/* Previous / Next Controls */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 flex items-center gap-2 z-10">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 px-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-rose-500' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
