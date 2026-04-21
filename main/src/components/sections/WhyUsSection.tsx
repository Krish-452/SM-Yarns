'use client';

import Reveal from '@/components/ui/Reveal';
import { ICON_MAP } from '@/components/ui/Icons';
import { whyUs } from '@/data/company';

export default function WhyUsSection() {
  return (
    <section className="py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="section-label">Our Edge</div>
            <h2 className="section-title">Why Choose <span className="text-primary-bright">S.M. Yarns</span></h2>
            <p className="section-desc">We combine quality, reliability, and competitive pricing to be your ideal yarn supplier.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyUs.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <Reveal key={item.title} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.05 * i}>
                <div className="glass-card p-8 flex gap-5 group">
                  <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-primary/10 flex items-center justify-center text-primary-bright transition-all duration-300 group-hover:bg-primary/20">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
