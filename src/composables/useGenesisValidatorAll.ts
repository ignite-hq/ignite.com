import { useIgnite, useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { computed, Ref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '500'

export default function useGenesisValidatorsAll(launchID: string) {
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const { data, ...other } = useInfiniteQuery(
    ['validators', launchID],
    ({ pageParam }) => {
      return queryGenesisValidatorAll(launchID, {
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

  return { genesisValidatorAll: data, ...other }
}
