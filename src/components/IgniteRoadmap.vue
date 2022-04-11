<template>
  <ul class="whitespace-nowrap">
    <li
      v-for="item in items"
      :key="item.name"
      class="item relative whitespace-normal align-top relative inline-block min-w-[8.625rem] pt-6 pr-7 border-t-4 last:border-dashed last:pr-0"
      :class="item.status === 'complited' ? 'border-primary' : 'border-border'"
    >
      <IconCheck
        class="absolute left-0 -top-[0.8125rem] w-6 h-6"
        :class="
          item.status === 'complited' || item.status === 'active'
            ? 'text-primary'
            : 'text-border'
        "
      />
      <div class="pt-1 ignite-text font-medium text-3">
        {{ item.name }}
      </div>
      <div class="ignite-text font-normal text-2 text-muted">
        {{ item.date }}
      </div>
      <div class="mt-5 max-w-[15rem] ignite-text font-normal text-2">
        {{ item.description }}
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteRoadmap'
})
</script>

<script lang="ts" setup>
import IconCheck from './icons/IconCheck.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style lang="postcss">
.item {
  &:before {
    content: '';
  }
  &:after {
    content: '';
  }
}
</style>
