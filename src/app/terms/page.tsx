import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | iCreatixPRO Legal Guide",
  description:
    "Read iCreatixPRO terms and conditions covering website usage, legal rights, user responsibilities, and platform policies for safe usage.",
  alternates: {
    canonical: "https://icreatixpro.com/terms/",
  },
  openGraph: {
    title: "Terms & Conditions | iCreatixPRO Legal Guide",
    description:
      "Understand iCreatixPRO terms of use, legal policies, and user responsibilities when accessing our website and services.",
    url: "https://icreatixpro.com/terms/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | iCreatixPRO",
    description:
      "Read iCreatixPRO terms, legal guidelines, and usage policies for safe platform access.",
  },
};

// Cache for stable legal page
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
            name: "Terms & Conditions",
            url: "https://icreatixpro.com/terms/",
            description:
              "Terms and conditions for using iCreatixPRO services and website.",
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
                name: "Terms & Conditions",
                item: "https://icreatixpro.com/terms/",
              },
            ],
          }),
        }}
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/60">

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A394E] mb-6 capitalize">
            Terms & Conditions
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              By using <strong>iCreatixPRO</strong>, you agree to comply with the following
              terms and conditions that govern your access and use of our website and services.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Use of Website
            </h2>
            <p>
              You agree to use our website only for lawful purposes and in a way that does not
              harm, disable, or impair the platform.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Intellectual Property
            </h2>
            <p>
              All content, branding, and materials on this website are owned by iCreatixPRO
              and protected by copyright laws.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              User Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Do not misuse website content or services</li>
              <li>Do not attempt unauthorized access</li>
              <li>Respect platform rules and policies</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Limitation of Liability
            </h2>
            <p>
              iCreatixPRO is not liable for any damages resulting from the use or inability
              to use our website or services.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Changes to Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of the website
              means you accept the updated terms.
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