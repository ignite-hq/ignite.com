import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useFundraisersForCampaign(projectId: string) {
  const { queryAuctionsOfCampaign } = useTendermintSpnCampaign()

  const { data, ...other } = useQuery(['fundraisers', 'all'], () => {
    return queryAuctionsOfCampaign(projectId).then((r) => r.data)
  })

  return { fundraisers: data, ...other }
}
