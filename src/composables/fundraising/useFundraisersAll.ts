import { useTendermintFundraising } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useFundraisersAll() {
  const { queryAuctions } = useTendermintFundraising()

  const { data, ...other } = useQuery(['fundraisers', 'all'], () => {
    return queryAuctions().then((r) => r.data)
  })

  return { fundraisers: data, ...other }
}
