import { motion } from 'motion/react';
import heroImage from 'figma:asset/68e887243c5f6d16b03a3a0d8ac7f2c0a7bdc692.png';

export function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020B1C]/80 via-[#020B1C]/60 to-[#020B1C]/90" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4">
            <span 
              className="block tracking-wider relative inline-block pb-4" 
              style={{ 
                fontSize: 'clamp(2rem, 8vw, 5rem)',
                letterSpacing: 'clamp(0.05em, 0.2em, 0.2em)',
                background: 'linear-gradient(135deg, #A0E7E5 0%, #00F0FF 50%, #00D4E0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.5)) drop-shadow(0 0 40px rgba(0, 240, 255, 0.3))',
              }}
            >
              АКВАВИРАЖ
              <span 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px]"
                style={{
                  width: '60%',
                  background: 'linear-gradient(90deg, transparent 0%, #00F0FF 50%, transparent 100%)',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)',
                }}
              />
            </span>
          </h1>
          <h2 className="mb-4 md:mb-6 px-2" style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', color: '#E0E0E0' }}>
            Управляемая стихия чистоты
          </h2>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Премиальный уход за автомобилем. Современные технологии.
          </p>
          <motion.button
            onClick={scrollToServices}
            className="px-8 md:px-12 py-4 md:py-5 rounded-full accent-gradient glow-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-base md:text-lg lg:text-xl" style={{ fontWeight: '600' }}>Рассчитать стоимость</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}