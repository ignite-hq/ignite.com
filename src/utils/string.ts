export function ellipsisText(text: string, maxLength: number): string {
  if (!text) return ''

  const trimmedText = text.trim()

  if (text.length > maxLength) {
    return trimmedText.slice(0, maxLength - 3).concat('...')
  }

  return trimmedText
}
