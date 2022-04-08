<template>
  <div>
    <div class="w-100 relative bg-primary" style="height: 20rem">
      <div class="absolute inset-0 z-[2] overflow-hidden">
        <IgniteBgWave />
      </div>
    </div>
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
      <div>
        <div class="flex flex-wrap justify-center">
          <ValidatorCard
            v-for="validator in genesisValidatorsAll"
            :key="validator"
            :validator="validator"
          />
        </div>
        <div v-if="hasNextPage">
          <LayoutSpacer size="sm" />
          <button
            class="rounded-sm bg-primary py-4 px-6 text-2 text-bg transition duration-200 hover:brightness-90 active:brightness-75 disabled:bg-inactive disabled:brightness-100"
            :disabled="isFetchingNextPage"
            @click="fetchNextPage"
          >
            View more
          </button>
        </div>
        <div v-if="!isLoading && genesisValidatorsAll.length === 0">
          <span>- No validators yet -</span>
        </div>
      </div>

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
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import IgniteBgWave from '../components/IgniteBgWave.vue'
import LayoutSpacer from '../components/atoms/LayoutSpacer.vue'
import ValidatorCard from '../components/validators/ValidatorCard.vue'
import IgniteText from '../components/IgniteText.vue'
import IgniteHeading from '../components/IgniteHeading.vue'
import defaultBanner from '../assets/svg/defaultBanner.svg'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { Validator } from 'tendermint-spn-ts-client/cosmos.staking.v1beta1'
import {
  LaunchChain,
  LaunchGenesisValidator,
  LaunchQueryGetGenesisValidatorResponse
} from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import useCampaignSummary from '../composables/useCampaignSummary'
import useChain from '../composables/useChain'
import useGenesisValidatorAll from '../composables/useGenesisValidatorAll'
import useStakingValidatorAll from '../composables/useStakingValidatorAll'
import ProjectCardIncentives from '../components/IgniteProjectCard/ProjectCardIncentives.vue'
import ProjectCardShareAllocation from '../components/IgniteProjectCard/ProjectCardShareAllocation.vue'

export default defineComponent({
  components: {
    ProjectCardIncentives,
    ProjectCardShareAllocation,
    IgniteText,
    IgniteHeading,
    IgniteBgWave,
    LayoutSpacer,
    ValidatorCard
  },
  setup() {
    const route = useRoute()
    const campaignID = route.params.campaignID.toString() || '0'
    const launchID = route.params.launchID.toString() || '0'

    // methods
    function mergePages(
      pages: LaunchQueryGetGenesisValidatorResponse[] = []
    ): LaunchGenesisValidator[] {
      return pages.reduce(
        (acc, page) => [...acc, ...(page?.genesisValidator ?? [])],
        [] as LaunchGenesisValidator[]
      )
    }

    // composables
    const { campaignSummaryData } = useCampaignSummary(campaignID)
    const { chainData } = useChain(launchID)
    const {
      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      genesisValidatorAllData
    } = useGenesisValidatorAll(launchID)
    const { stakingValidatorsAllData } = useStakingValidatorAll()

    /*onBeforeMount(async () => {
      // Cosmos Hub:
      const res = await fetch('https://api.cosmos.network/cosmos/staking/v1beta1/validators')
      console.log(res.json())
    })*/

    // computed
    const campaignSummary = computed<CampaignCampaignSummary>(() => {
      return (
        campaignSummaryData.value?.campaignSummary ||
        ({} as CampaignCampaignSummary)
      )
    })

    const chain = computed<LaunchChain>(() => {
      return chainData.value
    })

    const stakingValidatorsAll = computed<Validator[]>(() => {
      // Ignite chain validators
      return stakingValidatorsAllData.value?.pages
    })

    const genesisValidatorsAll = computed<LaunchGenesisValidator[]>(() => {
      return mergePages(genesisValidatorAllData.value?.pages)
    })

    return {
      campaignSummary,
      chain,
      genesisValidatorsAll,
      stakingValidatorsAll,

      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage
    }
  }
})
</script>
