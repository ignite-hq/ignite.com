import { useIgnite } from '@ignt/vue'
import { computed } from 'vue'

import { getShortAddress } from '~/utils/address'

export default function useAddress() {
  const {
    state: { ignite }
  } = useIgnite()

  const address = computed<string | undefined>(() => ignite.value.addr)
  const shortAddress = computed<string>(() =>
    getShortAddress(address?.value ?? '')
  )

  return {
    address,
    shortAddress
  }
}
