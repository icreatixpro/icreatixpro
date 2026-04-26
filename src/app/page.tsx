import type { Metadata } from "next";

import Hero from "@/components/Hero"
import Trusted from "@/components/Trusted"
import Services from "@/components/Services"
import ToolsRibbon from "@/components/ToolsRibbon"
import Results from "@/components/Results"
import Features from "@/components/Features"
import Process from "@/components/Process"
import Pricing from "@/components/Pricing"
import CaseStudies from "@/components/CaseStudies"
import BlogSectionNew from "@/components/BlogSectionNew"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"
import ScrollToTop from "@/components/ScrollToTop"

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
      <Trusted />
      <Services />
      <ToolsRibbon />
      <Results />
      <Features />
      <Process />
      <Pricing />
      <CaseStudies />
      <BlogSectionNew />
      <Testimonials />
      <FAQ />
      <CTA />
      <FloatingWhatsApp />
      <ScrollToTop />
    </main>
  )
}