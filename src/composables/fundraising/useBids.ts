import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useBids(auctionId: string) {
  const { queryBids } = useTendermintFundraising()

  const { data, ...other } = useQuery(['bids', auctionId], () => {
    return queryBids(auctionId).then((r) => r.data)
  })

  return { bids: data, ...other }
}
