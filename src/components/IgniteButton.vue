<template>
  <button
    v-bind="$props"
    class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
    class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
    :class="{
      'bg-none p-0': variant === 'default',
      'flex transform items-center justify-center rounded-3sm font-semibold text-white-1000 hover:scale-105':
        variant === 'primary',
      'flex transform items-center justify-center font-semibold text-gray-0 hover:scale-105':
        variant === 'text',
      
      'rounded-sm py-5 px-5 sm:px-8.5 text-3': variant !== 'default' && size === 'md',
      'rounded-xs py-3 px-5 text-2': variant !== 'default' && size === 'sm',

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
  size?: 'sm' | 'md'
}

const colorTypes: string[] = ['default', 'primary', 'inherit'] as Colors[]

withDefaults(defineProps<Props>(), {
  variant: 'default',
  color: 'default',
  size: 'md',
})
</script>
