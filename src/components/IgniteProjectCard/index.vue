<template>
  <div class="project-card">
    <ProjectCardHeader :loading="isLoading" />
    <div>
      <ProjectCardDescription
        :campaign="campaign"
        :loading="isLoading"
        :github-repo="githubRepo"
        :github-user="githubUser"
        :github-description="repository?.description ?? ''"
        :source-url="project.sourceURL ?? ''"
        class="project-card__row"
      />
      <ProjectCardShareAllocation
        v-if="showAllocation"
        class="project-card__row"
        :campaign="campaign"
      />
      <ProjectCardStatus
        class="project-card__row"
        :project="project"
        :loading="isLoading"
        :stargazer-count="repository?.stargazers_count ?? 0"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteProjectCard'
}
</script>

<script lang="ts" setup>
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { computed, PropType } from 'vue'

import useCampaign from '../../composables/useCampaign'
import useGitHubRepository from '../../composables/useGitHubRepository'
import { getPathname } from '../../utils/url'
import ProjectCardDescription from './ProjectCardDescription.vue'
import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardShareAllocation from './ProjectCardShareAllocation.vue'
import ProjectCardStatus from './ProjectCardStatus.vue'

const props = defineProps({
  loading: Boolean,
  project: {
    type: Object as PropType<LaunchChain>,
    default: () => ({})
  }
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

const { repository, isLoading: isGitHubRepositoryLoading } =
  useGitHubRepository(githubUser, githubRepo)

// computed
const isLoading = computed(function () {
  return (
    isLoadingCampaign.value || props.loading || isGitHubRepositoryLoading.value
  )
})

const showAllocation = computed(function () {
  return !isLoading.value && Boolean(campaign.value?.totalSupply?.length)
})
</script>

<style scoped lang="postcss">
.project-card {
  @apply overflow-hidden bg-white-1000 rounded-md;
  box-shadow: 16px 32px 128px 8px rgba(0, 0, 0, 0.07);

  &__row {
    @apply py-7 px-6 m:px-7.5 border-t border-gray-70;
    &:first-child {
      @apply pt-8.5 border-t-0;
    }
    &._gray {
      @apply pt-6 pb-8.5 border-t-0 bg-gray-50;
    }
  }
}
</style>
