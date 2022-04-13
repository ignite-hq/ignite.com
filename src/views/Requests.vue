<template>
  <div class="container">
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
  LaunchRequest
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

// computed
const projectRequests = computed(() => {
  return mergePages(requests.value?.pages)
})

const emptyStateMessage = computed(() => {
  return store.selectedPageFilter.id === RequestPageFilters.Pending
    ? 'No pending requests'
    : 'No closed requests'
})
</script>
