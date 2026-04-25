import { validateUrl } from "./urlValidator"

const urls = [
  "https://icreatixpro.com/",
  "https://icreatixpro.com/services",
  "https://icreatixpro.com/blogs/test",
]

export async function auditSite() {
  const broken: string[] = []

  for (const url of urls) {
    if (!validateUrl(url)) {
      broken.push(url)
    }
  }

  const score =
    ((urls.length - broken.length) / urls.length) * 100

  return {
    total: urls.length,
    broken,
    score: Math.round(score),
  }
}