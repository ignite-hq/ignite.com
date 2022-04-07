<template>
  <div>
    <div class="relative w-100 bg-primary" style="height: 20rem">
      <div class="overflow-hidden absolute z-[2] inset-0">
        <IgniteBgWave />
      </div>
    </div>
    <div class="container text-center">
      <LayoutSpacer size="lg" />
      <IgntTypography modifier="highlight" size="md">
        Validator incentives
      </IgntTypography>
      <LayoutSpacer size="xs" />
      <IgntTypography
        modifier="content"
        size="md"
        class="mx-auto"
        style="max-width: 30rem"
      >
        Participation incentives for validating transactions on the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgntTypography>

      <LayoutSpacer size="md" />

      <div class="flex flex-col m:flex-row">
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <ProjectCardIncentives
            v-if="campaignSummary"
            :campaign-summary="campaignSummary"
          />
        </div>
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <ProjectCardShareAllocation
            v-if="campaignSummary"
            :campaign-summary="campaignSummary"
          />
        </div>
      </div>

      <LayoutSpacer size="lg" />

      <IgntTypography modifier="highlight" size="md">
        Validators
      </IgntTypography>
      <LayoutSpacer size="xs" />
      <IgntTypography
        modifier="content"
        size="md"
        class="mx-auto"
        style="max-width: 30rem"
      >
        Active validators verifying transactions to secure the
        {{ campaignSummary?.campaign?.campaignName }} network
      </IgntTypography>

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
            class="bg-primary py-4 px-6 text-2 text-bg disabled:bg-inactive disabled:brightness-100 hover:brightness-90 active:brightness-75 rounded-sm transition duration-200"
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
        class="flex justify-start flex-col text-left shadow rounded w-full my-4 mx-auto p-8 max-w-5xl"
      >
        <IgntTypography modifier="highlight" size="md">
          Become a validator
        </IgntTypography>
        <LayoutSpacer size="xs" />
        <IgntTypography modifier="content" size="md">
          Help secure blockchain projects and be rewarded for your participation
        </IgntTypography>
        <LayoutSpacer size="sm" />
        <div>
          <button
            class="bg-primary py-4 px-6 text-2 text-bg hover:brightness-90 active:brightness-75 rounded-sm transition duration-200"
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
import IgntTypography from '../components/atoms/IgntTypography.vue'
import LayoutSpacer from '../components/atoms/LayoutSpacer.vue'
import ValidatorCard from '../components/validators/ValidatorCard.vue'
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
    IgniteBgWave,
    IgntTypography,
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
    const { chainData } = useChain(campaignID)
    const {
      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      genesisValidatorAllData
    } = useGenesisValidatorAll(campaignID)
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
      console.log(genesisValidatorAllData.value)
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
      isFetchingNextPage,

      IgntTypography,
      LayoutSpacer,
      defaultBanner
    }
  }
})
</script>
