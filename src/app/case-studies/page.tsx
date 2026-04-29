import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | SEO & Growth Results iCreatixPRO",
  description:
    "Explore SEO growth case studies from iCreatixPRO showing AI strategies, rankings improvements, and digital marketing success results.",
  alternates: {
    canonical: "https://icreatixpro.com/case-studies/",
  },
  openGraph: {
    title: "Case Studies | SEO & Growth Results iCreatixPRO",
    description:
      "Real SEO case studies from iCreatixPRO showing AI-driven strategies, rankings boosts, and marketing success stories.",
    url: "https://icreatixpro.com/case-studies/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | iCreatixPRO",
    description:
      "SEO and digital growth success stories powered by AI strategies from iCreatixPRO.",
  },
};

// Performance caching (important for SEO pages)
export const revalidate = 86400; // 24h

export default function Page() {
  const lastUpdated = "2026-04-23";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies",
    url: "https://icreatixpro.com/case-studies/",
    description:
      "SEO and digital marketing case studies from iCreatixPRO showing real growth results.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://icreatixpro.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://icreatixpro.com/case-studies/",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Case Studies
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we focus on measurable SEO and digital growth results.
            </p>

            <p className="text-sm mt-6">
              Last updated: {lastUpdated}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}