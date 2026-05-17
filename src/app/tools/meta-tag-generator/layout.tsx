import React from "react";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  title?: string;
};

// =====================================================
// SEO METADATA (CLEAN & FIXED)
// =====================================================
export const metadata: Metadata = {
  title: "Free SEO Meta Tag Generator Tool Online | iCreatixPRO",
  description:
    "Generate SEO meta titles & descriptions instantly with our free online meta tag generator tool. Improve CTR, rankings & SERP preview in seconds.",

  keywords: [
    "meta tag generator",
    "SEO title generator",
    "meta description generator",
    "SEO tools",
    "SERP preview tool",
    "meta tags checker",
    "Google SEO optimization",
    "page title optimizer",
  ],

  // Canonical URL
    alternates: {
      canonical: "/tools/meta-tag-generator",
    },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://icreatixpro.com/tools/meta-tag-generator",
    siteName: "iCreatixPRO",
    title: "SEO Meta Tag Generator Tool | iCreatixPRO",
    description:
      "Generate SEO optimized meta titles and descriptions instantly with real-time preview.",
  },

  twitter: {
    card: "summary_large_image",
    site: "@iCreatixPRO",
    creator: "@iCreatixPRO",
    title: "Free SEO Meta Tag Generator | iCreatixPRO",
    description:
      "Generate SEO optimized meta titles & descriptions with SERP preview and keyword insights.",
  },
};

// =====================================================
// LAYOUT COMPONENT
// =====================================================
const MetaGeneratorLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "iCreatixPRO",
            url: "https://icreatixpro.com",
            logo: "https://icreatixpro.com/logo.png",
            sameAs: [
              "https://www.facebook.com/icreatixpro/",
              "https://x.com/iCreatixPRO",
              "https://www.linkedin.com/company/icreatixpro/",
            ],
          }),
        }}
      />

      {/* JSON-LD: WebApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "SEO Meta Tag Generator",
            url: "https://icreatixpro.com/tools/meta-tag-generator",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            description:
              "Free SEO tool for generating optimized meta titles and descriptions.",
            featureList: [
              "SERP Preview",
              "Meta Title Generator",
              "Meta Description Generator",
              "Keyword Optimization",
            ],
          }),
        }}
      />

      {/* JSON-LD: Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://icreatixpro.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Tools",
                item: "https://icreatixpro.com/tools",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Meta Tag Generator",
                item: "https://icreatixpro.com/tools/meta-tag-generator",
              },
            ],
          }),
        }}
      />

      {/* PAGE LAYOUT */}
      <section className="w-full pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {title && (
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {title}
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Generate SEO optimized meta tags with real-time preview.
              </p>
            </div>
          )}

          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
            <div className="max-w-5xl mx-auto">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetaGeneratorLayout;