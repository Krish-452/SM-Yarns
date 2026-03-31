'use client';

import { products } from '@/data/products';

export default function Marquee() {
  const items = products.map((p) => p.name);
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-5 bg-primary-dark">
      <div className="flex w-max animate-marquee">
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-12 font-display text-lg text-white/40 whitespace-nowrap">
            {item} <span className="text-white/15">◈</span>
          </div>
        ))}
      </div>
    </div>
  );
}
