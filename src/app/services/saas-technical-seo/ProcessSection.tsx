// app/services/saas-technical-seo/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    "SaaS Technical SEO Audit (crawl, speed, schema, JS frameworks)",
    "Architecture Fixes (URL structure, faceted navigation, canonicals)",
    "Core Web Vitals Optimization for Product Pages",
    "Schema & Structured Data Implementation",
    "Ongoing Monitoring & Iterations",
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">Our SaaS Technical SEO Process</h2>
        <div className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 p-3 bg-[#F9FAFB] rounded-lg border-l-4 border-[#2C727B]">
              <span className="font-bold text-[#2C727B]">{i+1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}