"use client";

import { useRouter } from "next/navigation";
import BooksCleanup from "@/iqdocs/pages/BooksCleanup";
import type { RoutePath } from "@/iqdocs/types";

export default function BooksCleanupRoute() {
  const router = useRouter();
  const handleNavigate = (path: RoutePath) => router.push(path);

  return <BooksCleanup onNavigate={handleNavigate} />;
}
