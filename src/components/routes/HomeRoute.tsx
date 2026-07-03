'use client';

import { useRouter } from 'next/navigation';
import Home from '@/iqdocs/pages/Home';
import type { RoutePath } from '@/iqdocs/types';

export default function HomeRoute() {
  const router = useRouter();
  const handleNavigate = (path: RoutePath) => router.push(path);

  return <Home onNavigate={handleNavigate} />;
}
