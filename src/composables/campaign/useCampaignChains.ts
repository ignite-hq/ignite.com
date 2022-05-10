import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { useInfiniteQuery } from 'vue-query'

const CHAINS_PER_CAMPAIGN = '100'

export default function useCampaignChains(campaignID: string) {
  const { queryCampaignChains } = useTendermintSpnCampaign()

  const { data: campaignChains, ...other } = useInfiniteQuery(
    ['campaignChains', campaignID],
    ({ pageParam }) => {
      return queryCampaignChains(campaignID, {
        'pagination.limit': CHAINS_PER_CAMPAIGN,
        'pagination.key': pageParam
      }).then((r) => r.data)
    }
  )

  return { campaignChains, ...other }
}
