<template>
  <div v-if="selectedRequests.length > 0" class="selected-requests">
    <IgniteText class="text-4">
      <strong>{{ selectedRequests.length }}</strong>
      {{ selectedRequests.length > 1 ? 'Requests' : 'Request' }} selected
    </IgniteText>

    <div class="space-x-6">
      <button
        aria-label="Accept requests"
        @click="() => (isAcceptModalOpen = true)"
      >
        <IconAccept />
      </button>
      <button
        aria-label="Deny requests"
        @click="() => (isDeclineModalOpen = true)"
      >
        <IconDeny />
      </button>
    </div>
  </div>

  <IgniteRequestsDeclineModal
    :visible="isDeclineModalOpen"
    @close="() => (isDeclineModalOpen = false)"
  />

  <IgniteRequestsAcceptModal
    :visible="isAcceptModalOpen"
    @close="() => (isAcceptModalOpen = false)"
  />
</template>

<script lang="ts">
export default {
  name: 'IgniteSelectedRequests'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IgniteRequestsAcceptModal from '../components/IgniteRequestsAcceptModal.vue'
import IgniteRequestsDeclineModal from '../components/IgniteRequestsDeclineModal.vue'
import IconAccept from './icons/IconAccept.vue'
import IconDeny from './icons/IconDeny.vue'
import IgniteText from './IgniteText.vue'

defineProps({
  selectedRequests: {
    type: Array,
    default: () => []
  }
})

// state
const isDeclineModalOpen = ref(false)
const isAcceptModalOpen = ref(false)
</script>

<style scoped lang="postcss">
.selected-requests {
  @apply absolute bottom-10 left-1/2 flex -translate-x-1/2 transform items-center space-x-7 rounded-md bg-white-1000 py-7 px-8;

  box-shadow: 40px 64px 128px -8px rgba(0, 0, 0, 0.14);
}
</style>
