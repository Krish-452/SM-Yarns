'use client';

import Reveal from '@/components/ui/Reveal';
import { IconPhone, IconMail, IconPin } from '@/components/ui/Icons';
import { company } from '@/data/company';

export default function ContactContent() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 text-center" style={{ background: 'linear-gradient(180deg, rgba(185,28,28,0.06) 0%, #0A0A0A 60%)' }}>
        <Reveal>
          <div className="section-label">Get in Touch</div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>Let&apos;s <span className="text-primary-bright">Connect</span></h1>
          <p className="section-desc max-w-[700px]">Ready to source premium yarns? Reach out for competitive quotes and personalized solutions.</p>
        </Reveal>
      </section>
      <section className="pt-0 pb-28 px-6 bg-[#0A0A0A]">
        <div className="max-w-[1580px] mx-auto flex justify-center">
          <Reveal>
            <div className="w-full max-w-[1500px] p-10 rounded-3xl border border-white/5" style={{ background: 'linear-gradient(135deg, rgba(185,28,28,0.08) 0%, #141414 100%)' }}>
              <h2 className="font-display text-[28px] font-bold text-white mb-3">{company.name}</h2>
              <p className="text-[15px] text-neutral-400 leading-relaxed mb-8">We&apos;re here to help you find the perfect yarn for your textile manufacturing needs. Reach out anytime.</p>
              {[
                { icon: IconPhone, label: 'Phone', value: company.phone },
                { icon: IconMail, label: 'Email', value: company.email },
                { icon: IconPin, label: 'Address', value: company.fullAddress },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3.5 py-4 border-b border-white/5 last:border-b-0">
                  <div className="w-10 h-10 min-w-[40px] rounded-xl bg-primary/10 flex items-center justify-center text-primary-bright"><Icon /></div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wider">{label}</div>
                    <div className="text-[15px] text-white mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
              <div className="mt-7 p-5 bg-primary/[0.06] rounded-2xl">
                <div className="text-[12px] text-neutral-400 mb-1">Business Hours</div>
                <div className="text-[15px] text-white font-medium">{company.hours}</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
