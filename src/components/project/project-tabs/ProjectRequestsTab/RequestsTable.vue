<script lang="ts">
export default {
  name: 'RequestsTable'
}
</script>

<script lang="ts" setup>
import {
  LaunchRequest,
  LaunchRequestContent,
  LaunchRequestStatus
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed } from 'vue'

import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IgniteCheckbox from '~/components/ui/IgniteCheckbox.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteProfileIcon from '~/components/ui/IgniteProfileIcon.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useAddress from '~/composables/wallet/useAddress'
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
  showHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  requests: () => [],
  loading: false,
  selectionDisabled: true,
  showHeader: true
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
    <div v-if="showHeader" role="rowgroup">
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
          <IgniteText v-if="!isLoading" as="span">Action</IgniteText>
        </div>

        <div
          role="columnheader"
          class="responses-table-column-cell hidden flex-1 md:block"
        >
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Type</IgniteText>
        </div>

        <div
          role="columnheader"
          class="responses-table-column-cell hidden flex-1 md:block"
        >
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Requestor</IgniteText>
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
          <IgniteLoader v-if="isLoading" class="h-5 w-5" />
          <component
            :is="
              request?.status === LaunchRequestStatus.APPROVED
                ? IconCheckMarkThin
                : IconCanceled
            "
            v-else
            :class="{
              'text-primary': request?.status === LaunchRequestStatus.APPROVED,
              'text-negative': request?.status === LaunchRequestStatus.REJECTED
            }"
          />
        </div>

        <!-- Action -->
        <div role="cell" class="responses-table-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <RequestsAction v-if="!isLoading" :request="request" />
        </div>

        <!-- Type -->
        <div role="cell" class="responses-table-cell w-full md:flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="text-2 font-semibold text-muted md:hidden"
            >Type:</IgniteText
          >
          <IgniteText v-if="!isLoading" as="span" class="text-muted">{{
            getHumanizedType(request.content)
          }}</IgniteText>
        </div>

        <!-- Requestor -->
        <div role="cell" class="responses-table-cell w-full md:flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="text-2 font-semibold text-muted md:hidden"
            >Requestor:</IgniteText
          >
          <span
            v-if="!isLoading"
            class="flex items-center space-x-4 font-semibold"
          >
            <IgniteProfileIcon :address="request.creator" class="shrink-0" />
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
  @apply border-b border-border px-3 py-6 text-left font-medium text-muted first:pl-4 md:px-5 md:first:pl-6;
}

.responses-table-body {
  @apply mt-4 space-y-3;
}

.responses-table-row {
  @apply relative flex flex-wrap border-b border-border py-2 transition-colors hover:rounded hover:border-transparent hover:bg-[#F9F9F9] md:flex-nowrap md:border-b-0;
}

.responses-table-cell {
  @apply flex items-center space-x-4 overflow-hidden px-3 py-3 text-left first:pl-4 md:px-5 md:py-6 md:first:pl-6;
}
</style>
