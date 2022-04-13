import { useIgnite, useTendermintSpnLaunch } from 'tendermint-spn-vue'
import { computed, Ref } from 'vue'
import { useQuery } from 'vue-query'

export default function useChain(launchID: Ref<string>) {
  const { queryChain } = useTendermintSpnLaunch()

  const { data, ...other } = useQuery(['launches', launchID], () => {
    return queryChain(launchID.value).then((r) => r.data)
  })

  return { chainData: data, ...other }
}
