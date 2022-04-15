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
  name: 'IgniteRequestsDeclineModal'
}
</script>

<script lang="ts" setup>
import { EncodeObject } from '@cosmjs/proto-signing'
import { useIgnite as useIgniteN } from '@ignt/vue'
import { useIgnite } from 'tendermint-spn-vue'

import IconWarning from '~/components/icons/IconWarning.vue'
import IgniteButton from '~/components/IgniteButton.vue'
import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteModal from '~/components/IgniteModal.vue'
import { useRequestsStore } from '~/stores/requests-store'

interface Emits {
  (e: 'close'): void
}

defineEmits<Emits>()

const store = useRequestsStore()
const { ignite } = useIgnite()
const {
  state: { ignite: igniteN }
} = useIgniteN()

// menthods

function getTransactionMessages(signer: string) {
  const requests = store.selectedRequests
  const messages: EncodeObject[] = []

  requests.forEach(({ launchID, content, requestID }) => {
    if (!content) return

    const message = ignite.tendermintSpnLaunch.value.msgSettleRequest({
      value: {
        approve: false,
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
</script>
