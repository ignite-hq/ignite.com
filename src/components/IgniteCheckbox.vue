<template>
  <label class="relative flex items-center">
    <span class="relative flex items-center justify-center">
      <input v-bind="$attrs" type="checkbox" class="ignite-checkbox" />
      <div class="ignite-check"><IconCheck /></div>
    </span>

    <span :class="[$slots['default'] && 'ml-4']">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'IgniteCheckbox'
}
</script>

<script lang="ts" setup>
import IconCheck from './icons/IconCheck.vue'
</script>

<style scoped lang="postcss">
.ignite-checkbox {
  @apply w-6 h-6 m-0 border-2 border-current appearance-none rounded-[6px] border-checkbox cursor-pointer;

  &:checked {
    @apply bg-gray-0 border-gray-0;

    & + .ignite-check {
      @apply visible scale-100;
    }
  }
}

.ignite-check {
  @apply absolute invisible bg-gray-0 scale-0 transition-transform duration-100 ease-in-out cursor-pointer;
}
</style>
