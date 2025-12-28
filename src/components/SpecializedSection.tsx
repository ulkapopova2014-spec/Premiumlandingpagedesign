import { motion } from 'motion/react';
import { PriceDisplay } from './PriceDisplay';
import { Wrench, Snowflake, Bike, Package, Droplets, Eraser } from 'lucide-react';

const technicalServices = [
  {
    category: 'Техническая мойка',
    icon: Wrench,
    services: [
      { name: 'Мойка двигателя с диэлектрическим гелем + консервация', price: 2040 },
      { name: 'Простая мойка двигателя (без гарантии запуска)', price: 720 },
      { name: 'Мойка радиатора', price: 440 },
      { name: 'Мойка днища без химии', priceRange: '725 — 1 200 ₽' },
      { name: 'Мойка днища с химией', priceRange: '1 020 — 1 630 ₽' },
    ],
  },
  {
    category: 'Зима / Сезон',
    icon: Snowflake,
    services: [
      { name: 'Отогрев автомобиля', price: 1190, note: 'за час' },
      { name: 'Простой в боксе (после мойки >20 мин)', price: 1190 },
      { name: 'Мойка арок от льда', price: 295 },
    ],
  },
  {
    category: 'Мойка стекол',
    icon: Droplets,
    services: [
      { name: 'Лобовое стекло', priceRange: '105 — 130 ₽' },
      { name: 'Боковые и заднее стекло', priceRange: '130 — 295 ₽' },
      { name: 'Лобовое + 2 боковых', priceRange: '160 — 295 ₽' },
    ],
  },
  {
    category: 'Удаление загрязнений',
    icon: Eraser,
    services: [
      { name: 'Удаление наклеек', price: 220, note: 'за элемент' },
      { name: 'Удаление почек деревьев', price: 510, note: 'за элемент' },
      { name: 'Удаление следов насекомых', price: 365, note: 'за элемент' },
      { name: 'Удаление битума', price: 220, note: 'за элемент' },
    ],
  },
  {
    category: 'Другая техника',
    icon: Bike,
    services: [
      { name: 'Мотоцикл', price: 440 },
      { name: 'Квадроцикл', price: 725 },
      { name: 'Велосипед', price: 220 },
      { name: 'Прицеп (открытый)', price: 295 },
      { name: 'Прицеп (тент)', price: 510 },
    ],
  },
  {
    category: 'Мелочи',
    icon: Package,
    services: [
      { name: 'Мойка ковриков (резина)', price: 30, note: 'за шт' },
      { name: 'Стирка текстильных ковриков', price: 70, note: 'за шт' },
      { name: 'Обработка уплотнителей силиконом', price: 70, note: 'за проем' },
      { name: 'Обработка замков', price: 70, note: 'за шт' },
    ],
  },
];

export function SpecializedSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#020B1C] to-[#0F3460]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">
            Специализированные <span style={{ color: '#00F0FF' }}>услуги</span>
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Технический блок для продвинутых автовладельцев
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalServices.map((group, groupIndex) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={groupIndex}
                className="glass rounded-2xl p-6 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  <Icon size={32} color="#00F0FF" />
                  <h3 className="ml-3" style={{ fontSize: '1.5rem' }}>{group.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {group.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-start pb-4 border-b border-[#0F3460] last:border-0"
                    >
                      <div className="flex-1 pr-4">
                        <div className="mb-1">{service.name}</div>
                        {service.note && (
                          <div className="text-sm" style={{ color: '#E0E0E0' }}>
                            {service.note}
                          </div>
                        )}
                      </div>
                      <div className="text-lg whitespace-nowrap">
                        {service.price ? (
                          <PriceDisplay price={service.price} />
                        ) : (
                          <span style={{ color: '#00F0FF' }}>{service.priceRange}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}