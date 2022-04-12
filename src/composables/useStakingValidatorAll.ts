import { useIgnite, useCosmosStakingV1Beta1 } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useInfiniteQuery } from 'vue-query'

const VALIDATORS_PER_PAGE = '20'

export default function useAllStakingValidators() {
  const { queryValidators } = useCosmosStakingV1Beta1()

  const { data, ...other } = useInfiniteQuery(
    ['staking-validators'],
    ({ pageParam }) => {
      return queryValidators({
        'pagination.limit': VALIDATORS_PER_PAGE,
        'pagination.key': pageParam
      }).then((r) => r.data)
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.pagination?.next_key
      }
    }
  )

  const stakingValidatorsAllData = computed(() => {
    return data.value
  })

  return { stakingValidatorsAllData, ...other }
}
