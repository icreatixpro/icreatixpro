// app/services/geo-optimization-services/page.tsx
import HeroSection from "./HeroSection";
import WhatIsGEOSection from "./WhatIsGEOSection";
import ProblemSection from "./ProblemSection";
import ServicesSection from "./ServicesSection";
import HowItWorksSection from "./HowItWorksSection";
import ComparisonSection from "./ComparisonSection";
import PlatformsSection from "./PlatformsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import WhyUsSection from "./WhyUsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export const metadata = {
  title: "Generative Engine Optimization (GEO) Services | AI SEO",
  description:
    "Get cited in ChatGPT, Gemini, Perplexity & Google AI Overviews with GEO optimization. Boost AI visibility, citations & answer engine rankings.",
  keywords: [
    "Generative Engine Optimization",
    "GEO optimization services",
    "Google AI Overview",
    "ChatGPT SEO",
    "Perplexity optimization",
    "AI visibility optimization",
    "AI search optimization",
    "LLM SEO",
    "AI answer engine optimization",
    "Gemini SEO visibility",
    "AI citations",
    "LLM ranking factors",
    "knowledge graph optimization",
    "entity SEO",
  ],
  alternates: {
    canonical: "https://icreatixpro.com/services/geo-optimization-services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Generative Engine Optimization (GEO) Services | AI Visibility Agency",
    description:
      "Dominate AI search results. Get cited in ChatGPT, Perplexity, Gemini & SGE. Free GEO audit for global brands.",
    url: "https://icreatixpro.com/services/geo-optimization-services",
    siteName: "iCreatixPro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Optimization Services | AI Answer Engine Visibility",
    description: "Rank inside AI answers. Free GEO audit available.",
  },
};

export default function GeoOptimizationPage() {
  return (
    <main className="bg-white text-[#1A394E] overflow-x-hidden">
      <HeroSection />
      <WhatIsGEOSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <PlatformsSection />
      <CaseStudiesSection />
      <WhyUsSection />
      <FAQSection />
      <CTASection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Generative Engine Optimization Services",
            description:
              "Professional GEO services for ChatGPT, Perplexity, Gemini and AI search engines.",
            url: "https://icreatixpro.com/services/geo-optimization-services",
            provider: {
              "@type": "Organization",
              name: "iCreatixPro",
              url: "https://icreatixpro.com",
            },
          }),
        }}
      />
    </main>
  );
}