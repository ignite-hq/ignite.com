import { computedAsync } from '@vueuse/core'
import { useIgnite } from 'tendermint-spn-vue'

export default function useAccount() {
  const { ignite } = useIgnite()

  const account = computedAsync(async () => {
    if (ignite.signer.value.addr === null) return null

    const chainId = ignite.env.value.chainID ?? ''
    const account = await ignite.keplr.value.getAccParams(chainId)

    return account
  })

  return {
    account
  }
}
