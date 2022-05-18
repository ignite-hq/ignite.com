import {
  useTendermintSpnCampaign,
  useTendermintSpnLaunch
} from 'tendermint-spn-vue-client'
import { unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

export default function useGenesisValidatorAllChains(
  campaignID: RefOrValue<string | undefined>
) {
  const { queryCampaignChains } = useTendermintSpnCampaign()
  const { queryGenesisValidatorAll } = useTendermintSpnLaunch()

  const { data: campaignValidators, ...other } = useQuery(
    ['campaignValidators', 'populated', campaignID],
    async () => {
      const { data } = await queryCampaignChains(unref(campaignID) as string)

      if (!data.campaignChains)
        throw new Error('Failed to fetch campaign chains')

      const chainIds = data.campaignChains.chains

      const validatorPromises =
        chainIds?.map((chainId) =>
          queryGenesisValidatorAll(chainId).then((r) => r.data)
        ) ?? []

      const validators = await Promise.all(validatorPromises)

      const reducedValidatorsFromAllChains = validators.flatMap(
        (chainValidators) => chainValidators?.genesisValidator || []
      )

      const uniqueValidators = [
        ...new Map(
          reducedValidatorsFromAllChains.map((validator) => [
            validator.address,
            validator
          ])
        )
      ]

      return {
        validators: uniqueValidators
      }
    }
  )

  return { campaignValidators, ...other }
}
