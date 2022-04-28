import { useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { Ref } from 'vue'
import { useQuery } from 'vue-query'

export default function useChain(launchId: Ref<string>) {
  const { queryChain } = useTendermintSpnLaunch()

  const { data, ...other } = useQuery(['chains', launchId], () => {
    return queryChain(launchId.value).then((r) => r.data)
  })

  return { chainData: data, ...other }
}
