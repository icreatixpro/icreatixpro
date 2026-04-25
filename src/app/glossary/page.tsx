import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Marketing Glossary | Digital Terms Explained | iCreatixPRO",
  description:
    "Explore a complete glossary of SEO, AI marketing, and digital growth terms explained simply by iCreatixPRO experts.",
  alternates: {
    canonical: "https://icreatixpro.com/glossary/",
  },
  openGraph: {
    title: "SEO & Marketing Glossary | iCreatixPRO",
    description:
      "Understand SEO, AI, and digital marketing terms with easy explanations from iCreatixPRO experts.",
    url: "https://icreatixpro.com/glossary/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO & Marketing Glossary | iCreatixPRO",
    description:
      "Learn SEO and digital marketing terms in simple language with iCreatixPRO glossary.",
  },
};

// ⚡ Static caching (rarely changes)
export const revalidate = 86400;

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SEO & Marketing Glossary",
    url: "https://icreatixpro.com/glossary/",
    description:
      "A glossary of SEO, AI marketing, and digital growth terms explained by iCreatixPRO.",
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
            Glossary
          </h1>

          <div className="space-y-4 text-[#1A394E]/80">

            <p>
              The <strong>iCreatixPRO Glossary</strong> will help you understand important
              SEO, AI, and digital marketing terms in a simple and practical way.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What You Will Learn
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>SEO terminology explained simply</li>
              <li>AI marketing and automation concepts</li>
              <li>Website optimization terms</li>
              <li>Digital growth and analytics definitions</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why This Matters
            </h2>

            <p>
              Understanding digital marketing terms helps you make better decisions,
              improve SEO strategy, and grow your online presence effectively.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Coming Soon
            </h2>

            <p>
              We are currently building a full interactive glossary with search and filters.
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