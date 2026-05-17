import { fetchHTML } from "@/lib/fetch/fetch-html";
import { sanitizeContent } from "@/lib/llm/sanitizer";
import { extractMetadata } from "@/lib/llm/metadata-extractor";
import { extractContent } from "@/lib/llm/content-extractor";
import { trimToTokens } from "@/lib/llm/token-counter";
import { estimateReadingTime } from "@/lib/utils/estimate-reading-time";
import { formatLLMsTxt } from "@/lib/llm/llms-formatter";
import { protectAgainstSSRF } from "@/lib/security/ssrf-protection";
import { validateUrl } from "@/lib/security/url-validator";
import { checkRobots } from "@/lib/llm/robots-checker";

export async function generateLLMFile(url: string, options: any) {
  validateUrl(url);

  await protectAgainstSSRF(url);

  const robotsAllowed = await checkRobots(url);

  if (!robotsAllowed) {
    throw new Error("Blocked by robots.txt");
  }

  const html = await fetchHTML(url);

  const sanitized = sanitizeContent(html);

  const metadata = extractMetadata(sanitized);

  const extracted = extractContent(sanitized, url);

  const trimmedContent = trimToTokens(
    extracted.content,
    options.maxTokens
  );

  const data = {
    ...metadata,
    ...extracted,
    content: trimmedContent,
    readingTime: estimateReadingTime(extracted.wordCount),
  };

  const llmsText = formatLLMsTxt(data, url, options);

  return {
    ...data,
    llmsText,
  };
}