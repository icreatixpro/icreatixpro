const urls=[
'',
'/about',
'/accessibility',
'/blogs',
'/careers',
'/case-studies',
'/contact',
'/cookies',
'/disclaimer',
'/dmca',
'/ebooks',
'/faqs',
'/gdpr',
'/glossary',
'/guides',
'/partners',
'/privacy-policy',
'/security',
'/services',
'/status',
'/terms',
'/testimonials',
'/tools',
'/webinars'
]

const base='https://icreatixpro.com'

export async function GET(){
const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`
<url>
<loc>${base}${u}</loc>
<changefreq>monthly</changefreq>
<priority>0.7</priority>
</url>`).join('')}
</urlset>`

return new Response(xml,{headers:{'Content-Type':'application/xml'}})
}