import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useTotalSupply() {
  const { queryTotalSupply } = useCosmosBankV1Beta1()

  const { data, ...other } = useQuery(['totalSupply'], () => {
    return queryTotalSupply().then((r) => r.data)
  })

  return { totalSupply: data, ...other }
}
