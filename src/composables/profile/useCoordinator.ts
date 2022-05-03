import { computed, Ref, unref } from 'vue'
import { useQuery } from 'vue-query'

import { useTendermintSpnProfile } from 'tendermint-spn-vue-client'

import useAddress from '../wallet/useAddress'

export default function useCoordinator(
  coordinatorId?: Ref<string | undefined> | string
) {
  const { queryCoordinator } = useTendermintSpnProfile()
  const { address } = useAddress()

  const isEnabled = computed(() => {
    return Boolean(unref(coordinatorId))
  })

  const { data: coordinator, ...other } = useQuery(
    ['coordinators', coordinatorId],
    () => {
      const id = unref(coordinatorId)
      if (!id) return
      return queryCoordinator(unref(id)).then((r) => r.data.coordinator)
    },
    {
      enabled: isEnabled
    }
  )

  const isSameAddressAsLoggedIn = computed(() => {
    if (!coordinator.value || !address.value) return false
    return coordinator.value?.address === address.value
  })

  return {
    coordinator,
    isSameAddressAsLoggedIn,
    ...other
  }
}
