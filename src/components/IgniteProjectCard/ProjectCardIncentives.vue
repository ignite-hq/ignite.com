<template>
  <div>
    <div class="mb-6 font-medium text-center ignt-text text-2 text-muted">
      Incentives
    </div>
    <div class="flex items-center justify-center mb-6">
      <SpDenom
        v-if="firstIncentiveDenom"
        modifier="avatar"
        :denom="firstIncentiveDenom"
        :title="firstIncentiveDenom"
        class="mr-3"
      />
      <div class="font-semibold text-center ignt-title text-5">
        {{ incentive.total }} {{ firstIncentiveDenom?.toUpperCase() }}
      </div>
    </div>
    <div
      v-if="pastIncentive.total > 0"
      class="text-center ignt-text text-2 text-muted"
    >
      Past incentives: {{ pastIncentive.total }}
      {{ firstPastIncentiveDenom?.toUpperCase() }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardIncentives'
}
</script>

<script setup lang="ts">
import SpDenom from '@starport/vue/src/components/SpDenom/SpDenom.vue'
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, PropType } from 'vue'

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
