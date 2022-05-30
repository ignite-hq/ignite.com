export function oxfordComma<T>(array: T[]) {
  if (array.length === 1) return array[0]
  const firsts = array.slice(0, array.length - 1)
  const last = array[array.length - 1]
  return firsts.join(', ') + ' and ' + last
}

export function removeUndefinedFromArray<T>(
  array: T[]
): Exclude<T, undefined>[] {
  return array.filter((val) => val !== undefined) as Exclude<T, undefined>[]
}

export function mergePages<T>(data?: T[], key?: keyof T) {
  if (!data) return []

  const mergedPages = data.flatMap((page) => (key ? page[key] : page))
  return removeUndefinedFromArray(mergedPages)
}

export function arrayNSize(size: number): undefined[] {
  return new Array(size).fill(undefined)
}
