<template>
  <div class="ignite-legend">
    <div v-for="item in items" :key="item.name" class="ignite-legend__item">
      <div
        class="ignite-legend__icon mr-1"
        :class="item.color || 'bg-gray-50'"
      />
      <IgniteText as="span" class="text-2 text-muted">{{
        item.name
      }}</IgniteText>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { LegendItem } from '../utils/types'
import IgniteText from './IgniteText.vue'

export default defineComponent({
  name: 'IgniteLegend',
  components: { IgniteText },
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
  @apply -mx-3 flex justify-center;

  &__item {
    @apply flex items-center px-3;
  }

  &__icon {
    @apply h-3 w-3 rounded-circle;
  }
}
</style>
