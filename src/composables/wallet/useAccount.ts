import { computedAsync } from '@vueuse/core'
import { useSpn } from 'tendermint-spn-vue-client'

export default function useAccount() {
  const { spn } = useSpn()

  const account = computedAsync(async () => {
    if (spn.signer.value.addr === null) return null

    const chainId = spn.env.value.chainID ?? ''
    const account = await spn.keplr.value.getAccParams(chainId)

    return account
  })

  return {
    account
  }
}
