import { useAsyncState } from '@vueuse/core'
import { Campaign } from 'tendermint-spn-ts-client/tendermint.spn.campaign'
import { useTendermintSpnCampaignModule } from 'tendermint-spn-vue'
import { computed } from 'vue'

import useInjectedIgnite from './useInjectedIgnite'

export default function useCampaign(campaignId: Campaign['campaignID']) {
  const { igniteClient } = useInjectedIgnite()
  const { queryCampaign } = useTendermintSpnCampaignModule({
    $ignt: igniteClient.value
  })
  const { state, isLoading } = useAsyncState(
    queryCampaign(campaignId.toString()).then((r) => r.data),
    {}
  )
  const campaign = computed(() => {
    return state.value.campaign
  })

  return { campaign, isLoading }
}
