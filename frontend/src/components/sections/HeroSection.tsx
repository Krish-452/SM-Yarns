'use client';

import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { IconArrow } from '@/components/ui/Icons';

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* BG Effects */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(185,28,28,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(185,28,28,0.06) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Spinning decorative circles */}
        <m.div className="absolute w-[600px] h-[600px] rounded-full border border-primary/10 -right-24 top-1/2 -translate-y-1/2" animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
          <div className="absolute inset-10 rounded-full border border-primary/5" />
          <div className="absolute inset-20 rounded-full border border-primary/[0.03]" />
        </m.div>
        <m.div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-primary/5 -left-20 bottom-[10%]" animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} />

        {/* Content */}
        <div className="relative z-10 text-center max-w-[900px] px-6">
          <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-[13px] font-medium text-primary-bright tracking-wider uppercase mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse" />
            Trusted Since 2017
          </m.div>

          <m.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-display font-bold text-white leading-[1.1] mb-6" style={{ fontSize: 'clamp(42px, 6vw, 82px)' }}>
            Your Source for<br /><span className="text-primary-bright">Premium Yarns</span>
          </m.h1>

          <m.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}>
            High-quality yarns and reliable textile solutions serving manufacturers across India with 1200+ shades and pan-India delivery.
          </m.p>

          <m.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="btn-primary">Explore Products <IconArrow /></Link>
            <Link href="/contact" className="btn-secondary">Request Quote</Link>
          </m.div>
        </div>

        {/* Scroll indicator */}
        <m.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 text-[11px] tracking-[2px] uppercase" animate={{ y: [0, 8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </m.div>
      </section>
    </LazyMotion>
  );
}
