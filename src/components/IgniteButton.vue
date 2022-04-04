<template>
  <button
    v-bind="$props"
    class="inline-flex items-center justify-center transition-colors ease-in-out duration-250"
    :class="[
      variant === 'default' && [
        'ignt-text',
        'text-primary',
        'hover:text-title'
      ],
      variant === 'primary' && [
        'ignt-text',
        'font-medium',
        'bg-primary',
        'text-white-1000',
        'hover:bg-primary/80'
      ],
      variant !== 'default' &&
        size === 'md' && ['rounded-sm', 'py-5', 'px-5', 'sm:px-8.5', 'text-3'],
      variant !== 'default' &&
        size === 'sm' && ['rounded-xs', 'py-3', 'px-5', 'text-2']
    ]"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  variant: {
    // default, primary
    type: String,
    default: 'default'
  },
  size: {
    // sm, md
    type: String,
    default: 'md'
  }
})
</script>
