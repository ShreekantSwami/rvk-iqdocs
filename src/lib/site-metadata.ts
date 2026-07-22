import type { Metadata } from 'next';

export const siteMetadata = {
  home: {
    title: 'IQ-docs | Helping businesses save time, stay compliant, and make smarter financial decisions',
    description:
      'Behind on your bookkeeping? We\'ll get your books back on track, organize your paperwork, and take care of your back-office administration—so you can get back to running your business with confidence.',
  },
  services: {
    title: 'Premium Bookkeeping & Business Support | Houston, Texas - IQ-docs',
    description:
      'Simplify your operations with professional bookkeeping and dedicated back-office support tailored to your business. We keep your accounts accurate, your records organized, and your day-to-day administration running seamlessly.',
  },
  why: {
    title: 'Our Story & Core Values | IQ-docs Houston',
    description:
      'Learn how IQ-docs helps Houston businesses with friendly, accurate bookkeeping, organized cloud folders, and clear reports.',
  },
  cleanup: {
    title: 'QuickBooks Online Cleanup & Catch-Up | IQ-docs Houston',
    description:
      'No matter how far behind your books may be, IQ-docs has the expertise to clean up complex accounts, resolve backlogs, and deliver accurate, organized records ready for a seamless CPA handoff.',
  },
  contact: {
    title: 'Free Consultation | Get in Touch with IQ-docs',
    description:
      'Schedule a friendly, pressure-free chat with our Houston team today to get your business bookkeeping back on track.',
  },
} satisfies Record<string, Metadata>;

export const siteKeywords =
  'bookkeeping, tax preparation, ledger reconciliation, financial restoration, IQ-docs, QuickBooks cleanup, executive admin, family office support, Houston bookkeeping';