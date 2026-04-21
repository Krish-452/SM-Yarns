'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import Marquee from '@/components/sections/Marquee';
import CTASection from '@/components/sections/CTASection';
import { IconArrow } from '@/components/ui/Icons';
import { products } from '@/data/products';

export default function ProductsContent() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'linear-gradient(180deg, rgba(185,28,28,0.06) 0%, #0A0A0A 60%)' }}>
        <Reveal>
          <div className="section-label">Our Range</div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Premium <span className="text-primary-bright">Yarn Products</span></h1>
          <p className="section-desc max-w-[700px]">Comprehensive range of polyester, blended, and specialty yarns in 1200+ shades and varieties.</p>
        </Reveal>
      </section>
      <Marquee />
      <section className="py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.05 * (i % 3)}>
              <div className="glass-card p-8 cursor-pointer group relative overflow-hidden" onClick={() => setExpanded(expanded === p.id ? null : p.id)}>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                <div className="flex items-start justify-between mb-4">
                  <Image src={p.image} alt={p.name} width={48} height={48} className="w-12 h-12 rounded-[14px] object-cover" />
                  {p.denierRange && <span className="text-[11px] font-medium text-primary-bright bg-primary/10 px-3 py-1 rounded-full">{p.denierRange}</span>}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-2.5">{p.name}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.description}</p>
                <AnimatePresence>
                  {expanded === p.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="mt-4 p-4 bg-primary/[0.04] rounded-xl">
                        <p className="text-[13px] text-neutral-400 leading-relaxed mb-3">{p.details}</p>
                        <div className="flex flex-wrap gap-2">
                          {p.applications.map((app) => <span key={app} className="text-[11px] font-medium text-white/60 bg-white/5 px-3 py-1 rounded-full">{app}</span>)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex items-center gap-1.5 text-primary-bright text-[13px] font-semibold uppercase tracking-wider mt-4 opacity-0 -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  {expanded === p.id ? 'Collapse' : 'Details'} <IconArrow />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
