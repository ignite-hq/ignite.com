export function getDenomName(voucherDenom: string): string {
  // 'V/3/foo' -> 'FOO'
  return voucherDenom.toUpperCase().split('/').pop() ?? ''
}

export const toCompactNumber: Intl.NumberFormat = Intl.NumberFormat('en', {
  notation: 'compact'
})
