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
    <a
      v-if="!isLoading"
      :href="sourceUrl"
      target="__blank"
      rel="noreferrer noopener"
      class="flex items-center justify-center mb-7"
    >
      <IconGithub class="mr-1 text-title" />
      <span class="font-medium ignt-text text-2 text-muted">{{
        githubUser
      }}</span>
      <span class="mx-1 font-medium ignt-text text-2 text-border">/</span>
      <span class="font-medium ignt-text text-2 text-muted">{{
        githubRepo
      }}</span>
    </a>

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

import IconGithub from '../icons/IconGithub.vue'
import IgniteLoader from '../IgniteLoader.vue'

// props
const props = defineProps({
  loading: Boolean,
  githubUser: { type: String, required: true },
  githubRepo: { type: String, required: true },
  githubDescription: { type: String, required: true },
  sourceUrl: { type: String, required: true },
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
