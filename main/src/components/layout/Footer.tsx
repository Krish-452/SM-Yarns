'use client';

import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/components/ui/logo.jpeg';
import { IconPhone, IconMail, IconPin } from '@/components/ui/Icons';
import { company, navLinks } from '@/data/company';
import { products } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Image src={logoImage} alt="S.M. Yarns Logo" height={36} className="w-auto" />
            <p className="text-sm text-neutral-400 leading-relaxed mt-4 max-w-xs">
              {company.tagline}. Serving manufacturers across India since {company.established}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">Quick Links</h4>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-neutral-400 py-1.5 hover:text-primary-bright transition-colors">
                  {link.label}
                </Link>
              ))}
              <Link href="/privacy" className="text-sm text-neutral-400 py-1.5 hover:text-primary-bright transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">Products</h4>
            <div className="flex flex-col gap-1">
              {products.slice(0, 7).map((p) => (
                <Link key={p.id} href="/products" className="text-sm text-neutral-400 py-1.5 hover:text-primary-bright transition-colors">
                  {p.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <IconPhone size={16} className="text-primary-bright shrink-0" />
                <span>{company.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-400">
                <IconMail size={16} className="text-primary-bright shrink-0" />
                <span>{company.email}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-400">
                <IconPin size={16} className="text-primary-bright shrink-0 mt-0.5" />
                <span>{company.fullAddress}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[13px] text-neutral-500">
          <span>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Crafted with precision for the textile industry</span>
        </div>
      </div>
    </footer>
  );
}
