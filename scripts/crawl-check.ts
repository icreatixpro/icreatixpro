import { auditSite } from "@/lib/seo/crawl-audit"

async function run() {
  console.log("🔍 Running Crawl Audit...")

  const result = await auditSite()

  console.table(result.broken)

  console.log("🚀 Score:", result.score)
}

run()