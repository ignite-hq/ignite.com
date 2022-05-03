import { useSpn } from 'tendermint-spn-vue-client'
import { computed, ComputedRef, Ref, unref } from 'vue'
import { useQuery } from 'vue-query'

type Address =
  | ComputedRef<string | undefined>
  | Ref<string | undefined>
  | string

export default function useBalances(address: Address) {
  const { spn } = useSpn()

  const isEnabled = computed(() => {
    return Boolean(unref(address))
  })

  const addressString = computed(() => {
    return unref(address)
  })

  const { data: balances, ...other } = useQuery(
    ['balances', address],
    () => {
      return spn.cosmosBankV1Beta1.value
        .queryAllBalances(addressString.value ?? '')
        .then((r) => r.data?.balances)
    },
    {
      enabled: isEnabled
    }
  )

  return {
    balances,
    ...other
  }
}
