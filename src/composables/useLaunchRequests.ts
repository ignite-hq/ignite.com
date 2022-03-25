import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { useTendermintSpnLaunchModule } from 'tendermint-spn-vue'
import { computed } from 'vue'
import { useQuery } from 'vue-query'

import { PaginationParams } from '../utils/types'
import useIgnite from './useIgnite'

export default function useLaunchRequests(
  launchId: LaunchChain['launchID'],
  options?: PaginationParams
) {
  const { igniteClient } = useIgnite()
  const { queryRequestAll } = useTendermintSpnLaunchModule({
    $ignt: igniteClient.value
  })
  const { data, ...other } = useQuery(
    ['launch', 'requests', launchId],
    () => queryRequestAll(launchId ?? '', options).then((r) => r.data),
    {
      enabled: Boolean(launchId)
    }
  )

  const requests = computed(() => data.value?.request)
  const pagination = computed(() => data.value?.pagination)

  return { requests, pagination, ...other }
}
