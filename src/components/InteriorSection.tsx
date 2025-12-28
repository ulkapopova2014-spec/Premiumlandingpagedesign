import { motion } from 'motion/react';
import { PriceDisplay } from './PriceDisplay';
import { Armchair, Wind, Sparkles, Package, Gauge, Brush, Droplets, DoorClosed } from 'lucide-react';

interface InteriorSectionProps {
  selectedCategory: number;
}

const fullCleaningPrices = [17760, 19080, 19530, 21060, 25110];

// Regular Care Services
const regularCareServices = {
  wetCleaning: {
    full: [365, 365, 440, 440, 655],
    partial: [220, 220, 290, 290, 440],
    dashboard: [150, 150, 220, 220, 325],
    trunk: [220, 220, 220, 220, 320]
  },
  vacuum: {
    full: [220, 220, 295, 295, 440],
    partial: [150, 150, 220, 220, 330],
    trunk: [150, 150, 150, 150, 222]
  }
};

// Deep Cleaning Constructor - Group A: Textiles & Surfaces
const deepCleaningGroupA = [
  { 
    name: 'Потолок', 
    categoryPrices: [2760, 3420, 3750, 4080, 5940],
    icon: Sparkles,
    description: 'Деликатная очистка обшивки потолка (без снятия)'
  },
  { 
    name: 'Пол', 
    categoryPrices: [1440, 2100, 2220, 2760, 4080],
    icon: Sparkles,
    description: 'Глубокая экстракция грязи (снимаются только сиденья)'
  },
  { 
    name: 'Багажник', 
    categoryPrices: [1440, 1440, 1440, 2100, 2970],
    icon: Package,
    description: 'Химчистка ворса и пластика'
  }
];

// Deep Cleaning Constructor - Group B: Seats & Doors
const deepCleaningGroupB = [
  { 
    name: 'Сиденье переднее', 
    price: 1800,
    icon: Armchair,
    description: 'Чистка текстиля или кожи (1 шт, без снятия)'
  },
  { 
    name: 'Сиденье заднее (Диван)', 
    price: 5400,
    icon: Armchair,
    description: 'Полная очистка заднего ряда'
  },
  { 
    name: 'Облицовка двери', 
    price: 780,
    icon: DoorClosed,
    description: 'Химчистка обивки + полировка пластика (1 шт)'
  }
];

// Additional Care Services
const additionalCareServices = [
  { 
    name: 'Кондиционер кожи сидений', 
    priceRange: '800 — 1 020 ₽', 
    icon: Sparkles,
    description: 'До 5 сидений'
  },
  { 
    name: 'Озонация салона', 
    price: 725, 
    icon: Wind, 
    description: 'Удаление запахов' 
  },
  { 
    name: 'Удаление шерсти животных', 
    priceRange: '440 — 655 ₽', 
    icon: Sparkles 
  },
];

export function InteriorSection({ selectedCategory }: InteriorSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">
            Интерьер <span style={{ color: '#00F0FF' }}>и химчистка</span>
          </h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
Интерьер как новый. Профессиональный детейлинг без компромиссов.
          </p>
        </motion.div>

        {/* Full Cleaning */}
        <motion.div
          className="glass rounded-2xl p-8 mb-12 glow-hover border-2 border-[#00F0FF]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="mb-2" style={{ fontSize: '1.75rem' }}>
                Полная химчистка салона
              </h3>
              <p className="text-sm">
                Тотальный детейлинг интерьера премиальной автокосметикой.
              </p>
              <p className="text-xs mt-2" style={{ color: '#00F0FF' }}>
                * Сильные загрязнения оцениваются индивидуально
              </p>
            </div>
            <div className="text-4xl">
              <PriceDisplay 
                price={fullCleaningPrices[selectedCategory - 1]} 
                highlight={true}
              />
            </div>
          </div>
        </motion.div>

        {/* Regular Care - Wet & Dry Cleaning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-center mb-4" style={{ color: '#00F0FF' }}>
            Регулярный уход за салоном
          </h3>
          <p className="text-center mb-8 text-sm" style={{ color: '#E0E0E0' }}>
            Базовая уборка для поддержания чистоты
          </p>

          {/* Wet Cleaning Section */}
          <div className="mb-8">
            <h4 className="mb-4 text-center" style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>
              💧 Влажная уборка (Спецсредства с ароматизатором)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start mb-3">
                  <Droplets size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Полная</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Весь салон</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.wetCleaning.full[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <div className="flex items-start mb-3">
                  <Droplets size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Частичная 1/2</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Половина салона</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.wetCleaning.partial[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-start mb-3">
                  <Gauge size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Панель (Торпедо)</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>С ароматизатором</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.wetCleaning.dashboard[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex items-start mb-3">
                  <Package size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Багажник</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Спецсредством</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.wetCleaning.trunk[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Vacuum Section */}
          <div>
            <h4 className="mb-4 text-center" style={{ fontSize: '1.125rem', color: '#FFFFFF' }}>
              🌪️ Сухая уборка (Пылесос)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-start mb-3">
                  <Wind size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Полная</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Пол + сиденья</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.vacuum.full[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <div className="flex items-start mb-3">
                  <Wind size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Частичная 1/2</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Экспресс-уборка</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.vacuum.partial[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass rounded-xl p-5 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="flex items-start mb-3">
                  <Package size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 style={{ fontSize: '0.95rem' }} className="mb-2">Багажник</h5>
                    <p className="text-xs mb-3" style={{ color: '#9CA3AF' }}>Только багажное отделение</p>
                    <div className="text-lg">
                      <PriceDisplay price={regularCareServices.vacuum.trunk[selectedCategory - 1]} highlight={true} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Deep Cleaning Constructor - Group A */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-center mb-3" style={{ color: '#00F0FF' }}>
            Конструктор чистоты — Локальная химчистка
          </h3>
          <p className="text-center mb-8 text-sm" style={{ color: '#E0E0E0' }}>
            Соберите свой пакет услуг для глубокой очистки интерьера
          </p>

          {/* Group A: Textiles & Surfaces */}
          <h4 className="mb-4" style={{ fontSize: '1rem', color: '#FFFFFF' }}>
            Группа А: Текстиль и Покрытия
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {deepCleaningGroupA.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 glow-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <Icon size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 style={{ fontSize: '1.125rem' }} className="mb-2">{service.name}</h3>
                      {service.description && (
                        <p className="text-sm mb-3">{service.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-xl">
                    <PriceDisplay price={service.categoryPrices[selectedCategory - 1]} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Group B: Seats & Doors */}
          <h4 className="mb-4" style={{ fontSize: '1rem', color: '#FFFFFF' }}>
            Группа Б: Сиденья и Двери
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deepCleaningGroupB.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-6 glow-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start mb-4">
                    <Icon size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 style={{ fontSize: '1.125rem' }} className="mb-2">{service.name}</h3>
                      {service.description && (
                        <p className="text-sm mb-3">{service.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-xl">
                    <PriceDisplay price={service.price} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Additional Care Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center mb-8" style={{ color: '#00F0FF' }}>
            Дополнительные услуги ухода
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {additionalCareServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 glow-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start mb-4">
                  <Icon size={24} color="#00F0FF" className="mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 style={{ fontSize: '1.125rem' }} className="mb-2">{service.name}</h3>
                    {service.description && (
                      <p className="text-sm mb-3">{service.description}</p>
                    )}
                  </div>
                </div>
                <div className="text-xl">
                  {service.price ? (
                    <PriceDisplay price={service.price} />
                  ) : (
                    <span style={{ color: '#00F0FF' }}>{service.priceRange}</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs" style={{ color: '#A0A0A0' }}>
            * Автомобили с экстремальным загрязнением салона оцениваются мастером индивидуально
          </p>
        </motion.div>
      </div>
    </section>
  );
}