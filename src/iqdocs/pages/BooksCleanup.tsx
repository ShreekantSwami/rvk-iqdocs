'use client';

import React, { useState } from 'react';
import { RoutePath } from '../types';
import { 
  CheckCircle2, HelpCircle, ChevronDown, ArrowRight, Activity, Database, Sparkles, FileSpreadsheet, ShieldCheck, HelpCircle as FaqIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BooksCleanupProps {
  onNavigate: (path: RoutePath) => void;
}

export default function BooksCleanup({ onNavigate }: BooksCleanupProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const whyMatters = [
    {
      title: 'Eliminate CPA Overcharges',
      text: 'CPAs are built for tax planning and filing, charging premium rates for basic record sorting. We do the clean bookkeeping beforehand, saving you substantial accounting fees.'
    },
    {
      title: '100% Tax Preparedness',
      text: 'Never scramble during tax season. Having clean, fully reconciled books means your tax professional can file your business returns effortlessly and on time.'
    },
    {
      title: 'Financial Decision Clarity',
      text: "You can't steer a business using foggy or incorrect data. A complete cleanup gives you a true, accurate picture of your net profit, cash flow, and actual operating margins."
    }
  ];

  const checklistItems = [
    {
      title: 'Reconciling All Accounts',
      desc: 'Matching every bank and credit card statement to ensure 100% mathematical accuracy across all business accounts.'
    },
    {
      title: 'Transaction Categorization',
      desc: 'Labeling all deposits, sales, and expenditures into appropriate tax-ready chart of accounts categories.'
    },
    {
      title: 'Fixing Bank Feed Errors',
      desc: 'Resolving duplicates, incorrect manual entries, and sync glitches from older software connections.'
    },
    {
      title: 'Reviewing Balances & Ledgers',
      desc: 'Looking for uncategorized assets, negative balance issues, or miscoded balance sheet items.'
    },
    {
      title: 'CPA Handoff Pack',
      desc: 'A complete set of clean financial reports (Profit & Loss, Balance Sheet, Trial Balance) and organized documentation ready for tax filing.'
    }
  ];

  const protocolSteps = [
    {
      num: '01',
      title: 'First Look',
      text: 'We look at what statements are missing, check your current software, and pinpoint exactly where things got off track.'
    },
    {
      num: '02',
      title: 'Transaction Sorting',
      text: 'We go through your past records, matching receipts to expenses and sorting every transaction into the right category.'
    },
    {
      num: '03',
      title: 'Bank Reconciling',
      text: 'We double-check your records against your bank statements to make sure every single dollar is accounted for.'
    },
    {
      num: '04',
      title: 'Clean Handoff',
      text: 'We deliver clean, organized digital folders with easy-to-read records, ready for your CPA or tax preparer.'
    }
  ];

  const faqs = [
    {
      id: 'cu-faq-1',
      question: 'How far back can you clean up overdue books?',
      answer: 'We can clean up and untangle bookkeeping records extending back multiple fiscal years. No backlog is too messy or too outdated for us to sort through.'
    },
    {
      id: 'cu-faq-2',
      question: 'Will I need to spend a lot of time on this?',
      answer: 'No. Once you securely share view-only access to your bank statements and QuickBooks Online, we do the heavy lifting. We operate independently and will only reach out with a consolidated list if we have questions about specific mystery transactions.'
    },
    {
      id: 'cu-faq-3',
      question: 'How do you price books cleanup projects?',
      answer: 'We price our cleanup projects using a straightforward, upfront flat-rate pricing system based on the number of months or years of backlog and the number of bank and credit card accounts involved. We never charge surprise hourly fees, so you will know the exact cost before we start any work.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_top_right,rgba(43,20,0,0.45),transparent)]" />
        <div className="absolute bottom-0 right-1/4 h-[35rem] w-[35rem] bg-teal-500/10 blur-3xl rounded-full" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 border border-slate-700/60 mb-6">
              QuickBooks Online
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
              QuickBooks Online Cleanup & Catch-Up
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-3xl">
              Whether you are a few months behind, a full year, or several fiscal years behind—we specialize in untangling messy accounts, catching up backlog, and preparing your books for a flawless CPA handoff.
            </p>
          </div>
        </div>
      </section>

      {/* 2. WHY IT MATTERS SECTION */}
      <section className="py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-emerald-600 uppercase font-mono">
              The Value of Order
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Why a Professional QuickBooks Cleanup Matters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyMatters.map((point, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 hover:border-emerald-200 transition-all group"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-900 mb-6 group-hover:scale-105 transition-transform">
                  <CheckCircle2 className="h-5.5 w-5.5 text-emerald-500" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHECKLIST SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Our Deliverables</span>
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
                Every QBO Cleanup Project Includes:
              </h2>
              <p className="text-base text-slate-600">
                We perform a comprehensive, deep-cleaning protocol to make sure your financial ledger is perfectly dialed-in, verified, and transparent.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center justify-center space-x-2 rounded-full bg-slate-900 hover:bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white transition-colors cursor-pointer w-full sm:w-auto shadow-sm"
                >
                  <span>Get Your Personalized Cleanup Quote</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-8 shadow-xs space-y-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE PROTOCOL TIMELINE */}
      <section className="py-24 bg-white border-t border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono flex items-center justify-center gap-1.5">
              <Activity className="h-4 w-4" />
              <span>How We Clean Your Books</span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Our Cleanup Process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {protocolSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/50 rounded-2xl border border-slate-100 p-8 relative shadow-2xs"
              >
                <div className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md w-fit mb-6">
                  STAGE {step.num}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-900 text-slate-300 rounded-2xl border border-slate-800 p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-emerald-400">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Need to hand over clean records to your CPA?</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-0.5">We organize and prepare your historical records so your chosen tax professional can file with ease.</p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-950 px-6 py-3 text-xs font-semibold transition-colors cursor-pointer w-full md:w-auto"
            >
              <span>Talk to a Cleanup Specialist</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. FAQs ACCORDION */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex h-9 items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-bold text-slate-900 border border-slate-100 shadow-2xs">
              <HelpCircle className="mr-1.5 h-4 w-4 text-emerald-500" />
              <span>Cleanup Details</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Cleanup FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-xl border border-slate-200/60 bg-white overflow-hidden transition-all hover:bg-slate-50/60 shadow-2xs"
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
                        <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
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

      {/* 6. CTA BOTTOM */}
      <section className="py-20 bg-emerald-50 border-t border-emerald-100 text-center">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Let's Simplify Your Business.
          </h2>
          <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop worrying about overdue accounts or messy receipts. Let our friendly cleanup team do the heavy lifting so you can focus on running your business.
          </p>
          <div className="mt-8">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-sm font-semibold text-white transition-colors cursor-pointer shadow-sm"
            >
              <span>Get Your Personalized Cleanup Quote</span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
