import { NextResponse } from 'next/server'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>iCreatixPRO - AI SEO, AEO &amp; GEO Services</title>
    <link>https://icreatixpro.com</link>
    <description>AI-powered SEO, AEO and GEO services to boost rankings, drive organic traffic, and grow your business visibility in search results.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://icreatixpro.com/rss" rel="self" type="application/rss+xml" />
    
    <item>
      <title>The Future of SEO: AI, AEO &amp; GEO Explained</title>
      <link>https://icreatixpro.com/blog/future-of-seo</link>
      <description>Discover how artificial intelligence is reshaping search engine optimization and what it means for your business in 2025 and beyond.</description>
      <pubDate>Sun, 15 Dec 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/future-of-seo</guid>
    </item>
    
    <item>
      <title>Mastering Google Ads: A Complete Guide for 2025</title>
      <link>https://icreatixpro.com/blog/google-ads-guide</link>
      <description>Learn advanced PPC strategies to maximize ROI and drive qualified leads with Google Ads new features and AI-powered bidding.</description>
      <pubDate>Tue, 10 Dec 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/google-ads-guide</guid>
    </item>
    
    <item>
      <title>Voice Search Optimization: The AEO Revolution</title>
      <link>https://icreatixpro.com/blog/voice-search-aeo</link>
      <description>How to optimize your content for voice search and answer engine optimization to capture the growing voice search market.</description>
      <pubDate>Thu, 05 Dec 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/voice-search-aeo</guid>
    </item>
    
    <item>
      <title>Meta Ads Strategies That Actually Work in 2025</title>
      <link>https://icreatixpro.com/blog/meta-ads-strategies</link>
      <description>Proven Facebook and Instagram advertising techniques for maximum engagement, conversions, and ROAS.</description>
      <pubDate>Thu, 28 Nov 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/meta-ads-strategies</guid>
    </item>
    
    <item>
      <title>International SEO: Scaling Your Business Globally</title>
      <link>https://icreatixpro.com/blog/international-seo</link>
      <description>Complete guide to multilingual and multi-regional SEO for global expansion into new markets.</description>
      <pubDate>Wed, 20 Nov 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/international-seo</guid>
    </item>
    
    <item>
      <title>Content Marketing ROI: Measuring What Matters</title>
      <link>https://icreatixpro.com/blog/content-marketing-roi</link>
      <description>Key metrics and analytics to track the success of your content marketing efforts and prove ROI.</description>
      <pubDate>Fri, 15 Nov 2024 10:00:00 GMT</pubDate>
      <guid>https://icreatixpro.com/blog/content-marketing-roi</guid>
    </item>
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}