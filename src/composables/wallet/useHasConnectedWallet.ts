import { useStorage } from '@vueuse/core'

export default function useHasConnectedWallet() {
  return useStorage('has-connected-wallet', false)
}
