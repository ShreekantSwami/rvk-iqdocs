import type { Metadata } from 'next';
import WhyIQDocsRoute from '@/components/routes/WhyIQDocsRoute';
import { siteMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = siteMetadata.why;

export default function Page() {
  return <WhyIQDocsRoute />;
}
