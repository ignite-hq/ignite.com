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
  @apply m-0 h-6 w-6 cursor-pointer appearance-none rounded-circle border-2 border-radio;

  &:checked {
    @apply border-gray-0 bg-gray-0;

    & + .ignite-circle {
      @apply visible scale-100;
    }
  }
}

.ignite-circle {
  @apply invisible absolute h-3 w-3 scale-0 cursor-pointer rounded-circle bg-white-1000 transition-transform duration-100 ease-in-out;
}
</style>
