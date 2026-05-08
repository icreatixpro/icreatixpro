// app/services/saas-technical-seo/CaseStudiesSection.tsx
import Link from "next/link";

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "B2B SaaS Platform (USA)",
      before: "Slow core web vitals, 40% pages not indexed",
      after: "LCP improved by 52%, 95% indexation rate, +120% organic traffic",
    },
    {
      title: "Product-Led Growth Startup (UAE)",
      before: "JavaScript rendering issues, poor crawl budget",
      after: "Crawl efficiency up 3x, +67% signups from organic",
    },
  ];
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">SaaS Technical SEO Results</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-bold text-xl">{c.title}</h3>
              <div className="mt-2 text-sm text-red-600">Before: {c.before}</div>
              <div className="text-sm text-green-600">After: {c.after}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="https://icreatixpro.com/blogs/future-of-seo" className="text-[#2C727B] underline">Read SaaS SEO Case Studies →</Link>
        </div>
      </div>
    </section>
  );
}