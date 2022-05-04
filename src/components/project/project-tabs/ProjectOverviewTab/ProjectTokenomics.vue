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
import IgniteText from '~/components/ui/IgniteText.vue'
import { isNumeric } from '~/utils/assertion'

import { ProjectDistribution } from './types'

interface Props {
  distribution: ProjectDistribution[]
}

const props = withDefaults(defineProps<Props>(), {
  distribution: () => []
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
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7">
      Tokenomics
    </IgniteHeading>
    <IgniteText as="div" class="mt-6 text-center text-3 text-muted">
      Planned token allocation for 200,000 tokens minted at Genesis
    </IgniteText>

    <div class="relative mt-7 md:mt-9">
      <IgniteDonutChart :colors="colors" :data-series="dataSeries" />
    </div>
  </div>
</template>

<style lang="postcss"></style>
