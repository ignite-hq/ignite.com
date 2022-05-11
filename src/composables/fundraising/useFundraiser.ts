import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useFundraisersAll(fundraiserId: string) {
  const { queryAuction } = useTendermintFundraising()

  const { data, ...other } = useQuery(['fundraiser', fundraiserId], () => {
    return queryAuction(fundraiserId).then((r) => r.data)
  })

  return { fundraiser: data, ...other }
}
