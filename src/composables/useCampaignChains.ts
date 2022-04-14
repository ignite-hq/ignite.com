import { useTendermintSpnCampaign } from 'tendermint-spn-vue'
import { useInfiniteQuery } from 'vue-query'
import { Ref } from 'vue'

const CHAINS_PER_CAMPAIGN = '100'

export default function useCampaignSummary(campaignID: Ref<string>) {
  const { queryCampaignChains } = useTendermintSpnCampaign()

  const { data: campaignChains, ...other } = useInfiniteQuery(
    ['campaignChains', campaignID.value],
    ({ pageParam }) => {
      return queryCampaignChains(campaignID.value, {
        'pagination.limit': CHAINS_PER_CAMPAIGN,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
  )

  return { campaignChains, ...other }
}
