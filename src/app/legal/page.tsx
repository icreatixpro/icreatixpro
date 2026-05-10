// app/legal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Notice | iCreatixPRO – Imprint & Legal Information",
  description:
    "Legal notice, company information, disclaimer, and intellectual property rights for iCreatixPRO, a Dubai-based AI SEO and digital marketing agency.",
  alternates: {
    canonical: "https://icreatixpro.com/legal/",
  },
  openGraph: {
    title: "Legal Notice | iCreatixPRO",
    description:
      "Official legal notice for iCreatixPRO – company details, liability disclaimer, and governing law information.",
    url: "https://icreatixpro.com/legal/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Notice | iCreatixPRO",
    description: "Legal information and imprint for iCreatixPRO.",
  },
};

export const revalidate = 86400;

// Helper component for cleaner code
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-6">
    <h2 className="text-xl md:text-2xl font-semibold text-[#1A394E] mb-3">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

export default function LegalPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Legal Notice",
    url: "https://icreatixpro.com/legal/",
    description:
      "Legal notice, imprint, and disclaimer for iCreatixPRO, a Dubai-based digital marketing agency.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "Legal Notice", item: "https://icreatixpro.com/legal/" },
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
            Legal <span className="text-[#2C727B]">Notice</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Imprint, company information, and legal disclosures for iCreatixPRO.
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
          
          {/* Company Address Block */}
          <div className="bg-gray-50 rounded-xl p-5 mb-8 border-l-4 border-[#2C727B]">
            <h2 className="text-xl font-bold text-[#1A394E] mb-2">iCreatixPRO – Company Information</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Registered Office:</strong> UK, United Kingdom</p>
              <p><strong>Email:</strong> <a href="mailto:icreatixpro@gmail.com.com" className="text-[#2C727B] hover:underline">icreatixpro@gmail.com</a></p>
              <p><strong>Legal Representative:</strong> Imdad Malik</p>
              <p><strong>Commercial Registration:</strong> Issued in UK</p>
            </div>
          </div>

          <Section title="1. Intellectual Property">
            <p>
              All content, text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software on this website are the exclusive property of <strong>iCreatixPRO</strong> or its content suppliers and are protected by UAE and international copyright laws. Unauthorized reproduction, distribution, modification, or republication of any content is strictly prohibited without prior written consent.
            </p>
          </Section>

          <Section title="2. Disclaimer of Liability">
            <p>
              The information provided on this website is for general informational purposes only. While we strive to keep the information up‑to‑date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
            </p>
            <p className="mt-3">
              In no event will iCreatixPRO be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising out of or in connection with the use of this website.
            </p>
          </Section>

          <Section title="3. External Links">
            <p>
              Our website may contain links to external websites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies or terms. The inclusion of any link does not necessarily imply a recommendation or endorsement of the views expressed within them.
            </p>
          </Section>

          <Section title="4. Data Protection & Privacy">
            <p>
              iCreatixPRO is committed to protecting your personal data. Our use of cookies and collection of personal information are governed by our <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">Cookie Policy</Link>. For full details on how we process your data, please refer to our <span className="text-gray-500">Privacy Policy</span> (available upon request).
            </p>
          </Section>

          <Section title="5. Governing Law">
            <p>
              These terms and your use of this website shall be governed by and construed in accordance with the laws of the <strong>Dubai International Financial Centre (DIFC)</strong> and the applicable federal laws of the United Arab Emirates. Any dispute arising from or relating to the use of this website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </Section>

          <Section title="6. Changes to This Legal Notice">
            <p>
              We reserve the right to update or modify this Legal Notice at any time without prior notice. Any changes will be effective immediately upon posting on this page. We encourage you to review this page periodically for any updates.
            </p>
          </Section>

          {/* Contact for Legal Inquiries */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              For legal inquiries or to request permission for content use, please contact us via our{" "}
              <Link href="/contact" className="text-[#2C727B] font-semibold hover:underline">contact page</Link>.
            </p>
          </div>
        </div>

        {/* Footer links – only approved URLs */}
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