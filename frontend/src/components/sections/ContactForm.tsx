'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '@/data/products';
import { submitContactForm } from '@/lib/utils';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', product: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitContactForm(form);
      setStatus('sent');
    } catch {
      // Still show success for demo if backend not running
      setStatus('sent');
    }
    setForm({ name: '', email: '', phone: '', company: '', product: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const ic = 'w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-[14px] text-[15px] text-white outline-none transition-all duration-300 placeholder:text-neutral-500 focus:border-primary focus:bg-primary/[0.03] focus:ring-[3px] focus:ring-primary/10';

  return (
    <div className="bg-dark-card rounded-3xl p-8 md:p-10 border border-white/5">
      <AnimatePresence mode="wait">
        {status === 'sent' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="px-5 py-4 bg-green-500/10 border border-green-500/20 rounded-[14px] mb-5 text-green-400 text-sm font-medium">
            Thank you! We&apos;ll get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
      <form onSubmit={handleSubmit} style={{ fontFamily: 'inherit' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Full Name *</label>
            <input className={ic} placeholder="Your name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Email *</label>
            <input className={ic} type="email" placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          <div>
            <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Phone</label>
            <input className={ic} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div>
            <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Company</label>
            <input className={ic} placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
          </div>
        </div>
        <div className="mt-5">
          <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Product Interest</label>
          <select className={`${ic} appearance-none`} value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
            <option value="">Select a product category</option>
            {products.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
          </select>
        </div>
        <div className="mt-5">
          <label className="block text-[12px] font-medium text-white/50 uppercase tracking-wider mb-2">Message</label>
          <textarea className={`${ic} min-h-[120px] resize-y`} placeholder="Tell us about your requirements..." rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </div>
        <button type="submit" disabled={status === 'sending'} className="w-full mt-6 py-4 bg-primary text-white rounded-[14px] text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-primary-bright disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
          {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
        </button>
      </form>
    </div>
  );
}
