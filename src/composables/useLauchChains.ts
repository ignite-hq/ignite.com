import { useAsyncState } from '@vueuse/core'
import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'

import useInjectedIgnite from './useInjectedIgnite'

export default function useLaunchChains() {
  const { igniteClient } = useInjectedIgnite()
  const { queryChainAll } = useTendermintSpnLaunchModule({
    $ignt: igniteClient.value
  })
  const { state, isLoading } = useAsyncState(
    queryChainAll().then((r) => r.data),
    {}
  )

  const allChains = computed(() => {
    return state.value.chain
  })

  return { allChains, isLoading }
}
