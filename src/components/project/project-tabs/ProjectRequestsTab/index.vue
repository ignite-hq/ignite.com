<script lang="ts">
export default {
  name: 'ProjectRequestsTab'
}
</script>

<script lang="ts" setup>
import {
  LaunchRequest,
  LaunchRequestStatus
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, onBeforeUnmount, watchEffect } from 'vue'

import RequestsEmptyState from '~/components/project/project-tabs/ProjectRequestsTab/RequestsEmptyState.vue'
import RequestsHeader from '~/components/project/project-tabs/ProjectRequestsTab/RequestsHeader.vue'
import RequestsTableHeader from '~/components/project/project-tabs/ProjectRequestsTab/RequestsTableHeader.vue'
import SelectedRequests from '~/components/project/project-tabs/ProjectRequestsTab/SelectedRequests.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import useCoordinator from '~/composables/profile/useCoordinator'
import useChainRequests from '~/composables/request/useChainRequests'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { RequestPageFilters, useRequestsStore } from '~/stores/requests-store'
import { mergePagesByKey } from '~/utils/array'

import RequestsTable from './RequestsTable.vue'

interface Props {
  campaignSummary?: CampaignCampaignSummary
}

const props = defineProps<Props>()

// lh
onBeforeUnmount(() => {
  store.$reset()
})

// store
const store = useRequestsStore()

const coordinatorId = computed(() => {
  return props.campaignSummary?.campaign?.coordinatorID
})

const chainId = computed(() => {
  return props.campaignSummary?.mostRecentChain?.launchID
})

const projectName = computed(() => {
  return props.campaignSummary?.campaign?.campaignName
})

const selectedChain = computed(() => {
  return store.selectedChain
})

// composables
const {
  requests,
  isLoading: isLoadingProjectRequests,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage
} = useChainRequests(selectedChain)
const { isSameAddressAsLoggedIn, isLoading: isLoadingCoordinator } =
  useCoordinator(coordinatorId)

// watchers
watchEffect(() => {
  if (chainId.value && !store.selectedChain) {
    store.selectedChain = chainId.value
  }
})

// methods
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
  const mergedRequests = mergePagesByKey(requests.value?.pages, 'request')

  return filterRequests(mergedRequests, store.selectedPageFilter.id)
})

const emptyStateMessage = computed(() => {
  return store.selectedPageFilter.id === RequestPageFilters.Pending
    ? 'No pending requests'
    : 'No closed requests'
})

const isLoading = computed(() => {
  const isInitialFetch =
    isLoadingProjectRequests.value ||
    isLoadingCoordinator.value ||
    !chainId.value

  return isInitialFetch && !isFetchingNextPage.value
})
</script>

<template>
  <div class="container py-10 text-center">
    <RequestsHeader
      :loading="isLoading"
      :campaign-summary="campaignSummary"
      class="border-b border-border pb-8"
    />
    <RequestsTableHeader
      :project-name="projectName ?? ''"
      class="mt-8 md:mt-10.5"
    />
    <div>
      <RequestsTable
        v-if="projectRequests.length > 0 || isLoading"
        :loading="isLoading"
        :requests="projectRequests"
        :selection-disabled="!isSameAddressAsLoggedIn"
      />
      <RequestsEmptyState v-else-if="projectRequests.length <= 0" class="mt-8">
        {{ emptyStateMessage }}
      </RequestsEmptyState>
    </div>

    <RequestsTable v-if="isFetchingNextPage" :show-header="false" loading />
    <IgniteButton
      v-if="hasNextPage && !isFetchingNextPage && projectRequests.length > 0"
      variant="primary"
      color="primary"
      class="mt-8"
      @click="() => fetchNextPage()"
      >View More</IgniteButton
    >
    <SelectedRequests :requests="projectRequests" />
  </div>
</template>
