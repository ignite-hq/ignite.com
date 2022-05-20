<script lang="ts">
export default {
  name: 'ProjectValidatorsTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'
import { hasAtLeastOneIncentive, hasAtLeastOneVoucher } from '~/utils/reward'

import ProjectIncentives from '../../ProjectIncentives.vue'
import ProjectShareAllocation from '../../ProjectShareAllocation.vue'
import ValidatorList from './ValidatorList.vue'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

// composables
const { campaignSummary, isLoading } = useCampaignSummary(projectId)

const showAllocation = computed(function () {
  return (
    campaignSummary?.value?.incentivized &&
    hasAtLeastOneVoucher(
      campaignSummary.value?.campaign?.campaignID ?? '',
      campaignSummary.value?.rewards
    )
  )
})

const showIncentives = computed(function () {
  return (
    campaignSummary?.value?.incentivized &&
    hasAtLeastOneIncentive(
      campaignSummary.value?.campaign?.campaignID ?? '',
      campaignSummary.value?.rewards
    )
  )
})
</script>

<template>
  <div class="container space-y-9 py-10 text-center">
    <div v-if="showAllocation || showIncentives">
      <IgniteHeading class="text-center font-title text-7 font-semibold">
        Validator incentives
      </IgniteHeading>
      <IgniteText class="mx-auto mt-4 max-w-lg">
        Participation incentives for validating transactions on the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgniteText>
      <div class="mt-8 flex flex-col md:flex-row md:justify-center">
        <IgniteLoader v-if="isLoading" class="m-4 h-12 w-full !max-w-2xl" />
        <div
          v-else-if="Boolean(campaignSummary) && showIncentives"
          class="m-4 flex w-full max-w-2xl flex-col justify-center rounded border border-border p-5"
        >
          <ProjectIncentives size="lg" :campaign-summary="campaignSummary" />
        </div>

        <IgniteLoader v-if="isLoading" class="m-4 h-12 w-full !max-w-2xl" />
        <div
          v-else-if="Boolean(campaignSummary) && showAllocation"
          class="m-4 flex w-full max-w-2xl flex-col justify-center rounded border border-border p-5"
        >
          <ProjectShareAllocation
            size="lg"
            :campaign-summary="campaignSummary"
          />
        </div>
      </div>
    </div>

    <div>
      <IgniteHeading class="text-center font-title text-7 font-semibold">
        Validators
      </IgniteHeading>
      <IgniteText class="mx-auto mt-4 max-w-lg">
        Active validators verifying transactions to secure the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgniteText>

      <ValidatorList
        v-if="projectId && projectId !== '0'"
        :project-id="projectId"
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
  </div>
</template>
