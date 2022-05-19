import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

export default function useCampaignChains(
  campaignID: RefOrValue<string | undefined>
) {
  const { queryCampaignChains } = useTendermintSpnCampaign()

  const isEnabled = computed(() => {
    return Boolean(unref(campaignID))
  })

  const { data: campaignChains, ...other } = useQuery(
    ['campaignChains', campaignID],
    () => {
      return queryCampaignChains(unref(campaignID) as string).then(
        (r) => r.data.campaignChains
      )
    },
    {
      enabled: isEnabled
    }
  )

  return { campaignChains, ...other }
}
