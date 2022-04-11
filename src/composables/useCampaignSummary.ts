import { useIgnite, useTendermintSpnCampaignModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useCampaignSummary(campaignID: string) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryCampaignSummary } = useTendermintSpnCampaignModule({
    ignite: ignite.value
  })

  const { data, ...other } = useQuery(['campaignID'], () => {
    return queryCampaignSummary(campaignID).then((r) => r.data)
  })

  const campaignSummaryData = computed(() => {
    return data.value
  })

  return { campaignSummaryData, ...other }
}
