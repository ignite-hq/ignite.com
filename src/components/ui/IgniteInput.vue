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
  size?: string
}

withDefaults(defineProps<Props>(), {
  icon: '',
  placeholder: '',
  style: 'bg-gray-30',
  size: 'md'
})
</script>

<template>
  <div class="relative">
    <component :is="icon" class="absolute left-4 top-1/2 -translate-y-1/2" />
    <input
      v-bind="$attrs"
      :placeholder="placeholder"
      class="w-full rounded-xs px-5 font-normal"
      :class="{
        'pl-7': icon,
        'h-[3rem] text-3': size === 'md',
        'h-[4.5rem] text-4': size === 'lg',
        style
      }"
    />
  </div>
</template>
