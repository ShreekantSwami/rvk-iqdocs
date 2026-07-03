import type { Metadata } from 'next';
import BooksCleanupRoute from '@/components/routes/BooksCleanupRoute';
import { siteMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = siteMetadata.cleanup;

export default function Page() {
  return <BooksCleanupRoute />;
}
