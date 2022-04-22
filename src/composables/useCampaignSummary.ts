import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useCampaignSummary(campaignId: string) {
  const { queryCampaignSummary } = useTendermintSpnCampaign()

  const { data: campaignSummary, ...other } = useQuery(
    ['campaigns', campaignId],
    () => {
      return queryCampaignSummary(campaignId).then((r) => r.data)
    }
  )

  return { campaignSummary, ...other }
}
