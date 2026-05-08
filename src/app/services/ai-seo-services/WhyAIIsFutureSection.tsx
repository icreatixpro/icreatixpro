// app/services/ai-seo-services/WhyAIIsFutureSection.tsx
export default function WhyAIIsFutureSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A394E]">
          Why AI SEO is the Future of Search
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">📈</div>
            <h3 className="font-bold text-xl">Google SGE Shift</h3>
            <p className="text-gray-600 mt-1">Search Generative Experience replaces 10 blue links with AI-crafted answers.</p>
          </div>
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-bold text-xl">ChatGPT as Search Engine</h3>
            <p className="text-gray-600 mt-1">40% of young users prefer ChatGPT for answers over Google.</p>
          </div>
          <div className="p-5 bg-[#F9FAFB] rounded-lg">
            <div className="text-3xl mb-2">🔗</div>
            <h3 className="font-bold text-xl">Citation Economy</h3>
            <p className="text-gray-600 mt-1">Being cited by LLMs drives authority, traffic, and trust.</p>
          </div>
        </div>
        <p className="mt-6 text-gray-600 text-center max-w-2xl mx-auto">
          AI SEO ensures your brand appears in generative answers, not just blue links – future-proofing your organic growth.
        </p>
      </div>
    </section>
  );
}