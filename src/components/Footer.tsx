import Link from 'next/link';
import { ArrowUpRight, Clock, Mail, Phone, ShieldCheck } from 'lucide-react';

const serviceLinks = [
  { label: 'Bookkeeping', href: '/services' },
  { label: 'Document Management', href: '/services' },
  { label: 'Administrative Support', href: '/services' },
  { label: 'QuickBooks Online Cleanup & Catch-Up', href: '/books-cleanup' },
];

const differentiators = [
  { label: 'Accuracy You Can Trust', href: '/why-IQ-docs' },
  { label: 'Personalized Service', href: '/why-IQ-docs' },
  { label: 'Responsive Communication', href: '/why-IQ-docs' },
  { label: 'Local Service / National Standards', href: '/why-IQ-docs' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <ShieldCheck className="h-5.5 w-5.5" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                IQ<span className="text-emerald-400 font-semibold">-docs</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              We help local, growing businesses in Scottsdale and beyond get their books caught up, cleaned up, and kept organized. Friendly, down-to-earth support so you can focus on what you do best.
            </p>
            <div className="flex flex-col space-y-1 text-xs text-slate-400 bg-slate-800/60 p-3 rounded-lg border border-slate-700">
              <p className="text-slate-200 font-semibold flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                Based in Scottsdale, Arizona
              </p>
              <p>Serving local businesses nationwide</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 font-mono">
              Our Services
            </h3>
            <ul className="space-y-4 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors duration-150 flex items-center group">
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-150 ml-1 translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 font-mono">
              Our Differentiators
            </h3>
            <ul className="space-y-4 text-sm">
              {differentiators.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-emerald-400 transition-colors duration-150 text-left">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6 font-mono">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm">
              <a href="mailto:info@iq-docs.com" className="flex items-center space-x-2.5 hover:text-emerald-400 transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>info@iq-docs.com</span>
              </a>
              <div className="flex items-center space-x-2.5">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>(000) 000-0000</span>
              </div>
              <div className="flex items-start space-x-2.5 leading-relaxed">
                <Clock className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                <div>
                  <p className="text-slate-200">Business Hours</p>
                  <p className="text-xs text-slate-400">Monday-Friday 7:00 AM - 7:00 PM (Arizona time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2 leading-relaxed">
          <p className="font-semibold text-slate-300 uppercase tracking-wider font-mono">Legal Disclaimer</p>
          <p>
            IQ-docs provides bookkeeping support, document management, and administrative services for businesses using U.S.-based financial institutions and U.S. dollar (USD) accounts. IQ-docs is not a Certified Public Accounting (CPA) firm and does not provide licensed public accounting services, including audits, attestations, examinations, reviews, certifications, or other services requiring CPA licensure. Our services are intended to support your day-to-day bookkeeping and administrative operations and should not be relied upon as a substitute for professional accounting, tax, or legal advice. IQ-docs is not affiliated with or governed by the American Institute of Certified Public Accountants (AICPA).
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs space-y-4 md:space-y-0">
          <p className="text-slate-500">
            &copy; {currentYear} IQ-docs | Scottsdale, Arizona | iq-docs.com
          </p>
          <div className="flex items-center space-x-6 text-slate-500">
            <Link href="/why-IQ-docs" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/services" className="hover:text-slate-400 transition-colors">Service Terms</Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
