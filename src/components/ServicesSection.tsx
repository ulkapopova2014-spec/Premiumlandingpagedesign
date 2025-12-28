import { motion } from 'motion/react';
import { CategorySelector } from './CategorySelector';
import { PriceDisplay } from './PriceDisplay';
import { Droplets, Sparkles, Shield, Wind } from 'lucide-react';

interface ServicesSectionProps {
  selectedCategory: number;
  onCategoryChange: (category: number) => void;
}

const washServices = [
  {
    id: 1,
    name: '2-х фазная мойка',
    description: 'Глубокая очистка кузова с использованием профессиональной химии',
    prices: [595, 640, 685, 720, 1150],
    icon: Droplets,
  },
  {
    id: 2,
    name: '3-х фазная мойка',
    description: 'Премиальная мойка с жидким воском для долговременной защиты',
    prices: [745, 790, 830, 865, 1370],
    icon: Sparkles,
  },
  {
    id: 3,
    name: 'Кварцевая мойка',
    description: 'Премиум блеск с эффектом керамического покрытия',
    prices: [1165, 1310, 1450, 1595, 2400],
    icon: Shield,
    highlight: true,
  },
  {
    id: 4,
    name: 'Турбосушка кузова',
    description: 'Идеальная сушка без разводов и микроцарапин',
    prices: [655, 725, 800, 870, 1310],
    icon: Wind,
  },
];

const packages = [
  {
    id: 1,
    name: 'Комплекс "Комфорт"',
    description: '2-х фазная мойка + Влажная уборка салона + Пылесос + Коврики (4 шт)',
    bonus: 'Чернение шин в подарок',
    prices: [1435, 1505, 1730, 1800, 2630],
    popular: true,
  },
  {
    id: 2,
    name: 'Комплекс "Комфорт Плюс"',
    description: 'Всё из "Комфорт" + Мойка стекол + Премиум химия',
    bonus: 'Полная забота о вашем автомобиле',
    prices: [1720, 1820, 2125, 2195, 3215],
    popular: true,
  },
];

export function ServicesSection({ selectedCategory, onCategoryChange }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12">
            Мойка кузова <span style={{ color: '#00F0FF' }}>и комплексы</span>
          </h2>
        </motion.div>

        <CategorySelector 
          selectedCategory={selectedCategory} 
          onCategoryChange={onCategoryChange} 
        />

        {/* Basic Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {washServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="glass rounded-2xl p-6 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <Icon size={32} color="#00F0FF" />
                  <h3 className="ml-3" style={{ fontSize: '1.25rem' }}>{service.name}</h3>
                </div>
                <p className="mb-6 text-sm">{service.description}</p>
                <div className="text-2xl">
                  <PriceDisplay 
                    price={service.prices[selectedCategory - 1]} 
                    highlight={service.highlight}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Package Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center mb-8" style={{ color: '#00F0FF' }}>
            Хит продаж — Пакетные предложения
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="glass rounded-2xl p-8 border-2 border-[#00F0FF]"
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {pkg.popular && (
                <div className="inline-block px-4 py-1 rounded-full accent-gradient text-sm mb-4" style={{ fontWeight: '600' }}>
                  Популярное
                </div>
              )}
              <h3 className="mb-4">{pkg.name}</h3>
              <p className="mb-4">{pkg.description}</p>
              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={20} color="#00F0FF" />
                <span className="text-sm" style={{ color: '#00F0FF' }}>{pkg.bonus}</span>
              </div>
              <div className="text-3xl">
                <PriceDisplay 
                  price={pkg.prices[selectedCategory - 1]} 
                  highlight={true}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}