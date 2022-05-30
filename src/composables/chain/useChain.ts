import { useTendermintSpnLaunch } from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

export default function useChain(launchId: RefOrValue<string | undefined>) {
  const { queryChain } = useTendermintSpnLaunch()

  const isEnabled = computed(() => {
    return Boolean(unref(launchId))
  })

  const { data: chain, ...other } = useQuery(
    ['chains', launchId],
    () => {
      const id = unref(launchId)
      if (!id) throw new Error('No launch id found')

      return queryChain(id).then((r) => r.data.chain)
    },
    {
      enabled: isEnabled
    }
  )

  return { chain, ...other }
}
