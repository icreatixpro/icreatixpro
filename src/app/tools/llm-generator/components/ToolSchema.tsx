export default function ToolSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LLM.txt Generator",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description:
      "Generate AI-friendly llms.txt files for ChatGPT, Claude, Gemini, and other language models.",
    url: "https://icreatixpro.com/tools/llm-generator",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
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