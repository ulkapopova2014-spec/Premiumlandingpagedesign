import { motion, useSpring, useTransform } from 'motion/react';
import { useEffect } from 'react';

interface PriceDisplayProps {
  price: number;
  highlight?: boolean;
}

export function PriceDisplay({ price, highlight = false }: PriceDisplayProps) {
  const spring = useSpring(0, { damping: 20, stiffness: 100 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('ru-RU'));

  useEffect(() => {
    spring.set(price);
  }, [price, spring]);

  return (
    <motion.span
      className={highlight ? 'glow' : ''}
      style={{ 
        color: highlight ? '#00F0FF' : '#FFFFFF',
        fontWeight: highlight ? '700' : '600',
      }}
    >
      <motion.span>{display}</motion.span> ₽
    </motion.span>
  );
}
