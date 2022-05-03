export function formatVoucherDenom(voucherDenom: string): string {
  return voucherDenom.split('/').pop() ?? ''
}

export const numberFormatter: Intl.NumberFormat = Intl.NumberFormat('en', {
  notation: 'compact'
})
