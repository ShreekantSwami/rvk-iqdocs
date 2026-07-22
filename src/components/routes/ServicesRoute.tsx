"use client";

import { useRouter } from "next/navigation";
import Services from "@/iqdocs/pages/Services";
import type { RoutePath } from "@/iqdocs/types";

export default function ServicesRoute() {
  const router = useRouter();
  const handleNavigate = (path: RoutePath) => router.push(path);

  return <Services onNavigate={handleNavigate} />;
}
