'use client';

import { motion } from 'framer-motion';
import { IconWhatsApp } from '@/components/ui/Icons';
import { company } from '@/data/company';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-50 w-[60px] h-[60px] rounded-full bg-[#25D366] text-white flex items-center justify-center cursor-pointer border-none"
      style={{ boxShadow: '0 6px 24px rgba(37, 211, 102, 0.35)' }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1, boxShadow: '0 8px 30px rgba(37, 211, 102, 0.5)' }}
    >
      <IconWhatsApp />
    </motion.a>
  );
}
