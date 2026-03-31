'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logoImage from '@/components/ui/logo.jpeg';
import { IconMenu, IconClose } from '@/components/ui/Icons';
import { useScrollY } from '@/hooks';
import { navLinks } from '@/data/company';

export default function Navbar() {
  const scrollY = useScrollY();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled
          ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-primary/10'
          : 'bg-transparent'
          }`}
        style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}
      >
        <div className={`max-w-[1320px] mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? 'px-6 md:px-10 py-3' : 'px-6 md:px-10 py-5'}`}>
          <Link href="/" aria-label="S.M. Yarns Home">
            <Image src={logoImage} alt="S.M. Yarns Logo" className="w-auto transition-all duration-300" style={{ height: scrolled ? 34 : 40 }} priority />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.filter((link) => link.href !== '/contact').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide uppercase rounded-lg transition-all duration-300 ${pathname === link.href
                  ? 'text-primary-bright'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-bright rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white text-[13px] font-semibold tracking-wide uppercase rounded-full hover:bg-primary-bright transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(185,28,28,0.3)]"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <IconMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[1001] bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-3"
          >
            <button className="absolute top-5 right-6 text-white p-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
              <IconClose />
            </button>
            {navLinks.filter((link) => link.href !== '/contact').map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block text-2xl font-display tracking-wide px-10 py-4 transition-colors ${pathname === link.href ? 'text-primary-bright' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-6">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
