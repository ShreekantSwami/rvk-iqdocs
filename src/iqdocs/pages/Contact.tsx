'use client';

import React, { useState } from 'react';
import { RoutePath } from '../types';
import { 
  Mail, Clock, HelpCircle, ChevronDown, Check, 
  ArrowRight, ShieldCheck, RefreshCw, Send, MapPin 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  onNavigate: (path: RoutePath) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'bookkeeping',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setErrorMessage('Please fill out your name and email address so we can get back to you.');
      return;
    }
    
    setErrorMessage('');
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const faqs = [
    {
      id: 'c-faq-1',
      question: 'What happens after I request a consultation?',
      answer: 'A friendly member of our Houston team will reach out to you within a few business hours. We will schedule a short, pressure-free chat to learn about your business and see how we can help.'
    },
    {
      id: 'c-faq-2',
      question: 'Is the initial consultation really free?',
      answer: 'Yes, absolutely. Our initial chat, bookkeeping review, and flat-rate price estimates are completely free with zero obligation.'
    },
    {
      id: 'c-faq-3',
      question: 'Are my business files kept confidential?',
      answer: 'Yes, 100%. We take client privacy very seriously. We keep all your records private, secure, and protected in our encrypted folders, and we never share your files with anyone.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 md:py-16 md:py-24 lg:py-32 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(40rem_40rem_at_top,var(--color-emerald-50),transparent)] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-slate-800 border border-slate-200 mb-4 sm:mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ready to Simplify Your Business Operations?
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-slate-600">
              Discover how IQ-docs can help you create cleaner records, organized systems, and stress-free bookkeeping support. Schedule a friendly, no-pressure consultation where we'll review your current processes and show you how simple it can be to maintain accurate, well-organized books.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FORM & INFO SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xs font-bold tracking-wider text-slate-600 uppercase font-mono">
                  Get In Touch
                </h2>
                <p className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  We Are Here to Help
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Have a quick question about our bookkeeping help or setup process? Give us a call or send us an email—we are happy to chat!
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                
                {/* Location Card */}
                <div className="flex items-start space-x-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <MapPin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">Location</h4>
                    <p className="mt-1.5 text-base font-bold text-slate-900">Houston, Texas</p>
                    <p className="text-xs text-slate-500 mt-0.5">Serving growing local businesses nationwide</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start space-x-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider">Email Us</h4>
                    <p className="mt-1.5 text-base font-bold text-slate-900">info@iq-docs.com</p>
                    <p className="text-xs text-slate-500 mt-0.5">We reply within a few hours</p>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="flex items-start space-x-4 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Clock className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase font-mono tracking-wider font-mono">Business Hours</h4>
                    <p className="mt-1.5 text-sm font-bold text-slate-900">Monday–Friday 6:00 AM – 6:00 PM (Central Time)</p>
                    <p className="text-xs text-slate-500 mt-0.5">Dedicated local coverage</p>
                  </div>
                </div>

              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/80 flex items-center space-x-3.5">
                <ShieldCheck className="h-6 w-6 text-slate-700 shrink-0" />
                <span className="text-xs font-medium text-slate-600 leading-relaxed">
                  Your business files and banking read-only connections are kept completely secure and private.
                </span>
              </div>
            </div>

            {/* Right Side: Interactive Form Container */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/30 border border-slate-100 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="contact-form-key"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mb-8">
                        <h3 className="font-display text-xl font-bold text-slate-900">Request a Free Consultation</h3>
                        <p className="text-xs text-slate-500 mt-1">Fill out this simple form, and one of our friendly team members will get right back to you.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {errorMessage && (
                          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-medium">
                            {errorMessage}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          {/* Full Name */}
                          <div>
                            <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                              Your Name <span className="text-emerald-500 font-sans">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. John Doe"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Email Address */}
                          <div>
                            <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                              Email Address <span className="text-emerald-500 font-sans">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. john@mybusiness.com"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                          </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          
                          {/* Phone Number */}
                          <div>
                            <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. (555) 123-4567"
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none transition-colors"
                            />
                          </div>

                          {/* Interested Service */}
                          <div>
                            <label htmlFor="service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                              What do you need help with?
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none transition-colors"
                            >
                              <option value="bookkeeping">Bookkeeping</option>
                              <option value="document-management">Document Management</option>
                              <option value="books-cleanup">QuickBooks Online Cleanup & Catch-Up</option>
                              <option value="admin-support">Administrative Support</option>
                            </select>
                          </div>

                        </div>

                        {/* Brief Description */}
                        <div>
                          <label htmlFor="description" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 font-mono">
                            Tell us a little about your business needs
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Let us know how many months behind you might be, or what software you are currently using..."
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full group flex items-center justify-center space-x-2 rounded-xl bg-slate-900 py-4 text-sm font-semibold text-white hover:bg-slate-800 transition-colors cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <RefreshCw className="h-4 w-4 animate-spin text-emerald-400" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-4 w-4 text-emerald-400" />
                              <span>Schedule My Free Consultation</span>
                            </>
                          )}
                        </button>

                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                        <Check className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-2xl font-extrabold text-slate-900">Request Sent!</h3>
                      <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                        Thanks, <span className="font-semibold text-slate-800">{formData.fullName}</span>. We have received your request, and a friendly member of our Houston team will get back to you at <span className="font-semibold text-slate-800">{formData.email}</span> within one business day.
                      </p>
                      
                      <button
                        onClick={() => {
                          setFormData({ fullName: '', email: '', phone: '', service: 'bookkeeping', description: '' });
                          setIsSubmitted(false);
                        }}
                        className="mt-8 text-xs font-bold text-slate-500 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. QUICK FAQs ACCORDION */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-xl border border-slate-150 bg-white overflow-hidden transition-all hover:border-slate-250"
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

    </div>
  );
}
