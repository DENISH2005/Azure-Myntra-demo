export default function CategoryPills({
  selectedCategory,
  onSelectCategory,
}) {
  const categories = [
    {
      id: 'all',
      name: 'All Collections',
      subtitle: 'Complete Atelier',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'womenswear',
      name: 'Womenswear',
      subtitle: 'Blazers & Silks',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'menswear',
      name: 'Menswear',
      subtitle: 'T-Shirts & Street',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'footwear',
      name: 'Footwear',
      subtitle: 'Derbies & Loafers',
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'sports-footwear',
      name: 'Sports Footwear',
      subtitle: 'Pro Runners & Trainers',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      subtitle: 'Leather Totes & Shades',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'beauty',
      name: 'Beauty',
      subtitle: 'Scents & Silk Care',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const isCatActive = (catId) => {
    if (selectedCategory === catId) return true;
    if (catId === 'womenswear' && selectedCategory === 'women') return true;
    if (catId === 'menswear' && selectedCategory === 'men') return true;
    if (catId === 'footwear' && selectedCategory === 'footware') return true;
    if (catId === 'sports-footwear' && selectedCategory === 'sports-footware') return true;
    return false;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Explore Modern Collections
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Contemporary silhouettes across modern womenswear, heavyweight tees, crafted footwear & pro sports runners
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const isActive = isCatActive(cat.id);
          return (
            <button
              key={cat.id}
              id={`cat-pill-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`group flex flex-col items-center text-center p-2.5 sm:p-3 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-rose-50/90 ring-2 ring-rose-500 shadow-sm'
                  : 'bg-white hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300'
              }`}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2 bg-stone-100 shadow-xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {isActive && (
                  <div className="absolute inset-0 bg-rose-600/20 mix-blend-multiply" />
                )}
              </div>
              <span className={`text-xs sm:text-sm font-bold truncate max-w-full ${
                isActive ? 'text-rose-700' : 'text-stone-800 group-hover:text-stone-950'
              }`}>
                {cat.name}
              </span>
              <span className="text-[10px] text-stone-400 truncate max-w-full">
                {cat.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
