// app/services/geo-optimization-services/ProblemSection.tsx
export default function ProblemSection() {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A394E]">Why Traditional SEO is Failing in the AI Era</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-2">📉</div>
            <p className="text-gray-700">Google SGE replaces 10 blue links with AI-crafted answers</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-2">💬</div>
            <p className="text-gray-700">40% of users now ask ChatGPT instead of searching</p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-sm">
            <div className="text-3xl mb-2">👻</div>
            <p className="text-gray-700">Websites without GEO become invisible in AI answers</p>
          </div>
        </div>
        <p className="mt-6 text-gray-600">
          If you're not optimized for AI engines, your competitors will capture the citations — and the traffic.
        </p>
      </div>
    </section>
  );
}