import { defineStore } from 'pinia'

import { LaunchRequest } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

export enum RequestPageFilters {
  Pending = 'pending',
  Closed = 'closed'
}

export const requestPageFilters = [
  {
    id: RequestPageFilters.Pending,
    name: 'Pending requests',
    displayName: 'Pending'
  },
  {
    id: RequestPageFilters.Closed,
    name: 'Closed requests',
    displayName: 'Closed'
  }
]

export enum RequestPageSorts {
  Newest = 'newest',
  RequestType = 'requestType',
  Requestor = 'requestor'
}

export const requestPageSorts = [
  { id: RequestPageSorts.Newest, name: 'Newest', displayName: 'Newest' },
  {
    id: RequestPageSorts.RequestType,
    name: 'Request type',
    displayName: 'Request type'
  },
  {
    id: RequestPageSorts.Requestor,
    name: 'Requestor',
    displayName: 'Requestor'
  }
]

export const useRequestsStore = defineStore('RequestsStore', {
  state: () => ({
    selectedRequests: [] as LaunchRequest[],
    selectedPageFilter: requestPageFilters[0],
    selectedPageSort: requestPageSorts[0]
  }),
  actions: {
    clearRequests() {
      this.selectedRequests = []
    }
  }
})
