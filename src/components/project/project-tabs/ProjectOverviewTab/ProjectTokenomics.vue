<script lang="ts">
export default {
  name: 'ProjectStatus'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IgniteDonutChart, {
  DonutDataItem
} from '~/components/common/IgniteDonutChart.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { isNumeric } from '~/utils/assertion'
import { addCommasToNumber } from '~/utils/number'

import { ProjectDistribution } from './types'

interface Props {
  distribution: ProjectDistribution[]
  campaignSummary?: CampaignCampaignSummary
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  distribution: () => [],
  campaignSummary: undefined
})

const colors = [
  'rgba(9, 78, 253, 1)',
  'rgba(9, 78, 253, 0.8)',
  'rgba(9, 78, 253, 0.6)',
  'rgba(9, 78, 253, 0.4)',
  'rgba(9, 78, 253, 0.2)',
  'rgba(9, 78, 253, 0.1)'
]

function getShare(share: string): number {
  if (isNumeric(share)) {
    return Number(share) > 1 ? Number(share) : Number(share) * 100
  }

  if (share.includes('%')) {
    return Number(share.replace('%', ''))
  }

  return 0
}

const dataSeries = computed(() => {
  return props.distribution.map<DonutDataItem>(({ title, share }) => {
    return {
      name: title,
      y: getShare(share)
    }
  })
})

const totalSupply = computed(() => {
  const total = props.campaignSummary?.rewards?.reduce(
    (acc, { amount }) => (isNumeric(amount) ? acc + Number(amount) : acc),
    0
  )

  return addCommasToNumber(total ?? 0)
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7">
      Tokenomics
    </IgniteHeading>
    <IgniteText class="mt-6 text-center text-3 text-muted">
      Planned token allocation for
      <component
        :is="loading ? IgniteLoader : 'span'"
        :class="[loading && 'inline-block h-5 w-9 align-middle']"
        >{{ totalSupply }}</component
      >
      tokens minted at Genesis
    </IgniteText>

    <div class="relative mt-7 md:mt-9">
      <IgniteDonutChart :colors="colors" :data-series="dataSeries" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
