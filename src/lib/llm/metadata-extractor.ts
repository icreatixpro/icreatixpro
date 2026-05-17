import * as cheerio from "cheerio";

export function extractMetadata(html: string) {
  const $ = cheerio.load(html);

  return {
    title: $("title").text() || "Untitled",
    description:
      $("meta[name='description']").attr("content") || "",
    author: $("meta[name='author']").attr("content") || "",
    siteName:
      $("meta[property='og:site_name']").attr("content") || "",
  };
}