import { useTendermintSpnLaunch } from 'tendermint-spn-vue-client'
import { useQuery } from 'vue-query'

export default function useGenesisValidatorsAll(launchID: string) {
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const { data, ...other } = useQuery(['validators', launchID], () => {
    return queryGenesisValidatorAll(launchID).then((r) => r.data)
  })

  return { genesisValidatorAll: data, ...other }
}
