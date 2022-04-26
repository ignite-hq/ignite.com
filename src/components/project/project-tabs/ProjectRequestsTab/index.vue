<script lang="ts">
export default {
  name: 'ProjectRequestsTab'
}
</script>

<script lang="ts" setup>
import { computed, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

import RequestsEmptyState from '~/components/project/project-tabs/ProjectRequestsTab/RequestsEmptyState.vue'
import RequestsHeader from '~/components/project/project-tabs/ProjectRequestsTab/RequestsHeader.vue'
import RequestsTable from '~/components/project/project-tabs/ProjectRequestsTab/RequestsTable.vue'
import SelectedRequests from '~/components/project/project-tabs/ProjectRequestsTab/SelectedRequests.vue'
import useProjectRequests from '~/composables/project/useProjectRequests'
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
    <RequestsHeader />
    <div>
      <RequestsTable
        v-if="projectRequests.length > 0 || isFetching"
        :loading="isFetching"
        :requests="projectRequests"
      />
      <RequestsEmptyState v-else-if="projectRequests.length <= 0" class="mt-8">
        {{ emptyStateMessage }}
      </RequestsEmptyState>
    </div>
    <SelectedRequests :requests="projectRequests" />
  </div>
</template>
