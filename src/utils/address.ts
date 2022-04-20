export function getShortAddress(address: string) {
  return (
    address.substring(0, 10) + '...' + address.substring(address.length - 4)
  )
}
