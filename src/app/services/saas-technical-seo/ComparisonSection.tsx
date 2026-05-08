// app/services/saas-technical-seo/ComparisonSection.tsx
import Link from "next/link";

export default function ComparisonSection() {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">SaaS Technical SEO vs General SEO</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-bold text-gray-700">🌐 General Technical SEO</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ Small to medium sites</li>
              <li>✓ Basic crawl & indexation</li>
              <li>✓ Standard Core Web Vitals</li>
              <li>✓ Generic schema markup</li>
            </ul>
          </div>
          <div className="bg-[#1A394E] p-6 rounded-xl shadow text-white">
            <h3 className="text-2xl font-bold">🚀 SaaS Technical SEO</h3>
            <ul className="mt-4 space-y-2">
              <li>✓ Complex product architectures</li>
              <li>✓ JavaScript frameworks (React, Next.js, Vue)</li>
              <li>✓ Dynamic product pages & faceted navigation</li>
              <li>✓ Advanced schema (product, software app, FAQ)</li>
              <li>✓ International & multi-domain setups</li>
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-gray-600">
          Already have a general technical SEO page? <Link href="/services/technical-seo" className="text-[#2C727B] underline">View here</Link> – this SaaS-specific service is for high-growth B2B.
        </p>
      </div>
    </section>
  );
}