import { useTendermintSpnCampaignModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

import { isNumeric } from '../utils/assertion'
import useInjectedIgnite from './useInjectedIgnite'

export default function useCampaign(campaignId: string) {
  const { igniteClient } = useInjectedIgnite()
  const { queryCampaign } = useTendermintSpnCampaignModule({
    $ignt: igniteClient.value
  })
  const { data, ...other } = useQuery(
    ['campaigns', campaignId],
    () => queryCampaign(campaignId.toString()).then((r) => r.data),
    { enabled: isNumeric(campaignId) }
  )

  const campaign = computed(() => {
    return data.value?.campaign
  })

  return { campaign, ...other }
}
