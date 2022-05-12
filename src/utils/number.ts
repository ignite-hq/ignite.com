import { isNumeric } from './assertion'

export function addCommasToNumber(number: string | number): string {
  if (!isNumeric(number)) return number as string
  const parts = number.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export function formatNumber(number: string | number): string {
  if (!isNumeric(number)) return ''

  return new Intl.NumberFormat().format(Number(number))
}
