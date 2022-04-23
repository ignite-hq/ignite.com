<script lang="ts" setup>
import { computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

import IgniteRequestsEmptyState from '~/components/requests/IgniteRequestsEmptyState.vue'
import IgniteRequestsHeader from '~/components/requests/IgniteRequestsHeader.vue'
import IgniteRequestsTable from '~/components/requests/IgniteRequestsTable.vue'
import IgniteSelectedRequests from '~/components/requests/IgniteSelectedRequests.vue'
import useProjectRequests from '~/composables/useProjectRequests'
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest,
  LaunchRequestStatus
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { RequestPageFilters, useRequestsStore } from '~/stores/requests-store'

// lh
onBeforeUnmount(() => {
  store.$reset()
})

// store
const store = useRequestsStore()

// composables
const { params } = useRoute()
const { requests, isFetching } = useProjectRequests(params.projectId.toString())

// methods
function mergePages(
  pages: LaunchQueryAllRequestResponse[] = []
): LaunchRequest[] {
  return pages?.reduce(
    (acc, page) => [...acc, ...(page?.request ?? [])],
    [] as LaunchRequest[]
  )
}

function filterRequests(
  requests: LaunchRequest[],
  filterBy: RequestPageFilters
) {
  switch (filterBy) {
    case RequestPageFilters.Pending:
      return requests.filter(
        ({ status }) => status === LaunchRequestStatus.PENDING
      )
    case RequestPageFilters.Closed:
      return requests.filter(
        ({ status }) =>
          status === LaunchRequestStatus.REJECTED ||
          status === LaunchRequestStatus.APPROVED
      )
    default:
      return requests
  }
}

// computed
const projectRequests = computed(() => {
  const mergedRequests = mergePages(requests.value?.pages)

  return filterRequests(mergedRequests, store.selectedPageFilter.id)
})

const emptyStateMessage = computed(() => {
  return store.selectedPageFilter.id === RequestPageFilters.Pending
    ? 'No pending requests'
    : 'No closed requests'
})
</script>

<template>
  <div class="container py-10 text-center">
    <IgniteRequestsHeader />
    <div>
      <IgniteRequestsTable
        v-if="projectRequests.length > 0 || isFetching"
        :loading="isFetching"
        :requests="projectRequests"
      />
      <IgniteRequestsEmptyState
        v-else-if="projectRequests.length <= 0"
        class="mt-8"
      >
        {{ emptyStateMessage }}
      </IgniteRequestsEmptyState>
    </div>
    <IgniteSelectedRequests :requests="projectRequests" />
  </div>
</template>
