import { ref } from 'vue'

import { useSpn } from '~/generated/tendermint-spn-vue-client'

import useHasConnectedWallet from './useHasConnectedWallet'

interface useConnectWalletOptions {
  onError?: (type: 'keplr' | 'request') => void
  onConnect?: () => void
  onSuccess?: () => void
  onConnecting?: () => void
}

export enum ConnectionState {
  Fresh,
  Connecting,
  Connected,
  Disconnected,
  Error
}

const connectionState = ref(ConnectionState.Fresh)

export default function useConnectWallet({
  onConnect,
  onConnecting,
  onError
}: useConnectWalletOptions = {}) {
  const hasConnectedWallet = useHasConnectedWallet()
  const { spn, signIn, signOut } = useSpn()

  async function tryToConnectToKeplr() {
    const { connect, getOfflineSigner, listenToAccChange } = spn.keplr.value

    connectionState.value = ConnectionState.Connecting
    onConnecting?.()

    const onKeplrConnect = async () => {
      const chainId = spn.env.value.chainID ?? ''

      const offlineSigner = getOfflineSigner(chainId)
      signIn(offlineSigner)

      listenToAccChange(onKeplrConnect)
      onConnect?.()

      connectionState.value = ConnectionState.Connected
      hasConnectedWallet.value = true
    }

    const onKeplrError = (): void => {
      connectionState.value = ConnectionState.Error
      onError?.('keplr')
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
      connectionState.value = ConnectionState.Error
      onError?.('request')
    }
  }

  const onSignOut = () => {
    hasConnectedWallet.value = false
    connectionState.value = ConnectionState.Disconnected
    signOut()
  }

  return { tryToConnectToKeplr, onSignOut, connectionState }
}
