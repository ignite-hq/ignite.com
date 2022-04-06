<template>
  <SpModal>
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm decline</IgniteHeading>
      </div>
    </template>

    <template #body><span></span></template>

    <template #footer>
      <div class="mt-7 flex w-full space-x-4">
        <IgniteButton
          class="flex-1"
          variant="text"
          color="text-gray-0"
          @click="$emit('close')"
        >
          Cancel
        </IgniteButton>
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
        >
          Confirm
        </IgniteButton>
      </div>
    </template>
  </SpModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsDeclineModal'
}
</script>

<script lang="ts" setup>
import { SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'
import IgniteButton from './IgniteButton.vue'
import IgniteHeading from './IgniteHeading.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
