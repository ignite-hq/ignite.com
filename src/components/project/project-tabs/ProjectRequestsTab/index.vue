<script lang="ts">
export default {
  name: 'ProjectRequestsTab'
}
</script>

<script lang="ts" setup>
import {
  LaunchQueryAllRequestResponse,
  LaunchRequest,
  LaunchRequestStatus
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, onBeforeUnmount } from 'vue'

import RequestsEmptyState from '~/components/project/project-tabs/ProjectRequestsTab/RequestsEmptyState.vue'
import RequestsHeader from '~/components/project/project-tabs/ProjectRequestsTab/RequestsHeader.vue'
import RequestsHeaderTop from '~/components/project/project-tabs/ProjectRequestsTab/RequestsHeaderTop.vue'
import SelectedRequests from '~/components/project/project-tabs/ProjectRequestsTab/SelectedRequests.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import useCoordinator from '~/composables/profile/useCoordinator'
import useChainRequests from '~/composables/request/useChainRequests'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { RequestPageFilters, useRequestsStore } from '~/stores/requests-store'

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

const launchId = computed(() => {
  return props.campaignSummary?.mostRecentChain?.launchID
})

const projectName = computed(() => {
  return props.campaignSummary?.campaign?.campaignName
})

// composables
const {
  requests,
  isLoading: isLoadingProjectRequests,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage
} = useChainRequests(launchId)
const { isSameAddressAsLoggedIn, isLoading: isLoadingCoordinator } =
  useCoordinator(coordinatorId)

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

const isLoading = computed(() => {
  const isInitialFetch =
    isLoadingProjectRequests.value ||
    isLoadingCoordinator.value ||
    !launchId.value

  return isInitialFetch && !isFetchingNextPage.value
})
</script>

<template>
  <div class="container pt-8 text-center md:pt-10.5">
    <RequestsHeaderTop
      :loading="isLoading"
      :campaign-summary="campaignSummary"
      class="border-b border-border pb-8"
    />
    <RequestsHeader :project-name="projectName ?? ''" class="mt-8 md:mt-10.5" />
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
