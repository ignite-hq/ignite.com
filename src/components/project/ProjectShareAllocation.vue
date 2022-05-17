<script lang="ts">
export default {
  name: 'ProjectCardShareAllocation'
}
</script>

<script setup lang="ts">
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed } from 'vue'

import IgniteLegend from '~/components/common/IgniteLegend.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { roundToTwoDecimals } from '~/utils/number'
import { getVouchersFromRewards } from '~/utils/reward'
import { LegendItem, ProgressBarItem } from '~/utils/types'

interface Props {
  campaignSummary?: CampaignCampaignSummary
  size: 'lg' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  campaignSummary: undefined
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

// computed
const totalSupply = computed(() => {
  const campaignId = props?.campaignSummary?.campaign?.campaignID
  const vouchers = getVouchersFromRewards(
    campaignId ?? '',
    props.campaignSummary.rewards
  )

  return vouchers.map((coin) => {
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
          value: roundToTwoDecimals(pastValue).toString(),
          bgColor: 'bg-secondary',
          split: true
        },
        {
          value: roundToTwoDecimals(currentValue).toString(),
          bgColor: 'bg-primary'
        },
        {
          value: roundToTwoDecimals(futureValue).toString()
        }
      ] as ProgressBarItem[]
    }
  })
})
</script>

<template>
  <div>
    <IgniteText
      class="mb-6 text-center font-medium text-muted"
      :class="{ 'text-2': size === 'default', 'text-3': size === 'lg' }"
    >
      Share allocation
    </IgniteText>

    <div class="mb-6">
      <IgniteProgressBar
        v-for="share in totalSupply"
        :key="share.denom"
        :denom="share.denom"
        :items="share.items"
        :size="size"
        class="mb-4 last:mb-0"
      />
    </div>

    <IgniteLegend :items="legend" />
  </div>
</template>
