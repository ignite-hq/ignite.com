<template>
  <div class="container text-center">
    <LayoutSpacer size="lg" />
    <IgniteHeading
      modifier="brand-font"
      class="text-center text-7 font-normal"
    >
      Validator incentives
    </IgniteHeading>
    <LayoutSpacer size="xs" />
    <IgniteText class="mx-auto" style="max-width: 30rem">
      Participation incentives for validating transactions on the
      {{ campaignSummary?.campaign?.campaignName }} network
    </IgniteText>
    <LayoutSpacer size="md" />

    <div class="flex flex-col m:flex-row">
      <div
        class="m-4 flex w-full flex-col justify-center rounded border border-gray-70 p-5"
      >
        <ProjectCardIncentives
          v-if="campaignSummary"
          :campaign-summary="campaignSummary"
        />
      </div>
      <div
        class="m-4 flex w-full flex-col justify-center rounded border border-gray-70 p-5"
      >
        <ProjectCardShareAllocation
          v-if="campaignSummary"
          :campaign-summary="campaignSummary"
        />
      </div>
    </div>

    <LayoutSpacer size="lg" />

    <IgniteHeading
      modifier="brand-font"
      class="text-center text-7 font-normal"
    >
      Validators
    </IgniteHeading>
    <LayoutSpacer size="xs" />
    <IgniteText class="mx-auto" style="max-width: 30rem">
      Active validators verifying transactions to secure the
      {{ campaignSummary?.campaign?.campaignName }} network
    </IgniteText>

    <LayoutSpacer size="md" />
    <ValidatorList
      v-if="launchID && launchID !== '0'"
      :launchID="launchID"
    />

    <LayoutSpacer size="lg" />

    <div
      class="my-4 mx-auto flex w-full max-w-5xl flex-col justify-start rounded p-8 text-left shadow"
    >
      <IgniteHeading modifier="brand-font" class="text-7 font-normal">
        Become a validator
      </IgniteHeading>
      <LayoutSpacer size="xs" />
      <IgniteText>
        Help secure blockchain projects and be rewarded for your participation
      </IgniteText>
      <LayoutSpacer size="sm" />
      <div>
        <button
          class="rounded-sm bg-primary py-4 px-6 text-2 text-bg transition duration-200 hover:brightness-90 active:brightness-75"
        >
          Learn more
        </button>
      </div>
    </div>

    <LayoutSpacer size="lg" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRef, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import LayoutSpacer from '../atoms/LayoutSpacer.vue'
import ValidatorCard from './validators/ValidatorCard.vue'
import IgniteText from '../IgniteText.vue'
import IgniteHeading from '../IgniteHeading.vue'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import useCampaignSummary from '../../composables/useCampaignSummary'
import ProjectCardIncentives from '../IgniteProjectCard/ProjectCardIncentives.vue'
import ProjectCardShareAllocation from '../IgniteProjectCard/ProjectCardShareAllocation.vue'
import ValidatorList from './validators/ValidatorList.vue'
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'

export default defineComponent({
  components: {
    ProjectCardIncentives,
    ProjectCardShareAllocation,
    ValidatorList,
    IgniteText,
    IgniteHeading,
    LayoutSpacer,
    ValidatorCard
  },
  setup() {
    const route = useRoute()
    const projectID = route.params.projectID.toString() || '0'

    // composables
    const { campaignSummaryData } = useCampaignSummary(projectID)
    const campaignSummary = computed<CampaignCampaignSummary>(() => {
      return (
        campaignSummaryData.value?.campaignSummary ||
        ({} as CampaignCampaignSummary)
      )
    })

    /*
    const { stakingValidatorsAllData } = useStakingValidatorAll()

    onBeforeMount(async () => {
      // Cosmos Hub:
      const res = await fetch('https://api.cosmos.network/cosmos/staking/v1beta1/validators')
      console.log(res.json())
    })*/

    // computed
    const launchID = computed<string>(() => {
      return campaignSummary?.value?.mostRecentChain?.launchID || '0'
    })

    return {
      campaignSummary,
      projectID,
      launchID
    }
  }
})
</script>
