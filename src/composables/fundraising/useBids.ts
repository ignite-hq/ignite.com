import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useInfiniteQuery } from 'vue-query'

const BIDS_PER_PAGE = '20'

export default function useBids(auctionId: string, bidder?: string) {
  const { queryBids } = useTendermintFundraising()

  const { data, ...other } = useInfiniteQuery(
    ['bids', auctionId, bidder],
    ({ pageParam }) => {
      return queryBids(auctionId, {
        'pagination.limit': BIDS_PER_PAGE,
        'pagination.key': pageParam,
        'pagination.count_total': true
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  return { bids: data, ...other }
}
