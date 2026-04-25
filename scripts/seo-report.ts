import fs from "fs"
import path from "path"
import { getSEOScore } from "@/lib/seo/seo-score"

type PageData = {
  url: string
  title?: string
  description?: string
  hasH1?: boolean
  hasImage?: boolean
}

const pages: PageData[] = [
  {
    url: "https://icreatixpro.com/",
    title: "Home",
    description: "AI SEO Agency",
    hasH1: true,
    hasImage: true,
  },
  {
    url: "https://icreatixpro.com/services",
    title: "Services",
    description: "SEO Services",
    hasH1: true,
    hasImage: false,
  },
]

// ===============================
// SEO REPORT ENGINE
// ===============================
function generateReport() {
  const report = pages.map((page) => {
    const score = getSEOScore(page)

    return {
      url: page.url,
      score,
      status:
        score >= 80
          ? "EXCELLENT"
          : score >= 50
          ? "NEEDS IMPROVEMENT"
          : "POOR",
      missing: {
        title: !page.title,
        description: !page.description,
        h1: !page.hasH1,
        image: !page.hasImage,
      },
    }
  })

  return report
}

// ===============================
// SAVE REPORT FILE
// ===============================
function saveReport(data: any) {
  const outputPath = path.join(process.cwd(), "seo-report.json")

  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2))

  console.log("🚀 SEO Report Generated:", outputPath)
}

// ===============================
// RUN
// ===============================
const report = generateReport()

console.table(report.map((r) => ({
  url: r.url,
  score: r.score,
  status: r.status,
})))

saveReport(report)