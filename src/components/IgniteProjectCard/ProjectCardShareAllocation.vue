<template>
  <div>
    <div class="mb-6 font-medium text-center ignt-text text-2 text-muted">
      Share allocation
    </div>

    <div class="mb-6">
      <IgniteProgressBar
        v-for="share in totalSupply"
        :key="share.denom"
        :denom="share.denom"
        :items="share.items"
        class="mb-4"
      />
    </div>

    <IgniteLegend :items="legend" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardShareAllocation'
}
</script>

<script setup lang="ts">
import { CampaignCampaign } from 'tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { computed, PropType } from 'vue'

import { LegendItem, ProgressBarItem } from '../../utils/types'
import IgniteLegend from '../IgniteLegend.vue'
import IgniteProgressBar from '../IgniteProgressBar.vue'

const props = defineProps({
  campaign: {
    type: Object as PropType<CampaignCampaign>,
    default: () => ({})
  }
})

const totalSupply = computed(() => {
  return props.campaign.totalSupply?.map((supply) => ({
    ...supply,
    items: [
      {
        value: '10',
        bgColor: 'bg-secondary',
        split: true
      },
      {
        value: '40',
        bgColor: 'bg-primary'
      },
      {
        value: '50'
      }
    ] as ProgressBarItem[]
  }))
})

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
</script>

<style scoped lang="postcss"></style>
