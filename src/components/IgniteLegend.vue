<template>
  <div class="ignite-legend">
    <div v-for="item in items" :key="item.name" class="ignite-legend__item">
      <div
        class="ignite-legend__icon mr-1"
        :class="item.color || 'bg-gray-50'"
      />
      <span class="ignite-text text-2 text-muted">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { LegendItem } from '../utils/types'

export default defineComponent({
  name: 'IgniteLegend',

  props: {
    items: {
      type: Array as PropType<LegendItem[]>,
      required: true
    }
  }
})
</script>

<style scoped lang="postcss">
.ignite-legend {
  @apply flex justify-center -mx-3;

  &__item {
    @apply flex items-center px-3;
  }

  &__icon {
    @apply w-3 h-3 rounded-circle;
  }
}
</style>
