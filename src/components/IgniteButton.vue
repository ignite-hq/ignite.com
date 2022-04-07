<template>
  <button
    class="duration-250 inline-flex items-center transition-all ease-in-out"
    :class="{
      'bg-none': variant === 'default',
      'flex transform items-center justify-center rounded-3sm py-5 text-3 font-semibold text-white-1000 hover:scale-105':
        variant === 'primary',
      'flex transform items-center justify-center py-5 text-3 font-semibold text-gray-0 hover:scale-105':
        variant === 'text',

      'text-primary hover:text-title': color === 'default',
      'text-white bg-primary': color === 'primary',
      'text-current': color === 'inherit',
      [color]: !colorTypes.includes(color)
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
type Colors = 'default' | 'primary' | 'inherit'

interface Props {
  variant?: 'default' | 'primary' | 'text'
  color?: Colors | string
}

const colorTypes: string[] = ['default', 'primary', 'inherit'] as Colors[]

withDefaults(defineProps<Props>(), {
  variant: 'default',
  color: 'default'
})
</script>
