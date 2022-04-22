<script lang="ts">
export default {
  name: 'IgniteRequestsDeclineModal'
}
</script>

<script lang="ts" setup>
import { useIgnite as useIgniteN } from 'tendermint-spn-vue'
import { computed, reactive } from 'vue'

import IconWarning from '~/components/icons/IconWarning.vue'
import IgniteButton from '~/components/IgniteButton.vue'
import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteModal from '~/components/IgniteModal.vue'
import IgniteText from '~/components/IgniteText.vue'
import useAddress from '~/composables/useAddress'
import { useRequestsStore } from '~/stores/requests-store'
import { oxfordComma } from '~/utils/array'

import IconDenied from '../icons/IconDenied.vue'
import { getRequestsSummaries, getSettleRequestTxMessages } from './utils'

enum UIStates {
  Fresh,
  Success,
  Error
}

const initialState = {
  currentUIState: UIStates.Fresh,
  errorMessage: '',
  isLoading: false
}

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

// store
const store = useRequestsStore()

// state
const state = reactive({ ...initialState })

// composables
const { ignite } = useIgniteN()
const { address } = useAddress()

// methods
function resetState() {
  state.currentUIState = initialState.currentUIState
  state.errorMessage = initialState.errorMessage
  state.isLoading = initialState.isLoading
}

function onClose() {
  emit('close')
}

async function onConfirm() {
  state.isLoading = true

  const signerAddress = address.value

  if (!signerAddress) return

  const messages = getSettleRequestTxMessages(
    signerAddress,
    false,
    store.selectedRequests
  )

  try {
    await ignite.signer.value.client.signAndBroadcast(signerAddress, messages, {
      amount: [],
      gas: '200000'
    })

    state.currentUIState = UIStates.Success
  } catch (e) {
    const error = e as Error
    state.currentUIState = UIStates.Error
    state.errorMessage = error.message
  } finally {
    state.isLoading = false
  }
}

function onSuccessClose() {
  onClose()
  store.$reset()
}

// computed
const confirmationMessage = computed(() => {
  const requests = store.selectedRequests
  const { coinsToGrant, validatorCount } = getRequestsSummaries(requests)

  const validatorConfirmationMessage =
    validatorCount > 0 ? 'Validators were not added.' : ''

  const arrayOfDenoms = coinsToGrant.map(({ denom }) => denom?.toUpperCase())
  const coinsConfirmationMessage = arrayOfDenoms
    ? oxfordComma(arrayOfDenoms) +
      ` ${arrayOfDenoms.length > 1 ? 'were' : 'was'} not granted.`
    : ''

  return validatorConfirmationMessage + ' ' + coinsConfirmationMessage
})

const isFresh = computed(() => state.currentUIState === UIStates.Fresh)
const isSuccess = computed(() => state.currentUIState === UIStates.Success)
const isError = computed(() => state.currentUIState === UIStates.Error)
</script>

<template>
  <IgniteModal @after-leave="resetState" @close="onClose">
    <template #title>
      <div v-if="isFresh" class="flex flex-col items-center space-y-4">
        <IconWarning aria-hidden />
        <IgniteHeading class="text-5">Confirm decline</IgniteHeading>
      </div>
      <div v-else-if="isError" class="flex flex-col items-center space-y-4">
        <IconDenied />
        <IgniteHeading class="text-5">Something went wrong!</IgniteHeading>
      </div>
      <div v-else-if="isSuccess" class="flex flex-col items-center space-y-4">
        <IconDenied />
        <IgniteHeading class="text-5">Requests declined</IgniteHeading>
      </div>
    </template>

    <template v-if="isFresh" #body>
      <div class="mt-7 flex w-full space-x-4">
        <IgniteButton
          class="flex-1"
          variant="text"
          color="text-gray-0"
          @click="onClose"
        >
          Cancel
        </IgniteButton>
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          @click="onConfirm"
        >
          Confirm
        </IgniteButton>
      </div>
    </template>

    <template v-else-if="isError" #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
        {{ state.errorMessage }}
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

    <template v-else-if="isSuccess" #body>
      <IgniteText class="text-center text-3 leading-normal text-muted">
        {{ confirmationMessage }}
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
