<template>
  <div>
    <div class="flex justify-between items-center mb-7.5">
      <div class="ignt-text font-medium text-2 text-muted">Invest</div>
      <div class="ignt-text font-medium text-2 text-title">
        <b>$1M</b> of <b>$2M</b>
      </div>
    </div>

    <IgniteProgressBar :items="progressBar.items" :inverse="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteProgressBar from '../IgniteProgressBar.vue'

export default defineComponent({
  name: 'ProjectCardIncentives',

  components: { IgniteProgressBar },

  setup(props) {
    const progressBar = {
      items: [
        {
          value: '50',
          bgColor: 'primary',
        }
      ]
    }

    return {
      progressBar
    }
  }
})
</script>

<style scoped lang="postcss"></style>
