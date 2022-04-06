<template>
  <SpModal>
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <h1 class="text-5">Confirm acceptance</h1>
      </div>
    </template>

    <template #body>
      <p class="text-center text-3 leading-normal text-muted">
        Grant <span class="font-semibold">000,000,000 ATOM</span>
      </p>
    </template>

    <template #footer>
      <div class="mt-7 flex space-x-4">
        <IgniteButton
          class="flex-1"
          variant="modal-cancel"
          @click="$emit('close')"
        >
          Cancel
        </IgniteButton>
        <IgniteButton variant="primary" type="submit" class="flex-1">
          Confirm
        </IgniteButton>
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
import { SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'
import IgniteButton from './IgniteButton.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
