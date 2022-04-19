import { Account } from '@cosmjs/stargate'
import { useIgnite } from '@ignt/vue'
import { computedAsync } from '@vueuse/core'

import useAddress from './useAddress'

export default function useAccount() {
  const {
    state: { ignite }
  } = useIgnite()
  const { address } = useAddress()

  const account = computedAsync(async () => {
    if (ignite.value.signer && address.value) {
      return (await ignite.value.signer.getAccount(address.value)) as Account
    }
  }, undefined)

  return {
    account
  }
}
