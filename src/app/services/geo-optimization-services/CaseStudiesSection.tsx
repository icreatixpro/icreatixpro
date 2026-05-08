// app/services/geo-optimization-services/CaseStudiesSection.tsx
import Link from "next/link";

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "SaaS Brand (USA)",
      before: "Zero AI citations, low visibility",
      after: "Cited in ChatGPT for 15+ queries, +189% traffic",
    },
    {
      title: "E-commerce (UAE)",
      before: "No presence in Perplexity/Gemini",
      after: "+97% AI visibility, +44% revenue",
    },
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">GEO Success Stories</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="border rounded-xl p-5 bg-[#F9FAFB]">
              <h3 className="font-bold text-xl">{c.title}</h3>
              <div className="mt-2 text-sm text-red-600">Before: {c.before}</div>
              <div className="text-sm text-green-600">After: {c.after}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="https://icreatixpro.com/blogs/future-of-seo" className="text-[#2C727B] underline">Read AI SEO Blog →</Link>
        </div>
      </div>
    </section>
  );
}