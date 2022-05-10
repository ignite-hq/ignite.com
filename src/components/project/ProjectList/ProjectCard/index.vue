<script lang="ts">
export default {
  name: 'ProjectCard'
}
</script>

<script lang="ts" setup>
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, PropType } from 'vue'

import useGitHubRepository from '~/composables/github/useGitHubRepository'

import ProjectCardDescription from './ProjectCardDescription.vue'
import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardIncentives from './ProjectCardIncentives.vue'
import ProjectCardShareAllocation from './ProjectCardShareAllocation.vue'
import ProjectCardStatus from './ProjectCardStatus.vue'

const props = defineProps({
  loading: Boolean,
  campaignSummary: {
    type: Object as PropType<CampaignCampaignSummary>,
    default: () => ({})
  }
})

// variables
const githubUrl = props.campaignSummary?.mostRecentChain?.sourceURL ?? ''

// composables
const { repository, isLoading: isGitHubRepositoryLoading } =
  useGitHubRepository(githubUrl)

// computed
const isLoading = computed(function () {
  return props.loading || isGitHubRepositoryLoading.value
})

const showAllocation = computed(function () {
  const campaignSummary = props.campaignSummary
  const hasAtLeastOneShare = campaignSummary?.rewards?.some((supply) => {
    const campaignId = campaignSummary.campaign?.campaignID
    const isShare = supply.denom?.startsWith(`v/${campaignId}`)
    return isShare
  })

  return (
    !isLoading.value &&
    props.campaignSummary?.incentivized &&
    hasAtLeastOneShare
  )
})

const showIncentives = computed(function () {
  const campaignSummary = props.campaignSummary
  const hasAtLeastOneIncentive = campaignSummary?.rewards?.some((supply) => {
    const campaignId = campaignSummary.campaign?.campaignID
    const isIncentive = !supply.denom?.startsWith(`v/${campaignId}`)
    return isIncentive
  })

  return (
    !isLoading.value &&
    props.campaignSummary?.incentivized &&
    hasAtLeastOneIncentive
  )
})
</script>

<template>
  <router-link
    :to="{
      path: `/projects/${campaignSummary.campaign?.campaignID ?? '0'}/overview`
    }"
    :class="isLoading ? 'pointer-events-none cursor-default' : 'cursor-pointer'"
  >
    <div class="project-card shadow-max">
      <ProjectCardHeader :loading="isLoading" />
      <div>
        <ProjectCardDescription
          :campaign="campaignSummary.campaign"
          :loading="isLoading"
          :github-url="githubUrl"
          :github-description="repository?.description ?? ''"
          class="project-card__row"
        />
        <ProjectCardShareAllocation
          v-if="showAllocation"
          class="project-card__row"
          :campaign-summary="campaignSummary"
        />
        <ProjectCardIncentives
          v-if="showIncentives"
          class="project-card__row"
          :campaign-summary="campaignSummary"
        />
        <ProjectCardStatus
          class="project-card__row"
          :loading="isLoading"
          :project-id="campaignSummary.campaign?.campaignID ?? '0'"
          :validator-count="campaignSummary.mostRecentChain?.validatorNb ?? '0'"
          :request-count="campaignSummary.mostRecentChain?.requestNb ?? '0'"
          :stargazer-count="repository?.stargazers_count?.toString() ?? '0'"
        />
      </div>
    </div>
  </router-link>
</template>

<style scoped lang="postcss">
.project-card {
  @apply overflow-hidden rounded-md bg-white-1000;
  box-shadow: 16px 32px 128px 8px rgba(0, 0, 0, 0.07);

  &__row {
    @apply border-t border-gray-70 py-7 px-6 md:px-7.5;
    &:first-child {
      @apply border-t-0 pt-8.5;
    }
    &._gray {
      @apply border-t-0 bg-gray-50 pt-6 pb-8.5;
    }
  }
}
</style>
