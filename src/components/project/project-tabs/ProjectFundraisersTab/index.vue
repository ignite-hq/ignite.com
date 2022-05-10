<script lang="ts">
export default {
  name: 'ProjectFundraisersTab'
}
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import { computed, watchEffect, ref } from 'vue'
import BigNumber from 'bignumber.js'

import { BaseAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import useFundraisersAll from '~/composables/fundraising/useFundraisersAll'
import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { toCompactNumber, getDenomName } from '~/utils/fundraisers'
import { AuctionStatusLabels, AuctionCardData } from '~/utils/types'
import { Coin } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/cosmos/base/v1beta1/coin'
import { V1Beta1Coin } from '~/generated/tendermint-spn-ts-client/cosmos.bank.v1beta1/rest'

const { fundraisers } = useFundraisersAll()
const { queryTotalSupply } = useCosmosBankV1Beta1()

interface Props {
  campaignSummary?: CampaignCampaignSummary
}

withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({})
})

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

const statuses = computed(() => {
  let statuses = []
  const auctions = fundraisers?.value?.pages[0].auctions ?? []
  const currentPresent = auctions.find(
    (auctionData: any) =>
      formatAuctionStatus(auctionData.base_auction.status) ===
      AuctionStatusLabels.Current
  )
  const upcomingPresent = auctions.find(
    (auctionData: any) =>
      formatAuctionStatus(auctionData.base_auction.status) ===
      AuctionStatusLabels.Upcoming
  )
  const previousPresent = auctions.find(
    (auctionData: any) =>
      formatAuctionStatus(auctionData.base_auction.status) ===
      AuctionStatusLabels.Previous
  )
  const otherPresent = auctions.find(
    (auctionData: any) =>
      formatAuctionStatus(auctionData.base_auction.status) ===
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
  return (fundraisers?.value?.pages[0].auctions || []).map(
    (auctionData: any) => {
      const auction: BaseAuction = auctionData.base_auction
      const remainingSellingCoins: Coin | undefined =
        auctionData.remaining_selling_coin
      const token = totalSupply.value?.find(
        (token) => token.denom === auction.selling_coin?.denom
      )
      const tokenSupply = new BigNumber(token?.amount ?? '0').toNumber()
      const relativeSupply = tokenSupply
        ? Math.round(
            (Number(auction.selling_coin?.amount ?? 0) / tokenSupply) * 100
          )
        : 0
      return {
        id: auction.id,
        raised:
          Number(auction.selling_coin?.amount ?? 0) -
          Number(remainingSellingCoins?.amount ?? 0),
        goal: auction.selling_coin?.amount ?? 0,
        currency: getDenomName(
          (auction.selling_coin?.denom ?? '').toUpperCase()
        ),
        status: formatAuctionStatus(auction.status),
        statusDetailed: auction.status,
        vouchers: `${toCompactNumber.format(tokenSupply)} (${relativeSupply}%)`,
        investors: auction.allowed_bidders?.length || 0,
        ends: auction.end_times[0]
      } as AuctionCardData
    }
  )
})
</script>

<template>
  <div>
    <InvestTitle
      :projectName="campaignSummary?.campaign?.campaignName"
      class="mt-8 md:mt-10.5"
    />
    <InvestVoucherAllocation
      :fundraisers="fundraisers"
      :totalSupply="totalSupply"
      class="mt-7 md:mt-9"
    />
    <InvestStart
      :projectName="campaignSummary?.campaign?.campaignName"
      class="mt-8 md:mt-10.5"
    />
    <div class="container-full container px-5 sm:px-5.5 lg:px-7">
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
  </div>
</template>
