export interface ProgressBarItem {
  value: string
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