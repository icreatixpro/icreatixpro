import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Hero remains static (above the fold – critical)
import Hero from "@/components/Hero";

// All below‑fold components are dynamically imported
const Trusted = dynamic(() => import("@/components/Trusted"));
const Services = dynamic(() => import("@/components/Services"));
const ToolsRibbon = dynamic(() => import("@/components/ToolsRibbon"));
const Results = dynamic(() => import("@/components/Results"));
const Features = dynamic(() => import("@/components/Features"));
const Process = dynamic(() => import("@/components/Process"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const CaseStudies = dynamic(() => import("@/components/CaseStudies"));
const BlogSectionNew = dynamic(() => import("@/components/BlogSectionNew"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));
const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"));  // removed { ssr: false }
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"));           // removed { ssr: false }

// Optional: Simple loading fallback
const LoadingFallback = () => (
  <div className="h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#2C727B] border-t-transparent rounded-full animate-spin" />
  </div>
);

export const metadata: Metadata = {
  title: "AI SEO Agency for Google & AI Growth | iCreatixPRO",
  description:
    "Rank higher on Google & AI search with advanced SEO, AEO and GEO strategies. Drive targeted traffic, leads and business growth through smart optimization.",
  alternates: {
    canonical: "https://icreatixpro.com",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<LoadingFallback />}><Trusted /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Services /></Suspense>
      <Suspense fallback={<LoadingFallback />}><ToolsRibbon /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Results /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Features /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Process /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Pricing /></Suspense>
      <Suspense fallback={<LoadingFallback />}><CaseStudies /></Suspense>
      <Suspense fallback={<LoadingFallback />}><BlogSectionNew /></Suspense>
      <Suspense fallback={<LoadingFallback />}><Testimonials /></Suspense>
      <Suspense fallback={<LoadingFallback />}><FAQ /></Suspense>
      <Suspense fallback={<LoadingFallback />}><CTA /></Suspense>
      <Suspense fallback={null}><FloatingWhatsApp /></Suspense>
      <Suspense fallback={null}><ScrollToTop /></Suspense>
    </main>
  );
}