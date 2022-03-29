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
      <SpButton class="view-more-btn" @click="() => fetchNextPage()"
        >View More</SpButton
      >
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteProjectList'
}
</script>

<script lang="ts" setup>
import SpButton from '@starport/vue/src/components/SpButton/SpButton.vue'
import MasonryWall from '@yeger/vue-masonry-wall'
import {
  CampaignCampaignSummary,
  CampaignQueryCampaignSummariesResponse
} from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed } from 'vue'

import useCampaignSummaries from '../composables/useCampaignSummaries'
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

<style scoped lang="postcss">
.project-list {
  @apply flex flex-col items-center mb-7;
}

.masonry {
  @apply self-stretch;
}

.blur-box {
  @apply flex justify-center w-full bg-white-1000 h-10 -mt-11 pt-4;
  box-shadow: 0 0 2000px 200px #fff;
}

.view-more-btn {
  @apply bg-primary border-primary;
}
</style>
