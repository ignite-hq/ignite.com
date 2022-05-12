import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useInfiniteQuery } from 'vue-query'

const AUCTIONS_PER_PAGE = '20'

export default function useFundraisers() {
  const { queryAuctions } = useTendermintFundraising()

  const { data: fundraisers, ...other } = useInfiniteQuery(
    ['fundraisers'],
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

  return { fundraisers, ...other }
}
