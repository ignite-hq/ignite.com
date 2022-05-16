<script lang="ts">
export default {
  name: 'IgniteInput'
}
</script>

<script lang="ts" setup>
interface Props {
  icon?: string
  placeholder?: string
  style?: string
  variants?: string
  size?: string
}

withDefaults(defineProps<Props>(), {
  icon: '',
  placeholder: '',
  style: '',
  variants: '',
  size: 'md'
})
</script>

<template>
  <div class="relative flex">
    <component :is="icon" class="absolute left-4 top-1/2 -translate-y-1/2" />
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="min-h-[100%] w-full rounded-xs px-5 font-normal"
      :class="[
        icon && 'pl-7',
        size === 'md' && 'h-[3rem] text-3',
        size === 'lg' && 'h-[4.5rem] text-4',
        variants,
        style
      ]"
    />
  </div>
</template>
