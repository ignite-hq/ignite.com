<script lang="ts">
export default {
  name: 'IgniteTooltip'
}
</script>

<script lang="ts" setup>
import Popper from 'vue3-popper'
</script>

<template>
  <Popper placement="top" arrow hover open-delay="200" close-delay="100">
    <button>
      <slot />
    </button>
    <template #content>
      <slot name="content" />
    </template>
  </Popper>
</template>

<style scoped lang="postcss">
:deep(.popper) {
  @apply max-w-[25rem] rounded bg-bg p-6 shadow-dropdown;
}

:deep(.popper #arrow::before) {
  background: #fff;
}

:deep(.popper:hover),
:deep(.popper:hover > #arrow::before) {
  background: #fff;
}
</style>
