import { computed, unref } from 'vue'
import { useQuery } from 'vue-query'

import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import {
  useTendermintFundraising,
  useTendermintSpnCampaign
} from '~/generated/tendermint-spn-vue-client'
import { RefOrValue } from '~/utils/types'

export default function useCampaignFundraisers(campaignId: RefOrValue<string>) {
  const { queryAuctionsOfCampaign } = useTendermintSpnCampaign()
  const { queryAuction } = useTendermintFundraising()

  const isEnabled = computed(() => {
    return Boolean(unref(campaignId))
  })

  const { data: fundraisers, ...other } = useQuery(
    ['campaigns', 'fundraisers', campaignId],
    async () => {
      const { data } = await queryAuctionsOfCampaign(unref(campaignId))
      const auctionIds = data.auctionIDs

      const auctionPromises =
        auctionIds?.map((auctionId) =>
          queryAuction(auctionId).then(
            (r) => r.data.auction as FixedPriceAuction
          )
        ) ?? []

      const auctions = await Promise.all(auctionPromises)

      return auctions
    },
    {
      enabled: isEnabled
    }
  )

  return { fundraisers, ...other }
}
