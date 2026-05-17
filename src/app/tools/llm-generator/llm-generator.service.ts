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

import type { LLMOptions, ExtractedContent } from "@/types/llm";

type GeneratedLLMResult = ExtractedContent & {
  llmsText: string;
};

export async function generateLLMFile(
  url: string,
  options: LLMOptions
): Promise<GeneratedLLMResult> {
  // ----------------------------
  // URL validation
  // ----------------------------
  validateUrl(url);

  // ----------------------------
  // SSRF protection
  // ----------------------------
  await protectAgainstSSRF(url);

  // ----------------------------
  // robots.txt check
  // ----------------------------
  const robotsAllowed = await checkRobots(url);

  if (!robotsAllowed) {
    throw new Error("Blocked by robots.txt");
  }

  // ----------------------------
  // fetch HTML
  // ----------------------------
  const html = await fetchHTML(url);

  if (!html || typeof html !== "string") {
    throw new Error("Failed to fetch HTML content");
  }

  // ----------------------------
  // sanitize HTML
  // ----------------------------
  const sanitized = sanitizeContent(html);

  // ----------------------------
  // extract data
  // ----------------------------
  const metadata = extractMetadata(sanitized);
  const extracted = extractContent(sanitized, url);

  // ----------------------------
  // safe options handling
  // ----------------------------
  const safeOptions: LLMOptions = {
    includeHeadings: options?.includeHeadings ?? true,
    includeMeta: options?.includeMeta ?? true,
    includeLinks: options?.includeLinks ?? true,
    includeImages: options?.includeImages ?? false,
    maxTokens: options?.maxTokens ?? 4000,
  };

  const maxTokens = safeOptions.maxTokens;

  // ----------------------------
  // trim content safely
  // ----------------------------
  const trimmedContent = trimToTokens(
    extracted?.content ?? "",
    maxTokens
  );

  // ----------------------------
  // build final data (safe merge)
  // ----------------------------
  const baseData: ExtractedContent = {
    title: metadata?.title ?? extracted?.title ?? "",
    description:
      metadata?.description ?? extracted?.description ?? "",
    author: metadata?.author,
    siteName: metadata?.siteName,
    content: trimmedContent,
    headings: extracted?.headings ?? [],
    internalLinks: extracted?.internalLinks ?? [],
    externalLinks: extracted?.externalLinks ?? [],
    images: extracted?.images ?? [],
    wordCount: extracted?.wordCount ?? 0,
    readingTime: estimateReadingTime(extracted?.wordCount ?? 0),
  };

  // ----------------------------
  // format LLM output
  // ----------------------------
  const llmsText = formatLLMsTxt(
    baseData,
    url,
    safeOptions
  );

  return {
    ...baseData,
    llmsText,
  };
}