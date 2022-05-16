import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useBids(auctionId: string, bidder?: string) {
  const { queryBids } = useTendermintFundraising()

  const { data, ...other } = useQuery(['bids', auctionId, bidder], () => {
    return queryBids(auctionId, { bidder }).then((r) => r.data)
  })

  return { bids: data, ...other }
}
