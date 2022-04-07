import { useIgnite, useTendermintSpnCampaignModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

export default function useCampaign(campaignId: string) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryCampaign } = useTendermintSpnCampaignModule({
    ignite: ignite.value
  })

  const { data, ...other } = useInfiniteQuery(['campaignID'], () => {
    return queryCampaign(campaignId).then((r) => r.data)
  })

  const campaignData = computed(() => {
    return data.value
  })

  return { campaignData, ...other }
}
