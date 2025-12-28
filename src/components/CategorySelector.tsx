import { motion } from 'motion/react';

interface CategorySelectorProps {
  selectedCategory: number;
  onCategoryChange: (category: number) => void;
}

const categories = [
  { id: 1, name: 'Категория 1', desc: 'Mini Cooper, Audi A1, Ока' },
  { id: 2, name: 'Категория 2', desc: 'BMW 3/5, Camry, Mercedes E' },
  { id: 3, name: 'Категория 3', desc: 'RAV4, Lexus RX, BMW X3' },
  { id: 4, name: 'Категория 4', desc: 'Land Cruiser, X5/X6, Cayenne' },
  { id: 5, name: 'Категория 5', desc: 'Sequoia, V-class, Tundra' },
];

export function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="mb-12">
      <h3 className="text-center mb-6" style={{ color: '#00F0FF' }}>
        Выберите категорию автомобиля
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`p-4 rounded-xl border transition-all ${
              selectedCategory === category.id
                ? 'border-[#00F0FF] bg-[#0F3460]'
                : 'border-[#0F3460] bg-transparent'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-lg" style={{ fontWeight: selectedCategory === category.id ? '700' : '600' }}>
              {category.name}
            </div>
            <div className="text-sm mt-1" style={{ color: '#E0E0E0', fontSize: '0.875rem' }}>
              {category.desc}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
