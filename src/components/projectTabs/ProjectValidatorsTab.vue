<template>
  <div class="container text-center">
    <LayoutSpacer size="lg" />
    <IgniteHeading class="text-center font-title text-7 font-semibold">
      Validator incentives
    </IgniteHeading>
    <LayoutSpacer size="xs" />
    <IgniteText class="mx-auto" style="max-width: 30rem">
      Participation incentives for validating transactions on the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>
    <LayoutSpacer size="md" />

    <div class="flex flex-col m:flex-row">
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

    <LayoutSpacer size="lg" />

    <IgniteHeading class="text-center font-title text-7 font-semibold">
      Validators
    </IgniteHeading>
    <LayoutSpacer size="xs" />
    <IgniteText class="mx-auto" style="max-width: 30rem">
      Active validators verifying transactions to secure the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>

    <LayoutSpacer size="md" />
    <ValidatorList v-if="launchID && launchID !== '0'" :launchID="launchID" />

    <LayoutSpacer size="lg" />

    <div
      class="my-4 mx-auto flex w-full max-w-5xl flex-col justify-start rounded p-8 text-left shadow"
    >
      <IgniteHeading class="font-title text-7 font-semibold">
        Become a validator
      </IgniteHeading>
      <LayoutSpacer size="xs" />
      <IgniteText>
        Help secure blockchain projects and be rewarded for your participation
      </IgniteText>
      <LayoutSpacer size="sm" />
      <div>
        <IgniteButton variant="primary" color="primary" class="px-6">
          Learn more
        </IgniteButton>
      </div>
    </div>

    <LayoutSpacer size="lg" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LayoutSpacer from '../atoms/LayoutSpacer.vue'
import IgniteButton from '../IgniteButton.vue'
import IgniteText from '../IgniteText.vue'
import IgniteHeading from '../IgniteHeading.vue'
import useCampaignSummary from '../../composables/useCampaignSummary'
import ProjectCardIncentives from '../IgniteProjectCard/ProjectCardIncentives.vue'
import ProjectCardShareAllocation from '../IgniteProjectCard/ProjectCardShareAllocation.vue'
import ValidatorList from './validators/ValidatorList.vue'

const route = useRoute()
const projectID = route.params.projectID.toString() || '0'

// composables
const { campaignSummary } = useCampaignSummary(projectID)

// computed
const launchID = computed<string>(() => {
  return (
    campaignSummary?.value?.campaignSummary?.mostRecentChain?.launchID || '0'
  )
})
</script>
