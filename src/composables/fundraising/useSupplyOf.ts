import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useSupplyOf(denom: string) {
  const { querySupplyOf } = useCosmosBankV1Beta1()

  const { data, ...other } = useQuery(['supplyOf', denom], () => {
    return querySupplyOf(denom).then((r) => r.data)
  })

  return { supply: data, ...other }
}
