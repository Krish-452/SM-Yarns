'use client';

import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import StatsSection from '@/components/sections/StatsSection';
import { ICON_MAP } from '@/components/ui/Icons';
import { company } from '@/data/company';

const values = [
  { title: 'Quality First', desc: 'Every yarn lot meets stringent quality parameters before dispatch. No exceptions.', icon: 'check' as const },
  { title: 'Customer Focus', desc: 'Understanding your specific needs and delivering solutions that match exactly.', icon: 'shield' as const },
  { title: 'Timely Delivery', desc: 'Our logistics network ensures your yarn arrives when promised, every time.', icon: 'truck' as const },
  { title: 'Fair Pricing', desc: 'Competitive rates through strong manufacturer partnerships and efficient operations.', icon: 'price' as const },
];

export default function AboutContent() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'linear-gradient(180deg, rgba(185,28,28,0.06) 0%, #0A0A0A 60%)' }}>
        <Reveal>
          <div className="section-label">Our Story</div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Building Trust Through <span className="text-primary-bright">Quality</span></h1>
          <p className="section-desc max-w-[700px]">Established in {company.established}, S.M. Yarns has grown to become one of India&apos;s reliable yarn suppliers through unwavering commitment to quality and service.</p>
        </Reveal>
      </section>

      <section className="py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div
              className="relative w-full aspect-[4/3] overflow-hidden"
              style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 100%, transparent 100%)', maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)' }}
            >
              <Image
                src="/images/about_smyarns.png"
                alt="About S.M. Yarns"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <h2 className="font-display text-[28px] font-bold text-white mb-4">Who We Are</h2>
              <p className="text-base text-neutral-400 leading-relaxed mb-4">{company.description}</p>
              <p className="text-base text-neutral-400 leading-relaxed mb-8">{company.descriptionLong}</p>
              <div className="flex gap-6 flex-wrap">
                <div className="px-6 py-5 bg-primary/[0.06] rounded-2xl border border-primary/10">
                  <div className="font-display text-[28px] font-bold text-primary-bright">{company.established}</div>
                  <div className="text-[13px] text-neutral-400 mt-1">Established</div>
                </div>
                <div className="px-6 py-5 bg-primary/[0.06] rounded-2xl border border-primary/10">
                  <div className="font-display text-[28px] font-bold text-primary-bright">Pan-India</div>
                  <div className="text-[13px] text-neutral-400 mt-1">Delivery Network</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsSection />

      <section className="py-28 px-6 bg-dark-light">
        <div className="max-w-[1280px] mx-auto">
          <Reveal><div className="text-center mb-16"><div className="section-label">Our Values</div><h2 className="section-title">What <span className="text-primary-bright">Drives Us</span></h2></div></Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = ICON_MAP[v.icon]; return (
                <Reveal key={v.title} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="glass-card p-8 flex gap-5 group">
                    <div className="w-14 h-14 min-w-[56px] rounded-2xl bg-primary/10 flex items-center justify-center text-primary-bright group-hover:bg-primary/20 transition-all"><Icon /></div>
                    <div><h3 className="text-lg font-semibold text-white mb-2">{v.title}</h3><p className="text-sm text-neutral-400 leading-relaxed">{v.desc}</p></div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
