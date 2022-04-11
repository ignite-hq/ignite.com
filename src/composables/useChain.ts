import { useIgnite, useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'

export default function useChain(launchID: ref<string>) {
  const { ignite } = useIgnite()
  const { queryChain } = useTendermintSpnLaunch()

  const { data, ...other } = useQuery(['launches', launchID], () => {
    return queryChain(launchID.value).then((r) => r.data)
  })

  return { chainData: data, ...other }
}
