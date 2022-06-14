<script lang="ts">
export default {
  name: 'SlideDown'
}
</script>

<template>
  <Transition>
    <slot />
  </Transition>
</template>

<style scoped lang="postcss">
.v-enter-active,
.v-leave-active {
  @apply transition-all;
}

.v-enter-from,
.v-leave-to {
  @apply -translate-y-2 opacity-0;
}
</style>
