import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useAllowedBidders(auctionId: string) {
  const { queryAllowedBidders } = useTendermintFundraising()

  const { data, ...other } = useQuery(['allowedBidders', auctionId], () => {
    return queryAllowedBidders(auctionId).then((r) => r.data)
  })

  return { allowedBidders: data, ...other }
}
