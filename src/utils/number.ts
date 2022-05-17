import BigNumber from 'bignumber.js'

import { isNumeric } from './assertion'

export function addCommasToNumber(number: string | number): string {
  if (!isNumeric(number)) return number as string
  const parts = number.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export function formatAmountInput(value: string, decimals = 0): string {
  let newValue: string = value

  // Replace commas
  newValue = newValue.replace(',', '.')

  // Disallow decimals if wished for
  newValue = decimals > 0 ? newValue : newValue.replace('.', '')

  // Only numbers
  newValue = newValue.replace(/[^0-9.]/g, '')

  if (newValue.startsWith('.')) {
    newValue = '0' + newValue
  }

  if (newValue.split('').filter((char) => char === '.').length > 1) {
    // Remove subsequent separators
    newValue = newValue.replace(/(?<=\..*)\./g, '')
  }

  let [integerDigits, fractionDigits] = newValue.split('.')

  if (fractionDigits?.length > decimals) {
    newValue = `${integerDigits}.${fractionDigits.slice(0, decimals)}`
  }

  return newValue
}

// Convert to https://github.com/cosmos/cosmos-sdk/blob/main/types/decimal.go
// 50  -> 500000000000000000
// 100 -> 1000000000000000000
export function percentageToCosmosDecimal(pct: string): string {
  const pctAsNumber = new BigNumber(pct).toNumber()

  const cosmosDecimal = new BigNumber(pctAsNumber)
    .toPrecision(pctAsNumber === 100 ? 19 : 18)
    .toString()
    .replace('.', '')

  return cosmosDecimal
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
// 1000 -> 1,000
// 1000000 -> 1M
export function formatNumber(
  number: string | number,
  notation: 'standard' | 'scientific' | 'engineering' | 'compact' = 'standard'
): string {
  if (!isNumeric(number)) return ''

  return new Intl.NumberFormat(navigator.language, {
    notation
  }).format(Number(number))
}
