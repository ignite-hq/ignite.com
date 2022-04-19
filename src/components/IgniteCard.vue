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

<template>
  <div
    class="h-[100%] rounded bg-white-1000"
    :class="shadow ? 'shadow-max' : ['border', 'border-border']"
  >
    <slot />
  </div>
</template>

<style scoped lang="postcss"></style>
