<template>
  <div>
    <div class="mb-6 ignt-text font-medium text-2 text-muted text-center">
      Share allocation
    </div>

    <div class="mb-6">
      <IgniteProgressBar
        :logo="progressBar.logo"
        :items="progressBar.items"
        class="mb-4"
      />
      <IgniteProgressBar :logo="progressBar.logo" :items="progressBar.items" />
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
import IgniteLegend from '../IgniteLegend.vue'
import IgniteProgressBar from '../IgniteProgressBar.vue'

const progressBar = {
  logo: '/logo.png',
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
  ]
}

const legend = [
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
