import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars & Training Sessions | iCreatixPRO Insights",
  description:
    "Join upcoming iCreatixPRO webinars covering SEO strategies, AI marketing insights, and digital growth training sessions for modern businesses.",
  alternates: {
    canonical: "https://icreatixpro.com/webinars/",
  },
  openGraph: {
    title: "Webinars & Training Sessions | iCreatixPRO Insights",
    description:
      "Discover iCreatixPRO webinars on SEO, AI marketing, and digital growth strategies designed for business success.",
    url: "https://icreatixpro.com/webinars/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webinars | iCreatixPRO",
    description:
      "Join SEO and AI marketing webinars hosted by iCreatixPRO for digital growth insights.",
  },
};

// Cache for stable informational page
export const revalidate = 86400; // 24 hours

const LAST_UPDATED = "April 2026";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Webinars",
            url: "https://icreatixpro.com/webinars/",
            description:
              "Webinars and training sessions by iCreatixPRO on SEO and digital marketing.",
            publisher: {
              "@type": "Organization",
              name: "iCreatixPRO",
              url: "https://icreatixpro.com",
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
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
                item: "https://icreatixpro.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Webinars",
                item: "https://icreatixpro.com/webinars/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Webinars
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we host educational webinars focused on SEO,
              AI marketing, and modern digital growth strategies to help businesses scale online.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What You’ll Learn
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Advanced SEO growth strategies</li>
              <li>AI-powered marketing systems</li>
              <li>Technical optimization techniques</li>
              <li>Real-world case study breakdowns</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Upcoming Sessions
            </h2>

            <p>
              Our webinar series is currently being prepared. Stay tuned for live training sessions
              and expert insights.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why Join
            </h2>

            <p>
              Gain practical knowledge, proven strategies, and actionable insights to grow your
              digital presence effectively.
            </p>

            <p className="text-sm text-[#1A394E]/60 mt-6">
              Last updated: {LAST_UPDATED}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}