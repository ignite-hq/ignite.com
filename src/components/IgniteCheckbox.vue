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
import IconCheck from './icons/IconCheckMark.vue'
</script>

<style scoped lang="postcss">
.ignite-checkbox {
  @apply m-0 h-6 w-6 cursor-pointer appearance-none rounded-[6px] border-2 border-current border-checkbox;

  &:checked {
    @apply border-gray-0 bg-gray-0;

    & + .ignite-check {
      @apply visible scale-100;
    }
  }
}

.ignite-check {
  @apply invisible absolute scale-0 cursor-pointer bg-gray-0 transition-transform duration-100 ease-in-out;
}
</style>
