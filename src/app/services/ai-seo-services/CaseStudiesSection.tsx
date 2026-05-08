// app/services/ai-seo-services/CaseStudiesSection.tsx
import Link from "next/link";

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "SaaS Platform (USA)",
      before: "Organic traffic: 8k/mo, zero AI citations",
      after: "189% traffic growth, cited by ChatGPT for 15+ keywords",
      metrics: "+189% traffic | +4.2x AI visibility",
    },
    {
      title: "E-commerce Brand (UAE)",
      before: "Low AI search presence, 2% CTR from SGE",
      after: "97% increase in AI search visibility, +44% revenue",
      metrics: "+97% AI visibility | +44% revenue",
    },
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">
          Real Results: Before & After
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="border rounded-xl p-5 bg-[#F9FAFB]">
              <h3 className="font-bold text-xl">{c.title}</h3>
              <div className="mt-3 text-sm">
                <div className="text-red-600">Before: {c.before}</div>
                <div className="text-green-600 mt-1">After: {c.after}</div>
                <div className="mt-2 font-semibold text-[#2C727B]">{c.metrics}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="https://icreatixpro.com/blogs/future-of-seo" className="text-[#2C727B] underline">
            Read AI SEO Blog →
          </Link>
        </div>
      </div>
    </section>
  );
}