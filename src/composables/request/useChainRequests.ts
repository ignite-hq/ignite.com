import { useTendermintSpnLaunch } from 'tendermint-spn-vue-client'
import { computed, Ref, unref } from 'vue'
import { QueryClient, useInfiniteQuery } from 'vue-query'

const REQUESTS_PER_PAGE = '20'

type LaunchIdParam = Ref<string | undefined> | string | undefined

const DOMAIN = 'chain-requests'

export default function useChainRequests(launchId: LaunchIdParam) {
  const { queryRequestAll } = useTendermintSpnLaunch()

  const isEnabled = computed(() => {
    return Boolean(unref(launchId))
  })

  const { data: requests, ...other } = useInfiniteQuery(
    [DOMAIN, launchId],
    ({ pageParam }) => {
      const id = unref(launchId) as string
      return queryRequestAll(id, {
        'pagination.limit': REQUESTS_PER_PAGE,
        'pagination.key': pageParam,
        'pagination.count_total': true
      }).then((r) => r.data)
    },
    {
      enabled: isEnabled,
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  return { requests, ...other }
}

export function invalidateChainRequestsQuery(queryClient: QueryClient) {
  queryClient.invalidateQueries(DOMAIN)
}
