const faqs = [
  {
    question: "What is an LLM.txt file?",
    answer:
      "An LLM.txt file is a structured text file designed to help AI systems and large language models understand website content more effectively.",
  },
  {
    question: "How do I create an LLM.txt file?",
    answer:
      "You can generate an LLM.txt file using the iCreatixPRO LLM.txt Generator tool by entering any webpage URL.",
  },
  {
    question: "Why is LLM.txt important for AI SEO?",
    answer:
      "LLM.txt improves semantic understanding for AI systems like ChatGPT, Claude, Gemini, and Perplexity, helping websites become more AI-search friendly.",
  },
  {
    question: "Can ChatGPT read LLM.txt files?",
    answer:
      "Yes, LLM.txt files are specifically optimized for large language models including ChatGPT and other AI systems.",
  },
  {
    question: "Is the LLM.txt Generator free?",
    answer:
      "Yes, the iCreatixPRO LLM.txt Generator is completely free to use.",
  },
  {
    question: "How does AI SEO work?",
    answer:
      "AI SEO focuses on optimizing content for AI-driven search engines and language models using structured semantic content and machine-readable formats.",
  },
];

export default function FAQSection() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-[#1A394E] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl p-6"
          >
            <h3 className="font-semibold text-lg text-[#1A394E]">
              {faq.question}
            </h3>

            <p className="text-gray-600 mt-3 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}