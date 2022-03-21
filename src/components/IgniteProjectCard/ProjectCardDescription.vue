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
      :href="project.sourceURL"
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
      A blockchain built with the Cosmos SDK and launched on the Ignite Network.
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardDescription'
}
</script>

<script lang="ts" setup>
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, PropType } from 'vue'

import useCampaign from '../../composables/useCampaign'
import { getPathname } from '../../utils/url'
import IconGithub from '../icons/IconGithub.vue'
import IgniteLoader from '../IgniteLoader.vue'

const props = defineProps({
  loading: Boolean,
  project: { type: Object as PropType<LaunchChain>, default: () => ({}) }
})

// variables
const githubUrlPathname = getPathname(props.project?.sourceURL ?? '')
const splitPathname = githubUrlPathname.split('/')
const githubUser = splitPathname[1] ?? ''
const githubRepo = splitPathname[2] ?? ''

// composables
const { campaign, isLoading: isLoadingCampaign } = useCampaign(
  props.project?.campaignID ?? ''
)

// computed
const campaignName = computed(() => {
  if (!campaign.value) return ''
  return campaign.value?.campaignName
})

const isLoading = computed(() => props.loading || isLoadingCampaign?.value)
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
