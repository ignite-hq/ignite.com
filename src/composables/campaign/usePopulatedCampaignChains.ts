import {
  useTendermintSpnCampaign,
  useTendermintSpnLaunch
} from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { removeUndefinedFromArray } from '~/utils/array'
import { RefOrValue } from '~/utils/types'

export default function usePopulatedCampaignChains(
  campaignID: RefOrValue<string | undefined>
) {
  const { queryCampaignChains } = useTendermintSpnCampaign()
  const { queryChain } = useTendermintSpnLaunch()

  const isEnabled = computed(() => {
    return Boolean(unref(campaignID))
  })

  const { data: campaignChains, ...other } = useQuery(
    ['campaignChains', 'populated', campaignID],
    async () => {
      const { data } = await queryCampaignChains(unref(campaignID) as string)

      if (!data.campaignChains)
        throw new Error('Failed to fetch campaign chains')

      const chainIds = data.campaignChains.chains

      const chainPromises =
        chainIds?.map((chainId) =>
          queryChain(chainId).then((r) => r.data.chain)
        ) ?? []

      const chains = await Promise.all(chainPromises)

      return {
        campaignID: data.campaignChains.campaignID,
        chains: removeUndefinedFromArray(chains)
      }
    },
    {
      enabled: isEnabled
    }
  )

  return { campaignChains, ...other }
}
