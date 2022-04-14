<template>
  <IgniteModal @close="$emit('close')">
    <template #title>
      <div class="flex flex-col items-center space-y-4">
        <IconWarning />
        <IgniteHeading class="text-5">Confirm acceptance</IgniteHeading>
      </div>
    </template>

    <template #body>
      <IgniteText
        v-if="requestSummaries.validatorCount > 0"
        class="text-center text-3 leading-normal text-muted"
      >
        Add
        <span class="font-semibold">{{ requestSummaries.validatorCount }}</span>
        validator{{ requestSummaries.validatorCount === 1 ? '' : 's' }}
      </IgniteText>

      <IgniteText
        v-for="coin in requestSummaries.coinsToGrant"
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
          @click="$emit('close')"
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
  </IgniteModal>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsAcceptModal'
}
</script>

<script lang="ts" setup>
import { EncodeObject } from '@cosmjs/proto-signing'
import { useIgnite as useIgniteN } from '@ignt/vue'
import BigNumber from 'bignumber.js'
import { useIgnite } from 'tendermint-spn-vue'
import { computed } from 'vue'

import IconWarning from '~/components/icons/IconWarning.vue'
import IgniteButton from '~/components/IgniteButton.vue'
import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteModal from '~/components/IgniteModal.vue'
import IgniteText from '~/components/IgniteText.vue'
import {
  LaunchRequest,
  V1Beta1Coin
} from '~/generated/tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useRequestsStore } from '~/stores/requests-store'
import { addCommasToNumber } from '~/utils/number'

import { getTypeFromContent } from './utils'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()

// store
const store = useRequestsStore()
const { ignite } = useIgnite()
const {
  state: { ignite: igniteN }
} = useIgniteN()

// menthods
function getRequestsSummaries(requests: LaunchRequest[]) {
  let validatorCount = 0
  const coinsToGrant: Record<string, V1Beta1Coin> = {}

  requests.forEach(({ content }) => {
    const rawActionType = getTypeFromContent(content)

    if (rawActionType === 'genesisValidator') {
      return validatorCount++
    }

    if (rawActionType === 'genesisAccount') {
      return content?.genesisAccount?.coins?.forEach(({ amount, denom }) => {
        if (!denom || !amount) return
        const previousAmount = new BigNumber(coinsToGrant[denom]?.amount || 0)
        const newAmount = new BigNumber(amount)

        coinsToGrant[denom] = {
          denom,
          amount: previousAmount.plus(newAmount).toString()
        }
      })
    }
  })

  return {
    validatorCount,
    coinsToGrant: Object.values(coinsToGrant)
  }
}

function getTransactionMessages(signer: string) {
  const requests = store.selectedRequests
  const messages: EncodeObject[] = []

  requests.forEach(({ launchID, content, requestID }) => {
    if (!content) return

    const message = ignite.tendermintSpnLaunch.value.msgSettleRequest({
      value: {
        approve: true,
        launchID: Number(launchID),
        requestID: Number(requestID),
        signer: signer
      }
    })

    messages.push(message)
  })

  return messages
}

function onConfirm() {
  const signerAddress = igniteN.value.addr

  if (!signerAddress) return

  const messages = getTransactionMessages(signerAddress)

  igniteN.value.signer?.signAndBroadcast(signerAddress, messages, {
    amount: [],
    gas: '200000'
  })
}

// computed
const requestSummaries = computed(() => {
  const requests = store.selectedRequests
  return getRequestsSummaries(requests)
})
</script>
