<template>
  <div class="ignt-legend">
    <div v-for="item in items" :key="item.name" class="ignt-legend__item">
      <div
        class="ignt-legend__icon mr-1"
        :class="item.color ? `bg-${item.color}` : 'bg-gray-50'"
      />
      <span class="ignt-text text-2 text-muted">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteLegend',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const { items } = props;

    return {
      items
    }
  }
})
</script>

<style scoped lang="postcss">
.ignt-legend {
  @apply flex justify-center -mx-3;

  &__item {
    @apply flex items-center px-3;
  }

  &__icon {
    @apply w-3 h-3 rounded-circle;
  }
}
</style>
