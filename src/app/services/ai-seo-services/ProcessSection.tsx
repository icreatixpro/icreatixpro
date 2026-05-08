// app/services/ai-seo-services/ProcessSection.tsx
export default function ProcessSection() {
  const steps = [
    "AI & SEO Audit (Google + ChatGPT visibility)",
    "GEO Strategy Development",
    "Technical Optimization for AI Crawlers",
    "Content Optimization for LLMs",
    "AI Search Growth Execution",
    "Performance Tracking & Scaling",
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          Our AI SEO Process
        </h2>
        <div className="mt-10 space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 p-3 border-l-4 border-[#2C727B] bg-[#F9FAFB]">
              <span className="font-bold text-[#2C727B] w-8">{i+1}</span>
              <span className="text-gray-800">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}