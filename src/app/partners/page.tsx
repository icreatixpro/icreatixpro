import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners & Collaborations | Growth Network | iCreatixPRO",
  description:
    "Discover iCreatixPRO partners and collaborations driving SEO innovation, AI marketing solutions, and digital growth strategies.",
  alternates: {
    canonical: "https://icreatixpro.com/partners/",
  },
  openGraph: {
    title: "Partners & Collaborations | iCreatixPRO",
    description:
      "Explore our trusted partners helping deliver AI SEO, marketing automation, and digital growth solutions at iCreatixPRO.",
    url: "https://icreatixpro.com/partners/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partners | iCreatixPRO",
    description:
      "Meet the partners powering AI SEO and digital growth solutions at iCreatixPRO.",
  },
};

// ⚡ Static caching (rarely changes)
export const revalidate = 86400;

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Partners & Collaborations",
    url: "https://icreatixpro.com/partners/",
    description:
      "Official partners and collaborations of iCreatixPRO in SEO, AI marketing, and digital growth.",
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
            Partners
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we collaborate with industry-leading partners
              to deliver high-quality SEO, AI marketing, and digital growth solutions.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Our Collaboration Areas
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>SEO tools and analytics platforms</li>
              <li>AI marketing technology providers</li>
              <li>Web development and hosting services</li>
              <li>Digital growth and automation partners</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why We Partner
            </h2>

            <p>
              Partnerships help us deliver better performance, stronger SEO results,
              and advanced AI-powered marketing solutions to our clients.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Coming Soon
            </h2>

            <p>
              We are currently onboarding strategic partners to expand our digital ecosystem.
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