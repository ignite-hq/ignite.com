<template>
  <div>
    <div class="mb-6 ignt-text font-medium text-2 text-muted text-center">
      Share allocation
    </div>

    <div class="mb-6">
      <IgniteProgressBar :logo="progressBar.logo" :items="progressBar.items" class="mb-4" />
      <IgniteProgressBar :logo="progressBar.logo" :items="progressBar.items" />
    </div>

    <IgniteLegend :items="legend" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteProgressBar from '../IgniteProgressBar.vue'
import IgniteLegend from '../IgniteLegend.vue'

export default defineComponent({
  name: 'ProjectCardShareAllocation',

  components: { IgniteProgressBar, IgniteLegend },

  setup(props) {
    const progressBar = {
      logo: '/logo.png',
      items: [
        {
          value: '10',
          bgColor: 'bg-secondary',
          split: true,
        },
        {
          value: '40',
          bgColor: 'bg-primary',
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

    return {
      progressBar,
      legend
    }
  }
})
</script>

<style scoped lang="postcss"></style>
