'use client';

import Reveal from '@/components/ui/Reveal';
import { applications } from '@/data/company';
import { APP_ICONS } from '@/components/ui/Icons';
import CTASection from '@/components/sections/CTASection';

export default function ApplicationsContent() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'linear-gradient(180deg, rgba(185,28,28,0.06) 0%, #0A0A0A 60%)' }}>
        <Reveal>
          <div className="section-label">Industries</div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Serving Diverse <span className="text-primary-bright">Industries</span></h1>
          <p className="section-desc max-w-[700px]">Our yarns are trusted by manufacturers across hosiery, knitting, weaving, garment, and industrial textile sectors.</p>
        </Reveal>
      </section>
      <section className="py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, i) => (
            <Reveal key={app.name} delay={0.05 * (i % 3)}>
              <div className="border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/20 group" style={{ background: 'linear-gradient(135deg, rgba(185,28,28,0.05) 0%, #141414 100%)' }}>
                <div className="w-16 h-16 rounded-[18px] bg-primary/10 flex items-center justify-center mb-5 text-[28px] transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">{APP_ICONS[app.icon]}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{app.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">{app.description}</p>
                <p className="text-[13px] text-neutral-500 leading-relaxed">We supply specialized yarn varieties optimized for {app.name.toLowerCase()}, ensuring consistent performance and quality output for your production line.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
