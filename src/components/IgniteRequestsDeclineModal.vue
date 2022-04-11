<template>
  <IgniteModal @close="$emit('close')">
    <template #title>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning aria-hidden />
        <IgniteHeading class="text-5">Confirm decline</IgniteHeading>
      </div>
    </template>

    <template #body>
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
  </IgniteModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsDeclineModal'
}
</script>

<script lang="ts" setup>
import IconWarning from './icons/IconWarning.vue'
import IgniteButton from './IgniteButton.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteModal from './IgniteModal.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
