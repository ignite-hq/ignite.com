<script lang="ts">
export default {
  name: 'FundraiserCreateModal'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconSuccessCheck from '~/components/icons/IconSuccessCheck.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteModal from '~/components/ui/IgniteModal.vue'
import IgniteSpinner from '~/components/ui/IgniteSpinner.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { UIStates } from '~/views/ProjectFundraiserCreate.vue'
import IconWarning from '~/components/icons/IconWarning.vue'

interface Props {
  currentUiState: UIStates
  errorMsg?: string
}

const props = defineProps<Props>()

interface Emits {
  (e: 'ack'): void
}

const emit = defineEmits<Emits>()

// handlers
function onClose() {
  emit('ack')
}
function onSuccess() {
  emit('ack')
}
function onError() {
  emit('ack')
}

// computed
const isError = computed(() => props.currentUiState === UIStates.Error)
const isSigning = computed(() => props.currentUiState === UIStates.Creating)
const isSigned = computed(() => props.currentUiState === UIStates.Created)
</script>

<template>
  <IgniteModal @close="onClose">
    <template #title>
      <div v-if="isSigning" class="flex flex-col items-center space-y-4">
        <IgniteSpinner />
        <IgniteHeading class="text-5">Waiting for approval...</IgniteHeading>
      </div>
      <div v-else-if="isError" class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Publication failed</IgniteHeading>
      </div>
      <div v-else-if="isSigned" class="flex flex-col items-center space-y-4">
        <IconSuccessCheck />
        <IgniteHeading class="text-5">Fundraiser published</IgniteHeading>
      </div>
    </template>

    <template v-if="isError" #body>
      <IgniteText class="mt-5 text-center text-3 leading-normal text-muted">
        {{ props.errorMsg }}
      </IgniteText>

      <div class="mt-7 flex space-x-4">
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          @click="onError"
        >
          Ok
        </IgniteButton>
      </div>
    </template>

    <template v-else-if="isSigning" #body>
      <IgniteText class="mt-5 text-center text-3 leading-normal text-muted">
        Approve the transaction to publish your fundraiser with your Keplr
        wallet.
      </IgniteText>
    </template>

    <template v-else-if="isSigned" #body>
      <IgniteText class="mt-5 text-center text-3 leading-normal text-muted">
        You have published the fundraiser.
      </IgniteText>

      <div class="mt-7 flex space-x-4">
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          @click="onSuccess"
        >
          Done
        </IgniteButton>
      </div>
    </template>
  </IgniteModal>
</template>
