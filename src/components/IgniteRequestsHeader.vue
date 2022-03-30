<template>
  <header class="flex items-center justify-between">
    <h1>Requests</h1>

    <div class="flex space-x-4">
      <button class="requests-dropdown-button">
        <IconFilter /> <span>All requests</span>
      </button>
      <button class="requests-dropdown-button">
        <IconSort /> <span>Newest</span>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsHeader'
}
</script>

<script lang="ts" setup>
import IconFilter from './icons/IconFilter.vue'
import IconSort from './icons/IconSort.vue'
</script>

<style scoped lang="postcss">
.requests-dropdown-button {
  @apply flex space-x-2 border border-border p-4 rounded-button hover:bg-gray-30;
}
</style>
