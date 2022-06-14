export enum NotificationStatus {
  Approved = 'approved',
  Failed = 'failed'
}

export interface NotificationItem {
  title: string
  projectName: string
  time: string
  status?: NotificationStatus
}

export interface Notification {
  date: string
  day?: string
  items: Array<NotificationItem[] | NotificationItem>
}
