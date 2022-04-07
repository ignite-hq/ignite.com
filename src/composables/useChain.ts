import { useIgnite, useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

export default function useChain(launchId: string) {
  const {
    state: { ignite }
  } = useIgnite()
  const { queryChain } = useTendermintSpnLaunchModule({
    ignite: ignite.value
  })

  const { data, ...other } = useQuery(['launchID'], () => {
    return queryChain(launchId).then((r) => r.data)
  })

  const chainData = computed(() => {
    return data.value
  })

  return { chainData, ...other }
}
