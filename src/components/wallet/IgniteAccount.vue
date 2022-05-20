<script lang="ts">
export default {
  name: 'IgniteAccount'
}
</script>

<script lang="ts" setup>
import { useSpn } from 'tendermint-spn-vue-client'
import { computed, reactive, watchEffect } from 'vue'

import IconExternalArrow from '~/components/icons/IconExternalArrow.vue'
import IconKeplr from '~/components/icons/IconKeplr.vue'
import IconWarning from '~/components/icons/IconWarning.vue'
import useAddress from '~/composables/wallet/useAddress'

import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteModal from '~/components/ui/IgniteModal.vue'
import IgniteSpinner from '~/components/ui/IgniteSpinner.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import IgniteAccountMenu from './IgniteAccountMenu.vue'

enum ModalPage {
  Install,
  Connecting,
  Error
}

interface Emits {
  (e: 'connect'): void
}

const emit = defineEmits<Emits>()

// spn
const { spn, signIn, signOut } = useSpn()

// variables
const initialState = {
  modalPage: ModalPage.Connecting,
  isConnectWalletModalOpen: false
}

// state
const state = reactive({ ...initialState })

// composables
const { address } = useAddress()

// methods
function onCloseModal() {
  state.isConnectWalletModalOpen = false
}

function onOpenModal() {
  state.isConnectWalletModalOpen = true
  if (state.modalPage === ModalPage.Connecting) return tryToConnectToKeplr()
}

function onCancel() {
  resetState()
  signOut()
}

function getInitialModalPage(isKeplrAvaliable: boolean) {
  return isKeplrAvaliable ? ModalPage.Connecting : ModalPage.Install
}

function resetState() {
  state.modalPage = getInitialModalPage(spn.keplr.value.isAvailable())
  state.isConnectWalletModalOpen = initialState.isConnectWalletModalOpen
}

async function tryToConnectToKeplr() {
  const { connect, getOfflineSigner, listenToAccChange } = spn.keplr.value

  state.modalPage = ModalPage.Connecting

  const onKeplrConnect = async () => {
    const chainId = spn.env.value.chainID ?? ''

    const offlineSigner = getOfflineSigner(chainId)
    signIn(offlineSigner)

    listenToAccChange(onKeplrConnect)
    resetState()

    emit('connect')
  }

  const onKeplrError = (): void => {
    state.modalPage = ModalPage.Error
  }

  try {
    const stakingParams = await (
      await spn.cosmosStakingV1Beta1.value.queryParams()
    ).data

    const tokens = await (
      await spn.cosmosBankV1Beta1.value.queryTotalSupply()
    ).data

    connect(onKeplrConnect, onKeplrError, {
      stakinParams: stakingParams,
      tokens,
      env: spn.env.value
    })
  } catch (e) {
    state.modalPage = ModalPage.Error
  }
}

// computed
const isInstallPage = computed(() => state.modalPage === ModalPage.Install)
const isConnectingPage = computed(
  () => state.modalPage === ModalPage.Connecting
)
const isErrorPage = computed(() => state.modalPage === ModalPage.Error)

// watchers
watchEffect(() => {
  state.modalPage = getInitialModalPage(spn.keplr.value.isAvailable())
})
</script>

<template>
  <IgniteAccountMenu v-if="address" />

  <IgniteButton
    v-else
    variant="primary"
    color="primary"
    class="!px-5 !py-[10px] !text-2"
    @click="onOpenModal"
  >
    Connect Wallet
  </IgniteButton>

  <IgniteModal
    size="sm"
    :visible="state.isConnectWalletModalOpen"
    @close="onCloseModal"
    @after-leave="resetState"
  >
    <template #title>
      <div v-if="isInstallPage" class="modal-header">
        <IconKeplr />
        <IgniteHeading class="modal-heading">Install Keplr</IgniteHeading>
      </div>

      <div v-else-if="isConnectingPage" class="modal-header">
        <IgniteText class="text-2 text-muted">Opening Keplr</IgniteText>
        <IgniteHeading class="modal-heading">Connecting</IgniteHeading>
      </div>

      <div v-else-if="isErrorPage" class="modal-header">
        <IconWarning color="black" />
        <IgniteHeading class="modal-heading">
          Keplr cannot launch
        </IgniteHeading>
      </div>
    </template>

    <template #body>
      <div
        v-if="isConnectingPage"
        class="mt-6 flex flex-col items-center space-y-7"
      >
        <IgniteSpinner />
        <IgniteButton class="w-full text-gray-0" @click="onCancel">
          Cancel
        </IgniteButton>
        <IgniteLink to="https://help.keplr.app/getting-started">
          Having trouble opening Keplr?
        </IgniteLink>
      </div>

      <div
        v-else-if="isInstallPage"
        class="mt-6 flex flex-col items-center space-y-7"
      >
        <IgniteText class="text-center text-3 leading-normal text-muted">
          Install & connect your Keplr wallet via the Keplr browser extension to
          use Emeris.
        </IgniteText>

        <IgniteButton
          variant="primary"
          color="black"
          class="w-full"
          @click="tryToConnectToKeplr"
        >
          Connect Keplr
        </IgniteButton>
        <IgniteButton class="w-full text-gray-0" @click="onCloseModal">
          Cancel
        </IgniteButton>
      </div>

      <div
        v-else-if="isErrorPage"
        class="mt-6 flex flex-col items-center space-y-7"
      >
        <IgniteLink
          to="https://help.keplr.app/troubleshooting"
          class="space-x-3"
        >
          <span>Keplr troubleshooting</span> <IconExternalArrow />
        </IgniteLink>

        <div class="flex w-full justify-center space-x-4">
          <IgniteButton
            variant="primary"
            class="btn-cancel--shadow w-full !px-4 text-gray-0"
            @click="onCloseModal"
          >
            Cancel
          </IgniteButton>
          <IgniteButton
            variant="primary"
            color="black"
            class="w-full !px-4"
            @click="tryToConnectToKeplr"
          >
            Try again
          </IgniteButton>
        </div>
      </div>
    </template>
  </IgniteModal>
</template>

<style lang="postcss" scoped>
.modal-header {
  @apply flex flex-col items-center space-y-4 text-center;
}

.modal-heading {
  @apply text-5 font-bold;
}

.btn-cancel--shadow {
  box-shadow: 3px 9px 32px -4px rgba(0, 0, 0, 0.07);
}
</style>
