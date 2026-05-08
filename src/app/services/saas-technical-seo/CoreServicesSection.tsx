// app/services/saas-technical-seo/CoreServicesSection.tsx
export default function CoreServicesSection() {
  const services = [
    "SaaS Crawl Optimization & Indexation Management",
    "Core Web Vitals & Performance Tuning for SaaS",
    "Structured Data (Schema) for Product-led Content",
    "JavaScript SEO (React, Vue, Angular fixes)",
    "International SEO for Global SaaS Expansion",
    "Log File Analysis & Bot Management",
  ];
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">SaaS Technical SEO Services</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-[#2C727B] text-xl">✓</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}