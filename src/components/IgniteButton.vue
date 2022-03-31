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
        'rounded-sm',
        'min-w-[12.3rem]',
        'font-medium',
        'bg-primary',
        'py-5',
        'px-5',
        'sm:px-8.5',
        'text-white-1000',
        'hover:bg-primary/80'
      ]
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
  }
})
</script>
