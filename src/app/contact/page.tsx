import type { Metadata } from 'next';
import ContactRoute from '@/components/routes/ContactRoute';
import { siteMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = siteMetadata.contact;

export default function Page() {
  return <ContactRoute />;
}
