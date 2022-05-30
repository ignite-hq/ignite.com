<script lang="ts">
export default {
  name: 'ProjectIncentives'
}
</script>

<script setup lang="ts">
import { CampaignCampaignSummary } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { getIncentivesFromRewards, isShare } from '~/utils/reward'

interface Props {
  campaignSummary?: CampaignCampaignSummary
  size: 'lg' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  campaignSummary: undefined
})

// computed
const incentive = computed(() => {
  const campaignId = props?.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  const incentiveCoins = getIncentivesFromRewards(campaignId ?? '', rewards)

  const total = incentiveCoins.reduce((acc, coin) => {
    const campaignId = props?.campaignSummary?.campaign?.campaignID
    const isIncentive = !isShare(campaignId ?? '', coin)
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
  const campaignId = props?.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  const incentiveCoins = getIncentivesFromRewards(campaignId ?? '', rewards)

  const total = incentiveCoins.reduce((acc, coin) => {
    const campaignId = props?.campaignSummary?.campaign?.campaignID
    const isIncentive = !isShare(campaignId ?? '', coin)
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
    <IgniteText
      class="mb-6 text-center font-medium text-muted"
      :class="{ 'text-2': size === 'default', 'text-3': size === 'lg' }"
    >
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
      <IgniteHeading
        class="text-center font-semibold"
        :class="{ 'text-5': size === 'default', 'text-8': size === 'lg' }"
      >
        <IgniteNumber :number="incentive.total" />
        {{ firstIncentiveDenom?.toUpperCase() }}
      </IgniteHeading>
    </div>
    <IgniteText
      v-if="pastIncentive.total > 0"
      class="text-center text-2 text-muted"
    >
      Previous incentives: <IgniteNumber :number="pastIncentive.total" />
      {{ firstPastIncentiveDenom?.toUpperCase() }}
    </IgniteText>
  </div>
</template>
