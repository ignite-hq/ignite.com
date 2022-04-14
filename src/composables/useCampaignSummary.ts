import { useTendermintSpnCampaign } from 'tendermint-spn-vue'
import { useQuery } from 'vue-query'

export default function useCampaignSummary(campaignID: string) {
  const { queryCampaignSummary } = useTendermintSpnCampaign()

  const { data: campaignSummary, ...other } = useQuery(
    ['campaigns', campaignID],
    () => {
      return queryCampaignSummary(campaignID).then((r) => r.data)
    }
  )

  return { campaignSummary, ...other }
}
