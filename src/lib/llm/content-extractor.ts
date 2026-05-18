import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import * as cheerio from "cheerio";
import { cleanText } from "./text-cleaner";

export interface ExtractedContentResult {
  title: string;
  description: string;
  content: string;
  headings: string[];
  internalLinks: string[];
  externalLinks: string[];
  images: string[];
  wordCount: number;
}

export function extractContent(
  html: string,
  baseUrl: string
): ExtractedContentResult {
  const dom = new JSDOM(html, {
    url: baseUrl,
  });

  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  const $ = cheerio.load(html);

  const baseHost = (() => {
    try {
      return new URL(baseUrl).hostname;
    } catch {
      return "";
    }
  })();

  // -----------------------------------
  // Content
  // -----------------------------------
  const content = cleanText(
    article?.textContent || $("body").text() || ""
  );

  // -----------------------------------
  // Title
  // -----------------------------------
  const title =
    article?.title ||
    $("title").first().text().trim() ||
    $('meta[property="og:title"]').attr("content") ||
    "";

  // -----------------------------------
  // Description
  // -----------------------------------
  const description =
    $("meta[name='description']").attr("content") ||
    $("meta[property='og:description']").attr("content") ||
    article?.excerpt ||
    "";

  // -----------------------------------
  // Headings
  // -----------------------------------
  const headings = $("h1, h2, h3")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean);

  // -----------------------------------
  // Links
  // -----------------------------------
  const links = $("a")
    .map((_, el) => $(el).attr("href"))
    .get()
    .filter(Boolean) as string[];

  const internalLinks = links.filter(
    (link) =>
      link.startsWith("/") ||
      (baseHost && link.includes(baseHost))
  );

  const externalLinks = links.filter(
    (link) =>
      link.startsWith("http") &&
      !link.includes(baseHost)
  );

  // -----------------------------------
  // Images
  // -----------------------------------
  const images = $("img")
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter(Boolean) as string[];

  // -----------------------------------
  // Word Count
  // -----------------------------------
  const wordCount = content
    ? content.trim().split(/\s+/).length
    : 0;

  // -----------------------------------
  // Final Return
  // -----------------------------------
  return {
    title,
    description,
    content,
    headings,
    internalLinks,
    externalLinks,
    images,
    wordCount,
  };
}