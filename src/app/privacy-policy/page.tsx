import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | iCreatixPRO Data & Security Guide",
  description:
    "Learn how iCreatixPRO collects, uses, and protects your personal data with strong security, privacy practices, and transparent user policies.",
  alternates: {
    canonical: "https://icreatixpro.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | iCreatixPRO Data & Security Guide",
    description:
      "Understand how iCreatixPRO handles user data, privacy protection, cookies usage, and security practices for a safe digital experience.",
    url: "https://icreatixpro.com/privacy-policy/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | iCreatixPRO",
    description:
      "Learn how iCreatixPRO protects your data with secure, transparent, and user-focused privacy policies.",
  },
};

// Performance caching (stable page)
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
            name: "Privacy Policy",
            url: "https://icreatixpro.com/privacy-policy/",
            description:
              "Privacy policy explaining how iCreatixPRO collects, uses, and protects user data securely and transparently.",
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
                name: "Privacy Policy",
                item: "https://icreatixpro.com/privacy-policy/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Privacy Policy
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we respect your privacy and are committed to
              protecting your personal information through transparent data practices.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Information We Collect
            </h2>
            <p>
              We may collect basic information such as contact details, analytics data,
              and usage behavior to improve our services.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              How We Use Data
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Improve website performance and user experience</li>
              <li>Provide personalized content and services</li>
              <li>Analyze traffic using tools like Google Analytics</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Data Protection
            </h2>
            <p>
              We use industry-standard security measures to protect your data from unauthorized access,
              misuse, or disclosure.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Cookies
            </h2>
            <p>
              We use cookies to improve functionality and analyze user behavior.
              You can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be reflected on this page.
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