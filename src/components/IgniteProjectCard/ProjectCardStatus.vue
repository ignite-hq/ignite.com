<template>
  <div>
    <IgniteLoader v-if="loading" class="status-loading mx-auto" />
    <div v-if="!loading" class="status flex justify-center items-center">
      <div class="status__item flex justify-center items-center">
        <IconStar class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">1</span>
      </div>
      <div class="status__item flex justify-center items-center">
        <IconPlane class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">100</span>
      </div>
      <div class="status__item flex justify-center items-center">
        <IconStage class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">30</span>
      </div>
      <div class="status__item flex justify-center items-center">
        <span class="ignt-badge ignt-label sm">testnet</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteLoader from '../IgniteLoader.vue'
import IconStar from '../icons/IconStar.vue'
import IconPlane from '../icons/IconPlane.vue'
import IconStage from '../icons/IconStage.vue'

export default defineComponent({
  name: 'ProjectCardStatus',

  props: {
    loading: {
      type: Boolean
    }
  },

  components: { IgniteLoader, IconStar, IconPlane, IconStage },

  setup(props) {
    const { loading } = props;

    return {
      loading
    }
  }
})
</script>

<style scoped lang="postcss">
/* // .status {
//   margin-inline: -8px;

//   &__item {
//     padding-inline: 8px;
//   }
// }

// .status-loading {
//   height: 28px;
//   width: 180px;
// } */
</style>
