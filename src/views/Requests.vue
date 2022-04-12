<template>
  <div class="container">
    <IgniteRequestsHeader />
    <IgniteRequestsTable :requests="projectRequests" />
    <IgniteSelectedRequests :requests="projectRequests" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import IgniteRequestsHeader from '~/components/requests/IgniteRequestsHeader.vue'
import IgniteRequestsTable from '~/components/requests/IgniteRequestsTable'
import IgniteSelectedRequests from '~/components/requests/IgniteSelectedRequests.vue'
import useProjectRequests from '~/composables/useProjectRequests'
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

// composables
const { params } = useRoute()
const { requests } = useProjectRequests(params.projectId.toString())

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
</script>
