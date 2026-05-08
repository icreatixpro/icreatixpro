// app/services/geo-optimization-services/WhyUsSection.tsx
import Link from "next/link";

export default function WhyUsSection() {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A394E]">Why Choose Us for GEO?</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-lg">
            <div className="text-3xl">🎯</div>
            <h3 className="font-bold mt-2">AI-First SEO Agency</h3>
            <p className="text-gray-600 text-sm">Specialized only in AI & GEO strategies.</p>
          </div>
          <div className="p-5 bg-white rounded-lg">
            <div className="text-3xl">🔬</div>
            <h3 className="font-bold mt-2">GEO Specialists</h3>
            <p className="text-gray-600 text-sm">We understand LLM ranking factors deeply.</p>
          </div>
          <div className="p-5 bg-white rounded-lg">
            <div className="text-3xl">🌍</div>
            <h3 className="font-bold mt-2">Global Expertise</h3>
            <p className="text-gray-600 text-sm">Clients in USA, UK, UAE, Europe, Australia.</p>
          </div>
        </div>
        <div className="mt-6 text-sm text-gray-500">
          Also offering <Link href="/services/ai-seo-services" className="text-[#2C727B] underline">AI SEO Services</Link> for complete search dominance.
        </div>
      </div>
    </section>
  );
}