<script lang="ts">
export default {
  name: 'RequestsAcceptModal'
}
</script>

<script lang="ts" setup>
import { computed, reactive } from 'vue'

import IconDenied from '~/components/icons/IconDenied.vue'
import IconSuccessCheck from '~/components/icons/IconSuccessCheck.vue'
import IconWarning from '~/components/icons/IconWarning.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteModal from '~/components/ui/IgniteModal.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteSpinner from '~/components/ui/IgniteSpinner.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useSettleRequests from '~/composables/request/useSettleRequests'
import useAddress from '~/composables/wallet/useAddress'
import { useRequestsStore } from '~/stores/requests-store'

import { getRequestsSummaries, getSettleRequestTxMessages } from './utils'

enum UIStates {
  Fresh,
  Signing,
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
const { address } = useAddress()
const settleRequests = useSettleRequests()

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
  state.currentUIState = UIStates.Signing

  const signerAddress = address.value

  if (!signerAddress) {
    state.currentUIState = UIStates.Error
    state.errorMessage = 'You must connect your wallet to sign the transaction'

    return
  }

  const messages = getSettleRequestTxMessages(
    signerAddress,
    true,
    store.selectedRequests
  )

  settleRequests.mutate(
    {
      messages,
      signerAddress
    },
    {
      onSuccess: () => {
        store.clearRequests()
        state.currentUIState = UIStates.Success
      },
      onError: (error) => {
        state.currentUIState = UIStates.Error
        state.errorMessage = error.message
      }
    }
  )
}

function onSuccessClose() {
  onClose()
  store.$reset()
}

// computed
const requestsSummaries = computed(() => {
  const requests = store.selectedRequests
  return getRequestsSummaries(requests)
})

const isFresh = computed(() => state.currentUIState === UIStates.Fresh)
const isSuccess = computed(() => state.currentUIState === UIStates.Success)
const isError = computed(() => state.currentUIState === UIStates.Error)
const isSigning = computed(() => state.currentUIState === UIStates.Signing)
</script>

<template>
  <IgniteModal @after-leave="resetState" @close="onClose">
    <template #title>
      <div v-if="isFresh" class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm acceptance</IgniteHeading>
      </div>
      <div v-else-if="isSigning" class="flex flex-col items-center space-y-4">
        <IgniteHeading class="text-5">Signing...</IgniteHeading>
      </div>
      <div v-else-if="isError" class="flex flex-col items-center space-y-4">
        <IconDenied />
        <IgniteHeading class="text-5">Something went wrong!</IgniteHeading>
      </div>
      <div v-else-if="isSuccess" class="flex flex-col items-center space-y-4">
        <IconSuccessCheck />
        <IgniteHeading class="text-5">Requests accepted</IgniteHeading>
      </div>
    </template>

    <template #body>
      <div v-if="isFresh" class="mt-4">
        <IgniteText
          v-if="requestsSummaries.validatorCount > 0"
          class="text-center text-3 leading-normal text-muted"
        >
          Add
          <span class="font-semibold">{{
            requestsSummaries.validatorCount
          }}</span>
          validator{{ requestsSummaries.validatorCount === 1 ? '' : 's' }}
        </IgniteText>

        <IgniteText
          v-for="coin in requestsSummaries.coinsToGrant"
          :key="coin.denom"
          class="text-center text-3 leading-normal text-muted"
        >
          Grant
          <span class="font-semibold"
            ><IgniteNumber :number="coin.amount ?? ''" />
            {{ coin.denom?.toUpperCase() }}</span
          >
        </IgniteText>

        <div class="mt-7 flex space-x-4">
          <IgniteButton
            class="flex-1"
            variant="text"
            color="text-gray-0"
            :disabled="isSigning"
            @click="onClose"
          >
            Cancel
          </IgniteButton>
          <IgniteButton
            variant="primary"
            color="primary"
            type="submit"
            class="flex-1"
            :disabled="isSigning"
            @click="onConfirm"
          >
            Confirm
          </IgniteButton>
        </div>
      </div>

      <div v-else-if="isError">
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
      </div>

      <div
        v-else-if="isSigning"
        class="mt-6 flex flex-col items-center space-y-7"
      >
        <IgniteSpinner />
      </div>

      <div v-else-if="isSuccess">
        <IgniteText
          v-if="requestsSummaries.validatorCount > 0"
          class="text-center text-3 leading-normal text-muted"
        >
          Added
          <span class="font-semibold">{{
            requestsSummaries.validatorCount
          }}</span>
          validator{{ requestsSummaries.validatorCount === 1 ? '' : 's' }}
        </IgniteText>

        <IgniteText
          v-for="coin in requestsSummaries.coinsToGrant"
          :key="coin.denom"
          class="text-center text-3 leading-normal text-muted"
        >
          <span class="font-semibold"
            ><IgniteNumber :number="coin.amount ?? ''" />
            {{ coin.denom?.toUpperCase() }}</span
          >
          were granted
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
      </div>
    </template>
  </IgniteModal>
</template>
