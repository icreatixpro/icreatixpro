// app/services/geo-optimization-services/ServicesSection.tsx
export default function ServicesSection() {
  const services = [
    "AI Answer Engine Optimization",
    "Entity-Based SEO (Knowledge Graph)",
    "LLM Content Structuring for Citations",
    "AI Search Visibility Optimization",
    "Prompt-Based SEO Strategy",
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">Our GEO Optimization Services</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-[#F9FAFB] rounded-lg">
              <span className="text-[#2C727B] text-xl">✓</span>
              <span className="font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}