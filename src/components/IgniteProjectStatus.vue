<template>
  <div class="status">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconPlane from './icons/IconPlane.vue'
import IconStage from './icons/IconStage.vue'
import IconStar from './icons/IconStar.vue'

export default defineComponent({
  name: 'IgniteProjectStatus',

  components: { IconStar, IconPlane, IconStage }
})
</script>

<style scoped lang="postcss">
.status {
  @apply flex items-center -mx-3;

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
</style>
