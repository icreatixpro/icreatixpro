// app/services/geo-optimization-services/PlatformsSection.tsx
export default function PlatformsSection() {
  const platforms = ["ChatGPT", "Perplexity AI", "Google SGE", "Gemini", "Bing AI"];
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1A394E]">Where You Get Visible</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {platforms.map((p, i) => (
            <span key={i} className="px-4 py-2 bg-white rounded-full shadow-sm font-medium">{p}</span>
          ))}
        </div>
        <p className="mt-6 text-gray-600">Your brand appears inside AI-generated answers across all major platforms.</p>
      </div>
    </section>
  );
}