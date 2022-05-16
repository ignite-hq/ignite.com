import dayjs from 'dayjs'

export function amountOfDaysFromNow(date?: string | number | Date) {
  if (!date) {
    return 0
  }

  const now = dayjs()
  const startDate = dayjs(date)
  const diff = startDate.diff(now, 'days')

  return diff
}
