import HeroSection from '@/components/sections/HeroSection';
import dynamic from 'next/dynamic';

const StatsSection = dynamic(() => import('@/components/sections/StatsSection'));
const Marquee = dynamic(() => import('@/components/sections/Marquee'));
const ProductsSection = dynamic(() => import('@/components/sections/ProductsSection'));
const ApplicationsSection = dynamic(() => import('@/components/sections/ApplicationsSection'));
const WhyUsSection = dynamic(() => import('@/components/sections/WhyUsSection'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Marquee />
      <ProductsSection />
      <ApplicationsSection />
      <WhyUsSection />
      <CTASection />
    </>
  );
}
