import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebooks & Free SEO Guides | iCreatixPRO",
  description:
    "Download free ebooks and expert SEO guides from iCreatixPRO covering AI SEO, digital marketing, and website growth strategies.",
  alternates: {
    canonical: "https://icreatixpro.com/ebooks/",
  },
  openGraph: {
    title: "Ebooks & Free SEO Guides | iCreatixPRO",
    description:
      "Explore free ebooks from iCreatixPRO on SEO, AI marketing, and digital growth strategies for better rankings and traffic.",
    url: "https://icreatixpro.com/ebooks/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebooks & SEO Guides | iCreatixPRO",
    description:
      "Download free SEO ebooks and digital marketing guides from iCreatixPRO.",
  },
};

// ✅ Performance caching (static content)
export const revalidate = 86400; // 24 hours

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Ebooks & SEO Guides",
            url: "https://icreatixpro.com/ebooks/",
            description:
              "Free ebooks and SEO guides from iCreatixPRO covering AI SEO, digital marketing, and growth strategies.",
            publisher: {
              "@type": "Organization",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
            },
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Ebooks
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              Our <strong>iCreatixPRO</strong> ebooks section is coming soon, featuring
              practical SEO guides, AI marketing strategies, and digital growth playbooks.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What You’ll Get
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Step-by-step SEO growth guides</li>
              <li>AI-powered marketing strategies</li>
              <li>Website optimization checklists</li>
              <li>Case study breakdowns</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Stay Updated
            </h2>

            <p>
              Subscribe to our newsletter to get notified when new ebooks are released.
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