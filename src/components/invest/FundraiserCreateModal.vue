<script lang="ts">
export default {
  name: 'FundraiserCreateModal'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconDenied from '~/components/icons/IconDenied.vue'
import IconSuccessCheck from '~/components/icons/IconSuccessCheck.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteModal from '~/components/ui/IgniteModal.vue'
import IgniteSpinner from '~/components/ui/IgniteSpinner.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { UIStates } from '~/views/ProjectInvestCreate.vue'

interface Props {
  currentUiState: UIStates
}

const props = defineProps<Props>()

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

function onClose() {
  emit('close')
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
        <IconDenied />
        <IgniteHeading class="text-5">Something went wrong!</IgniteHeading>
      </div>
      <div v-else-if="isSigned" class="flex flex-col items-center space-y-4">
        <IconSuccessCheck />
        <IgniteHeading class="text-5">Fundraiser published</IgniteHeading>
      </div>
    </template>

    <template v-if="isError" #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
      </IgniteText>

      <div class="mt-7 flex space-x-4">
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          @click="onClose"
        >
          Done
        </IgniteButton>
      </div>
    </template>

    <template v-else-if="isSigning" #body>
      <div class="mt-6 flex flex-col items-center space-y-7">
        Approve the transaction to publish your fundraiser with your Wallet Name
        wallet.
      </div>
    </template>

    <template v-else-if="isSigned" #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
        You have published the fundraiser for Project Name.
      </IgniteText>

      <div class="mt-7 flex space-x-4">
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          @click="onSuccessClose"
        >
          Done
        </IgniteButton>
      </div>
    </template>
  </IgniteModal>
</template>
