import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy | iCreatixPRO Website Usage Guide",
  description:
    "Learn how iCreatixPRO uses cookies to enhance experience, track analytics, and improve website performance for better user interactions.",
  alternates: {
    canonical: "https://icreatixpro.com/cookies/",
  },
  openGraph: {
    title: "Cookies Policy | iCreatixPRO Website Usage Guide",
    description:
      "Understand how iCreatixPRO uses cookies for analytics, personalization, and improving website performance across all devices.",
    url: "https://icreatixpro.com/cookies/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | iCreatixPRO",
    description:
      "Learn how iCreatixPRO uses cookies to improve experience, analytics, and website performance securely.",
  },
};

// Performance caching (SEO + speed)
export const revalidate = 86400;

export default function Page() {
  const lastUpdated = "April 2026";

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#f0f7f6] to-white py-24 px-6">

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cookies Policy",
            url: "https://icreatixpro.com/cookies/",
            description:
              "Cookies policy explaining how iCreatixPRO uses cookies for analytics, personalization, and performance improvement.",
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
                name: "Cookies Policy",
                item: "https://icreatixpro.com/cookies/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Cookies Policy
          </h1>

          <div className="space-y-4 text-[#1A394E]/70">

            <p>
              This Cookies Policy explains how <strong>iCreatixPRO</strong> uses cookies
              and similar technologies to improve browsing experience and website performance.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device to help websites remember
              preferences and enhance user experience.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              How We Use Cookies
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Analyze website traffic and user behavior</li>
              <li>Improve website performance and speed</li>
              <li>Provide personalized user experience</li>
              <li>Support analytics tools like Google Analytics</li>
            </ul>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              Managing Cookies
            </h2>
            <p>
              You can disable cookies in your browser settings, but some features
              may not function properly without them.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              Third-Party Cookies
            </h2>
            <p>
              We may use third-party services that place cookies to analyze performance
              and improve user experience.
            </p>

            <h2 className="text-lg font-semibold text-[#1A394E]">
              Policy Updates
            </h2>
            <p>
              This policy may be updated from time to time. Please review it regularly.
            </p>

            <p className="text-sm mt-6 text-[#1A394E]/60">
              Last updated: {lastUpdated}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}