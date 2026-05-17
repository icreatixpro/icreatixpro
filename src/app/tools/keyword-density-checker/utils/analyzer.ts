export interface KeywordResult {
  word: string;
  count: number;
  density: number;
  score: number;
  type: "primary" | "secondary" | "lsi";
  status: "optimal" | "high" | "low";
}

export interface AnalysisResult {
  keywords: KeywordResult[];
  totalWords: number;
  uniqueWords: number;
  topKeyword: string;
  topDensity: number;
  seoScore: number;
  suggestions: string[];
}

// STOP WORDS
const STOP_WORDS = new Set([
  "a","an","and","the","of","to","in","for","on","with","by","at","from",
  "is","are","was","were","be","been","being","have","has","had","do","does",
  "did","but","or","so","not","this","that","it","you","we","they"
]);

const cleanText = (text: string) =>
  text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();

export function analyzeKeywordDensity(text: string): AnalysisResult {
  const words = cleanText(text).split(" ").filter(Boolean);

  const totalWords = words.length;

  const freq = new Map<string, number>();

  words.forEach(w => {
    if (!STOP_WORDS.has(w) && w.length > 2) {
      freq.set(w, (freq.get(w) || 0) + 1);
    }
  });

  const keywords = Array.from(freq.entries()).map(([word, count]) => {
    const density = (count / totalWords) * 100;

    let type: "primary" | "secondary" | "lsi" = "lsi";

    if (count >= 5) type = "primary";
    else if (count >= 2) type = "secondary";

    let status: "optimal" | "high" | "low" = "optimal";

    if (density > 2.5) status = "high";
    else if (density < 0.8) status = "low";

    const score =
      density >= 1 && density <= 2.5 ? 90 :
      density > 2.5 ? 60 :
      70;

    return {
      word,
      count,
      density: +density.toFixed(2),
      score,
      type,
      status
    };
  });

  keywords.sort((a, b) => b.count - a.count);

  const topKeyword = keywords[0]?.word || "";
  const topDensity = keywords[0]?.density || 0;

  // SEO SCORE (more realistic)
  let seoScore = 70;

  if (totalWords > 300) seoScore += 10;
  if (topDensity >= 1 && topDensity <= 2.5) seoScore += 15;
  if (keywords.length > 20) seoScore += 5;
  if (topDensity > 3) seoScore -= 20;

  seoScore = Math.max(0, Math.min(100, seoScore));

  const suggestions: string[] = [];

  if (totalWords < 300)
    suggestions.push("Content too short. Add more depth (500+ words recommended).");

  if (topDensity > 2.5)
    suggestions.push(`Keyword stuffing detected: "${topKeyword}" is overused.`);

  if (topDensity < 0.8)
    suggestions.push(`Main keyword "${topKeyword}" is underused.`);

  if (keywords.length < 10)
    suggestions.push("Add more topic-related keywords for better SEO coverage.");

  if (suggestions.length === 0)
    suggestions.push("Great SEO structure! Content is well optimized.");

  return {
    keywords,
    totalWords,
    uniqueWords: keywords.length,
    topKeyword,
    topDensity,
    seoScore,
    suggestions
  };
}