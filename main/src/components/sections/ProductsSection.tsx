'use client';

import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { IconArrow } from '@/components/ui/Icons';
import { products } from '@/data/products';

export default function ProductsSection() {
  return (
    <section className="py-28 px-6 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <div className="section-label">Our Range</div>
            <h2 className="section-title">Premium <span className="text-primary-bright">Yarn Products</span></h2>
            <p className="section-desc">From polyester to blended yarns, we supply a comprehensive range to meet every textile manufacturing need.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={0.05 * (i % 3)}>
              <Link href="/products">
                <div className="glass-card p-8 group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl" />
                  <Image src={product.image} alt={product.name} width={48} height={48} className="w-12 h-12 rounded-[14px] mb-5 object-cover" />
                  <h3 className="font-display text-xl font-semibold text-white mb-2.5">{product.name}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{product.description}</p>
                  <div className="flex items-center gap-1.5 text-primary-bright text-[13px] font-semibold uppercase tracking-wider mt-4 opacity-0 -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn More <IconArrow />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
