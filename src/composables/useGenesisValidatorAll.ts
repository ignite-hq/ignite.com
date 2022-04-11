import { useIgnite, useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed, ref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '20'

export default function useGenesisValidatorsAll(launchID: ref<string>) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryGenesisValidatorAll } = useTendermintSpnLaunchModule({
    ignite: ignite.value
  })

  const { data, ...other } = useInfiniteQuery(
    ['address', launchID],
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
