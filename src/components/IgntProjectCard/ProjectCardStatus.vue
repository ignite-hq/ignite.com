<template>
  <div>
    <IgntLoader v-if="loading" class="status-loading mx-auto" />
    <div v-if="!loading" class="status">
      <div class="status__item">
        <IconStar class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">1</span>
      </div>
      <div class="status__item">
        <IconPlane class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">100</span>
      </div>
      <div class="status__item">
        <IconStage class="ignt-primary mr-1" />
        <span class="ignt-label sm ignt-title">30</span>
      </div>
      <div class="status__item">
        <span class="ignt-badge ignt-label sm">testnet</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgntLoader from '../IgntLoader.vue'
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

  components: { IgntLoader, IconStar, IconPlane, IconStage },

  setup(props) {
    const { loading } = props;

    return {
      loading
    }
  }
})
</script>

<style scoped lang="scss">
.status {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: px2rem(-8);

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: px2rem(8);
  }
}

.status-loading {
  height: px2rem(28);
  width: px2rem(180);
}
</style>
