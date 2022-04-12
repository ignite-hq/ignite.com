<template>
  <div role="table" class="responses-table">
    <!-- Header -->
    <div role="rowgroup">
      <div role="row" class="responses-table-header">
        <div
          v-if="Boolean(account)"
          role="columnheader"
          class="responses-table-column-cell"
        >
          <IgniteCheckbox
            :is-checked="areAllChecked"
            :is-indeterminate="isAnyChecked"
            @input="selectAll"
          />
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
        v-for="(request, index) in launchRequests"
        :key="request.launchID"
        role="row"
        class="responses-table-row"
      >
        <!-- Checkbox -->
        <div v-if="Boolean(account)" role="cell" class="responses-table-cell">
          <IgniteCheckbox
            v-model="store.selectedRequests"
            :value="index.toString()"
          />
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
import { useAddress } from '@starport/vue/src/composables'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import IgniteCheckbox from '~/components/IgniteCheckbox.vue'
import IgniteProfileIcon from '~/components/IgniteProfileIcon.vue'
import useProjectRequests from '~/composables/useProjectRequests'
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useRequestsStore } from '~/stores/requests-store'
import { getShortAddress } from '~/utils/address'

import IgniteRequestsAction from '../IgniteRequestsAction.vue'
import { getHumanizedType, sortRequests } from './utils'

// store
const store = useRequestsStore()

// composables
const { address: account } = useAddress()
const { params } = useRoute()
const { requests } = useProjectRequests(params.projectId.toString())

// methods
function mergePages(
  pages: LaunchQueryAllRequestResponse[] = []
): LaunchRequest[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.request ?? [])],
    [] as LaunchRequest[]
  )
}

function selectAll() {
  if (areAllChecked.value) {
    store.selectedRequests = []
  } else {
    store.selectedRequests = launchRequests.value.map((_, index) =>
      index.toString()
    )
  }
}

// computed
const launchRequests = computed(() => {
  const requestsWithContent = mergePages(requests.value?.pages).filter(
    ({ content }) => Boolean(content)
  )

  const sortedRequests = sortRequests(
    requestsWithContent,
    store.selectedPageSort.id
  )

  return sortedRequests
})

const isAnyChecked = computed(() => {
  return store.selectedRequests.length > 0
})

const areAllChecked = computed(() => {
  return store.selectedRequests.length === launchRequests.value.length
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
