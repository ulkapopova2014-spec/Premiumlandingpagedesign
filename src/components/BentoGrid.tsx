import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

interface BentoGridProps {
  selectedCategory: number;
}

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  image: string;
  prices: {
    min: number;
    max?: number;
  };
  fixedPrice?: boolean;
  priceLabel?: string;
  gridClass: string;
}

export function BentoGrid({ selectedCategory }: BentoGridProps) {
  const [animatedPrices, setAnimatedPrices] = useState<{ [key: number]: number }>({});

  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Зеркальная броня',
      description: 'Глубокая абразивная полировка кузова и нанесение керамического состава в 2 слоя. Максимальный гидрофоб и блеск.',
      image: 'https://images.unsplash.com/photo-1728546936318-eba12efa9cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwYWludCUyMHJlZmxlY3Rpb24lMjBwb2xpc2h8ZW58MXx8fHwxNzY2MzI2MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 33600, max: 50400 },
      priceLabel: 'Полировка + Керамика',
      gridClass: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      title: 'Глубокая химчистка салона',
      description: 'Полный разбор салона, очистка пола, потолка, всех ниш и кондиционер кожи. Удаление запахов (Озонация).',
      image: 'https://images.unsplash.com/photo-1661336878277-1d0078e7b3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBsZWF0aGVyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2MzI2MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 17760, max: 25110 },
      priceLabel: 'Полная химчистка + Озонация 725 ₽',
      gridClass: 'md:row-span-2'
    },
    {
      id: 3,
      title: 'Ручная полировка',
      description: 'Нанесение защитных полимерных составов по технологии ручной полировки. Блеск и гидрофоб без абразива.',
      image: 'https://images.unsplash.com/photo-1755279217102-947755911799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBwb2xpc2glMjBzaGluZXxlbnwxfHx8fDE3NjYzMjcwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 2160, max: 4200 },
      priceLabel: 'Защитные полимеры',
      gridClass: ''
    },
    {
      id: 4,
      title: 'Уход за хромом',
      description: 'Чистка и полировка всех хромированных деталей автомобиля. Возвращает зеркальный блеск.',
      image: 'https://images.unsplash.com/photo-1575215481621-00da560f7d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBjaHJvbWUlMjBkZXRhaWx8ZW58MXx8fHwxNzY2MzI3MDkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 2040, max: 2770 },
      priceLabel: 'Все хромированные элементы',
      gridClass: ''
    },
    {
      id: 5,
      title: 'Антидождь и Оптика',
      description: 'Гидрофобное покрытие стекол и восстановительная полировка фар. Безопасность в любую погоду.',
      image: 'https://images.unsplash.com/photo-1653721187106-b537bf6e11ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBoZWFkbGlnaHQlMjBkZXRhaWx8ZW58MXx8fHwxNzY2MzI2MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 3630 },
      priceLabel: 'Антидождь + Полировка фар 725 ₽/шт',
      gridClass: ''
    },
    {
      id: 6,
      title: 'Восстановление пластика',
      description: 'Полировка чёрных пластиковых деталей снаружи. Возвращает насыщенный цве.',
      image: 'https://images.unsplash.com/photo-1650301829401-8d44cb56f02d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwbGFzdGljJTIwdHJpbSUyMGRldGFpbHxlbnwxfHx8fDE3NjYzMjcwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 440, max: 980 },
      priceLabel: 'Внешние пластиковые элементы',
      gridClass: ''
    },
    {
      id: 7,
      title: 'Детейлинг двигателя',
      description: 'Мойка диэлектрическим гелем с последующей консервацией (турбосушка). Безопасно для электрики.',
      image: 'https://images.unsplash.com/photo-1752774581629-464238ee6996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmUlMjBiYXklMjBjbGVhbnxlbnwxfHx8fDE3NjYzMjYyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 2040 },
      fixedPrice: true,
      gridClass: ''
    },
    {
      id: 8,
      title: 'Колесная база',
      description: 'Глубокая очистка дисков от колодочной пыли и чернение резины.',
      image: 'https://images.unsplash.com/photo-1588663099758-25adf1d77727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMHJpbXxlbnwxfHx8fDE3NjYyNTUxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 95 },
      priceLabel: 'Очистка 95 ₽/шт + Чернение 220 ₽',
      fixedPrice: true,
      gridClass: ''
    },
    {
      id: 9,
      title: 'Экспресс-защита',
      description: 'Быстрое нанесение твердого воска. Мгновенный блеск и базовая защита.',
      image: 'https://images.unsplash.com/photo-1755279217102-947755911799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBwb2xpc2glMjBzaGluZXxlbnwxfHx8fDE3NjYzMjcwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 145, max: 440 },
      priceLabel: 'Твердый воск',
      gridClass: ''
    },
    {
      id: 10,
      title: 'Удаление загрязнений',
      description: 'Очистка кузова от битума, металлических вкраплений, следов насекомых и почек.',
      image: 'https://images.unsplash.com/photo-1694678505387-c930ba97750b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmclMjBjbGVhbmluZ3xlbnwxfHx8fDE3NjYzMjYyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      prices: { min: 4680 },
      priceLabel: 'Детализированная мойка',
      gridClass: 'md:col-span-2'
    }
  ];

  const getPriceForCategory = (service: ServiceCard) => {
    if (service.fixedPrice) {
      return service.prices.min;
    }
    
    if (service.prices.max) {
      const range = service.prices.max - service.prices.min;
      const step = range / 4;
      return Math.round(service.prices.min + (step * (selectedCategory - 1)));
    }
    
    return service.prices.min;
  };

  useEffect(() => {
    const newPrices: { [key: number]: number } = {};
    services.forEach(service => {
      newPrices[service.id] = getPriceForCategory(service);
    });
    setAnimatedPrices(newPrices);
  }, [selectedCategory]);

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#020B1C' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4" style={{ color: '#00F0FF' }}>
            Детейлинг и Восстановление
          </h2>
          <p style={{ color: '#E0E0E0' }}>
            Премиальный уход за каждой деталью вашего автомобиля
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${service.gridClass}`}
              style={{
                background: 'rgba(15, 52, 96, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                minHeight: service.gridClass.includes('row-span-2') ? '400px' : '200px'
              }}
            >
              <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500">
                <ImageWithFallback 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C] via-[#020B1C]/80 to-transparent" />

              <div className="relative h-full p-6 flex flex-col justify-end">
                <motion.div
                  className="group-hover:translate-y-[-5px] transition-transform duration-300"
                >
                  <h3 
                    className="mb-3"
                    style={{ 
                      color: '#FFFFFF',
                      fontSize: service.id === 1 ? '24px' : '18px'
                    }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="mb-4 line-clamp-3"
                    style={{ 
                      color: '#E0E0E0',
                      fontSize: service.id === 1 ? '14px' : '13px'
                    }}
                  >
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-2">
                    {!service.fixedPrice && service.prices.max ? (
                      <motion.div
                        key={animatedPrices[service.id]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ 
                          color: '#00F0FF',
                          fontSize: service.id === 1 ? '28px' : '20px',
                          fontWeight: '600'
                        }}
                      >
                        {animatedPrices[service.id]?.toLocaleString('ru-RU')} ₽
                      </motion.div>
                    ) : (
                      <div 
                        style={{ 
                          color: '#00F0FF',
                          fontSize: service.id === 1 ? '28px' : '20px',
                          fontWeight: '600'
                        }}
                      >
                        {service.fixedPrice ? `${service.prices.min.toLocaleString('ru-RU')} ₽` : `от ${service.prices.min.toLocaleString('ru-RU')} ₽`}
                      </div>
                    )}
                    {service.priceLabel && (
                      <p style={{ color: '#9CA3AF', fontSize: '11px' }}>
                        {service.priceLabel}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>

              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
                  border: '1px solid rgba(0, 240, 255, 0.5)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}