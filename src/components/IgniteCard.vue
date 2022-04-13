<template>
  <div
    class="rounded h-[100%] bg-white-1000"
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
