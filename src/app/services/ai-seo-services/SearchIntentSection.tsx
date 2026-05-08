// app/services/ai-seo-services/SearchIntentSection.tsx
export default function SearchIntentSection() {
  const platforms = [
    { name: "Google Rankings", desc: "Organic SERP, SGE, featured snippets" },
    { name: "ChatGPT Citations", desc: "Be the source in conversational answers" },
    { name: "Perplexity Answers", desc: "Rank for direct LLM responses" },
    { name: "Gemini Responses", desc: "Google's AI assistant visibility" },
    { name: "Bing AI Results", desc: "Microsoft Copilot & Bing Chat" },
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">
          What We Optimize For
        </h2>
        <div className="mt-8 space-y-3">
          {platforms.map((p, i) => (
            <div key={i} className="flex justify-between items-center p-3 border-b border-gray-100">
              <span className="font-semibold">{p.name}</span>
              <span className="text-gray-500 text-sm">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}