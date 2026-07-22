/**
 * Shared types for the IQ-docs application
 */

export type RoutePath =
  | "/"
  | "/services"
  | "/why-IQ-docs"
  | "/books-cleanup"
  | "/contact";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  features: string[];
}
