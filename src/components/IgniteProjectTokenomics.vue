<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <IgniteHeading as="div" class="text-center font-title text-5 m:text-7">
      Tokenomics
    </IgniteHeading>
    <IgniteText as="div" class="mt-6 text-center text-3 text-muted">
      Planned token allocation for 200,000 tokens minted at Genesis
    </IgniteText>

    <div class="relative mt-7 m:mt-9">
      <IgniteDonutChart :colors="colors" :data-series="dataSeries" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus'
})
</script>

<script lang="ts" setup>
import IgniteDonutChart from './IgniteDonutChart.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteText from './IgniteText.vue'

const colors = [
  'rgba(9, 78, 253, 1)',
  'rgba(9, 78, 253, 0.8)',
  'rgba(9, 78, 253, 0.6)',
  'rgba(9, 78, 253, 0.4)',
  'rgba(9, 78, 253, 0.2)',
  'rgba(9, 78, 253, 0.1)'
]

const dataSeries = [
  {
    name: 'Marketing',
    y: 5
  },
  {
    name: 'Fundraiser',
    y: 10
  },
  {
    name: 'Airdrop',
    y: 25,
    description: 'Note or description lorem ipsum dolor sit amet.',
    dataLabels: {
      enabled: true
    }
  },
  {
    name: 'Community Pool',
    y: 35
  },
  {
    name: 'Public Sale',
    y: 15
  },
  {
    name: 'Core Team',
    y: 10
  }
]
</script>

<style lang="postcss"></style>
