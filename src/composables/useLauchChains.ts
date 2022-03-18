import { computed } from 'vue'
import { useAsyncState } from '@vueuse/core'
import useInjectedIgnite from './useInjectedIgnite'

export default function useLaunchChains() {
  const { igniteClient } = useInjectedIgnite()
  const { state, isLoading } = useAsyncState(
    igniteClient.value.TendermintSpnLaunch.queryChainAll().then((r) => r.data),
    {}
  )

  const allChains = computed(() => {
    return state.value.chain
  })

  return { allChains, isLoading }
}
