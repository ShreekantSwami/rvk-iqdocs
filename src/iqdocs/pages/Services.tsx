'use client';

import React, { useState } from 'react';
import { RoutePath } from '../types';
import { 
  ShieldAlert, ShieldCheck, Zap, Layers, FileText, Users, 
  HelpCircle, ChevronDown, Check, X, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onNavigate: (path: RoutePath) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  // Active state for FAQs
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const faqs = [
    {
      id: 'faq-1',
      question: 'How do you keep my business information secure?',
      answer: 'We take security seriously. All connections to your bank statements are read-only, meaning we can never move or access your funds. We store your digital documents in secure, password-protected cloud folders, and we never sell or share your business data.'
    },
    {
      id: 'faq-2',
      question: 'How long does it take to get started?',
      answer: 'For standard ongoing bookkeeping, we can have you set up and running in 5 to 7 business days. If your books are behind by months or years, our cleanup team will jump in to organize and catch up your records, which typically takes 2 to 4 weeks depending on the backlog size.'
    },
    {
      id: 'faq-3',
      question: 'Do you work with QuickBooks?',
      answer: 'Yes! We work natively with QuickBooks Online and other standard small business tools. We do not replace your accounts—we just keep them clean, categorized, and up-to-date.'
    },
    {
      id: 'faq-4',
      question: 'Will I have a real person to talk to?',
      answer: 'Absolutely. You will be paired with a dedicated bookkeeping and admin helper who knows your business by name. No automated ticketing systems or robotic support—just real, helpful people.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_top,rgba(43,20,0,0.4),transparent)]" />
        <div className="absolute bottom-0 left-1/4 h-[35rem] w-[35rem] -translate-x-1/2 bg-emerald-500/10 blur-3xl rounded-full" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-xs font-semibold text-emerald-400 border border-slate-700/60 mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Down-to-Earth Bookkeeping & Back-Office Help
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              We help local Scottsdale businesses keep their transactions reconciled, receipts organized, and administrative tasks under control. Clean and simple support so you can run your business.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CORE BENEFITS */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Real Accuracy</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Every single transaction is checked and categorized by a real professional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Secure Practices</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Read-only bank connections and secure cloud storage keep your details safe.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Zap className="h-5.5 w-5.5 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Consistent Reconciling</h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Regular updates keep your books up to date so you are never surprised at tax time.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES DEEP DIVE */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
              What We Offer
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Simple Bookkeeping & Administrative Solutions
            </p>
          </div>

          <div className="space-y-20">
            
            {/* Vertical 1: Bookkeeping */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <Layers className="h-5.5 w-5.5 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900">
                  Bookkeeping
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  We maintain your records to clear, professional bookkeeping standards. Every transaction is matched and organized carefully, so you are always prepared for a smooth handoff to your chosen tax preparer or accountant.
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    'QuickBooks Online setup',
                    'Monthly bookkeeping',
                    'Transaction categorization',
                    'Bank reconciliations',
                    'Financial reporting',
                    'Month-end close',
                    'Tax-ready books'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">WHAT YOU GET EVERY MONTH</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Regular Reconciling', text: 'We match all bank deposits, credit card purchases, and checks.' },
                    { title: 'Clear Reports', text: 'Simple profit & loss statements so you can see exactly how you are doing.' },
                    { title: 'Tax-Ready Folders', text: 'Perfectly organized digital records made for a seamless tax filing.' },
                    { title: 'Balance Checks', text: 'Keeping track of what you own and what you owe, in plain English.' }
                  ].map((box, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs">
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">{box.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">{box.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical 2: Document Management */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-slate-100">
              <div className="lg:col-span-7 order-last lg:order-first bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">ORGANIZED DIGITAL FILES</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Receipt Labeling', text: 'We sort and label each digital receipt so it matches your records.' },
                    { title: 'Cloud Folders', text: 'A clean, simple folder layout that is private and easy to navigate.' },
                    { title: 'Paperless Transition', text: 'Helpful tips and methods to digitize old paper receipts and bills.' },
                    { title: 'Document Matching', text: 'Attaching invoices and receipts directly to their bank transactions.' }
                  ].map((box, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs">
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">{box.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">{box.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <FileText className="h-5.5 w-5.5 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900">
                  Document Management
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Receipts, bills, and paperwork shouldn't take up your entire desk or inbox. We sort and file your business documents in simple, secure cloud folders so you can find them instantly.
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    'Digital filing systems',
                    'Cloud document organization',
                    'Paper-to-digital conversion',
                    'Secure file storage',
                    'Document retrieval',
                    'Business record organization'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical 3: Administrative Support */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-slate-100">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
                  <Users className="h-5.5 w-5.5 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-slate-900">
                  Administrative Support
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Need an extra hand to stay on top of the paperwork? We can help with everyday office administrative tasks like sending customer invoices, tracking calendar items, and sorting business files.
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    'Credentialing support & CME tracking',
                    'Scheduling assistance & calendar management',
                    'Timecard processing & expense submissions',
                    'Business correspondence & administrative organization',
                    'Data entry & digital records updates'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">BACK-OFFICE OFFICE HELP</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Invoicing Help', text: 'We prepare and draft professional customer invoices based on your details.' },
                    { title: 'Bill Tracking', text: 'Keeping tabs on incoming vendor bills so you never miss a payment.' },
                    { title: 'Unpaid Reminders', text: 'Sending polite, friendly reminders to customers to help speed up payments.' },
                    { title: 'Office Task Support', text: 'Helping organize administrative files, client information, and mail.' }
                  ].map((box, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs">
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">{box.title}</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">{box.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQs SECTION */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-slate-50 px-4 py-1.5 text-xs font-bold text-slate-900 border border-slate-100">
              <HelpCircle className="mr-1.5 h-4 w-4 text-slate-500" />
              <span>Find Answers</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-xl border border-slate-100 bg-slate-50/40 overflow-hidden transition-all hover:bg-slate-50"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-display text-base font-bold text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100/60 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 relative">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let's Make Bookkeeping Simple Again
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            Get in touch for a friendly, pressure-free chat. We will look at your current paperwork setups and customize a simple bookkeeping flow that fits your business perfectly.
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
              onClick={() => onNavigate('/why-IQ-docs')}
              className="flex items-center justify-center space-x-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 transition-colors cursor-pointer"
            >
              <span>Why IQ-docs</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
