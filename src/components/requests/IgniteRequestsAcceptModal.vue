<script lang="ts">
export default {
  name: 'IgniteRequestsAcceptModal'
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
import { addCommasToNumber } from '~/utils/number'

import IconDenied from '../icons/IconDenied.vue'
import IconSuccessCheck from '../icons/IconSuccessCheck.vue'
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
    true,
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
const requestsSummaries = computed(() => {
  const requests = store.selectedRequests
  return getRequestsSummaries(requests)
})

const isFresh = computed(() => state.currentUIState === UIStates.Fresh)
const isSuccess = computed(() => state.currentUIState === UIStates.Success)
const isError = computed(() => state.currentUIState === UIStates.Error)
</script>

<template>
  <IgniteModal @after-leave="resetState" @close="onClose">
    <template #title>
      <div v-if="isFresh" class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm acceptance</IgniteHeading>
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

    <template v-if="isFresh" #body>
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
          >{{ addCommasToNumber(coin.amount ?? '') }}
          {{ coin.denom?.toUpperCase() }}</span
        >
      </IgniteText>

      <div class="mt-7 flex space-x-4">
        <IgniteButton
          class="flex-1"
          variant="text"
          color="text-gray-0"
          :disabled="state.isLoading"
          @click="onClose"
        >
          Cancel
        </IgniteButton>
        <IgniteButton
          variant="primary"
          color="primary"
          type="submit"
          class="flex-1"
          :disabled="state.isLoading"
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
          >{{ addCommasToNumber(coin.amount ?? '') }}
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
    </template>
  </IgniteModal>
</template>
