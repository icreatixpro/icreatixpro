// app/services/ai-seo-services/HowItWorksSection.tsx
export default function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          How AI SEO Works for Google, ChatGPT & Perplexity
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">1️⃣</div>
            <h3 className="font-bold text-xl">Google AI (SGE)</h3>
            <p className="text-gray-600 mt-2">Optimize for featured snippets, knowledge panels, and search generative experience.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">2️⃣</div>
            <h3 className="font-bold text-xl">ChatGPT & Perplexity</h3>
            <p className="text-gray-600 mt-2">GEO makes your content a cited source in LLM responses.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">3️⃣</div>
            <h3 className="font-bold text-xl">Gemini & Bing AI</h3>
            <p className="text-gray-600 mt-2">Technical SEO + structured data for AI crawlers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}