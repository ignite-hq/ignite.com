<script lang="ts">
export default {
  name: 'ProjectFundraisersTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import useFundraisersAll from '~/composables/fundraising/useFundraisersAll'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import {
  getHumanizedAuctionStatus,
  HumanizedAuctionStatus
} from '~/utils/fundraising'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import useTotalSupply from '~/composables/fundraising/useTotalSupply'

const { fundraisers } = useFundraisersAll()
const { totalSupply } = useTotalSupply()

interface Props {
  campaignSummary?: CampaignCampaignSummary
}

withDefaults(defineProps<Props>(), {
  campaignSummary: () => ({})
})

const statuses = computed(() => {
  let statuses = []
  const auctions = fundraisers?.value?.auctions ?? []
  const currentPresent = auctions.find(
    (auctionData: any) =>
      getHumanizedAuctionStatus(auctionData.base_auction.status) ===
      HumanizedAuctionStatus.Current
  )
  const upcomingPresent = auctions.find(
    (auctionData: any) =>
      getHumanizedAuctionStatus(auctionData.base_auction.status) ===
      HumanizedAuctionStatus.Upcoming
  )
  const previousPresent = auctions.find(
    (auctionData: any) =>
      getHumanizedAuctionStatus(auctionData.base_auction.status) ===
      HumanizedAuctionStatus.Previous
  )
  const otherPresent = auctions.find(
    (auctionData: any) =>
      getHumanizedAuctionStatus(auctionData.base_auction.status) ===
      HumanizedAuctionStatus.Other
  )
  if (currentPresent && upcomingPresent)
    statuses.push(HumanizedAuctionStatus.CurrentAndUpcoming)
  else if (currentPresent) statuses.push(HumanizedAuctionStatus.Current)
  else if (upcomingPresent) statuses.push(HumanizedAuctionStatus.Upcoming)
  if (previousPresent) statuses.push(HumanizedAuctionStatus.Previous)
  if (otherPresent) statuses.push(HumanizedAuctionStatus.Other)

  return statuses
})
</script>

<template>
  <div>
    <InvestTitle
      :project-name="campaignSummary?.campaign?.campaignName"
      class="mt-8 md:mt-10.5"
    />
    <InvestVoucherAllocation
      :fundraisers="fundraisers"
      :total-supply="totalSupply"
      class="mt-7 md:mt-9"
    />
    <InvestStart
      :project-name="campaignSummary?.campaign?.campaignName"
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
            v-for="(fundraiser, key) in fundraisers?.auctions?.filter(
              (fundraiser) =>
                status
                  .toString()
                  .toLowerCase()
                  .includes(formatAuctionStatus(fundraiser.status))
            )"
            :key="`fundraisers_${status}_${key}`"
            class="relative z-[1]"
          >
            <InvestCard :fundraiser="fundraiser" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
