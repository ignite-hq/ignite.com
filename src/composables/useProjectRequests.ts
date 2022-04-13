import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { useInfiniteQuery } from 'vue-query'

const REQUESTS_PER_PAGE = '20'

export default function useLaunchRequests(launchId: string) {
  const { queryRequestAll } = useTendermintSpnLaunch()

  const { data: requests, ...other } = useInfiniteQuery(
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

  return { requests, ...other }
}
