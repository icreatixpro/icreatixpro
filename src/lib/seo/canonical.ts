const baseUrl = 'https://icreatixpro.com'

export function getCanonical(path: string) {
  const clean = path === '' ? '/' : path.startsWith('/') ? path : '/' + path

  return `${baseUrl}${clean}`
}