import {
  useTendermintSpnCampaign,
  useTendermintSpnLaunch
} from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

export default function useAllGenesisValidators(
  projectId: RefOrValue<string | undefined>
) {
  const { queryCampaignChains } = useTendermintSpnCampaign()
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const isEnabled = computed(() => {
    return Boolean(unref(projectId))
  })

  const { data: campaignValidators, ...other } = useQuery(
    ['campaignValidators', 'populated', projectId],
    async () => {
      const { data } = await queryCampaignChains(unref(projectId) as string)

      if (!data.campaignChains)
        throw new Error('Failed to fetch campaign chains')

      const chainIds = data.campaignChains.chains

      const validatorPromises =
        chainIds?.map((chainId) =>
          queryGenesisValidatorAll(chainId).then((r) => r.data)
        ) ?? []

      const validators = await Promise.all(validatorPromises)

      const campaignValidators = validators.flatMap(
        (chainValidators) => chainValidators?.genesisValidator || []
      )

      const seen: Record<string, boolean> = {}

      const uniqueValidators = campaignValidators.filter((validator) => {
        const address = validator?.address ?? ''

        return seen[address] ? false : (seen[address] = true)
      })

      return uniqueValidators
    },
    {
      enabled: isEnabled
    }
  )

  return { campaignValidators, ...other }
}
