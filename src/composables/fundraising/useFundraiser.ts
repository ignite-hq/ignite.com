import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useFundraisersAll(auctionId: string) {
  const { queryAuction } = useTendermintFundraising()

  const { data, ...other } = useQuery(['fundraiser', auctionId], () => {
    return queryAuction(auctionId).then((r) => r.data)
  })

  return { fundraiser: data, ...other }
}
