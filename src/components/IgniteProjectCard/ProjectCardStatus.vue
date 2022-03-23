<template>
  <div>
    <IgniteLoader v-if="loading" class="status-loading mx-auto" />
    <div v-if="!loading" class="status">
      <div class="status__item">
        <IconStar class="icon" />
        <span class="value ignt-text">1</span>
      </div>
      <div class="status__item">
        <IconPlane class="icon" />
        <span class="value ignt-text">100</span>
      </div>
      <div class="status__item">
        <IconStage class="icon" />
        <span class="value ignt-text">30</span>
      </div>
      <div class="status__item">
        <span class="value ignt-text ignt-badge">testnet</span>
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
.status {
  @apply flex justify-center items-center -mx-3;

  &__item {
    @apply flex justify-center items-center px-3;
  }
}

.icon {
  @apply w-5 h-5 text-primary mr-1;
}

.value {
  @apply font-medium text-2;
}

.status-loading {
  height: 1.75rem;
  width: 11.25rem;
}
</style>
