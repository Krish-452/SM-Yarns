'use client';

import { useInView } from 'react-intersection-observer';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { stats } from '@/data/company';

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 px-6" style={{ background: 'linear-gradient(135deg, #7F1D1D 0%, #0A0A0A 60%)' }}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-center py-8 px-4 relative">
            {i < stats.length - 1 && <div className="hidden lg:block absolute right-0 top-[20%] h-[60%] w-px bg-white/10" />}
            <div className="font-display font-bold text-white leading-none" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>
              <AnimatedCounter end={stat.value} active={inView} />
              <span className="text-primary-bright">{stat.suffix}</span>
            </div>
            <div className="text-white/90 text-base font-medium mt-2">{stat.label}</div>
            <div className="text-white/40 text-[13px] mt-1">{stat.unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
