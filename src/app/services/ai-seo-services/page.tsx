// app/services/ai-seo-services/page.tsx
import HeroSection from "./HeroSection";
import TrustSection from "./TrustSection";
import ServicesSection from "./ServicesSection";
import DeliverablesSection from "./DeliverablesSection";
import SearchIntentSection from "./SearchIntentSection";
import ProcessSection from "./ProcessSection";
import ComparisonSection from "./ComparisonSection";
import WhyAIIsFutureSection from "./WhyAIIsFutureSection";
import HowItWorksSection from "./HowItWorksSection";
import CaseStudiesSection from "./CaseStudiesSection";
import TrustExpansionSection from "./TrustExpansionSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export const metadata = {
  title: "AI SEO Services | Rank on Google & AI Search",
  description:
    "Top AI SEO services for Google, ChatGPT, Perplexity & Gemini. Trusted agency offering GEO optimization, AI visibility & free SEO audit.",
  keywords: [
    "AI SEO services",
    "AI SEO agency",
    "GEO optimization",
    "AI search optimization",
    "ChatGPT SEO",
    "Google AI search",
    "generative engine optimization",
    "AI SEO expert",
    "AI SEO company",
    "SEO for ChatGPT",
    "AI ranking optimization",
    "LLM SEO",
    "AI search ranking factors",
  ],
  alternates: {
    canonical: "https://icreatixpro.com/services/ai-seo-services",
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
    title: "AI SEO Services | Rank on Google & ChatGPT | Global AI Agency",
    description:
      "Dominate Google, ChatGPT, Perplexity with our AI SEO & GEO strategies. Free audit for global brands.",
    url: "https://icreatixpro.com/services/ai-seo-services",
    siteName: "iCreatixPro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Services | Global AI Visibility Experts",
    description: "Rank on AI search engines. Free audit available.",
  },
};

export default function AiSeoServicesPage() {
  return (
    <main className="bg-white text-[#1A394E] overflow-x-hidden">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <DeliverablesSection />
      <SearchIntentSection />
      <ProcessSection />
      <ComparisonSection />
      <WhyAIIsFutureSection />
      <HowItWorksSection />
      <CaseStudiesSection />
      <TrustExpansionSection />
      <FAQSection />
      <CTASection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "AI SEO Services",
            description:
              "Professional AI SEO and Generative Engine Optimization services for global clients.",
            url: "https://icreatixpro.com/services/ai-seo-services",
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