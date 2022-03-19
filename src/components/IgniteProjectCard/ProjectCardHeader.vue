<template>
  <div class="header" :class="loading && '_loading'">
    <div class="background">
      <IgniteBgWave />
    </div>
    <IgniteLoader v-if="loading" class="logo" />
    <div v-if="!loading" class="logo" />
  </div>
</template>

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

<style scoped lang="postcss">
.header {
  @apply relative bg-primary;
  padding-bottom: 50%;
  &._loading {
    @apply bg-gray-50;
  }
}
.background {
  @apply overflow-hidden absolute z-[2] inset-0;
}

.logo {
  @apply absolute z-[3] bottom-0 left-center w-9.5 h-9.5 bg-primary rounded outline outline-4 outline-white-1000 translate-x-[-50%] translate-y-[50%];
}
</style>
