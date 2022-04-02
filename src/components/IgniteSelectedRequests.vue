<template>
  <div v-if="selectedRequests.length > 0" class="selected-requests">
    <p class="text-4">
      <strong>{{ selectedRequests.length }}</strong>
      {{ selectedRequests.length > 1 ? 'Requests' : 'Request' }} selected
    </p>

    <div class="space-x-6">
      <button><IconAccept /></button>
      <button><IconDeny /></button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteSelectedRequests'
}
</script>

<script lang="ts" setup>
import IconAccept from './icons/IconAccept.vue'
import IconDeny from './icons/IconDeny.vue'

defineProps({
  selectedRequests: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped lang="postcss">
.selected-requests {
  @apply absolute bottom-10 left-1/2 flex -translate-x-1/2 transform items-center space-x-7 rounded-md bg-white-1000 py-7 px-8;

  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
}
</style>
