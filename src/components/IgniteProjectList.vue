<template>
  <div class="project-list">
    <div class="masonry">
      <MasonryWall
        :items="chains"
        :column-width="columnWidth"
        :gap="gap"
        :rtl="rtl"
      >
        <template #default="{ item: project }">
          <IgniteProjectCard :project="project" :loading="project?.loading" />
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
  LaunchChain,
  LaunchQueryAllChainResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed } from 'vue'

import useLaunchChains from '../composables/useLauchChains'
import IgniteProjectCard from './IgniteProjectCard/index.vue'

// variables
const columnWidth = 330
const gap = 32
const rtl = false
const skeletons = new Array(6).fill({ loading: true })

// composables
const { isLoading, allChains, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useLaunchChains()

// methods
function filterCampaignlessChains(chains: LaunchChain[] = []): LaunchChain[] {
  return chains.filter(({ hasCampaign }) => hasCampaign)
}

function mergePages(pages: LaunchQueryAllChainResponse[] = []): LaunchChain[] {
  return pages.reduce(
    (acc, page) => [...acc, ...(page?.chain ?? [])],
    [] as LaunchChain[]
  )
}

// computed
const chains = computed<LaunchChain[]>(() => {
  if (isLoading.value) {
    return skeletons
  }

  if (isFetchingNextPage.value) {
    return [...mergePages(allChains.value?.pages), ...skeletons]
  }

  return filterCampaignlessChains(mergePages(allChains.value?.pages))
})
</script>

<style scoped lang="postcss">
.project-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;
}

.masonry {
  align-self: stretch;
}

.blur-box {
  display: flex;
  justify-content: center;

  width: 100%;
  background-color: #fff;
  height: 6rem;
  box-shadow: 0 0 2000px 200px #fff;

  margin-top: -8rem;
  padding: 1rem 0;
}

.view-more-btn {
  background-color: var(--primary);
  border-color: var(--primary);
}
</style>
