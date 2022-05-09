export interface ProgressBarItem {
  value: string
  amount?: number
  bgColor?: string
  split?: boolean
  color?: string
  name?: string
}

export interface LegendItem {
  name: string
  color?: string
}

export interface PaginationParams {
  'pagination.key'?: string
  'pagination.offset'?: string
  'pagination.limit'?: string
  'pagination.countTotal'?: boolean
  'pagination.reverse'?: boolean
}

export enum AuctionStatusLabels {
  CurrentAndUpcoming = 'Current and upcoming',
  Current = 'Current',
  Upcoming = 'Upcoming',
  Previous = 'Previous',
  Other = 'Other'
}
