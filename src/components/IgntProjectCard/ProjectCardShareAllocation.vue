<template>
  <div>
    <div class="mb-6 ignt-label sm text-center ignt-muted">
      Share allocation
    </div>

    <div class="mb-6">
      <IgntProgressBar :logo="progressBar.logo" :items="progressBar.items" class="mb-4" />
      <IgntProgressBar :logo="progressBar.logo" :items="progressBar.items" />
    </div>

    <IgntLegend :items="legend" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgntProgressBar from '../IgntProgressBar.vue'
import IgntLegend from '../IgntLegend.vue'

export default defineComponent({
  name: 'ProjectCardShareAllocation',

  components: { IgntProgressBar, IgntLegend },

  setup(props) {
    const progressBar = {
      logo: '/logo.png',
      items: [
        {
          value: '10',
          bgColor: '#95DCFD',
          split: true
        },
        {
          value: '40',
          bgColor: '#3156FC',
          color: '#fff'
        },
        {
          value: '50'
        }
      ]
    }

    const legend = [
      {
        name: 'Past',
        color: '#95DCFD'
      },
      {
        name: 'Current',
        color: '#3156FC'
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

<style scoped lang="scss">
.title-loading {
  width: px2rem(180);
  height: px2rem(26);
  @media #{$breakpoint-large} {
    height: px2rem(36);
  }
}

.github {
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-loading {
  width: px2rem(150);
  height: px2rem(24);
}
</style>
