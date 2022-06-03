import { useStorage } from '@vueuse/core'

const storageValue = useStorage('has-connected-wallet', false)

export default function useHasConnectedWallet() {
  return storageValue
}
