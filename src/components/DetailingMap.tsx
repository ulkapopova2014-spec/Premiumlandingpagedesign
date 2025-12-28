import { motion } from 'motion/react';
import carImage from 'figma:asset/7a01457394107a6027135b03156fd573b0b4e314.png';
import { PriceDisplay } from './PriceDisplay';

interface DetailingMapProps {
  selectedCategory: number;
}

interface HotspotData {
  id: string;
  name: string;
  prices?: number[];
  fixedPrice?: number;
  dotPosition: { top: string; left: string };
  labelPosition: { top: string; left: string };
}

const hotspots: HotspotData[] = [
  {
    id: 'detailing-wash',
    name: 'Детейлинг мойка',
    prices: [4680, 4920, 5640, 6360, 6960],
    dotPosition: { top: '32%', left: '50%' },
    labelPosition: { top: '8%', left: '48%' },
  },
  {
    id: 'anti-rain',
    name: 'Антидождь',
    prices: [2180, 2330, 2470, 2620, 2620],
    dotPosition: { top: '28%', left: '58%' },
    labelPosition: { top: '10%', left: '70%' },
  },
  {
    id: 'headlights',
    name: 'Полировка фар',
    fixedPrice: 725,
    dotPosition: { top: '52%', left: '22%' },
    labelPosition: { top: '48%', left: '8%' },
  },
  {
    id: 'body-protection',
    name: 'Защита кузова',
    prices: [33600, 33600, 41400, 45000, 50400],
    dotPosition: { top: '40%', left: '70%' },
    labelPosition: { top: '32%', left: '82%' },
  },
  {
    id: 'wheels-polish',
    name: 'Полировка куова',
    prices: [33600, 33600, 41400, 45000, 50400],
    dotPosition: { top: '70%', left: '48%' },
    labelPosition: { top: '82%', left: '48%' },
  },
  {
    id: 'tire-black',
    name: 'Чернение шин',
    fixedPrice: 220,
    dotPosition: { top: '68%', left: '68%' },
    labelPosition: { top: '78%', left: '78%' },
  },
];

export function DetailingMap({ selectedCategory }: DetailingMapProps) {
  return null;
}