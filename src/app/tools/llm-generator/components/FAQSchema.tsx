export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is an LLM.txt file?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM.txt is a structured text format designed to help AI systems and language models understand website content more effectively.",
        },
      },
      {
        "@type": "Question",
        name: "How does the LLM.txt Generator work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The tool extracts webpage content, metadata, headings, and links, then formats them into an AI-friendly llms.txt file.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}