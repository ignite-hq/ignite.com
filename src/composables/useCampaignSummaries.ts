import { useIgnite, useTendermintSpnCampaignModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const CAMPAIGNS_PER_PAGE = '20'

export default function useCampaignSummaries() {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryCampaignSummaries } = useTendermintSpnCampaignModule({
    ignite: ignite.value
  })

  const { data, ...other } = useInfiniteQuery(
    ['campaigns', 'summaries'],
    ({ pageParam }) => {
      return queryCampaignSummaries({
        'pagination.limit': CAMPAIGNS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        // @ts-ignore
        return lastPage.pagination?.next_key
      }
    }
  )

  const allCampaignSummaries = computed(() => {
    return data.value
  })

  return { allCampaignSummaries, ...other }
}
