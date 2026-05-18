// src/app/tools/llm-generator/llm-generator.service.ts

import * as cheerio from "cheerio";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

import type { ExtractedContent } from "@/types/llm";

interface Metadata {
  title?: string;
  description?: string;
  author?: string;
  siteName?: string;
}

export async function extractPageContent(
  html: string,
  pageUrl: string
): Promise<ExtractedContent> {
  // ------------------------------------
  // Load HTML
  // ------------------------------------
  const $ = cheerio.load(html);

  // ------------------------------------
  // Metadata Extraction
  // ------------------------------------
  const metadata: Metadata = {
    title:
      $("title").text().trim() ||
      $('meta[property="og:title"]').attr("content") ||
      "",

    description:
      $('meta[name="description"]').attr("content") ||
      $('meta[property="og:description"]').attr("content") ||
      "",

    author:
      $('meta[name="author"]').attr("content") ||
      "",

    siteName:
      $('meta[property="og:site_name"]').attr("content") ||
      "",
  };

  // ------------------------------------
  // Readability Extraction
  // ------------------------------------
  const dom = new JSDOM(html, {
    url: pageUrl,
  });

  const reader = new Readability(dom.window.document);
  const article = reader.parse();

  // ------------------------------------
  // Main Content
  // ------------------------------------
  const content =
    article?.textContent?.trim() ||
    $("body").text().replace(/\s+/g, " ").trim();

  // ------------------------------------
  // Headings
  // ------------------------------------
  const headings = $("h1, h2, h3")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean);

  // ------------------------------------
  // Links
  // ------------------------------------
  const internalLinks: string[] = [];
  const externalLinks: string[] = [];

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");

    if (!href) return;

    try {
      const absoluteUrl = new URL(href, pageUrl).toString();

      if (absoluteUrl.includes(new URL(pageUrl).hostname)) {
        internalLinks.push(absoluteUrl);
      } else {
        externalLinks.push(absoluteUrl);
      }
    } catch {
      // Ignore invalid URLs
    }
  });

  // ------------------------------------
  // Images
  // ------------------------------------
  const images = $("img[src]")
    .map((_, el) => $(el).attr("src"))
    .get()
    .filter(Boolean)
    .map((src) => {
      try {
        return new URL(src!, pageUrl).toString();
      } catch {
        return src!;
      }
    });

  // ------------------------------------
  // Word Count
  // ------------------------------------
  const wordCount = content.split(/\s+/).filter(Boolean).length;

  // ------------------------------------
  // Final Clean Object
  // ------------------------------------
  const baseData: ExtractedContent = {
    title: metadata.title ?? "",
    description: metadata.description ?? "",
    author: metadata.author ?? "",
    siteName: metadata.siteName ?? "",

    content,
    headings,
    internalLinks,
    externalLinks,
    images,
    wordCount,
  };

  return baseData;
}