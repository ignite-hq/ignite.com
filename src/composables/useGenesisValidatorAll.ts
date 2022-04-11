import { useIgnite, useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '20'

export default function useGenesisValidatorsAll(launchID: string) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryGenesisValidatorAll } = useTendermintSpnLaunchModule({
    ignite: ignite.value
  })

  const { data, ...other } = useInfiniteQuery(
    ['address'],
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

  const genesisValidatorAllData = computed(() => {
    return data.value
  })

  return { genesisValidatorAllData, ...other }
}
