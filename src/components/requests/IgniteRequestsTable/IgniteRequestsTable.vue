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
        v-for="(request, index) in sortedProjectRequests"
        :key="request.launchID"
        role="row"
        class="responses-table-row"
      >
        <!-- Checkbox -->
        <div v-if="Boolean(account)" role="cell" class="responses-table-cell">
          <IgniteCheckbox
            :is-checked="isChecked(request.requestID)"
            @update:model-value="(isChecked) => onSelect(index, isChecked as boolean)"
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

import IgniteCheckbox from '~/components/IgniteCheckbox.vue'
import IgniteProfileIcon from '~/components/IgniteProfileIcon.vue'
import { LaunchRequest } from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useRequestsStore } from '~/stores/requests-store'
import { getShortAddress } from '~/utils/address'

import IgniteRequestsAction from '../IgniteRequestsAction.vue'
import { getHumanizedType, sortRequests } from './utils'

interface Props {
  requests: LaunchRequest[]
}

const props = withDefaults(defineProps<Props>(), {
  requests: () => []
})

// store
const store = useRequestsStore()

// composables
const { address: account } = useAddress()

// methods
function selectAll() {
  if (areAllChecked.value) {
    store.selectedRequests = []
  } else {
    store.selectedRequests = sortedProjectRequests.value.map(
      (request) => request
    )
  }
}

function onSelect(index: number, isChecked: boolean) {
  const requestToSelect = sortedProjectRequests.value[index]
  const newValue = [...store.selectedRequests]

  if (isChecked) {
    newValue.push(requestToSelect)
  } else {
    newValue.splice(index, 1)
  }

  store.selectedRequests = newValue
}

function isChecked(requestId?: string) {
  return store.selectedRequests.some(
    (request) => request.requestID === requestId
  )
}

// computed
const sortedProjectRequests = computed(() => {
  const requestsWithContent = props.requests.filter(({ content }) =>
    Boolean(content)
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
  return store.selectedRequests.length === sortedProjectRequests.value.length
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
