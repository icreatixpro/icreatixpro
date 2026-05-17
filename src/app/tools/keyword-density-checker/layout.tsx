import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Keyword Density Checker | Free SEO Tool | iCreatixPRO",
  description:
    "Analyze keyword frequency, keyword density, SEO score, and content optimization with our free keyword density checker tool.",
    
    keywords: [
    "keyword density checker",
    "seo keyword density tool",
    "free keyword density analyzer",
    "on page seo checker",
    "keyword stuffing checker",
    "seo content optimization tool",
    "keyword frequency checker",
    "seo score checker tool",
    "blog seo analyzer",
    "icreatixpro seo tools",
  ],
  alternates: {
    canonical:
      "https://icreatixpro.com/tools/keyword-density-checker",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* =========================
          SOFTWARE APPLICATION SCHEMA
      ========================= */}
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Keyword Density Checker",
            applicationCategory: "SEO Tool",
            operatingSystem: "All",
            description:
              "Free keyword density checker tool for SEO analysis, keyword frequency, keyword stuffing detection, and content optimization.",
            url: "https://icreatixpro.com/tools/keyword-density-checker",
            publisher: {
              "@type": "Organization",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
            },
          }),
        }}
      />

      {/* =========================
          FAQ SCHEMA
      ========================= */}
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is keyword density?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Keyword density is the percentage of times a keyword appears in content compared to total words.",
                },
              },
              {
                "@type": "Question",
                name: "What is ideal keyword density?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "The ideal keyword density is between 1% and 2.5% for SEO-friendly content.",
                },
              },
              {
                "@type": "Question",
                name: "Does keyword density affect SEO?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, keyword density helps search engines understand content relevance, but overuse can harm rankings.",
                },
              },
              {
                "@type": "Question",
                name: "Can this tool detect keyword stuffing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, the tool highlights high-density keywords to help avoid keyword stuffing.",
                },
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}