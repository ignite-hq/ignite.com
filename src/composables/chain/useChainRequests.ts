import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { computed, Ref, unref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const REQUESTS_PER_PAGE = '20'

export default function useChainRequests(
  launchId?: Ref<string | undefined> | string
) {
  const { queryRequestAll } = useTendermintSpnLaunch()

  const isEnabled = computed(() => {
    return Boolean(unref(launchId))
  })

  const { data: requests, ...other } = useInfiniteQuery(
    ['chains', launchId, 'requests'],
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
