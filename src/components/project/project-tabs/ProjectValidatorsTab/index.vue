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
import IgniteCard from '~/components/ui/IgniteCard.vue'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'
import { hasAtLeastOneIncentive, hasAtLeastOneVoucher } from '~/utils/reward'

import ProjectIncentives from '~/components/project/ProjectIncentives.vue'
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
  <div class="container space-y-8 py-8 text-center md:space-y-10 md:py-10">
    <div v-if="showAllocation || showIncentives">
      <IgniteHeading
        class="text-center font-title text-5 font-semibold md:text-7"
      >
        Validator incentives
      </IgniteHeading>
      <IgniteText class="mx-auto mt-4 max-w-[23rem] text-muted md:mt-6">
        Participation incentives for validating transactions on the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgniteText>
      <div
        class="mt-7 flex flex-col gap-5 md:mt-8 md:flex-row md:justify-center md:gap-7"
      >
        <IgniteLoader v-if="isLoading" class="m-4 h-12 w-full !max-w-2xl" />
        <IgniteCard
          v-else-if="Boolean(campaignSummary) && showIncentives"
          class="flex w-full max-w-2xl flex-col justify-center px-5 py-7"
        >
          <ProjectIncentives size="lg" :campaign-summary="campaignSummary" />
        </IgniteCard>

        <IgniteLoader v-if="isLoading" class="m-4 h-12 w-full !max-w-2xl" />
        <IgniteCard
          v-else-if="Boolean(campaignSummary) && showAllocation"
          class="flex w-full max-w-2xl flex-col justify-center px-5 py-7"
        >
          <ProjectShareAllocation
            size="lg"
            :campaign-summary="campaignSummary"
            class="mx-auto flex max-w-[20rem] flex-col justify-between md:min-h-[12rem] lg:min-h-[15rem]"
          />
        </IgniteCard>
      </div>
    </div>

    <div>
      <IgniteHeading
        class="text-center font-title text-5 font-semibold md:text-7"
      >
        Validators
      </IgniteHeading>
      <IgniteText class="mx-auto mt-4 max-w-[20rem] text-muted md:mt-6">
        Active validators verifying transactions to secure the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgniteText>

      <ValidatorList
        v-if="projectId && projectId !== '0'"
        :project-id="projectId"
      />

      <IgniteCard
        :shadow="true"
        class="mx-auto mt-8 flex w-full max-w-[69.5rem] flex-col justify-start py-7 px-5 text-left md:mt-11 md:py-8.5 md:px-7.5"
      >
        <IgniteHeading class="font-title text-5 font-semibold md:text-7">
          Become a validator
        </IgniteHeading>
        <IgniteText class="mt-3 max-w-[22rem] text-muted">
          Help secure blockchain projects and be rewarded for your participation
        </IgniteText>
        <div class="mt-6 md:mt-7">
          <IgniteButton
            variant="primary"
            color="primary"
            size="sm"
            class="font-normal"
          >
            Learn more
          </IgniteButton>
        </div>
      </IgniteCard>
    </div>
  </div>
</template>
