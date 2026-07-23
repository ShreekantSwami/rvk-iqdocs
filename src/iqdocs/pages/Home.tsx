"use client";

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Database,
  FileText,
  Layers,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import type { RoutePath } from "../types";

interface HomeProps {
  onNavigate: (path: RoutePath) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  // Animation Variants
  const _containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const _itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const [scrollEl, setScrollEl] = useState<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const scrollListenerAttached = useRef(false);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      initials: "SM",
      title: "Medical Practice Owner, Houston",
      text: "IQ-docs transformed our messy books into a clean, organized system. Our CPA was amazed at how well everything was structured during tax season.",
    },
    {
      name: "James Rivera",
      initials: "JR",
      title: "IT Consulting Firm",
      text: "We were behind on our books for months. The IQ-docs team caught everything up quickly and now our monthly reports are always on time. Highly recommend.",
    },
    {
      name: "Dr. Anika Patel",
      initials: "AP",
      title: "Locum Tenens Physician",
      text: "As a traveling physician, I never had time to manage my finances. IQ-docs handles everything seamlessly so I can focus on my patients.",
    },
    {
      name: "Marcus Thompson",
      initials: "MT",
      title: "Small Business Owner",
      text: "The document management alone saved us hours every week. Everything is organized in the cloud and I can find any receipt or invoice in seconds.",
    },
    {
      name: "Linda Nguyen",
      initials: "LN",
      title: "Healthcare Startup Founder",
      text: "Professional, responsive, and genuinely caring. IQ-docs feels like an extension of our team. Their bookkeeping support has been invaluable for our growth.",
    },
    {
      name: "Robert Keane",
      initials: "RK",
      title: "Construction Company CEO",
      text: "We tried other bookkeeping services before but IQ-docs is different. They actually understand our business and provide practical solutions, not just numbers.",
    },
  ];

  const totalTestimonials = testimonials.length;

  const loopedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const getCardStep = () => {
    if (!scrollEl) return 300;
    const card = scrollEl.querySelector<HTMLElement>(":scope > div");
    if (!card) return 300;
    return card.offsetWidth + 24;
  };

  const getCardCount = () => {
    if (!scrollEl) return 1;
    return Math.round(scrollEl.offsetWidth / getCardStep()) || 1;
  };

  const handleScroll = () => {
    if (!scrollEl) return;
    const step = getCardStep();
    const rawIndex = Math.round(scrollEl.scrollLeft / step);
    const idx = rawIndex % totalTestimonials;
    activeIndexRef.current = idx;
    setActiveIndex(idx);

    const totalCards = loopedTestimonials.length;
    const atStart = rawIndex < 1;
    const atEnd = rawIndex >= totalCards - 1;
    if (atStart || atEnd) {
      scrollEl.scrollLeft = (idx + totalTestimonials) * step;
    }
  };

  const scrollNext = () => {
    if (!scrollEl) return;
    const step = getCardStep();
    const cardsToShow = getCardCount();
    scrollEl.scrollBy({ left: step * cardsToShow, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (!scrollEl) return;
    const step = getCardStep();
    const cardsToShow = getCardCount();
    scrollEl.scrollBy({ left: -step * cardsToShow, behavior: "smooth" });
  };

  const scrollRefCallback = (el: HTMLDivElement | null) => {
    setScrollEl(el);
    if (el && !scrollListenerAttached.current) {
      scrollListenerAttached.current = true;
      requestAnimationFrame(() => {
        const step = getCardStep();
        el.scrollLeft = totalTestimonials * step;
        el.addEventListener("scroll", handleScroll, { passive: true });
      });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 md:pb-36 min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1 text-[10px] sm:text-xs font-semibold text-white border border-white/20 mb-4 sm:mb-6"
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>Houston, TX &bull; QuickBooks Online Specialists</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Helping businesses save time, stay compliant, and make smarter
              financial decisions.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-200 max-w-2xl mx-auto"
            >
              Behind on your bookkeeping? We'll get your books back on track,
              organize your paperwork, and take care of your back-office
              administration&mdash;so you can get back to running your business
              with confidence.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                type="button"
                onClick={() => onNavigate("/contact")}
                className="w-full sm:w-auto group flex items-center justify-center space-x-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-semibold text-white hover:bg-emerald-600 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-xl cursor-pointer"
              >
                <span>Book Your Free Consultation</span>
                <ArrowRight className="h-4.5 w-4.5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("/books-cleanup")}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span>Explore QuickBooks Cleanup</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
              Our Services
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything Your Business Needs. One Reliable Partner.
            </p>
            <p className="mt-4 text-base text-slate-600">
              Growing businesses don't just need bookkeeping. They need
              dependable back-office support that keeps operations organized,
              efficient, and stress-free. That's exactly what IQ-docs delivers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Box 1: Bookkeeping */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-slate-200 hover:shadow-md group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <Layers className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Bookkeeping
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow">
                Complete, accurate, and tax-ready books. We keep your ledgers
                current, categorize every expense, and reconcile your statements
                systematically.
              </p>
              <ul className="space-y-2 border-t border-slate-200/60 pt-6 text-xs text-slate-700 font-medium">
                {[
                  "QuickBooks Online setup",
                  "Monthly bookkeeping",
                  "Transaction categorization",
                  "Bank reconciliations",
                  "Financial reporting",
                  "Month-end close",
                  "Tax-ready books",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: Document Management */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-slate-200 hover:shadow-md group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <FileText className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Document Management
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow">
                Ditch the paperwork stress. We organize your cloud storage and
                map receipts directly to transactions so nothing ever gets lost.
              </p>
              <ul className="space-y-2 border-t border-slate-200/60 pt-6 text-xs text-slate-700 font-medium">
                {[
                  "Digital filing systems",
                  "Cloud document organization",
                  "Paper-to-digital conversion",
                  "Secure file storage",
                  "Document retrieval",
                  "Business record organization",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: Administrative Support */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:border-slate-200 hover:shadow-md group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white mb-6 group-hover:scale-105 transition-transform">
                <Users className="h-5.5 w-5.5 text-emerald-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                Administrative Support
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6 flex-grow">
                Help with scheduling, credentialing, administrative tasks, and
                correspondence. We become your reliable back-office
                administrative arm.
              </p>
              <ul className="space-y-2 border-t border-slate-200/60 pt-6 text-xs text-slate-700 font-medium">
                {[
                  "Credentialing support & CME tracking",
                  "Scheduling assistance & calendar management",
                  "Timecard processing & expense submissions",
                  "Business correspondence & administrative organization",
                  "Data entry & digital records updates",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom link */}
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate("/services")}
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-slate-900 hover:text-emerald-600 group cursor-pointer"
            >
              <span>See how we work with your business</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP ONBOARDING */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
              Simple. Transparent. Efficient.
            </h2>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Getting started is easier than you think.
            </p>
            <p className="mt-4 text-base text-slate-600">
              We know you are busy, so we make sure the transition is as smooth
              and simple as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-start bg-white rounded-2xl border border-slate-100 p-8 shadow-xs">
              <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 font-mono text-lg font-bold text-emerald-400 shadow-md">
                01
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-4 mb-3">
                Schedule Your Free Consultation
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                We'll learn about your business, understand your challenges, and
                identify exactly where we can help.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-start bg-white rounded-2xl border border-slate-100 p-8 shadow-xs">
              <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 font-mono text-lg font-bold text-emerald-400 shadow-md">
                02
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-4 mb-3">
                We Build the Plan
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Whether you need bookkeeping cleanup, ongoing monthly
                bookkeeping, document organization, administrative support—or
                all three—we create a customized plan built around your
                business.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-start bg-white rounded-2xl border border-slate-100 p-8 shadow-xs">
              <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 font-mono text-lg font-bold text-emerald-400 shadow-md">
                03
              </span>
              <h3 className="font-display text-xl font-bold text-slate-900 mt-4 mb-3">
                We Handle the Work
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Once we're onboard, you can stop worrying about the back office.
                Your books stay current. Your files stay organized. Your
                administrative work gets done. You get your time back.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl border border-slate-100 p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Are your books several months (or years) behind?
                </h4>
                <p className="text-xs text-slate-500">
                  No judgment here. We specialize in catching up overdue
                  accounts quickly.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("/books-cleanup")}
              className="inline-flex items-center justify-center space-x-2 rounded-full bg-slate-900 hover:bg-slate-800 px-5 py-2.5 text-xs font-semibold text-white transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Learn About Books Cleanup</span>
              <ArrowRight className="h-3.5 w-3.5 text-emerald-400" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
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
              <span>Explore Our Services</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 border border-emerald-100">
              <Quote className="h-3.5 w-3.5" />
              <span>What Our Clients Say</span>
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Trusted by Growing Businesses
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
              Hear directly from the clients who rely on IQ-docs for their
              bookkeeping and back-office needs.
            </p>
          </div>

          <div className="relative">
            <div
              ref={scrollRefCallback}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none" }}
            >
              {loopedTestimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="min-w-[85vw] md:min-w-[calc(33.333%-1rem)] snap-center bg-slate-50/60 rounded-2xl border border-slate-100 p-8 hover:border-emerald-200 hover:shadow-md transition-all flex flex-col"
                >
                  <Quote className="h-8 w-8 text-emerald-200 mb-4" />
                  <p className="text-sm leading-relaxed text-slate-600 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-linear-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-500">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Counter + Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className="text-sm font-medium text-slate-500">
                Showing{" "}
                <span className="text-slate-900">{activeIndex + 1}</span> of{" "}
                <span className="text-slate-900">{totalTestimonials}</span>
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={scrollPrev}
                  className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  className="h-10 w-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer shadow-sm"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
