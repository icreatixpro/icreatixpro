// app/services/geo-optimization-services/WhatIsGEOSection.tsx
export default function WhatIsGEOSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A394E]">What is Generative Engine Optimization (GEO)?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          GEO is the process of optimizing your content and technical structure to be <strong>cited as a source</strong> by AI-powered answer engines like ChatGPT, Perplexity, and Gemini.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 border-l-4 border-[#2C727B] bg-[#F9FAFB]">
            <h3 className="font-bold">Beyond Keywords</h3>
            <p className="text-gray-600 text-sm">Focuses on entity relevance, not just keyword density.</p>
          </div>
          <div className="p-4 border-l-4 border-[#2C727B] bg-[#F9FAFB]">
            <h3 className="font-bold">AI Citations</h3>
            <p className="text-gray-600 text-sm">Your brand appears inside AI-generated answers.</p>
          </div>
          <div className="p-4 border-l-4 border-[#2C727B] bg-[#F9FAFB]">
            <h3 className="font-bold">Multi-Platform</h3>
            <p className="text-gray-600 text-sm">Works across ChatGPT, Perplexity, Gemini, SGE.</p>
          </div>
        </div>
      </div>
    </section>
  );
}