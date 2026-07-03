'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { RoutePath } from '@/iqdocs/types';

const navItems: Array<{ label: string; path: RoutePath }> = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Why IQ-docs', path: '/why-IQ-docs' },
  { label: 'Books Cleanup', path: '/books-cleanup' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md overflow-hidden">
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium py-1.5 px-6 lg:px-8 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center space-x-4">
          <span>Scottsdale, Arizona</span>
          <span className="hidden sm:inline">Mon-Fri 7:00 AM - 7:00 PM (Arizona Time)</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="mailto:info@iq-docs.com" className="hover:text-white transition-colors">
            info@iq-docs.com
          </a>
          <span className="font-semibold text-emerald-400">(000) 000-0000</span>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 overflow-hidden">
        <Link href="/" className="flex cursor-pointer items-center group" aria-label="IQ-docs home">
          <Image
            src="/iqdocs-logo.jpeg"
            alt="IQ-docs - Organized. Accurate. Effortless."
            width={180}
            height={80}
            priority
            className="h-10 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-900 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="group flex items-center justify-center space-x-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-slate-800 transition-all duration-200 hover:shadow-md"
          >
            <span>Book Your Free Consultation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-emerald-400" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-slate-700 md:hidden hover:bg-slate-50 focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-gray-100 bg-white md:hidden overflow-hidden"
          >
            <div className="space-y-1.5 px-6 py-5">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? 'bg-slate-50 text-slate-900 border-l-4 border-emerald-500 pl-3'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center space-x-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  <span>Book Your Free Consultation</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
