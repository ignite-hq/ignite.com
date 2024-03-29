<script lang="ts">
import { ButtonHTMLAttributes } from 'vue'

export default {
  name: 'IgniteButton'
}
</script>

<script lang="ts" setup>
type Colors = 'default' | 'primary' | 'light' | 'inherit'

interface Props extends ButtonHTMLAttributes {
  variant?: 'default' | 'primary' | 'text'
  color?: Colors | string
  size?: 'sm' | 'md' | 'xs'
  disabled?: boolean
  as?: string
}

const colorTypes: string[] = [
  'default',
  'primary',
  'light',
  'inherit'
] as Colors[]

withDefaults(defineProps<Props>(), {
  variant: 'default',
  color: 'default',
  size: 'md',
  disabled: false,
  as: 'button'
})
</script>

<template>
  <component
    :is="as"
    v-bind="$props"
    class="duration-250 inline-flex items-center justify-center transition-all ease-in-out"
    :class="{
      // Variant
      'bg-none p-0': variant === 'default',
      'flex transform items-center justify-center rounded-3sm font-semibold hover:scale-[1.03]':
        variant === 'primary',
      'flex transform items-center justify-center font-semibold text-gray-0 hover:scale-105':
        variant === 'text',

      // Size
      'rounded-sm py-5 px-5 text-3 sm:px-8.5':
        variant !== 'default' && size === 'md',
      'rounded-xs py-3 px-5 text-2': variant !== 'default' && size === 'sm',
      'rounded-xs p-4 text-2': variant !== 'default' && size === 'xs',

      // Color
      'text-primary hover:text-title': color === 'default',
      'bg-gray-0 text-white-1000': color === 'black',
      'bg-gray-30 text-muted': color === 'gray',
      'bg-inactive text-white-1000': color === 'gray-dark',
      'bg-primary text-white-1000': color === 'primary',
      'border border-border bg-white-1000': color === 'light',
      'text-current': color === 'inherit',
      [color]: !colorTypes.includes(color),

      // States
      'pointer-events-none cursor-not-allowed disabled:bg-inactive': disabled
    }"
  >
    <slot />
  </component>
</template>
