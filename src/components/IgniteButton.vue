<template>
  <button
    v-bind="$props"
    class="inline-flex items-center transition-colors ease-in-out duration-250"
    :class="variant === 'default' && ['text-primary', 'hover:text-title']"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})
</script>
