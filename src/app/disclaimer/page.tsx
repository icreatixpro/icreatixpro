// app/disclaimer/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | iCreatixPRO Legal & Usage Information",
  description:
    "Read the disclaimer of iCreatixPRO outlining website content usage, accuracy limits, and liability terms for users and visitors.",
  alternates: {
    canonical: "https://icreatixpro.com/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | iCreatixPRO Legal & Usage Information",
    description:
      "Understand the disclaimer of iCreatixPRO including content accuracy, liability limits, and website usage terms for visitors.",
    url: "https://icreatixpro.com/disclaimer/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | iCreatixPRO",
    description:
      "Important disclaimer explaining usage terms, content accuracy, and liability limitations of iCreatixPRO.",
  },
};

export const revalidate = 86400;

// Helper component for consistent sections
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-xl md:text-2xl font-semibold text-[#1A394E] mb-3">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default function DisclaimerPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer",
    url: "https://icreatixpro.com/disclaimer/",
    description:
      "Disclaimer page of iCreatixPRO explaining content usage, accuracy, and liability terms.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Disclaimer", item: "https://icreatixpro.com/disclaimer/" },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-6 md:pt-28 md:pb-20 bg-gradient-to-br from-[#1A394E] via-[#2C727B] to-[#1A394E]">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Legal <span className="text-[#2C727B]">Disclaimer</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Important information about the use of our website, content accuracy, and liability limitations.
          </p>
          <p className="mt-2 text-sm text-gray-300">Last updated: {lastUpdated}</p>
        </div>
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Main Content Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
          
          {/* Introduction */}
          <div className="bg-gray-50 rounded-xl p-5 mb-8 border-l-4 border-[#2C727B]">
            <p className="text-gray-700">
              The information provided by <strong>iCreatixPRO</strong> on this website is for general informational purposes only. 
              While we strive for accuracy, we make no guarantees about completeness, reliability, or suitability of the information 
              for any particular purpose. Your use of this site is subject to the terms below.
            </p>
          </div>

          <Section title="1. No Professional Advice">
            <p>
              Content on this website, including blog posts, case studies, service descriptions, and other materials, 
              is for informational and educational purposes only. It does not constitute professional legal, financial, 
              or technical advice. Always consult a qualified expert before making decisions based on information found on this site.
            </p>
          </Section>

          <Section title="2. External Links Disclaimer">
            <p>
              iCreatixPRO may contain links to external websites that are not operated or controlled by us. 
              We have no control over the content, privacy policies, or practices of any third‑party sites. 
              We do not endorse or assume any responsibility for the accuracy or reliability of information found on external websites. 
              Your interactions with such sites are solely at your own risk.
            </p>
          </Section>

          <Section title="3. Limitation of Liability">
            <p>
              In no event shall iCreatixPRO, its owners, employees, or affiliates be liable for any direct, indirect, incidental, 
              consequential, or punitive damages arising out of your access to, use of, or inability to use this website, 
              or any errors or omissions in the content. This includes, without limitation, loss of data, revenue, or reputation, 
              even if we have been advised of the possibility of such damages.
            </p>
          </Section>

          <Section title="4. No Guarantees of Results">
            <p>
              Any case studies, testimonials, or performance metrics shared on this website represent past results achieved for specific clients 
              under unique circumstances. They do not guarantee future results for your business. Individual outcomes may vary based on 
              industry, competition, website condition, and other factors beyond our control.
            </p>
          </Section>

          <Section title="5. Policy Updates">
            <p>
              We reserve the right to modify this Disclaimer at any time without prior notice. Any changes will be effective immediately 
              upon posting on this page. We encourage you to review this page periodically for updates. Your continued use of the website 
              after any changes constitutes acceptance of the revised Disclaimer.
            </p>
          </Section>

          {/* Contact & Legal Links */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              For questions about this Disclaimer or our legal policies, please{" "}
              <Link href="/contact" className="text-[#2C727B] font-semibold hover:underline">contact us</Link>.
              Also review our <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">Cookie Policy</Link> and{" "}
              <Link href="/legal" className="text-[#2C727B] font-semibold hover:underline">Legal Notice</Link>.
            </p>
          </div>
        </div>

        {/* Footer internal links (only approved URLs) */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 text-sm text-gray-400 border-t border-gray-200 mt-8">
          <Link href="/" className="hover:text-[#2C727B] transition-colors">Home</Link>
          <span className="text-gray-300">|</span>
          <Link href="/about" className="hover:text-[#2C727B] transition-colors">About</Link>
          <span className="text-gray-300">|</span>
          <Link href="/services" className="hover:text-[#2C727B] transition-colors">Services</Link>
          <span className="text-gray-300">|</span>
          <Link href="/contact" className="hover:text-[#2C727B] transition-colors">Contact</Link>
        </div>
      </div>
    </main>
  );
}