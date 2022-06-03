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

export function mergePagesByKey<T, K extends keyof T>(
  data: T[] = [],
  key: K
): Exclude<T[K], undefined> {
  const mergedPages = data.flatMap((page) => page[key])
  return removeUndefinedFromArray(mergedPages) as unknown as Exclude<
    T[K],
    undefined
  >
}

export function arrayNSize(size: number): undefined[] {
  return new Array(size).fill(undefined)
}
