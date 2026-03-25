'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/ui/Reveal';
import { logisticsCities } from '@/data/company';
import CTASection from '@/components/sections/CTASection';

const features = [
  { icon: '📦', title: 'Reliable Dispatch', desc: 'Systematic order processing ensures accurate and timely dispatch of every consignment.' },
  { icon: '🚛', title: 'Nationwide Network', desc: 'Strong partnerships with leading transport providers for seamless pan-India delivery.' },
  { icon: '📋', title: 'Order Tracking', desc: 'Real-time updates and transparent communication on every shipment from dispatch to delivery.' },
  { icon: '🏗️', title: 'Bulk Handling', desc: 'Infrastructure to handle large-volume orders with dedicated loading facilities.' },
  { icon: '🔒', title: 'Secure Packaging', desc: 'Industry-standard packaging to protect yarn quality during transit across distances.' },
  { icon: '⏱️', title: 'Express Options', desc: 'Priority dispatch available for urgent requirements with expedited delivery timelines.' },
];

export default function LogisticsContent() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'linear-gradient(180deg, rgba(185,28,28,0.06) 0%, #0A0A0A 60%)' }}>
        <Reveal>
          <div className="section-label">Delivery Network</div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Pan-India <span className="text-primary-bright">Logistics</span></h1>
          <p className="section-desc max-w-[700px]">Our robust delivery network ensures timely yarn delivery across India&apos;s major textile hubs.</p>
        </Reveal>
      </section>
      <section className="py-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-[1280px] mx-auto">
          <Reveal>
            <div className="bg-dark-card rounded-3xl p-12 border border-white/5 text-center mb-12">
              <div className="text-[64px] mb-6 opacity-30">🗺️</div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">Delivery Across India</h3>
              <p className="text-[15px] text-neutral-400 mb-8">We deliver to all major textile manufacturing clusters nationwide</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {logisticsCities.map((city) => (
                  <span key={city} className="px-5 py-2.5 bg-primary/[0.08] border border-primary/15 rounded-full text-sm text-white/80 hover:bg-primary/15 hover:text-white transition-all cursor-default">{city}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={i} delay={0.05 * (i % 3)}>
                <div className="glass-card p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 mx-auto mb-4 flex items-center justify-center text-2xl">{f.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </motion.div>
  );
}
