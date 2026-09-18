import { Sparkles, ShieldCheck, HeartHandshake, Award, Truck, Recycle, Users, ArrowRight } from 'lucide-react';

export default function AboutUs({ onExploreCatalog }) {
  const highlights = [
    {
      icon: Award,
      title: 'Artisanal Authenticity',
      desc: 'Every garment and accessory in our collection is sourced directly from certified master weavers, generational silversmiths, and ethical tanneries.'
    },
    {
      icon: Recycle,
      title: 'Conscious Craft',
      desc: 'We prioritize natural organic fibers, AZO-free botanical dyes, and low-waste small-batch production runs across our partnered workshops.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Quality',
      desc: 'Rigorous 18-point craftsmanship checks before dispatch ensure perfect seams, flawless finishes, and true-to-life color integrity.'
    },
    {
      icon: Truck,
      title: 'Swift, Carbon-Offset Delivery',
      desc: 'Fast, secure doorstep transit in 100% biodegradable FSC-certified mailers with seamless live tracking from atelier to closet.'
    }
  ];

  const teamValues = [
    { number: '140+', label: 'Master Artisans & Guilds' },
    { number: '98.6%', label: 'Satisfied Customer Rating' },
    { number: '100%', label: 'Cruelty-Free Materials' },
    { number: '24/7', label: 'Stylist Concierge Care' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Story & Philosophy</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-950 tracking-tight leading-tight">
          Where Heritage Craftsmanship Meets Modern Aesthetic Living
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Founded in 2021, MYRA was created to redefine contemporary fashion. We celebrate timeless silhouettes, mindful luxury, and artisanal Indian textiles reimagined for modern wardrobes worldwide.
        </p>
      </div>

      {/* Featured Atmosphere Image */}
      <div className="mt-10 rounded-3xl overflow-hidden shadow-lg border border-stone-200 relative aspect-[16/8] sm:aspect-[21/9]">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
          alt="MYRA Studio Atelier"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/40 flex items-center justify-center p-6 text-center">
          <div className="max-w-xl text-white space-y-2">
            <h2 className="text-xl sm:text-3xl font-serif font-bold">
              "Elegance is not about being noticed, it's about being remembered."
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 font-light">
              — The MYRA Design Studio Manifesto
            </p>
          </div>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12">
        {teamValues.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-stone-200/80 text-center shadow-xs"
          >
            <div className="text-2xl sm:text-3xl font-serif font-bold text-rose-600 mb-1">
              {stat.number}
            </div>
            <div className="text-xs font-semibold text-stone-600 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Pillars of Excellence */}
      <div className="mt-16 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Our Commitments to You
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-2">
            Elevating your shopping experience with craftsmanship, ethics, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs hover:border-rose-200 transition-colors flex gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Bar */}
      <div className="mt-16 bg-stone-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold">
          Ready to experience modern refined style?
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
          Explore our seasonal drops, handcrafted silks, relaxed linens, and artisanal accessories curated for everyday elegance.
        </p>
        <div className="pt-2">
          <button
            onClick={onExploreCatalog}
            className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Browse The Curated Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
