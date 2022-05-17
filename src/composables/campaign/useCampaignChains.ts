import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useInfiniteQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

const CHAINS_PER_CAMPAIGN = '100'

export default function useCampaignChains(
  campaignID: RefOrValue<string | undefined>
) {
  const { queryCampaignChains } = useTendermintSpnCampaign()

  const isEnabled = computed(() => {
    return Boolean(unref(campaignID))
  })

  const { data: campaignChains, ...other } = useInfiniteQuery(
    ['campaignChains', campaignID],
    ({ pageParam }) => {
      return queryCampaignChains(unref(campaignID) as string, {
        'pagination.limit': CHAINS_PER_CAMPAIGN,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      enabled: isEnabled
    }
  )

  return { campaignChains, ...other }
}
