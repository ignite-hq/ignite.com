<template>
  <div>
    <IgniteLoader v-if="loading" class="title-loading mx-auto mb-4" />
    <div
      v-if="!loading"
      class="ignt-title text-4 m:text-5 font-semibold text-center mb-4"
    >
      {{ campaignName }}
    </div>

    <IgniteLoader v-if="loading" class="github-loading mx-auto" />
    <a
      v-if="!loading"
      :href="project.sourceURL"
      target="__blank"
      rel="noreferrer noopener"
      class="flex items-center justify-center mb-7"
    >
      <IconGithub class="text-title mr-1" />
      <span class="ignt-text font-medium text-2 text-muted">{{
        githubUser
      }}</span>
      <span class="ignt-text font-medium text-2 text-border mx-1">/</span>
      <span class="ignt-text font-medium text-2 text-muted">{{
        githubRepo
      }}</span>
    </a>

    <div v-if="!loading" class="ignt-text text-2 m:text-3 text-muted">
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

const { campaign } = useCampaign(Number(props.project?.campaignID))

const githubUrlPathname = getPathname(props.project?.sourceURL ?? '')
const splitPathname = githubUrlPathname.split('/')
const githubUser = splitPathname[1] ?? ''
const githubRepo = splitPathname[2] ?? ''

const campaignName = computed(() => {
  if (!campaign.value) return ''
  if (props.project.isMainnet) return campaign.value?.campaignName

  return `${campaign.value?.campaignName}-${campaign.value?.coordinatorID}`
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
