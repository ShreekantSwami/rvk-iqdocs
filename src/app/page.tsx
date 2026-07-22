import type { Metadata } from "next";
import HomeRoute from "@/components/routes/HomeRoute";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = siteMetadata.home;

export default function Page() {
  return <HomeRoute />;
}
