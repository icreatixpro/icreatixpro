const urls=[
'/tools/ai-title-generator',
'/tools/image-compressor',
'/tools/keyword-density-checker',
'/tools/llm-generator',
'/tools/local-seo-audit',
'/tools/meta-tag-generator',
'/tools/roi-calculator'
]

const base='https://icreatixpro.com'

export async function GET(){
const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`
<url>
<loc>${base}${u}</loc>
<changefreq>weekly</changefreq>
<priority>0.85</priority>
</url>`).join('')}
</urlset>`

return new Response(xml,{headers:{'Content-Type':'application/xml'}})
}