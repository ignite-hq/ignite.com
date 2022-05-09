import { computed } from 'vue'

import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { mergePages } from '~/utils/array'
import { RefOrValue } from '~/utils/types'

import useCoordinator from '../profile/useCoordinator'
import useFundraisers from './useFundraisers'

export default function useCoordinatorFundraisers(
  coordinatorId: RefOrValue<string | undefined>
) {
  const { fundraisers, isLoading: isLoadingFundraisers } = useFundraisers()
  const { coordinator, isLoading: isLoadingCoordinator } =
    useCoordinator(coordinatorId)

  const fundraisersByCoordinator = computed(() => {
    const address = coordinator?.value?.address
    const auctions = mergePages(
      fundraisers.value?.pages,
      'auctions'
    ) as FixedPriceAuction[]

    if (!address) return []
    if (!auctions.length) return []

    return auctions.filter(
      (auction) => auction.base_auction?.auctioneer === address
    )
  })

  const isLoading = computed(
    () => isLoadingFundraisers.value || isLoadingCoordinator.value
  )

  return { fundraisersByCoordinator, isLoading }
}
