// app/services/ai-seo-services/DeliverablesSection.tsx
export default function DeliverablesSection() {
  const deliverables = [
    "AI crawler optimization (Googlebot, GPTBot, CCBot)",
    "LLM content structuring for entity recognition",
    "Entity mapping & knowledge graph alignment",
    "Schema architecture for AI understanding",
    "Prompt-based SEO optimization",
    "Knowledge graph building & internal linking",
  ];
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">
          What We Actually Deliver
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {deliverables.map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
              <span className="text-[#2C727B] text-xl">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}