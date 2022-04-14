import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { Ref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '20'

export default function useGenesisValidatorsAll(launchID: Ref<string>) {
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const { data, ...other } = useInfiniteQuery(
    ['validators', launchID],
    ({ pageParam }) => {
      return queryGenesisValidatorAll(launchID.value, {
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
