export function isNumeric(value: any) {
  return value != null && value - parseFloat(value) + 1 >= 0
}
