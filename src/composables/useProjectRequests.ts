import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const REQUESTS_PER_PAGE = '20'

export default function useLaunchRequests(launchId: string) {
  const { queryRequestAll } = useTendermintSpnLaunch()

  const { data, ...other } = useInfiniteQuery(
    ['launch', launchId, 'requests'],
    ({ pageParam }) => {
      return queryRequestAll(launchId, {
        'pagination.limit': REQUESTS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  const requests = computed(() => {
    return data.value
  })

  return { requests, ...other }
}
