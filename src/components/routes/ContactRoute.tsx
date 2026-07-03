'use client';

import { useRouter } from 'next/navigation';
import Contact from '@/iqdocs/pages/Contact';
import type { RoutePath } from '@/iqdocs/types';

export default function ContactRoute() {
  const router = useRouter();
  const handleNavigate = (path: RoutePath) => router.push(path);

  return <Contact onNavigate={handleNavigate} />;
}
