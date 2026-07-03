import type { Metadata } from 'next';

export const siteMetadata = {
  home: {
    title: 'IQ-docs | Friendly, Local Scottsdale Bookkeeping Support',
    description:
      'Professional bookkeeping and receipt organizing for growing businesses in Scottsdale and beyond. Get messy books caught up and ready for your tax preparer.',
  },
  services: {
    title: 'Our Bookkeeping Services | Scottsdale, Arizona - IQ-docs',
    description:
      'Friendly bookkeeping, digital receipt filing, and everyday administrative help built for growing local businesses.',
  },
  why: {
    title: 'Our Story & Core Values | IQ-docs Scottsdale',
    description:
      'Learn how IQ-docs helps local businesses with friendly, accurate bookkeeping, organized cloud folders, and clear reports.',
  },
  cleanup: {
    title: 'Overdue Books Cleanup | Backlog Solutions - IQ-docs',
    description:
      'Untangle years of overdue bookkeeping, unorganized receipts, and bank errors. We get your books clean and ready for your CPA.',
  },
  contact: {
    title: 'Free Consultation | Get in Touch with IQ-docs',
    description:
      'Schedule a friendly, pressure-free chat with our Scottsdale team today to get your business bookkeeping back on track.',
  },
} satisfies Record<string, Metadata>;

export const siteKeywords =
  'bookkeeping, tax preparation, ledger reconciliation, financial restoration, IQ-docs, QuickBooks cleanup, executive admin, family office support';
