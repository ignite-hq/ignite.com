<script lang="ts">
export default {
  name: 'InvestTab'
}
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import useFundraisersAll from '~/composables/fundraising/useFundraisersAll'
import { computed } from 'vue'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'

let { fundraisers } = useFundraisersAll()

const formatAuctionStatus = (auctionType: AuctionStatus): string => {
  if (auctionType == 'AUCTION_STATUS_UNSPECIFIED') return 'Current'
  if (auctionType == 'AUCTION_STATUS_STANDBY') return 'Standby'
  if (auctionType == 'AUCTION_STATUS_STARTED') return 'Current'
  if (auctionType == 'AUCTION_STATUS_VESTING') return 'Current'
  if (auctionType == 'AUCTION_STATUS_FINISHED') return 'Previous'
  if (auctionType == 'AUCTION_STATUS_CANCELLED') return 'Previous'
  return 'Current'
}

const fundraisingList = computed(() => {
  return fundraisers?.value?.pages[0].auctions.reduce(
    (acc, currentAuction: FixedPriceAuction) => {
      const auction = currentAuction.base_auction
      console.log(auction)
      const status = formatAuctionStatus(auction.status)
      const fundraiserData = {
        raised:
          parseInt(auction.remaining_selling_coin.amount) -
          parseInt(auction.selling_coin.amount),
        goal: auction.selling_coin.amount,
        curency: auction.selling_coin.denom.toUpperCase(),
        status,
        vouchers: '6M (3%)',
        investors: auction.allowed_biddes?.length() || 0,
        ends: auction.end_times[0]
      }
      const statusIdx = acc.findIndex(
        (fundraiserByStatus) => fundraiserByStatus.title === status
      )
      if (statusIdx < 0) {
        acc.push({
          title: status,
          items: [fundraiserData]
        })
      } else {
        acc[statusIdx].items.push(fundraiserData)
      }
      return acc
    },
    []
  )
})

/*const fundraisersData = [
  {
    title: 'Current',
    items: [
      {
        raised: '300000',
        goal: '3000000',
        curency: 'UST',
        status: 'Ongoing',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      }
    ]
  },
  {
    title: 'Current and upcoming',
    items: [
      {
        raised: '300000',
        goal: '3000000',
        curency: 'UST',
        status: 'Ongoing',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      },
      {
        raised: '0',
        goal: '3000000',
        curency: 'UST',
        status: 'Upcoming',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      }
    ]
  },
  {
    title: 'Previous',
    items: [
      {
        raised: '3000000',
        goal: '3000000',
        curency: 'UST',
        status: 'Funded',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '02.14.2022'
      },
      {
        raised: '1500000',
        goal: '3000000',
        curency: 'UST',
        status: 'Funded',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '11.07.2021'
      }
    ]
  },
  {
    title: 'Canceled',
    items: [
      {
        raised: '0',
        goal: '3000000',
        curency: 'UST',
        status: 'Canceled',
        vouchers: '6M (3%)',
        investors: '0',
        ends: '03.25.2022'
      }
    ]
  }
]*/
</script>

<template>
  <div>
    <InvestTitle class="mt-8 md:mt-10.5" />
    <InvestVoucherAllocation class="mt-7 md:mt-9" />
    <InvestStart class="mt-8 md:mt-10.5" />

    <div class="container-full container px-5 sm:px-5.5 lg:px-7">
      <div
        v-for="row in fundraisingList"
        :key="row.title"
        class="mt-8 md:mt-10.5"
      >
        <IgniteHeading
          as="div"
          class="font-title text-4 font-semibold md:text-5"
        >
          {{ row.title }}
        </IgniteHeading>
        <div
          class="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:gap-7 lg:grid-cols-2"
        >
          <div
            v-for="(item, key) in row.items"
            :key="`fundraisers_${row.title}_${key}`"
            class="relative z-[1]"
          >
            <InvestCard :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
