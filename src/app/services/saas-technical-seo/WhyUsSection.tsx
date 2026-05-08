// app/services/saas-technical-seo/WhyUsSection.tsx
import Link from "next/link";

export default function WhyUsSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">Why SaaS Companies Choose Us</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="text-3xl">⚙️</div>
            <h3 className="font-bold mt-2">Technical Depth</h3>
            <p className="text-gray-600 text-sm">We understand modern JS frameworks, APIs, and product-led architectures.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl">📈</div>
            <h3 className="font-bold mt-2">Revenue-Focused</h3>
            <p className="text-gray-600 text-sm">We optimize for conversions, not just rankings.</p>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl">🌍</div>
            <h3 className="font-bold mt-2">Global SaaS Experience</h3>
            <p className="text-gray-600 text-sm">Scaling startups in USA, UK, UAE, Europe, Australia.</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          Also explore our{" "}
          <Link href="/services/ai-seo-services" className="text-[#2C727B] underline">AI SEO</Link> and{" "}
          <Link href="/services/geo-optimization-services" className="text-[#2C727B] underline">GEO</Link> services for complete search dominance.
        </div>
      </div>
    </section>
  );
}