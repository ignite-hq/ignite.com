import { useTendermintFundraising } from 'tendermint-spn-vue'
import { useInfiniteQuery } from 'vue-query'

const AUCTIONS_PER_PAGE = '20'

export default function useFundraisersAll() {
  const { queryAuctions } = useTendermintFundraising()

  const { data, ...other } = useInfiniteQuery(
    ['fundraisers', 'all'],
    ({ pageParam }) => {
      return queryAuctions({
        'pagination.limit': AUCTIONS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  return { fundraisers: data, ...other }
}
