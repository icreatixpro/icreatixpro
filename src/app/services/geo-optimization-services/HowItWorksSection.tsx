// app/services/geo-optimization-services/HowItWorksSection.tsx
export default function HowItWorksSection() {
  const steps = [
    "AI crawlers analyze your content and structure",
    "Entities and semantic relevance are extracted",
    "Authority signals (backlinks, citations) are evaluated",
    "Your content gets cited inside AI-generated answers",
  ];
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1A394E]">How GEO Works (Step-by-Step)</h2>
        <div className="mt-8 space-y-3">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
              <span className="w-8 h-8 bg-[#2C727B] text-white rounded-full flex items-center justify-center">{i+1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}