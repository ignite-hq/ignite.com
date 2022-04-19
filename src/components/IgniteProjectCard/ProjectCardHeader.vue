<script lang="ts">
export default {
  name: 'ProjectCardHeader'
}
</script>

<script lang="ts" setup>
import IgniteBgWave from '../IgniteBgWave.vue'
import IgniteLoader from '../IgniteLoader.vue'

defineProps({
  loading: Boolean
})
</script>

<template>
  <div class="header" :class="loading && '_loading'">
    <div class="background">
      <IgniteBgWave />
    </div>
    <IgniteLoader v-if="loading" class="logo" />
    <div v-if="!loading" class="logo" />
  </div>
</template>

<style scoped lang="postcss">
.header {
  @apply relative bg-primary;
  padding-bottom: 50%;
  &._loading {
    @apply bg-gray-50;
  }
}
.background {
  @apply absolute inset-0 z-[2] overflow-hidden;
}

.logo {
  @apply absolute bottom-0 left-center z-[3] h-9.5 w-9.5 translate-x-[-50%] translate-y-[50%] rounded bg-primary outline outline-4 outline-white-1000;
}
</style>
