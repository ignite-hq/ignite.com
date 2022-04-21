<script lang="ts">
export default {
  name: 'IgniteAccount'
}
</script>

<script lang="ts" setup>
import { computed, reactive, watchEffect } from 'vue'

import { useIgnite } from '~/generated/tendermint-spn-vue'

import IconExternalArrow from '../icons/IconExternalArrow.vue'
import IconKeplr from '../icons/IconKeplr.vue'
import IconWarning from '../icons/IconWarning.vue'
import IgniteButton from '../IgniteButton.vue'
import IgniteHeading from '../IgniteHeading.vue'
import IgniteLink from '../IgniteLink.vue'
import IgniteModal from '../IgniteModal.vue'
import IgniteText from '../IgniteText.vue'
import IgniteSpinner from '../ui/IgniteSpinner.vue'

enum ModalPage {
  Install,
  Connecting,
  Error
}

// ignite
const { ignite, signIn } = useIgnite()

const initialState = {
  modalPage: ModalPage.Connecting,
  isConnectWalletModalOpen: false,
  keplrParams: { name: '', bech32Address: '' }
}

// state
const state = reactive({ ...initialState })

// methods
function onCloseModal() {
  state.isConnectWalletModalOpen = false
}

function onOpenModal() {
  state.isConnectWalletModalOpen = true
  if (state.modalPage === ModalPage.Connecting) return tryToConnectToKeplr()
}

function getInitialModalPage(isKeplrAvaliable: boolean) {
  return isKeplrAvaliable ? ModalPage.Connecting : ModalPage.Install
}

function resetState() {
  state.modalPage = getInitialModalPage(ignite.keplr.value.isAvailable())
  state.isConnectWalletModalOpen = initialState.isConnectWalletModalOpen
  state.keplrParams = initialState.keplrParams
}

async function tryToConnectToKeplr() {
  const { connect, getOfflineSigner, getAccParams, listenToAccChange } =
    ignite.keplr.value

  state.modalPage = ModalPage.Connecting

  const onKeplrConnect = async () => {
    const chainID = ignite.env.value.chainID ?? ''
    const { name, bech32Address } = await getAccParams(chainID)

    state.keplrParams.name = name
    state.keplrParams.bech32Address = bech32Address

    const offlineSigner = getOfflineSigner(chainID)
    signIn(offlineSigner)

    listenToAccChange(onKeplrConnect)
    resetState()
  }

  const onKeplrError = (): void => {
    state.modalPage = ModalPage.Error
  }

  const stakingParams = await (
    await ignite.cosmosStakingV1Beta1.value.queryParams()
  ).data

  const tokens = await (
    await ignite.cosmosBankV1Beta1.value.queryTotalSupply()
  ).data

  connect(onKeplrConnect, onKeplrError, {
    stakinParams: stakingParams,
    tokens,
    env: ignite.env.value
  })
}

// computed
const isInstallPage = computed(() => state.modalPage === ModalPage.Install)
const isConnectingPage = computed(
  () => state.modalPage === ModalPage.Connecting
)
const isErrorPage = computed(() => state.modalPage === ModalPage.Error)

// watchers
watchEffect(() => {
  state.modalPage = getInitialModalPage(ignite.keplr.value.isAvailable())
})
</script>

<template>
  <IgniteButton
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
        <IgniteButton class="w-full text-gray-0" @click="onCloseModal">
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
