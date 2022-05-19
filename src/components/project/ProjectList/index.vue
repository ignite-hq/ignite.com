<script lang="ts">
export default {
  name: 'ProjectList'
}
</script>

<script lang="ts" setup>
import MasonryWall from '@yeger/vue-masonry-wall'
import {
  CampaignCampaignSummary,
  CampaignQueryCampaignSummariesResponse
} from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed } from 'vue'

import IgniteButton from '~/components/ui/IgniteButton.vue'
import useCampaignSummaries from '~/composables/campaign/useCampaignSummaries'

import IgniteProjectCard from './ProjectCard/index.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

// variables
const columnWidth = 330
const gap = 32
const rtl = false
const skeletons = new Array(6).fill({ loading: true })

// composables
const {
  isLoading,
  isFetched,
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
const isListEmpty = computed<boolean>(
  () =>
    isFetched.value &&
    Number(allCampaignSummaries.value?.pages[0].pagination?.total) === 0
)
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

    <div v-if="isListEmpty">
      <IgniteText> No projects </IgniteText>
    </div>

    <div v-if="hasNextPage && !isFetchingNextPage" class="blur-box">
      <IgniteButton
        variant="primary"
        color="primary"
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
  @apply -mt-11 flex h-10 w-full items-center justify-center bg-white-1000 pt-4;
  box-shadow: 0 0 2000px 200px #fff;
}
</style>
