import type { Metadata } from "next";
import ServicesRoute from "@/components/routes/ServicesRoute";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = siteMetadata.services;

export default function Page() {
  return <ServicesRoute />;
}
