'use client';

import React from 'react';
import { RoutePath } from '../types';
import { 
  ShieldCheck, Compass, HeartHandshake, MapPin, 
  CheckCircle2, Users, FileText, ArrowRight 
} from 'lucide-react';
import { motion } from 'motion/react';

interface WhyIQDocsProps {
  onNavigate: (path: RoutePath) => void;
}

export default function WhyIQDocs({ onNavigate }: WhyIQDocsProps) {
  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-50 py-24 md:py-32 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_top,var(--color-emerald-50),transparent)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-800 border border-slate-200 mb-6">
              Our Story & Values
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900">
              Down-to-Earth Help for Local Businesses
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Our service is built on integrity, simple communication, and genuine care. We help Scottsdale businesses get their books cleaned up and kept organized without any complicated jargon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
              The IQ-docs Difference
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              More Than a Service. A Trusted Business Partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Pillar 1 */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 hover:border-slate-200 hover:bg-white hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <Compass className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Accuracy You Can Trust
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We double-check your ledger entries against corresponding receipts and statements. Every transaction is matched carefully so your historical and monthly records are 100% accurate, balanced, and tax-ready.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 hover:border-slate-200 hover:bg-white hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <HeartHandshake className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Personalized Service
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                You will work with a dedicated, friendly bookkeeping and administrative helper who knows your business by name. No robotic tickets or offshore call centers—just real, direct, local support.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 hover:border-slate-200 hover:bg-white hover:shadow-md transition-all group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <ShieldCheck className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Responsive Communication
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We value your time. We answer emails and phone calls promptly, explaining your numbers in plain English without confusing accounting jargon or corporate noise.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCAL SERVICE. NATIONAL STANDARDS. */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_bottom_left,rgba(43,20,0,0.4),transparent)]" />
        <div className="absolute top-1/4 right-1/4 h-[30rem] w-[30rem] bg-emerald-500/5 blur-3xl rounded-full" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-slate-800 px-3.5 py-1.5 rounded-lg border border-slate-700 text-xs font-mono font-bold text-emerald-400">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Local Service. National Standards.</span>
              </div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Friendly Professionals Keeping Your Business Organized
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                We believe that getting your bookkeeping done right takes real experience, clear communication, and genuine care. Our team of seasoned bookkeeping and office administrative specialists is dedicated to organizing your transactions, labeling your receipts, and keeping your files clean so you can sleep easy.
              </p>
              <div className="space-y-4 pt-4 border-t border-slate-800">
                {[
                  { title: 'Experienced Bookkeeping Team', text: 'Our team includes highly experienced, friendly bookkeepers who are passionate about helping local small businesses succeed.' },
                  { title: 'Organized Cloud Folders', text: 'We utilize private, secure cloud folder structures to organize and label all your digital business receipts and documentation.' },
                  { title: 'Fully Insured For Peace Of Mind', text: 'We carry comprehensive business liability coverage so you can feel completely secure partnering with us.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Layout Box with real, verifiable specifications */}
            <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 space-y-6 shadow-xl relative">
              <h3 className="font-display text-lg font-bold text-slate-100 border-b border-slate-800 pb-4">
                Our Service Standards
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'BOOKKEEPING METHOD', val: 'Double-Entry Reconciling' },
                  { label: 'SUPPORT REGION', val: 'Scottsdale, Arizona Local' },
                  { label: 'LIABILITY COVERAGE', val: '$2M Insured' },
                  { label: 'SOFTWARE INTEGRATIONS', val: 'QuickBooks Online / Xero' },
                  { label: 'ONBOARDING TIMING', val: '5-7 Business Days' },
                  { label: 'BUSINESS HOURS', val: '7:00 AM – 7:00 PM AZ' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">{stat.label}</div>
                    <div className="text-sm font-bold text-slate-200">{stat.val}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                By choosing IQ-docs, you get a reliable, friendly back-office support system. No corporate jargon, no surprise bills—just real help to get your records organized and kept up-to-date.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white border-t border-slate-100 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Want to learn more about how we help?
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto">
            Get in touch for a friendly, pressure-free chat. We will look at your current paperwork setups and show you how easy it is to have clean, worry-free books.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="flex items-center justify-center space-x-2 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-sm font-semibold text-white transition-colors cursor-pointer shadow-sm"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="flex items-center justify-center space-x-2 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              <span>See Our Services</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
