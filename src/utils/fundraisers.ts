export function getDenomName(voucherDenom: string): string {
  // 'V/3/FOO' -> 'FOO'
  return voucherDenom.split('/').pop() ?? ''
}

export const toCompactNumber: Intl.NumberFormat = Intl.NumberFormat('en', {
  notation: 'compact'
})
