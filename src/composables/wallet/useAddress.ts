import { useIgnite } from 'tendermint-spn-vue'
import { computed } from 'vue'

import { getShortAddress } from '~/utils/address'

export default function useAddress() {
  const { ignite } = useIgnite()

  const address = computed<string | undefined>(() => ignite.signer.value.addr)
  const shortAddress = computed<string>(() =>
    getShortAddress(address?.value ?? '')
  )

  return {
    address,
    shortAddress
  }
}
