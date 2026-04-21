import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import Marquee from '@/components/sections/Marquee';
import ProductsSection from '@/components/sections/ProductsSection';
import ApplicationsSection from '@/components/sections/ApplicationsSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import CTASection from '@/components/sections/CTASection';

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
