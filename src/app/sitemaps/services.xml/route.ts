const urls=[
'/services/analytics',
'/services/content-marketing',
'/services/digital-marketing',
'/services/ecommerce-seo',
'/services/email-marketing',
'/services/google-ads',
'/services/local-seo',
'/services/meta-ads',
'/services/search-engine-optimization',
'/services/technical-seo',
'/services/web-development'
]

const base='https://icreatixpro.com'

export async function GET(){
const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`
<url>
<loc>${base}${u}</loc>
<changefreq>weekly</changefreq>
<priority>0.95</priority>
</url>`).join('')}
</urlset>`

return new Response(xml,{headers:{'Content-Type':'application/xml'}})
}