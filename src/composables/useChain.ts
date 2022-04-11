import { useIgnite, useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed, ref } from 'vue'
import { useQuery } from 'vue-query'

export default function useChain(launchID: ref<string>) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryChain } = useTendermintSpnLaunchModule({
    ignite: ignite.value
  })

  const { data, ...other } = useQuery(['launches', launchID], () => {
    return queryChain(launchID.value).then((r) => r.data)
  })

  return { chainData: data, ...other }
}
