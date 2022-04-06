<template>
  <SpModal>
    <template #header>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm acceptance</IgniteHeading>
      </div>
    </template>

    <template #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
        Grant <span class="font-semibold">000,000,000 ATOM</span>
      </IgniteText>
    </template>

    <template #footer>
      <div class="mt-7 flex space-x-4">
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
  name: 'IgniteRequestsAcceptModal'
}
</script>

<script lang="ts" setup>
import { SpModal } from '@starport/vue'

import IconWarning from './icons/IconWarning.vue'
import IgniteButton from './IgniteButton.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteText from './IgniteText.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
