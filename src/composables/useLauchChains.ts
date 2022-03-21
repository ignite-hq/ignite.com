import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

import useInjectedIgnite from './useInjectedIgnite'

export default function useLaunchChains() {
  const { igniteClient } = useInjectedIgnite()
  const { queryChainAll } = useTendermintSpnLaunchModule({
    $ignt: igniteClient.value
  })
  const { data, ...other } = useQuery('launch-chains', () =>
    queryChainAll().then((r) => r.data)
  )

  const allChains = computed(() => {
    return data.value?.chain
  })

  return { allChains, ...other }
}
