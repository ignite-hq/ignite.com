import { useQuery } from 'vue-query'

import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue-client'

export default function useTotalSupply() {
  const { queryTotalSupply } = useCosmosBankV1Beta1()

  const { data, ...other } = useQuery(['totalSupply'], () => {
    return queryTotalSupply().then((r) => r.data)
  })

  return { totalSupply: data, ...other }
}
