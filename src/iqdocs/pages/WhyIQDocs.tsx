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
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 md:py-16 md:py-24 lg:py-32 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_top,var(--color-emerald-50),transparent)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-slate-800 border border-slate-200 mb-4 sm:mb-6">
              Our Story & Values
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Down-to-Earth Help for Locums, Healthcare, Professionals, IT, Small Business & Individuals
            </h1>
<p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              Our service is built on integrity, simple communication, and genuine care. We help Houston businesses get their books cleaned up and kept organized without any complicated jargon.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE THREE PILLARS */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
              Why Businesses Choose IQ-docs
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
                Detailed, organized bookkeeping practices designed to keep your records reliable and current.
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
                Solutions tailored to your business needs, workflow, and goals.
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
                Clear, timely support from a team that values strong client relationships.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. LOCAL SERVICE. NATIONAL STANDARDS. */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
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
                Personalized support with the systems, organization, and professionalism businesses expect.
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                At IQ-docs, we believe exceptional bookkeeping is built on experience, accuracy, communication, and genuine care. Our team of skilled bookkeeping and administrative professionals helps small businesses stay organized by maintaining accurate transactions, managing receipts, and creating streamlined digital records—so you can focus on running your business with confidence.
              </p>
              <div className="space-y-4 pt-4 border-t border-slate-800">
                {[
                  { title: 'Experienced Bookkeeping Professionals', text: 'Our knowledgeable and approachable team provides dependable bookkeeping support tailored to the needs of local small businesses. We combine attention to detail with personalized service to help keep your financial records accurate and up to date.' },
                  { title: 'Secure Digital Organization', text: 'We create structured, private cloud-based filing systems to organize your receipts, financial documents, and business records, making important information easy to access when you need it.' },
                  { title: 'Fully Insured for Added Confidence', text: 'Your trust matters. IQ-docs maintains comprehensive business liability coverage, providing added reassurance when you partner with us for your bookkeeping and back-office needs.' }
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { label: 'Bookkeeping Method', val: 'Double-Entry Reconciliation' },
                  { label: 'Service Area', val: 'Houston, Texas & Surrounding Areas' },
                  { label: 'Liability Coverage', val: '$2M Business Insurance Coverage' },
                  { label: 'Software Integrations', val: 'QuickBooks Online & Xero' },
                  { label: 'Client Onboarding', val: '5-7 Business Days' },
                  { label: 'BUSINESS HOURS', val: '6:00 AM - 6:00 PM CT' }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">{stat.label}</div>
                    <div className="text-sm font-bold text-slate-200">{stat.val}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <p className="font-bold text-slate-200 text-base mb-2">
                  Reliable Support Without the Complexity
                </p>
                With IQ-docs, you gain a dependable back-office partner dedicated to keeping your business organized and your records current. No unnecessary complexity, no confusing processes—just professional, responsive support that helps you stay in control of your finances and operations.
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
