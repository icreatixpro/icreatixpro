const baseUrl = "https://icreatixpro.com";

export async function GET() {
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 <sitemap>
   <loc>${baseUrl}/sitemaps/pages.xml</loc>
 </sitemap>
 <sitemap>
   <loc>${baseUrl}/sitemaps/blogs.xml</loc>
 </sitemap>
 <sitemap>
   <loc>${baseUrl}/sitemaps/services.xml</loc>
 </sitemap>
 <sitemap>
   <loc>${baseUrl}/sitemaps/tools.xml</loc>
 </sitemap>
</sitemapindex>`;

return new Response(xml, {
 headers:{
  "Content-Type":"application/xml"
 }
});
}