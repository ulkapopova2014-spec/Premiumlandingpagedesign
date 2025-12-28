import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#020B1C] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-3 uppercase text-[20px] md:text-[28px]" style={{ color: '#FFFFFF', fontWeight: '700', letterSpacing: '1px' }}>
              АКВАВИРАЖ
            </h3>
            <p className="text-[11px] md:text-[13px]" style={{ color: '#9CA3AF', lineHeight: '1.6' }}>
              Премиальный уход за автомобилем.<br />
              Современные технологии.
            </p>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4" style={{ color: '#00F0FF', fontSize: '14px', fontWeight: '500' }}>Контакты</h4>
            <div className="space-y-3">
              <a 
                href="tel:+7(383)3357788" 
                className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors"
                style={{ color: '#FFFFFF', fontSize: '14px' }}
              >
                <Phone size={16} />
                <span>+7 (383) 335-77-88</span>
              </a>
              <a 
                href="mailto:info@aquavirage.ru" 
                className="flex items-center gap-2 hover:text-[#00F0FF] transition-colors"
                style={{ color: '#FFFFFF', fontSize: '14px' }}
              >
              </a>
              <div className="flex items-start gap-2" style={{ color: '#FFFFFF', fontSize: '14px' }}>
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>г. Новосибирск, Семьи Шамшиных, 61/2</span>
              </div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4" style={{ color: '#00F0FF', fontSize: '14px', fontWeight: '500' }}>Режим работы</h4>
            <div className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#FFFFFF' }} />
              <div>
                <p style={{ color: '#FFFFFF', fontSize: '14px' }}>Пн-Вс: 09:00 - 21:00</p>
                <p className="mt-1" style={{ color: '#00F0FF', fontSize: '12px' }}>Без выходных</p>
              </div>
            </div>
          </motion.div>

          {/* Legal Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4" style={{ color: '#00F0FF', fontSize: '14px', fontWeight: '500' }}>Юридическая информация</h4>
            <div className="space-y-1" style={{ color: '#9CA3AF', fontSize: '9px', lineHeight: '1.5' }}>
              <p>ИП СПИРИДОНОВ АНДРЕЙ АЛЬБЕРТОВИЧ</p>
              <p>ИНН: 540956655850</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
          style={{ borderColor: '#0F3460', color: '#9CA3AF', fontSize: '11px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[10px]">© 2025 АкваВираж. Все права защищены.</p>
          <p className="text-[10px]">Цены указаны в рублях. Сложные загрязнения оцениваются индивидуально.</p>
        </motion.div>
      </div>
    </footer>
  );
}