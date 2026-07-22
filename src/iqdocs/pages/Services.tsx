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
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 sm:py-20 md:py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(50rem_50rem_at_top,rgba(43,20,0,0.4),transparent)]" />
        <div className="absolute bottom-0 left-1/4 h-[35rem] w-[35rem] -translate-x-1/2 bg-emerald-500/10 blur-3xl rounded-full" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-emerald-400 border border-slate-700/60 mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Premium Bookkeeping & Business Support
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-300 max-w-2xl">
              Simplify your operations with professional bookkeeping and
              dedicated back-office support tailored to your business. We keep
              your accounts accurate, your records organized, and your
              day-to-day administration running seamlessly&mdash;giving Houston
              business owners the clarity, confidence, and freedom to lead with
              peace of mind.
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
                <h4 className="text-sm font-bold text-slate-900">
                  Real Accuracy
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Every single transaction is checked and categorized by a real
                  professional.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Secure Practices
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Read-only bank connections and secure cloud storage keep your
                  details safe.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-xl border border-slate-100 shadow-xs">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Zap className="h-5.5 w-5.5 text-emerald-600" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Consistent Reconciling
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  Regular updates keep your books up to date so you are never
                  surprised at tax time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES DEEP DIVE */}
      <section className="py-16 md:py-24 bg-white">
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
                  Your financial records are managed with precision and care,
                  ensuring every transaction is accurately reconciled and
                  thoughtfully organized. With clean, reliable books maintained
                  to professional standards, you'll always be prepared for a
                  seamless collaboration with your tax preparer or accountant.
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    "QuickBooks Online setup and optimization",
                    "Monthly bookkeeping and account maintenance",
                    "Accurate transaction categorization",
                    "Bank and credit card reconciliations",
                    "Monthly financial statements",
                    "Month-end closing and review",
                    "Tax-ready financial records",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">
                  Every Month, You Receive
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Accurate Account Reconciliation",
                      text: "Every bank account, credit card, and financial transaction is carefully reconciled to ensure your records remain accurate and up to date.",
                    },
                    {
                      title: "Insightful Financial Reports",
                      text: "Receive clear, easy-to-understand financial reports that provide visibility into your business performance and support confident decision-making.",
                    },
                    {
                      title: "Tax-Ready Financial Records",
                      text: "Your books are organized throughout the year, making tax season smoother and ensuring your accountant has everything needed for an efficient filing process.",
                    },
                    {
                      title: "Reliable Financial Oversight",
                      text: "We monitor your balances, review key accounts, and help ensure your financial records remain complete, consistent, and aligned with professional bookkeeping standards.",
                    },
                  ].map((box) => (
                    <div
                      key={box.title}
                      className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs"
                    >
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                        {box.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {box.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vertical 2: Document Management */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 border-t border-slate-100">
              <div className="lg:col-span-7 order-last lg:order-first bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">
                  ORGANIZED DIGITAL FILES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Receipt Organization",
                      text: "Every receipt is carefully categorized, labeled, and organized to align with your financial records for accurate tracking and effortless retrieval.",
                    },
                    {
                      title: "Secure Cloud Storage",
                      text: "Your documents are stored in a secure, well-structured cloud filing system that's easy to access and designed to keep your business organized.",
                    },
                    {
                      title: "Paperless Document Solutions",
                      text: "We help streamline your records by converting paper receipts, invoices, and business documents into an efficient digital filing system.",
                    },
                    {
                      title: "Transaction Documentation",
                      text: "Invoices, receipts, and supporting documents are securely attached to their corresponding financial transactions, creating complete, organized records that are easy to reference whenever needed.",
                    },
                  ].map((box) => (
                    <div
                      key={box.title}
                      className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs"
                    >
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                        {box.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {box.text}
                      </p>
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
                  Keep your business organized with a secure, streamlined
                  document management system. We organize receipts, invoices,
                  bills, and important business records into intuitive
                  cloud-based folders, making it easy to locate the documents
                  you need while reducing paper clutter and improving
                  efficiency.{" "}
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    "Custom digital filing systems",
                    "Secure cloud document organization",
                    "Paper-to-digital document conversion",
                    "Organized file storage and management",
                    "Quick document retrieval",
                    "Business records organization",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center space-x-2.5">
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
                  Free up valuable time by outsourcing the day-to-day
                  administrative tasks that keep your business running. From
                  managing paperwork and customer invoicing to organizing
                  records and coordinating schedules, we provide reliable
                  back-office support tailored to your workflow.
                </p>
                <div className="space-y-3.5 text-sm text-slate-700 font-medium">
                  {[
                    "Credentialing support & CME tracking",
                    "Scheduling assistance & calendar management",
                    "Timecard processing & expense submissions",
                    "Business correspondence & administrative organization",
                    "Data entry & digital records updates",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center space-x-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
                <div className="text-xs font-bold text-slate-400 font-mono">
                  Back-Office Support Services
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Professional Invoicing",
                      text: "We prepare accurate, professional customer invoices using the information you provide, helping you maintain a polished billing process and consistent cash flow.",
                    },
                    {
                      title: "Bill Organization & Tracking",
                      text: "Stay on top of vendor invoices with organized bill tracking that helps you manage due dates and maintain an efficient payment process.",
                    },
                    {
                      title: "Payment Follow-Ups",
                      text: "We send courteous, professional payment reminders to encourage timely customer payments and support healthy accounts receivable.",
                    },
                    {
                      title: "Administrative Organization",
                      text: "From client records and business files to routine office administration, we help keep your documents organized and your day-to-day operations running smoothly.",
                    },
                  ].map((box) => (
                    <div
                      key={box.title}
                      className="bg-white p-5 rounded-xl border border-slate-100 shadow-2xs"
                    >
                      <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                        {box.title}
                      </h5>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {box.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs SECTION */}
      <section className="py-16 md:py-24 bg-white">
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
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-display text-base font-bold text-slate-900 focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180 text-emerald-600" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
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
            Get in touch for a friendly, pressure-free chat. We will look at
            your current paperwork setups and customize a simple bookkeeping
            flow that fits your business perfectly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate("/contact")}
              className="flex items-center justify-center space-x-2 rounded-full bg-slate-900 hover:bg-slate-800 px-8 py-4 text-sm font-semibold text-white transition-colors cursor-pointer shadow-sm"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="h-4 w-4 text-emerald-400" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate("/why-IQ-docs")}
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
