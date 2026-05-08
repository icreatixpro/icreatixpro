// app/services/saas-technical-seo/page.tsx
import HeroSection from "./HeroSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import CoreServicesSection from "./CoreServicesSection";
import ProcessSection from "./ProcessSection";
import ComparisonSection from "./ComparisonSection";
import WhyUsSection from "./WhyUsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";

export const metadata = {
  title: "SaaS Technical SEO Agency | B2B Growth SEO Experts",
  description:
    "Boost SaaS growth with technical SEO for B2B platforms. Fix crawl issues, improve Core Web Vitals & drive scalable organic signups.",
  keywords: [
    "SaaS technical SEO",
    "technical SEO for SaaS",
    "B2B SEO services",
    "SaaS SEO agency",
    "enterprise technical SEO",
    "product-led SEO",
    "SaaS growth marketing",
    "technical SEO for startups",
    "crawl optimization SaaS",
    "Core Web Vitals for SaaS",
  ],
  alternates: {
    canonical: "https://icreatixpro.com/services/saas-technical-seo",
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
    title: "SaaS Technical SEO Services | B2B SEO for High-Growth Platforms",
    description:
      "Drive predictable organic revenue with technical SEO built for SaaS. Free audit for product-led companies.",
    url: "https://icreatixpro.com/services/saas-technical-seo",
    siteName: "iCreatixPro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Technical SEO | Enterprise B2B Growth",
    description: "High-ticket technical SEO for SaaS platforms. Free audit.",
  },
};

export default function SaasTechnicalSeoPage() {
  return (
    <main className="bg-white text-[#1A394E] overflow-x-hidden">
      <HeroSection />
      <WhoThisIsForSection />
      <CoreServicesSection />
      <ProcessSection />
      <ComparisonSection />
      <WhyUsSection />
      <CaseStudiesSection />
      <FAQSection />
      <CTASection />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "SaaS Technical SEO Services",
            description:
              "Enterprise technical SEO services for SaaS startups, B2B platforms, and product-led companies.",
            url: "https://icreatixpro.com/services/saas-technical-seo",
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