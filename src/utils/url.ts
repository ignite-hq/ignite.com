export function getPathname(url: string): string {
  try {
    const urlInstance = new URL(url)
    return urlInstance.pathname
  } catch {
    return ''
  }
}
