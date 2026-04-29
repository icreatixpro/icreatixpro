import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at iCreatixPRO | Join Digital Growth Team",
  description:
    "Join iCreatixPRO careers team of developers, designers, and SEO experts building AI-powered digital growth solutions and modern web experiences.",
  alternates: {
    canonical: "https://icreatixpro.com/careers/",
  },
  openGraph: {
    title: "Careers at iCreatixPRO | Join Digital Growth Team",
    description:
      "We are hiring developers, designers, and SEO experts to build AI-driven digital growth solutions at iCreatixPRO.",
    url: "https://icreatixpro.com/careers/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at iCreatixPRO",
    description:
      "Join iCreatixPRO and work on AI SEO, web development, and digital growth projects.",
  },
};

// performance caching (good for stable pages)
export const revalidate = 3600;

export default function Page() {
  const lastUpdated = "2026-04-23";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CareerPage",
    name: "Careers at iCreatixPRO",
    url: "https://icreatixpro.com/careers/",
    description:
      "Career opportunities at iCreatixPRO for developers, designers, and SEO experts.",
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
        name: "Careers",
        item: "https://icreatixpro.com/careers/",
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
            Careers
          </h1>

          <div className="space-y-5 text-[#1A394E]/80">

            <p>
              At <strong>iCreatixPRO</strong>, we build AI-powered digital growth solutions
              using modern web technologies, SEO strategies, and creative design systems.
            </p>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              What We Look For
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Next.js / React Developers</li>
              <li>UI/UX Designers with creative mindset</li>
              <li>SEO & Digital Marketing Experts</li>
              <li>Problem solvers focused on growth</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Why Join iCreatixPRO
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Work on real AI SEO & web projects</li>
              <li>Remote-friendly flexible environment</li>
              <li>Modern tech stack (Next.js, AI tools)</li>
              <li>Growth-focused learning culture</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#1A394E]">
              Apply Now
            </h2>

            <p>
              Send your CV and portfolio to{" "}
              <strong>careers@icreatixpro.com</strong>
            </p>

            <p className="text-sm text-[#1A394E]/60 mt-6">
              Last updated: {lastUpdated}
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}