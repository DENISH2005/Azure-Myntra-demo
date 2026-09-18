import { CategoryId } from '../types';

interface CategoryPillsProps {
  selectedCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
}

export default function CategoryPills({
  selectedCategory,
  onSelectCategory,
}: CategoryPillsProps) {
  const categories = [
    {
      id: 'all' as CategoryId,
      name: 'All Categories',
      subtitle: 'Full Collection',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'women' as CategoryId,
      name: 'Women',
      subtitle: 'Kurtas & Dresses',
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'men' as CategoryId,
      name: 'Men',
      subtitle: 'Linen & Blousons',
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'accessories' as CategoryId,
      name: 'Accessories',
      subtitle: 'Totes & Eyewear',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'footwear' as CategoryId,
      name: 'Footwear',
      subtitle: 'Sneakers & Heels',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 'beauty' as CategoryId,
      name: 'Beauty',
      subtitle: 'Perfumes & Silk Care',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
            Shop by Category
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Curated aesthetics across fine apparel, handcrafted leather, and scents
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`cat-pill-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className={`group flex flex-col items-center text-center p-2 sm:p-3 rounded-2xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-rose-50/80 ring-2 ring-rose-500 shadow-sm'
                  : 'bg-white hover:bg-stone-50 border border-stone-200/80 hover:border-stone-300'
              }`}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2 bg-stone-100 shadow-xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
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
              <span className="text-[10px] text-stone-400 hidden sm:block truncate max-w-full">
                {cat.subtitle}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
