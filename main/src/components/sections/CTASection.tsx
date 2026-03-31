'use client';

import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';
import { IconArrow } from '@/components/ui/Icons';

export default function CTASection() {
  return (
    <section className="py-28 px-6 text-center relative" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #7F1D1D 100%)' }}>
      <Reveal>
        <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
          Ready to Source <span className="text-primary-bright">Premium Yarns?</span>
        </h2>
        <p className="text-lg text-white/60 max-w-[560px] mx-auto mb-9">Connect with us for competitive quotes on our complete range of yarn products.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="btn-primary">Get a Quote <IconArrow /></Link>
          <Link href="/products" className="btn-secondary">View Products</Link>
        </div>
      </Reveal>
    </section>
  );
}
