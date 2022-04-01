<template>
  <label class="flex items-center">
    <span class="relative flex items-center justify-center">
      <input v-bind="$attrs" type="radio" class="ignite-radio" />
      <div class="ignite-circle" />
    </span>

    <span :class="[$slots['default'] && 'ml-4']">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'IgniteRadio'
}
</script>

<script lang="ts" setup></script>

<style scoped lang="postcss">
.ignite-radio {
  @apply w-6 h-6 appearance-none border-2 border-radio rounded-circle m-0 cursor-pointer;

  &:checked {
    @apply bg-gray-0 border-gray-0;

    & + .ignite-circle {
      @apply visible scale-100;
    }
  }
}

.ignite-circle {
  @apply absolute invisible bg-white-1000 rounded-circle scale-0 transition-transform duration-100 ease-in-out w-3 h-3 cursor-pointer;
}
</style>
