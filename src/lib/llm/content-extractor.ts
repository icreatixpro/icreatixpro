import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import * as cheerio from "cheerio";
import { cleanText } from "./text-cleaner";

export function extractContent(html: string, baseUrl: string) {
  const dom = new JSDOM(html, {
    url: baseUrl,
  });

  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  const content = cleanText(article?.textContent || "");

  const $ = cheerio.load(html);

  const headings = $("h1, h2, h3")
    .map((_, el) => $(el).text().trim())
    .get();

  const links = $("a")
    .map((_, el) => $(el).attr("href"))
    .get()
    .filter(Boolean);

  const images = $("img")
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter(Boolean);

  const internalLinks = links.filter((link) =>
    link?.startsWith("/") || link?.includes(new URL(baseUrl).hostname)
  );

  const externalLinks = links.filter(
    (link) =>
      link?.startsWith("http") &&
      !link.includes(new URL(baseUrl).hostname)
  );

  return {
    content,
    headings,
    internalLinks,
    externalLinks,
    images,
    wordCount: content.split(/\s+/).length,
  };
}