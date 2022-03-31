<template>
  <div>
    <IgniteLoader v-if="isLoading" class="mx-auto mb-4 title-loading" />
    <div
      v-if="!isLoading"
      class="mb-4 font-semibold text-center ignt-title text-4 m:text-5"
    >
      {{ campaignName }}
    </div>

    <IgniteLoader v-if="isLoading" class="mx-auto github-loading" />
    <IgniteGithub
      v-if="showGitHubRepository"
      :github-url="githubUrl"
      class="justify-center mb-7 text-2"
    />

    <div v-if="!isLoading" class="ignt-text text-2 m:text-3 text-muted">
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

import IgniteGithub from '../IgniteGithub.vue'
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
