<template>
  <div class="loading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteLoader'
})
</script>

<style scoped lang="postcss">
.loading {
  max-width: 11.25rem;
  min-height: 0.5rem;
  background: linear-gradient(90deg, #f7f7f7 0px, #f0f0f0 2.5rem, #f7f7f7 5rem);
  background-size: 37.5rem;
  animation: shine-lines 1.8s infinite linear;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 180px;
  }
}
</style>
