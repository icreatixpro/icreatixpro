// app/dmca/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Policy | Copyright Protection iCreatixPRO",
  description:
    "Learn how iCreatixPRO handles DMCA copyright protection, content removal requests, and intellectual property rights compliance policies.",
  alternates: {
    canonical: "https://icreatixpro.com/dmca/",
  },
  openGraph: {
    title: "DMCA Policy | Copyright Protection iCreatixPRO",
    description:
      "Understand how iCreatixPRO protects intellectual property and handles DMCA takedown requests and copyright claims.",
    url: "https://icreatixpro.com/dmca/",
    siteName: "iCreatixPRO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DMCA Policy | iCreatixPRO",
    description:
      "DMCA policy explaining copyright protection and content removal process at iCreatixPRO.",
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

export default function DMCAPage() {
  const lastUpdated = "May 2026";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DMCA Policy",
    url: "https://icreatixpro.com/dmca/",
    description:
      "DMCA copyright policy of iCreatixPRO explaining content protection and removal procedures.",
    publisher: {
      "@type": "Organization",
      name: "iCreatixPRO",
      url: "https://icreatixpro.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://icreatixpro.com/" },
        { "@type": "ListItem", position: 2, name: "DMCA", item: "https://icreatixpro.com/dmca/" },
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
            DMCA <span className="text-[#2C727B]">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Copyright protection, takedown procedures, and intellectual property rights.
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
              <strong>iCreatixPRO</strong> respects the intellectual property rights of others and expects our users to do the same. 
              We comply with the Digital Millennium Copyright Act (DMCA) and respond promptly to valid notices of alleged copyright infringement.
            </p>
          </div>

          <Section title="1. Copyright Protection">
            <p>
              All content published on iCreatixPRO including text, graphics, logos, images, code, and other materials is the property 
              of iCreatixPRO or its content suppliers and is protected by UAE and international copyright laws. Unauthorized reproduction, 
              distribution, or modification of this content is strictly prohibited.
            </p>
          </Section>

          <Section title="2. DMCA Takedown Process">
            <p>
              If you believe that your copyrighted work has been used or displayed on our website in a way that constitutes copyright infringement, 
              please send a written notice to our designated copyright agent. Your notice must include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>A physical or electronic signature of the copyright owner or authorised representative.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the material that is claimed to be infringing, with sufficient detail to locate it on our site.</li>
              <li>Your contact information (address, telephone number, email).</li>
              <li>A statement that you have a good faith belief that the use is not authorised by the copyright owner.</li>
              <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf.</li>
            </ul>
            <p className="mt-3">
              Send your notice to: <strong className="text-[#2C727B]">icreatixpro@gmail.com</strong>
            </p>
          </Section>

          <Section title="3. Counter-Notice Procedure">
            <p>
              If you believe that material you posted on our site was removed or disabled as a result of a mistake or misidentification, 
              you may file a counter‑notice. Your counter‑notice must include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Your physical or electronic signature.</li>
              <li>Identification of the material that has been removed and its location before removal.</li>
              <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake.</li>
              <li>Your name, address, telephone number, and a statement that you consent to the jurisdiction of the federal court in your district.</li>
            </ul>
            <p className="mt-3">
              Upon receipt of a valid counter‑notice, we will forward it to the original complainant. If we do not receive notice of a court action within 10–14 business days, we may restore the removed material.
            </p>
          </Section>

          <Section title="4. Repeat Infringer Policy">
            <p>
              iCreatixPRO maintains a policy of terminating, in appropriate circumstances, the accounts of users who are repeat infringers. 
              We also reserve the right to remove any content that we believe, in good faith, violates these provisions.
            </p>
          </Section>

          <Section title="5. Contact Information">
            <p>
              For all DMCA-related inquiries, please contact our designated agent:
            </p>
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> icreatixpro@gmail.com</p>
              <p className="text-gray-700 mt-1"><strong>Address:</strong> iCreatixPRO, UK, United Kingdom</p>
              <p className="text-gray-700 mt-1"><strong>Response time:</strong> We aim to respond to all valid notices within 2–3 business days.</p>
            </div>
          </Section>

          {/* Additional Legal Reference */}
          <div className="mt-8 p-5 bg-gray-50 rounded-xl text-center">
            <p className="text-gray-700">
              For other legal information, please review our{" "}
              <Link href="/legal" className="text-[#2C727B] font-semibold hover:underline">Legal Notice</Link>,{" "}
              <Link href="/disclaimer" className="text-[#2C727B] font-semibold hover:underline">Disclaimer</Link>, and{" "}
              <Link href="/cookies" className="text-[#2C727B] font-semibold hover:underline">Cookie Policy</Link>.
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