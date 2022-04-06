<template>
  <button
    class="duration-250 inline-flex items-center transition-all ease-in-out"
    :class="{
      'text-primary hover:text-title': variant === 'default',
      'flex transform items-center justify-center rounded-3sm bg-primary py-5 text-3 font-semibold text-white-1000 hover:scale-105':
        variant === 'primary',
      'flex transform items-center justify-center py-5 text-3 font-semibold text-gray-0 hover:scale-105':
        variant === 'modal-cancel'
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface Props {
  variant?: 'default' | 'primary' | 'modal-cancel'
}

withDefaults(defineProps<Props>(), { variant: 'default' })
</script>
