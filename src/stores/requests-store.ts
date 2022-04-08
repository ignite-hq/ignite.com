import { defineStore } from 'pinia'

export const pageFilters = [
  { id: 1, name: 'Pending requests', displayName: 'Pending' },
  { id: 2, name: 'Closed requests', displayName: 'Closed' }
]

export const pageSorts = [
  { id: 1, name: 'Newest' },
  { id: 2, name: 'Request type' },
  { id: 2, name: 'Requestor' }
]

export const useRequestsStore = defineStore('RequestsStore', {
  state: () => ({
    selectedRequests: [],
    selectedPageFilter: pageFilters[0],
    selectedPageSort: pageSorts[0]
  })
})
