<template>
  <div>
    <IgniteLoader v-if="isLoading" class="title-loading mx-auto mb-4" />
    <div
      v-if="!isLoading"
      class="ignite-title mb-4 text-center text-4 font-semibold m:text-5"
    >
      {{ campaignName }}
    </div>

    <IgniteLoader v-if="isLoading" class="github-loading mx-auto" />
    <IgniteGithubRepoLink
      v-if="showGitHubRepository"
      :github-url="githubUrl"
      class="mb-7 justify-center text-2"
    />

    <div v-if="!isLoading" class="ignite-text text-2 text-muted m:text-3">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardDescription'
}
</script>

<script lang="ts" setup>
import { CampaignCampaign } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, PropType } from 'vue'

import IgniteGithubRepoLink from '../IgniteGithubRepoLink.vue'
import IgniteLoader from '../IgniteLoader.vue'

// props
const props = defineProps({
  loading: Boolean,
  githubDescription: { type: String, required: true },
  githubUrl: { type: String, required: true },
  campaign: { type: Object as PropType<CampaignCampaign>, default: () => ({}) }
})

// variables
const defaultDescription =
  'A blockchain built with the Cosmos SDK and launched on the Ignite Network.'

// computed
const campaignName = computed(() => {
  if (!props.campaign) return ''
  return props.campaign.campaignName
})

const isLoading = computed(() => props.loading)

const description = computed(() => {
  if (props.githubDescription.length > 0) return props.githubDescription
  return defaultDescription
})

const showGitHubRepository = computed(() => {
  return props.githubUrl?.length > 0 && !isLoading.value
})
</script>

<style scoped lang="postcss">
.title-loading {
  width: 11.25rem;
  height: 1.625rem;
}

.github-loading {
  width: 9.375rem;
  height: 1.5rem;
}
</style>
