import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

import useInjectedIgnite from './useInjectedIgnite'

const CHAINS_PER_PAGE = '20'

export default function useLaunchChains() {
  const { igniteClient } = useInjectedIgnite()
  const { queryChainAll } = useTendermintSpnLaunchModule({
    $ignt: igniteClient.value
  })

  const { data, ...other } = useInfiniteQuery(
    'launch-chains',
    ({ pageParam }) => {
      return queryChainAll({
        'pagination.limit': CHAINS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        // @ts-ignore
        return lastPage.pagination?.next_key
      }
    }
  )

  const allChains = computed(() => {
    return data.value
  })

  return { allChains, ...other }
}
