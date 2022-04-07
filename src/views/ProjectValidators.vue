<template>
  <div>
    <div>
      <img :src="defaultBanner" />
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
        Participation incentives for validating transactions on the {Project
        Name} network
      </IgntTypography>

      <LayoutSpacer size="md" />

      <div class="flex flex-col m:flex-row">
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <IgntTypography modifier="content" size="md">
            Incentives
          </IgntTypography>
          <LayoutSpacer size="xs" />
          <span class="text-8 font-bold tracking-tight"> $000,000,000 </span>
          <LayoutSpacer size="xs" />
          <IgntTypography modifier="content" size="sm">
            Previous incentives: $0,000,000
          </IgntTypography>
        </div>
        <div
          class="flex justify-center flex-col border border-gray-70 rounded w-full m-4 p-5"
        >
          <IgntTypography modifier="content" size="md">
            Share allocation
          </IgntTypography>
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
        Active validators verifying transactions to secure the {Project Name}
        network
      </IgntTypography>

      <LayoutSpacer size="md" />
      <div>
        <div class="flex flex-wrap justify-center">
          <ValidatorCard
            v-for="validator in [...Array(8).keys()]"
            :key="validator"
          >
            {{ validator }}
          </ValidatorCard>
        </div>
        <LayoutSpacer size="sm" />
        <button
          class="bg-primary py-4 px-6 text-2 text-bg hover:brightness-90 active:brightness-75 rounded-sm transition duration-200"
        >
          View more
        </button>
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

      {{ campaign }}
      {{ chain }}
      {{ genesisValidatorAll }}
      {{ stakingValidatorsAll }}

      <LayoutSpacer size="lg" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import IgntTypography from '../components/atoms/IgntTypography.vue'
import LayoutSpacer from '../components/atoms/LayoutSpacer.vue'
import ValidatorCard from '../components/validators/ValidatorCard.vue'
import defaultBanner from '../assets/svg/defaultBanner.svg'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import useCampaignSummaries from '../composables/useCampaignSummaries'
import useCampaign from '../composables/useCampaign'
import useChain from '../composables/useChain'
import useGenesisValidatorAll from '../composables/useGenesisValidatorAll'
import useStakingValidatorAll from '../composables/useStakingValidatorAll'

export default defineComponent({
  components: {
    IgntTypography,
    LayoutSpacer,
    ValidatorCard
  },
  setup() {
    const route = useRoute()
    const campaignID = route.params.campaignID.toString() || '0'
    const launchID = route.params.launchID.toString() || '0'

    const { campaignData } = useCampaign(campaignID)
    const { chainData } = useChain(campaignID)
    const { genesisValidatorAllData } = useGenesisValidatorAll(campaignID)
    const { stakingValidatorsAllData } = useStakingValidatorAll()

    /*const campaignSummaries = computed<CampaignCampaignSummary[]>(() => {
      return mergePages(allCampaignSummaries.value?.pages)
    })*/

    const campaign = computed<CampaignCampaignSummary>(() => {
      console.log(campaignData.value?.pages)
      return campaignData.value?.pages
    })

    const chain = computed<any>(() => {
      console.log(chainData.value)
      return chainData.value
    })

    const genesisValidatorAll = computed<any[]>(() => {
      console.log(genesisValidatorAllData.value?.pages)
      return genesisValidatorAllData.value?.pages
    })

    const stakingValidatorsAll = computed<any[]>(() => {
      console.log(stakingValidatorsAllData.value?.pages)
      return stakingValidatorsAllData.value?.pages
    })

    return {
      campaign,
      chain,
      genesisValidatorAll,
      stakingValidatorsAll,

      IgntTypography,
      LayoutSpacer,
      defaultBanner
    }
  }
})
</script>
