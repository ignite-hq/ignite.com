<script lang="ts">
export default {
  name: 'ProjectCardShareAllocation'
}
</script>

<script setup lang="ts">
import { computed, PropType } from 'vue'

import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'

import { LegendItem, ProgressBarItem } from '../../../utils/types'
import IgniteText from '../../ui/atoms/IgniteText.vue'
import IgniteLegend from '../../ui/molecules/IgniteLegend.vue'
import IgniteProgressBar from '../../ui/molecules/IgniteProgressBar.vue'

const props = defineProps({
  campaignSummary: {
    type: Object as PropType<CampaignCampaignSummary>,
    default: () => ({})
  }
})

// variables
const legend: LegendItem[] = [
  {
    name: 'Past',
    color: 'bg-secondary'
  },
  {
    name: 'Current',
    color: 'bg-primary'
  },
  {
    name: 'Future'
  }
]

// methods
function getVouchersFromRewards(
  rewards: CampaignCampaignSummary['rewards'] = []
) {
  return rewards.filter((coin) => {
    const campaignId = props.campaignSummary.campaign?.campaignID
    const isShare = coin.denom?.startsWith(`v/${campaignId}`)
    return isShare
  })
}

// computed
const totalSupply = computed(() => {
  const filteredRewards = getVouchersFromRewards(props.campaignSummary.rewards)
  return filteredRewards.map((coin) => {
    const denom = coin.denom?.split('/')[2] ?? ''

    const TOTAL_SUPPLY = 100_000

    const pastCoin = props.campaignSummary.campaign?.allocatedShares?.find(
      (coin) => coin.denom === `s/${denom}`
    )
    const pastCoinPercentage = (Number(pastCoin?.amount) / TOTAL_SUPPLY) * 100

    const currentValue = (Number(coin.amount) / TOTAL_SUPPLY) * 100
    const pastValue = Math.abs(currentValue - pastCoinPercentage)
    const futureValue = Math.abs(currentValue + pastValue - 100)

    return {
      ...coin,
      denom,
      items: [
        {
          value: pastValue.toString(),
          bgColor: 'bg-secondary',
          split: true
        },
        {
          value: currentValue.toString(),
          bgColor: 'bg-primary'
        },
        {
          value: futureValue.toString()
        }
      ] as ProgressBarItem[]
    }
  })
})
</script>

<template>
  <div>
    <IgniteText class="mb-6 text-center text-2 font-medium text-muted">
      Share allocation
    </IgniteText>

    <div class="mb-6">
      <IgniteProgressBar
        v-for="share in totalSupply"
        :key="share.denom"
        :denom="share.denom"
        :items="share.items"
        class="mb-4 last:mb-0"
      />
    </div>

    <IgniteLegend :items="legend" />
  </div>
</template>
