'use client';

import { useRouter } from 'next/navigation';
import WhyIQDocs from '@/iqdocs/pages/WhyIQDocs';
import type { RoutePath } from '@/iqdocs/types';

export default function WhyIQDocsRoute() {
  const router = useRouter();
  const handleNavigate = (path: RoutePath) => router.push(path);

  return <WhyIQDocs onNavigate={handleNavigate} />;
}
