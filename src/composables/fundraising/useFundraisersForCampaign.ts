import {
  useTendermintFundraising,
  useTendermintSpnCampaign
} from 'tendermint-spn-vue-client'
import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { RefOrValue } from '~/utils/types'

export default function useFundraisersForCampaign(
  campaignID: RefOrValue<string | undefined>
) {
  const { queryAuctionsOfCampaign } = useTendermintSpnCampaign()
  const { queryAuction } = useTendermintFundraising()

  const isEnabled = computed(() => {
    return Boolean(unref(campaignID))
  })

  const { data: fundraisers, ...other } = useQuery(
    ['campaignFundraisers', 'populated', campaignID],
    async () => {
      const { data } = await queryAuctionsOfCampaign(
        unref(campaignID) as string
      )

      if (!data.auctionIDs) throw new Error('Failed to fetch auction IDs')

      const fundraisersPromises =
        data.auctionIDs?.map((auctionId) =>
          queryAuction(auctionId).then((r) => r.data)
        ) ?? []

      const fundraisers = await Promise.all(fundraisersPromises)

      return fundraisers
    },
    {
      enabled: isEnabled
    }
  )

  return { fundraisers, ...other }
}
