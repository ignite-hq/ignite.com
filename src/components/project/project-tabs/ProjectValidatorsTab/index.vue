<script lang="ts">
export default {
  name: 'ProjectValidatorsTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import ProjectCardIncentives from '~/components/project/ProjectList/ProjectCard/ProjectCardIncentives.vue'
import ProjectCardShareAllocation from '~/components/project/ProjectList/ProjectCard/ProjectCardShareAllocation.vue'
import IgniteButton from '~/components/ui/atoms/IgniteButton.vue'
import IgniteHeading from '~/components/ui/atoms/IgniteHeading.vue'
import IgniteText from '~/components/ui/atoms/IgniteText.vue'
import useCampaignSummary from '~/composables/useCampaignSummary'

import ValidatorList from './ValidatorList.vue'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

// composables
const { campaignSummary } = useCampaignSummary(projectId)

// computed
const launchId = computed<string>(() => {
  return (
    campaignSummary?.value?.campaignSummary?.mostRecentChain?.launchID || '0'
  )
})
</script>

<template>
  <div class="container py-10 text-center">
    <IgniteHeading class="text-center font-title text-7 font-semibold">
      Validator incentives
    </IgniteHeading>
    <IgniteText class="mx-auto mt-4 max-w-lg">
      Participation incentives for validating transactions on the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>
    <div class="mt-8 flex flex-col md:flex-row">
      <div
        class="m-4 flex w-full flex-col justify-center rounded border border-gray-70 p-5"
      >
        <ProjectCardIncentives
          v-if="campaignSummary?.campaignSummary"
          :campaign-summary="campaignSummary?.campaignSummary"
        />
      </div>
      <div
        class="m-4 flex w-full flex-col justify-center rounded border border-gray-70 p-5"
      >
        <ProjectCardShareAllocation
          v-if="campaignSummary?.campaignSummary"
          :campaign-summary="campaignSummary?.campaignSummary"
        />
      </div>
    </div>

    <IgniteHeading class="mt-10 text-center font-title text-7 font-semibold">
      Validators
    </IgniteHeading>
    <IgniteText class="mx-auto mt-4 max-w-lg">
      Active validators verifying transactions to secure the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>

    <ValidatorList
      v-if="launchId && launchId !== '0'"
      :launch-id="launchId"
      class="mt-6"
    />

    <div
      class="mx-auto mt-10 flex w-full max-w-5xl flex-col justify-start rounded p-8 text-left shadow"
    >
      <IgniteHeading class="font-title text-7 font-semibold">
        Become a validator
      </IgniteHeading>
      <IgniteText class="mt-4">
        Help secure blockchain projects and be rewarded for your participation
      </IgniteText>
      <div class="mt-6">
        <IgniteButton variant="primary" color="primary" class="px-6">
          Learn more
        </IgniteButton>
      </div>
    </div>
  </div>
</template>
