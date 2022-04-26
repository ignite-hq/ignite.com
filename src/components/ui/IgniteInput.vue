<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteInput'
})
</script>

<script lang="ts" setup>
interface Props {
  icon?: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  icon: '',
  placeholder: ''
})
</script>

<template>
  <div class="relative">
    <component :is="icon" class="absolute left-4 top-1/2 -translate-y-1/2" />
    <input
      v-bind="$props"
      :placeholder="placeholder"
      class="h-[3rem] w-full rounded-xs bg-gray-30 px-5 text-3 font-normal"
      :class="{
        'pl-7': icon
      }"
    />
  </div>
</template>
