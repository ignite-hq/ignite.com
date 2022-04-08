<template>
  <IgniteModal @close="$emit('close')">
    <template #title>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm acceptance</IgniteHeading>
      </div>
    </template>

    <template #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
        Grant <span class="font-semibold">000,000,000 ATOM</span>
      </IgniteText>

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
  </IgniteModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsAcceptModal'
}
</script>

<script lang="ts" setup>
import IconWarning from '~/components/icons/IconWarning.vue'
import IgniteButton from '~/components/IgniteButton.vue'
import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteModal from '~/components/IgniteModal.vue'
import IgniteText from '~/components/IgniteText.vue'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()
</script>
