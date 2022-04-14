<template>
  <div class="container text-center">
    <IgniteHeading class="text-center font-title text-7 font-semibold mt-10">
      Validator incentives
    </IgniteHeading>
    <IgniteText class="mx-auto mt-4 m-w-[30rem]">
      Participation incentives for validating transactions on the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>
    <div class="flex flex-col m:flex-row mt-8">
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

    <IgniteHeading class="text-center font-title text-7 font-semibold mt-10">
      Validators
    </IgniteHeading>
    <IgniteText class="mx-auto mt-4 m-w-[30rem]">
      Active validators verifying transactions to secure the
      {{ campaignSummary?.campaignSummary?.campaign?.campaignName }} network
    </IgniteText>

    <ValidatorList
      v-if="launchID && launchID !== '0'"
      :launchID="launchID"
      class="mt-6"
    />

    <div
      class="mx-auto flex w-full max-w-5xl flex-col justify-start rounded p-8 text-left shadow my-10"
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

<script lang="ts" setup>
import { computed, defineComponent, ref, toRef, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import IgniteButton from '../IgniteButton.vue'
import IgniteText from '../IgniteText.vue'
import IgniteHeading from '../IgniteHeading.vue'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import useCampaignSummary from '../../composables/useCampaignSummary'
import ProjectCardIncentives from '../IgniteProjectCard/ProjectCardIncentives.vue'
import ProjectCardShareAllocation from '../IgniteProjectCard/ProjectCardShareAllocation.vue'
import ValidatorList from './validators/ValidatorList.vue'
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

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
