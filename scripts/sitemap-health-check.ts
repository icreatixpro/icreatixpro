import axios from 'axios'

const sitemapUrl = 'https://icreatixpro.com/sitemap.xml'

async function check() {
  const res = await axios.get(sitemapUrl)
  const urls = res.data.match(/<loc>(.*?)<\/loc>/g)

  const broken: string[] = []

  for (const u of urls) {
    const url = u.replace('<loc>', '').replace('</loc>', '')

    try {
      const r = await axios.get(url)
      if (r.status >= 400) broken.push(url)
    } catch {
      broken.push(url)
    }
  }

  console.log('❌ Broken URLs:', broken)
}

check()