<template>
  <div
    class="pt-7.5 m:pt-8.5 px-5 sm:px-7 m:px-9.5 pb-7.5 rounded h-[100%] bg-white-1000"
    :class="shadow ? 'shadow-max' : ['border', 'border-border']"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectHeader'
})
</script>

<script lang="ts" setup>
defineProps({
  shadow: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="postcss"></style>
