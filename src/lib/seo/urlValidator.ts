const baseUrl = 'https://icreatixpro.com'

export function validateUrl(url: string): boolean {
  try {
    const u = new URL(url)

    // must be same domain
    if (u.origin !== baseUrl) return false

    // block invalid patterns
    const blocked = ['[', ']', '{', '}', 'undefined', 'null']
    if (blocked.some((b) => url.includes(b))) return false

    return true
  } catch {
    return false
  }
}