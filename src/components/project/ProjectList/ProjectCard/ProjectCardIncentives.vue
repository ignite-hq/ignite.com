<script lang="ts">
export default {
  name: 'ProjectCardIncentives'
}
</script>

<script setup lang="ts">
import { computed, PropType } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'

const props = defineProps({
  campaignSummary: {
    type: Object as PropType<CampaignCampaignSummary>,
    default: () => ({})
  }
})

// methods
function getIncentivesFromRewards(
  rewards: CampaignCampaignSummary['rewards'] = []
) {
  return rewards.filter((coin) => {
    const campaignId = props.campaignSummary.campaign?.campaignID
    const isShare = !coin.denom?.startsWith(`v/${campaignId}`)
    return isShare
  })
}

// computed
const incentive = computed(() => {
  const incentiveCoins = getIncentivesFromRewards(props.campaignSummary.rewards)

  const total = incentiveCoins.reduce((acc, coin) => {
    const campaignId = props.campaignSummary.campaign?.campaignID
    const isIncentive = !coin.denom?.startsWith(`v/${campaignId}`)
    if (isIncentive) return acc + Number(coin.amount)
    return acc
  }, 0)
  const denoms = incentiveCoins.map((coin) => coin.denom)

  return { total, denoms }
})

const firstIncentiveDenom = computed(() => {
  return incentive.value.denoms[0]
})

const pastIncentive = computed(() => {
  const incentiveCoins = getIncentivesFromRewards(
    props.campaignSummary.previousRewards
  )

  const total = incentiveCoins.reduce((acc, coin) => {
    const campaignId = props.campaignSummary.campaign?.campaignID
    const isIncentive = !coin.denom?.startsWith(`v/${campaignId}`)
    if (isIncentive) return acc + Number(coin.amount)
    return acc
  }, 0)

  const denoms = incentiveCoins.map((coin) => coin.denom)

  return { total, denoms }
})

const firstPastIncentiveDenom = computed(() => {
  return pastIncentive.value.denoms[0]
})
</script>

<template>
  <div>
    <IgniteText class="mb-6 text-center text-2 font-medium text-muted">
      Incentives
    </IgniteText>
    <div class="mb-6 flex items-center justify-center">
      <IgniteDenom
        v-if="firstIncentiveDenom"
        modifier="avatar"
        :denom="firstIncentiveDenom"
        :title="firstIncentiveDenom"
        class="mr-3"
      />
      <IgniteHeading class="text-center text-5 font-semibold">
        {{ incentive.total }} {{ firstIncentiveDenom?.toUpperCase() }}
      </IgniteHeading>
    </div>
    <IgniteText
      v-if="pastIncentive.total > 0"
      class="text-center text-2 text-muted"
    >
      Past incentives: {{ pastIncentive.total }}
      {{ firstPastIncentiveDenom?.toUpperCase() }}
    </IgniteText>
  </div>
</template>
