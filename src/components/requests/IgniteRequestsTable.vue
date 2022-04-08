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
        v-for="row in launchRequests"
        :key="row.launchID"
        role="row"
        class="responses-table-row"
      >
        <div role="cell" class="responses-table-cell">
          <IgniteCheckbox />
        </div>
        <div role="cell" class="responses-table-cell flex-1">
          <IgniteRequestsActionIcon /> <span>{{ row.launchID }}</span>
        </div>
        <div role="cell" class="responses-table-cell flex-1">
          {{ row.requestID }}
        </div>
        <div role="cell" class="responses-table-cell flex-1">
          <div class="profile-placeholder" />
          <span>{{ row.creator }}</span>
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
import IgniteRequestsActionIcon from '~/components/requests/IgniteRequestsActionIcon.vue'
import useLaunchRequests from '~/composables/useLaunchRequests'
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'

const { params } = useRoute()
const { requests } = useLaunchRequests(params.launchId.toString())

function mergePages(
  pages: LaunchQueryAllRequestResponse[] = []
): LaunchRequest[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.request ?? [])],
    [] as LaunchRequest[]
  )
}

const launchRequests = computed(() => {
  return mergePages(requests.value?.pages)
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

.profile-placeholder {
  @apply h-7.5 w-7.5 rounded-circle bg-secondary;
}
</style>
