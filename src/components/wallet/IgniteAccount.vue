<script lang="ts">
export default {
  name: 'IgniteAccount'
}
</script>

<script lang="ts" setup>
import { computed, reactive } from 'vue'

import IconKeplr from '../icons/IconKeplr.vue'
import IconWarning from '../icons/IconWarning.vue'
import IgniteButton from '../IgniteButton.vue'
import IgniteHeading from '../IgniteHeading.vue'
import IgniteModal from '../IgniteModal.vue'
import IgniteText from '../IgniteText.vue'

enum ModalPage {
  Connect,
  Connecting,
  Error
}

const initialState = {
  modalPage: ModalPage.Error,
  isConnectWalletModalOpen: true
}

// state
const state = reactive({ ...initialState })

// computed
const isConnectPage = computed(() => state.modalPage === ModalPage.Connect)
const isConnectingPage = computed(
  () => state.modalPage === ModalPage.Connecting
)
const isErrorPage = computed(() => state.modalPage === ModalPage.Error)
</script>

<template>
  <IgniteButton
    variant="primary"
    color="primary"
    class="!px-6 !py-5"
    @click="state.isConnectWalletModalOpen = true"
  >
    Connect Wallet
  </IgniteButton>

  <IgniteModal
    size="md"
    :visible="state.isConnectWalletModalOpen"
    @close="state.isConnectWalletModalOpen = false"
  >
    <template #title>
      <div
        v-if="isConnectPage"
        class="flex flex-col items-center space-y-4 text-center"
      >
        <IconKeplr />
        <IgniteHeading class="text-7 font-bold">
          Connect your wallet
        </IgniteHeading>
      </div>

      <div
        v-else-if="isConnectingPage"
        class="flex flex-col items-center space-y-4 text-center"
      >
        <IgniteText class="text-2 text-muted">Opening Keplr</IgniteText>
        <IgniteHeading class="text-7 font-bold">Connecting</IgniteHeading>
      </div>

      <div
        v-else-if="isErrorPage"
        class="flex flex-col items-center space-y-4 text-center"
      >
        <IconWarning />
        <IgniteHeading class="text-7 font-bold">
          Keplr cannot launch
        </IgniteHeading>
      </div>
    </template>
  </IgniteModal>
</template>
