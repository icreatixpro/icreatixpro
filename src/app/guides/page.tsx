import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Guides | Expert Tutorials | iCreatixPRO",
  description:
    "Explore step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO to improve rankings and online success.",
  alternates: {
    canonical: "https://icreatixpro.com/guides/",
  },
  openGraph: {
    title: "SEO & Digital Marketing Guides | iCreatixPRO",
    description:
      "Learn practical SEO, AI marketing, and website growth strategies through expert guides from iCreatixPRO.",
    url: "https://icreatixpro.com/guides/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing Guides | iCreatixPRO",
    description:
      "Step-by-step SEO and digital marketing guides from iCreatixPRO experts.",
  },
};

// ⚡ Static caching (rarely changes)
export const revalidate = 86400;

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO & Digital Marketing Guides",
    url: "https://icreatixpro.com/guides/",
    description:
      "Step-by-step SEO, AI marketing, and digital growth guides from iCreatixPRO.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Guides
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              The <strong>iCreatixPRO Guides</strong> section will provide step-by-step tutorials
              to help you master SEO, AI marketing, and digital growth strategies.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What You’ll Learn
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Complete SEO optimization workflows</li>
              <li>AI-powered content strategies</li>
              <li>Website speed and technical SEO fixes</li>
              <li>Growth hacking and marketing systems</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why These Guides Matter
            </h2>

            <p>
              These guides are designed to help beginners and professionals improve
              rankings, traffic, and conversions using proven strategies.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Coming Soon
            </h2>

            <p>
              We are currently preparing detailed SEO and AI marketing guides for release.
            </p>

            <p className="text-sm text-[#1A394E]/60 mt-6">
              Last updated: April 2026
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}