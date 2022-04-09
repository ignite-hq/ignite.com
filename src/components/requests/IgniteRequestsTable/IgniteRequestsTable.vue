<template>
  <div role="table" class="responses-table">
    <!-- Header -->
    <div role="rowgroup">
      <div role="row" class="responses-table-header">
        <div role="columnheader" class="responses-table-column-cell">
          <IgniteCheckbox />
        </div>
        <div role="columnheader" class="responses-table-column-cell flex-1">
          Action
        </div>
        <div role="columnheader" class="responses-table-column-cell flex-1">
          Type
        </div>
        <div role="columnheader" class="responses-table-column-cell flex-1">
          Requestor
        </div>
      </div>
    </div>

    <!-- Body -->
    <div role="rowgroup" class="responses-table-body">
      <div
        v-for="request in launchRequests"
        :key="request.launchID"
        role="row"
        class="responses-table-row"
      >
        <!-- Checkbox -->
        <div role="cell" class="responses-table-cell">
          <IgniteCheckbox />
        </div>

        <!-- Action -->
        <div role="cell" class="responses-table-cell flex-1">
          <IgniteRequestsAction :request="request" />
        </div>

        <!-- Type -->
        <div role="cell" class="responses-table-cell flex-1">
          {{ getHumanizedType(request.content) }}
        </div>

        <!-- Requestor -->
        <div role="cell" class="responses-table-cell flex-1 font-semibold">
          <IgniteProfileIcon :address="request.creator" />
          <span>{{
            request.creator ? getShortAddress(request.creator) : 'Unknown'
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsTable'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import IgniteCheckbox from '~/components/IgniteCheckbox.vue'
import IgniteProfileIcon from '~/components/IgniteProfileIcon.vue'
import useLaunchRequests from '~/composables/useLaunchRequests'
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { getShortAddress } from '~/utils/address'

import IgniteRequestsAction from '../IgniteRequestsAction.vue'
import { getHumanizedType } from './utils'

// composables
const { params } = useRoute()
const { requests } = useLaunchRequests(params.launchId.toString())

// methods
function mergePages(
  pages: LaunchQueryAllRequestResponse[] = []
): LaunchRequest[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.request ?? [])],
    [] as LaunchRequest[]
  )
}

// computed
const launchRequests = computed(() => {
  return mergePages(requests.value?.pages).filter(({ content }) =>
    Boolean(content)
  )
})
</script>

<style scoped lang="postcss">
.responses-table {
  @apply mt-7 w-full;
}

.responses-table-header {
  @apply flex flex-1;
}

.responses-table-column-cell {
  @apply border-b border-gray-70 px-4 py-6 pl-8 text-left font-medium text-muted;
}

.responses-table-body {
  @apply mt-4 space-y-3;
}

.responses-table-row {
  @apply relative flex rounded-[16px] py-2 hover:bg-[#F9F9F9];
}

.responses-table-cell {
  @apply flex items-center space-x-4 overflow-hidden p-4 py-6 pl-8;
}
</style>
