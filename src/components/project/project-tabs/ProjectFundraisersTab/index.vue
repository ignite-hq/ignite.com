<script lang="ts">
export default {
  name: 'ProjectFundraisersTab'
}
</script>

<script lang="ts" setup>
import BigNumber from 'bignumber.js'
import { computed, ref, watchEffect } from 'vue'

import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useCampaignFundraisers from '~/composables/fundraising/useCampaignFundraisers'
import { V1Beta1Coin } from '~/generated/tendermint-spn-ts-client/cosmos.bank.v1beta1/rest'
import {
  BaseAuction,
  FixedPriceAuction
} from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { Coin } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/cosmos/base/v1beta1/coin'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue-client'
import { getDenomName, toCompactNumber } from '~/utils/fundraising'
import { AuctionCardData, AuctionStatusLabels } from '~/utils/types'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import { useRoute } from 'vue-router'
import useCoordinator from '~/composables/profile/useCoordinator'

interface Props {
  campaignSummary?: CampaignCampaignSummary
}

const props = withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({})
})

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

const coordinatorId = computed(() => {
  return props.campaignSummary?.campaign?.coordinatorID
})

const { fundraisers } = useCampaignFundraisers(projectId)
const { queryTotalSupply } = useCosmosBankV1Beta1()
const { isSameAddressAsLoggedIn: coordinatorView } =
  useCoordinator(coordinatorId)

const formatAuctionStatus = (
  auctionType: AuctionStatus
): AuctionStatusLabels => {
  // @ts-ignore
  switch (AuctionStatus[auctionType] as AuctionStatus) {
    case AuctionStatus.AUCTION_STATUS_VESTING:
    case AuctionStatus.AUCTION_STATUS_STARTED:
      return AuctionStatusLabels.Current
    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return AuctionStatusLabels.Upcoming
    case AuctionStatus.AUCTION_STATUS_FINISHED:
    case AuctionStatus.AUCTION_STATUS_CANCELLED:
      return AuctionStatusLabels.Previous
    default:
      return AuctionStatusLabels.Other
  }
}
// computed
const statuses = computed(() => {
  let statuses = []
  const auctions = fundraisers?.value ?? []
  const currentPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      formatAuctionStatus(auction.base_auction.status) ===
      AuctionStatusLabels.Current
  )
  const upcomingPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      formatAuctionStatus(auction.base_auction.status) ===
      AuctionStatusLabels.Upcoming
  )
  const previousPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      formatAuctionStatus(auction.base_auction.status) ===
      AuctionStatusLabels.Previous
  )
  const otherPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      formatAuctionStatus(auction.base_auction.status) ===
      AuctionStatusLabels.Other
  )
  if (currentPresent && upcomingPresent)
    statuses.push(AuctionStatusLabels.CurrentAndUpcoming)
  else if (currentPresent) statuses.push(AuctionStatusLabels.Current)
  else if (upcomingPresent) statuses.push(AuctionStatusLabels.Upcoming)
  if (previousPresent) statuses.push(AuctionStatusLabels.Previous)
  if (otherPresent) statuses.push(AuctionStatusLabels.Other)

  return statuses
})

const totalSupply = ref<V1Beta1Coin[] | undefined>([] as V1Beta1Coin[])
watchEffect(async () => {
  totalSupply.value = await (await queryTotalSupply()).data.supply
})

const fundraisingList = computed(() => {
  return (fundraisers?.value || []).map(({ auction }: FixedPriceAuction) => {
    const baseAuction: BaseAuction = auction.base_auction
    const remainingSellingCoins: Coin | undefined =
      auction.remaining_selling_coin
    const token = totalSupply.value?.find(
      (token) => token.denom === baseAuction.selling_coin?.denom
    )
    const tokenSupply = new BigNumber(token?.amount ?? '0').toNumber()
    const relativeSupply = tokenSupply
      ? Math.round(
          (Number(baseAuction.selling_coin?.amount ?? 0) / tokenSupply) * 100
        )
      : 0
    return {
      id: baseAuction.id,
      raised:
        Number(baseAuction.selling_coin?.amount ?? 0) -
        Number(remainingSellingCoins?.amount ?? 0),
      goal: baseAuction.selling_coin?.amount ?? 0,
      currency: getDenomName(baseAuction.selling_coin?.denom ?? ''),
      status: formatAuctionStatus(baseAuction.status),
      statusDetailed: baseAuction.status,
      vouchers: `${toCompactNumber.format(tokenSupply)} (${relativeSupply}%)`,
      investors: auction.allowed_bidders?.length || 0,
      ends: baseAuction.end_times[0]
    } as AuctionCardData
  })
})
</script>

<template>
  <div>
    <InvestTitle
      :project-name="campaignSummary?.campaign?.campaignName"
      :allow-create="coordinatorView"
      class="mt-8 md:mt-10.5"
    />
    <InvestVoucherAllocation
      :fundraisers="fundraisers"
      :total-supply="totalSupply"
      class="mt-7 md:mt-9"
    />
    <InvestStart
      v-if="coordinatorView && fundraisers?.length === 0"
      :project-name="campaignSummary?.campaign?.campaignName"
      class="mt-8 md:mt-10.5"
    />
    <div class="container">
      <div v-for="status in statuses" :key="status" class="mt-8 md:mt-10.5">
        <IgniteHeading
          as="div"
          class="font-title text-4 font-semibold md:text-5"
        >
          {{ status }}
        </IgniteHeading>
        <div
          class="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:gap-7 lg:grid-cols-2"
        >
          <div
            v-for="(item, key) in fundraisingList?.filter((fundraiser) =>
              status
                .toString()
                .toLowerCase()
                .includes(fundraiser.status.toString().toLowerCase())
            )"
            :key="`fundraisers_${status}_${key}`"
            class="relative z-[1]"
          >
            <InvestCard :data="item" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="fundraisers?.length === 0" class="text-center">
      <span>- No fundraisers yet -</span>
    </div>
    <div class="z-1 container relative mt-8 md:mt-10.5">
      <IgniteCard
        class="flex flex-col p-6 md:flex-row md:items-center md:justify-between md:gap-7 md:p-7.5 lg:p-9 xl:pr-11"
      >
        <div class="">
          <IgniteHeading class="font-title text-5 md:text-7"
            >Distribution</IgniteHeading
          >
          <IgniteText class="mt-5 max-w-xl text-muted">
            At the close of this fundraiser, vouchers are immediately
            distributed to participants and contributed funds are released to
            the project.
          </IgniteText>
        </div>
        <div class="mt-7 md:mt-0">
          <IgniteHeading class="whitespace-nowrap text-5 font-bold md:text-7"
            >April 25, 2022</IgniteHeading
          >
          <IgniteHeading class="text-4 font-semibold">9 AM UTC</IgniteHeading>
        </div>
      </IgniteCard>
    </div>
  </div>
</template>
