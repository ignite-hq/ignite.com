import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

import { PaginationParams } from '../utils/types'
import useInjectedIgnite from './useInjectedIgnite'

export default function useLaunchValidators(
  launchId: LaunchChain['launchID'],
  options?: PaginationParams
) {
  const { igniteClient } = useInjectedIgnite()
  const { queryGenesisValidatorAll } = useTendermintSpnLaunchModule({
    $ignt: igniteClient.value
  })
  const { data, ...other } = useQuery(
    ['launch', 'validators', launchId],
    () => queryGenesisValidatorAll(launchId ?? '', options).then((r) => r.data),
    {
      enabled: Boolean(launchId)
    }
  )

  const requests = computed(() => data.value?.genesisValidator)
  const pagination = computed(() => data.value?.pagination)

  return { requests, pagination, ...other }
}
