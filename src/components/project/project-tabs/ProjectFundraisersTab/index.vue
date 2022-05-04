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

import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import useFundraisersAll from '~/composables/fundraising/useFundraisersAll'
import { useCosmosBankV1Beta1 } from '~/generated/tendermint-spn-vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { numberFormatter, formatVoucherDenom } from '~/utils/fundraisers'

const { fundraisers } = useFundraisersAll()
const { queryTotalSupply } = useCosmosBankV1Beta1()

interface Props {
  campaignSummary?: CampaignCampaignSummary
}

withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({})
})

const formatAuctionStatus = (auctionType: AuctionStatus): string => {
  if (auctionType == 'AUCTION_STATUS_VESTING') return 'Current'
  if (auctionType == 'AUCTION_STATUS_STARTED') return 'Current'
  if (auctionType == 'AUCTION_STATUS_STANDBY') return 'Upcoming'
  if (auctionType == 'AUCTION_STATUS_FINISHED') return 'Previous'
  if (auctionType == 'AUCTION_STATUS_CANCELLED') return 'Previous'
  if (auctionType == 'AUCTION_STATUS_UNSPECIFIED') return 'Other'
  return 'Other'
}

const statuses: string[] = computed(() => {
  let statuses = []
  const currentPresent = fundraisers?.value?.pages[0].auctions.find(
    (auctionData: FixedPriceAuction) =>
      formatAuctionStatus(auctionData.base_auction.status) === 'Current'
  )
  const upcomingPresent = fundraisers?.value?.pages[0].auctions.find(
    (auctionData: FixedPriceAuction) =>
      formatAuctionStatus(auctionData.base_auction.status) === 'Upcoming'
  )
  const previousPresent = fundraisers?.value?.pages[0].auctions.find(
    (auctionData: FixedPriceAuction) =>
      formatAuctionStatus(auctionData.base_auction.status) === 'Previous'
  )
  const otherPresent = fundraisers?.value?.pages[0].auctions.find(
    (auctionData: FixedPriceAuction) =>
      formatAuctionStatus(auctionData.base_auction.status) === 'Other'
  )
  if (currentPresent && upcomingPresent) statuses.push('Current and upcoming')
  else if (currentPresent) statuses.push('Current')
  else if (upcomingPresent) statuses.push('Upcoming')
  if (previousPresent) statuses.push('Previous')
  if (otherPresent) statuses.push('Other')

  return statuses
})

const totalSupply = ref([])
watchEffect(async () => {
  totalSupply.value = await (await queryTotalSupply()).data.supply
})

const fundraisingList = computed(() => {
  return fundraisers?.value?.pages[0].auctions.map(
    (auctionData: FixedPriceAuction) => {
      const auction = auctionData.base_auction
      const token = totalSupply.value?.find(
        (token) => token.denom === auction.selling_coin.denom
      )
      const tokenSupply = new BigNumber(token?.amount ?? '0').toNumber()
      const relativeSupply = tokenSupply
        ? Math.round((auction.selling_coin.amount / tokenSupply) * 100)
        : 0
      return {
        id: auction.id,
        raised:
          parseInt(auction.selling_coin.amount) -
          parseInt(auction.remaining_selling_coin.amount),
        goal: auction.selling_coin.amount,
        currency: formatVoucherDenom(auction.selling_coin.denom.toUpperCase()),
        status: formatAuctionStatus(auction.status),
        statusDetailed: auction.status,
        vouchers: `${numberFormatter.format(tokenSupply)} (${relativeSupply}%)`,
        investors: auction.allowed_bidders?.length || 0,
        ends: auction.end_times[0]
      }
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
              status.toLowerCase().includes(fundraiser.status.toLowerCase())
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