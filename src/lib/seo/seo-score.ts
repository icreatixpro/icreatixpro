export function getSEOScore(data: {
  title?: string
  description?: string
  canonical?: string
  hasH1?: boolean
  hasImage?: boolean
}) {
  let score = 0

  if (data.title) score += 20
  if (data.description) score += 20
  if (data.canonical) score += 20
  if (data.hasH1) score += 20
  if (data.hasImage) score += 20

  return score
}