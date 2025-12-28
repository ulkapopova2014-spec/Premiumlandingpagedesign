import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { BentoGrid } from './components/BentoGrid';
import { InteriorSection } from './components/InteriorSection';
import { SpecializedSection } from './components/SpecializedSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(2);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#020B1C' }}>
      <HeroSection />
      <ServicesSection 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <BentoGrid selectedCategory={selectedCategory} />
      <InteriorSection selectedCategory={selectedCategory} />
      <SpecializedSection />
      <Footer />
    </div>
  );
}