import { useIgnite, useTendermintSpnCampaign } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useCampaignSummary(campaignID: string) {
  const { queryCampaignSummary } = useTendermintSpnCampaign()

  const { data, ...other } = useQuery(['campaigns', campaignID], () => {
    return queryCampaignSummary(campaignID).then((r) => r.data)
  })

  const campaignSummaryData = computed(() => {
    return data.value
  })

  return { campaignSummaryData, ...other }
}
