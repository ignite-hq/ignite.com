import { useSpn } from 'tendermint-spn-vue-client'
import { computed } from 'vue'

import { getShortAddress } from '~/utils/address'

export default function useAddress() {
  const { spn } = useSpn()

  const address = computed<string | undefined>(() => spn.signer.value.addr)
  const shortAddress = computed<string>(() =>
    getShortAddress(address?.value ?? '')
  )

  return {
    address,
    shortAddress
  }
}
