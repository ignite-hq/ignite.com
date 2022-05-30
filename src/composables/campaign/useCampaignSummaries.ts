import { useTendermintSpnCampaign } from 'tendermint-spn-vue-client'
import { useInfiniteQuery } from 'vue-query'

const CAMPAIGNS_PER_PAGE = '20'

export default function useCampaignSummaries() {
  const { queryCampaignSummaries } = useTendermintSpnCampaign()

  const { data: allCampaignSummaries, ...other } = useInfiniteQuery(
    ['campaigns', 'summaries'],
    ({ pageParam }) => {
      return queryCampaignSummaries({
        'pagination.limit': CAMPAIGNS_PER_PAGE,
        'pagination.key': pageParam,
        'pagination.reverse': true,
        'pagination.count_total': true
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  return { allCampaignSummaries, ...other }
}
