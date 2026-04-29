import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | iCreatixPRO Reviews & Feedback",
  description:
    "Read client testimonials and feedback about iCreatixPRO SEO, web development, and digital growth services delivering real business results.",
  alternates: {
    canonical: "https://icreatixpro.com/testimonials/",
  },
  openGraph: {
    title: "Client Testimonials | iCreatixPRO Reviews & Feedback",
    description:
      "Explore real client testimonials and success feedback from businesses using iCreatixPRO digital marketing and SEO services.",
    url: "https://icreatixpro.com/testimonials/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Testimonials | iCreatixPRO",
    description:
      "See what clients say about iCreatixPRO SEO, web development, and growth services.",
  },
};

// Performance caching
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
            name: "Testimonials",
            url: "https://icreatixpro.com/testimonials/",
            description:
              "Client testimonials and feedback for iCreatixPRO services.",
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
                name: "Testimonials",
                item: "https://icreatixpro.com/testimonials/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Testimonials
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we value client feedback and real-world results.
              Our testimonials reflect the impact of our SEO, web development, and digital growth strategies.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What Clients Say
            </h2>

            <p>
              We are currently collecting detailed testimonials from clients across different industries
              to showcase real performance improvements and success stories.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why Clients Trust Us
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Proven SEO ranking improvements</li>
              <li>AI-powered growth strategies</li>
              <li>Transparent communication</li>
              <li>Measurable business results</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Coming Soon
            </h2>

            <p>
              Real client testimonials and success stories will be published here soon.
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