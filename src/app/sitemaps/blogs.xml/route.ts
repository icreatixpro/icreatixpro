import fs from 'fs'
import path from 'path'

const base='https://icreatixpro.com'

export async function GET(){
const dir=path.join(process.cwd(),'src/content/blogs')

const files=fs.readdirSync(dir)
.filter(f=>f.endsWith('.md')||f.endsWith('.mdx'))

const xml=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${files.map(file=>{
const slug=file.replace(/\.(md|mdx)$/,'')
return `
<url>
<loc>${base}/blogs/${slug}</loc>
<changefreq>weekly</changefreq>
<priority>0.90</priority>
</url>`
}).join('')}
</urlset>`

return new Response(xml,{headers:{'Content-Type':'application/xml'}})
}