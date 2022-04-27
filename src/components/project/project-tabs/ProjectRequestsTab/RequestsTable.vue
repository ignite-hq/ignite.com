<script lang="ts">
export default {
  name: 'RequestsTable'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IgniteCheckbox from '~/components/ui/IgniteCheckbox.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteProfileIcon from '~/components/ui/IgniteProfileIcon.vue'
import useAddress from '~/composables/wallet/useAddress'
import {
  LaunchRequest,
  LaunchRequestContent,
  LaunchRequestStatus
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import {
  RequestPageFilters,
  RequestPageSorts,
  useRequestsStore
} from '~/stores/requests-store'
import { getShortAddress } from '~/utils/address'

import RequestsAction from './RequestsAction.vue'
import { getTypeFromContent } from './utils'

interface Props {
  requests: LaunchRequest[]
  loading: boolean
  selectionDisabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  requests: () => [],
  loading: false,
  selectionDisabled: true
})

// variables
const skeletons = new Array(6).fill(null)

// store
const store = useRequestsStore()

// composables
const { address } = useAddress()

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

function onSelect(index: number, requestId: string, isChecked: boolean) {
  const requestToSelect = sortedProjectRequests.value[index]
  let newValue = [...store.selectedRequests]

  if (isChecked) {
    newValue.push(requestToSelect)
  } else {
    newValue = newValue.filter((request) => request.requestID !== requestId)
  }

  store.selectedRequests = newValue
}

function isChecked(requestId: string) {
  return store.selectedRequests.some(
    (request) => request.requestID === requestId
  )
}

function getHumanizedType(content?: LaunchRequestContent): string {
  const type = getTypeFromContent(content)

  switch (type) {
    case 'genesisAccount':
      return 'Request for tokens'
    case 'genesisValidator':
      return 'Request to validate'
    default:
      return 'Unknown'
  }
}

function sortRequests(requests: LaunchRequest[], sortBy: RequestPageSorts) {
  switch (sortBy) {
    case RequestPageSorts.Newest:
      return requests.sort(
        (a, b) => Number(a?.createdAt ?? '') - Number(b?.createdAt ?? '')
      )
    case RequestPageSorts.RequestType:
      return requests.sort((a, b) => {
        const aType = getTypeFromContent(a.content)
        const bType = getTypeFromContent(b.content)

        if (aType < bType) {
          return -1
        }

        if (aType > bType) {
          return 1
        }

        return 0
      })
    case RequestPageSorts.Requestor:
      return requests.sort((a, b) => {
        const aRequestor = a.creator ?? ''
        const bRequestor = b.creator ?? ''

        if (aRequestor < bRequestor) {
          return -1
        }

        if (aRequestor > bRequestor) {
          return 1
        }

        return 0
      })
    default:
      return requests
  }
}

// computed
const sortedProjectRequests = computed<LaunchRequest[]>(() => {
  if (isLoading.value) return skeletons

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

const isLoading = computed(() => {
  return props.loading
})

const showCheckbox = computed(() => {
  const isShowingClosedRequests =
    store.selectedPageFilter.id === RequestPageFilters.Closed
  const isDisabled = props.selectionDisabled

  return (
    Boolean(address.value) &&
    !isLoading.value &&
    !isShowingClosedRequests &&
    !isDisabled
  )
})

const showStatus = computed(() => {
  const isShowingClosedRequests =
    store.selectedPageFilter.id === RequestPageFilters.Closed

  return isShowingClosedRequests
})
</script>

<template>
  <div role="table" class="responses-table">
    <!-- Header -->
    <div role="rowgroup">
      <div role="row" class="responses-table-header">
        <div
          v-if="showCheckbox"
          role="columnheader"
          class="responses-table-column-cell"
        >
          <IgniteCheckbox
            :is-checked="areAllChecked"
            :is-indeterminate="isAnyChecked"
            @input="selectAll"
          />
        </div>

        <div
          v-if="showStatus"
          role="columnheader"
          class="responses-table-column-cell"
        >
          <IconCheckMarkThin class="invisible" />
        </div>

        <div role="columnheader" class="responses-table-column-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5" />
          <span v-if="!isLoading">Action</span>
        </div>

        <div role="columnheader" class="responses-table-column-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5" />
          <span v-if="!isLoading">Type</span>
        </div>

        <div role="columnheader" class="responses-table-column-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5" />
          <span v-if="!isLoading">Requestor</span>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div role="rowgroup" class="responses-table-body">
      <div
        v-for="(request, index) in sortedProjectRequests"
        :key="request?.requestID"
        role="row"
        class="responses-table-row"
      >
        <!-- Checkbox -->
        <div v-if="showCheckbox" role="cell" class="responses-table-cell">
          <IgniteCheckbox
            :is-checked="isChecked(request.requestID!)"
            @update:model-value="(isChecked) => onSelect( index, request.requestID!, isChecked as boolean)"
          />
        </div>

        <!-- Status -->
        <div v-if="showStatus" role="cell" class="responses-table-cell">
          <component
            :is="
              request.status === LaunchRequestStatus.APPROVED
                ? IconCheckMarkThin
                : IconCanceled
            "
            :class="{
              'text-primary': request.status === LaunchRequestStatus.APPROVED,
              'text-negative': request.status === LaunchRequestStatus.REJECTED
            }"
          />
        </div>

        <!-- Action -->
        <div role="cell" class="responses-table-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <RequestsAction v-if="!isLoading" :request="request" />
        </div>

        <!-- Type -->
        <div role="cell" class="responses-table-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <span v-if="!isLoading">{{ getHumanizedType(request.content) }}</span>
        </div>

        <!-- Requestor -->
        <div role="cell" class="responses-table-cell flex-1 font-semibold">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <span v-if="!isLoading" class="flex items-center space-x-4">
            <IgniteProfileIcon :address="request.creator" />
            <span>{{
              request.creator ? getShortAddress(request.creator) : 'Unknown'
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

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
