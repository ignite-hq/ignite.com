import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { Ref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '20'

export default function useGenesisValidatorsAll(launchId: Ref<string>) {
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const { data, ...other } = useInfiniteQuery(
    ['validators', launchId],
    ({ pageParam }) => {
      return queryGenesisValidatorAll(launchId.value, {
        'pagination.limit': VALIDATORS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  return { genesisValidatorAllData: data, ...other }
}
