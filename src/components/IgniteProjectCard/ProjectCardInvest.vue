<template>
  <div>
    <div class="title mb-7">
      <div class="ignt-label sm ignt-muted">Invest</div>
      <div class="ignt-label sm ignt-title"><b>$1M</b> of <b>$2M</b></div>
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
          bgColor: '#3156FC',
          color: '#fff'
        }
      ]
    }

    return {
      progressBar
    }
  }
})
</script>

<style scoped lang="scss">
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
