import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }
  
  // Validate URL format
  try {
    new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL format" }, { status: 400 });
  }
  
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; LLMGeneratorBot/1.0)",
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const html = await response.text();
    
    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";
    
    // Extract description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    const description = descMatch ? descMatch[1] : "";
    
    // Extract author
    const authorMatch = html.match(/<meta[^>]*name=["']author["'][^>]*content=["']([^"']+)["']/i);
    const author = authorMatch ? authorMatch[1] : "";
    
    // Extract site name
    const siteNameMatch = html.match(/<meta[^>]*property=["']og:site_name["'][^>]*content=["']([^"']+)["']/i);
    const siteName = siteNameMatch ? siteNameMatch[1] : "";
    
    // Extract all headings (H1-H6)
    const headingMatches = html.match(/<h[1-6][^>]*>([^<]+)<\/h[1-6]>/gi);
    const headings = headingMatches 
      ? headingMatches.map(h => h.replace(/<[^>]*>/g, "").trim()).filter(h => h.length > 0)
      : [];
    
    // Extract internal and external links
    const linkMatches = html.match(/<a[^>]*href=["']([^"']+)["'][^>]*>/gi);
    const internalLinks: string[] = [];
    const externalLinks: string[] = [];
    const baseDomain = new URL(url).hostname;
    
    if (linkMatches) {
      linkMatches.forEach(link => {
        const hrefMatch = link.match(/href=["']([^"']+)["']/);
        if (hrefMatch) {
          let href = hrefMatch[1];
          // Skip empty links, javascript, mailto, tel
          if (!href || href.startsWith("javascript:") || href.startsWith("mailto:") || href.startsWith("tel:")) {
            return;
          }
          
          try {
            const fullUrl = new URL(href, url);
            if (fullUrl.hostname === baseDomain) {
              internalLinks.push(fullUrl.pathname + fullUrl.search);
            } else if (fullUrl.hostname !== baseDomain && fullUrl.protocol.startsWith("http")) {
              externalLinks.push(fullUrl.origin + fullUrl.pathname);
            }
          } catch {
            // Invalid URL, skip
          }
        }
      });
    }
    
    // Extract images
    const imgMatches = html.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi);
    const images: string[] = [];
    if (imgMatches) {
      imgMatches.forEach(img => {
        const srcMatch = img.match(/src=["']([^"']+)["']/);
        if (srcMatch) {
          try {
            const fullUrl = new URL(srcMatch[1], url);
            images.push(fullUrl.href);
          } catch {
            // Invalid URL, skip
          }
        }
      });
    }
    
    // Extract main content (simplified)
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    let content = "";
    if (bodyMatch) {
      // Remove script and style tags
      content = bodyMatch[1]
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      // Limit content length
      content = content.substring(0, 10000);
    }
    
    const wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
    
    return NextResponse.json({
      title,
      description,
      author,
      siteName,
      headings: headings.slice(0, 50),
      internalLinks: [...new Set(internalLinks)].slice(0, 50),
      externalLinks: [...new Set(externalLinks)].slice(0, 30),
      images: [...new Set(images)].slice(0, 30),
      content,
      wordCount,
      lastModified: new Date().toISOString(),
    });
    
  } catch (error) {
    console.error("Error fetching page:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch page" },
      { status: 500 }
    );
  }
}