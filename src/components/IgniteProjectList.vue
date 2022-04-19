<script lang="ts">
export default {
  name: 'IgniteProjectList'
}
</script>

<script lang="ts" setup>
import MasonryWall from '@yeger/vue-masonry-wall'
import {
  CampaignCampaignSummary,
  CampaignQueryCampaignSummariesResponse
} from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed } from 'vue'

import useCampaignSummaries from '../composables/useCampaignSummaries'
import IgniteButton from './IgniteButton.vue'
import IgniteProjectCard from './IgniteProjectCard/index.vue'

// variables
const columnWidth = 330
const gap = 32
const rtl = false
const skeletons = new Array(6).fill({ loading: true })

// composables
const {
  isLoading,
  allCampaignSummaries,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage
} = useCampaignSummaries()

// methods
function mergePages(
  pages: CampaignQueryCampaignSummariesResponse[] = []
): CampaignCampaignSummary[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.campaignSummaries ?? [])],
    [] as CampaignCampaignSummary[]
  )
}

// computed
const campaignSummaries = computed<CampaignCampaignSummary[]>(() => {
  if (isLoading.value) {
    return skeletons
  }

  if (isFetchingNextPage.value) {
    return [...mergePages(allCampaignSummaries.value?.pages), ...skeletons]
  }

  return mergePages(allCampaignSummaries.value?.pages)
})
</script>

<template>
  <div class="project-list">
    <div class="masonry">
      <MasonryWall
        :items="campaignSummaries"
        :column-width="columnWidth"
        :gap="gap"
        :rtl="rtl"
      >
        <template #default="{ item: campaignSummary }">
          <IgniteProjectCard
            :campaign-summary="campaignSummary"
            :loading="campaignSummary?.loading"
          />
        </template>
      </MasonryWall>
    </div>

    <div v-if="hasNextPage && !isFetchingNextPage" class="blur-box">
      <IgniteButton
        variant="primary"
        class="view-more-btn"
        @click="() => fetchNextPage()"
        >View More</IgniteButton
      >
    </div>
  </div>
</template>

<style scoped lang="postcss">
.project-list {
  @apply mb-7 flex flex-col items-center;
}

.masonry {
  @apply self-stretch;
}

.blur-box {
  @apply -mt-11 flex h-10 w-full justify-center bg-white-1000 pt-4;
  box-shadow: 0 0 2000px 200px #fff;
}

.view-more-btn {
  @apply border-primary bg-primary;
}
</style>
