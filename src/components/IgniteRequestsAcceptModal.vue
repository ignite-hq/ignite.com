<template>
  <SpModal>
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <h1 class="text-5">Confirm acceptance</h1>
        <p class="text-center text-3 leading-normal text-muted">
          Grant <span class="font-semibold">000,000,000 ATOM</span>
        </p>
      </div>
    </template>

    <template #body>
      <div></div>
    </template>

    <template #footer>
      <div class="mt-7 flex space-x-4">
        <SpButton
          class="flex-1 !border-none !bg-transparent !text-gray-0"
          @click="$emit('close')"
        >
          Cancel
        </SpButton>
        <SpButton class="flex-1 !border-primary !bg-primary">Confirm</SpButton>
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsAcceptModal'
}
</script>

<script lang="ts" setup>
import { SpButton, SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
