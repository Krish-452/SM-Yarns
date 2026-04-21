'use client';

import Reveal from '@/components/ui/Reveal';
import { applications } from '@/data/company';
import { APP_ICONS } from '@/components/ui/Icons';

export default function ApplicationsSection() {
  return (
    <section className="py-28 px-6 bg-dark-light">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="section-label">Industries</div>
            <h2 className="section-title">Serving Diverse <span className="text-primary-bright">Applications</span></h2>
            <p className="section-desc">Our yarns power textile manufacturing across multiple industries and applications.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <Reveal key={app.name} delay={0.05 * (i % 3)}>
              <div className="border border-white/5 rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 group" style={{ background: 'linear-gradient(135deg, rgba(185,28,28,0.05) 0%, #141414 100%)' }}>
                <div className="w-16 h-16 rounded-[18px] bg-primary/10 flex items-center justify-center mx-auto mb-5 text-[28px] transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">{APP_ICONS[app.icon]}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{app.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
