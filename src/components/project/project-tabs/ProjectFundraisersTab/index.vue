<script lang="ts">
export default {
  name: 'ProjectFundraisersTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import {
  getHumanizedAuctionStatus,
  HumanizedAuctionStatus
} from '~/utils/fundraising'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import { useRoute } from 'vue-router'
import useCoordinator from '~/composables/profile/useCoordinator'
import useCampaignFundraisers from '~/composables/fundraising/useCampaignFundraisers'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'

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
const { isSameAddressAsLoggedIn: coordinatorView } =
  useCoordinator(coordinatorId)

const statuses = computed(() => {
  const statuses = []
  const auctions = fundraisers?.value ?? []
  const currentPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      getHumanizedAuctionStatus(auction.base_auction.status) ===
      HumanizedAuctionStatus.Current
  )
  const upcomingPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      getHumanizedAuctionStatus(auction.base_auction.status) ===
      HumanizedAuctionStatus.Upcoming
  )
  const previousPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      getHumanizedAuctionStatus(auction.base_auction.status) ===
      HumanizedAuctionStatus.Previous
  )
  const otherPresent = auctions.find(
    ({ auction }: FixedPriceAuction) =>
      getHumanizedAuctionStatus(auction.base_auction.status) ===
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
      :allow-create="coordinatorView"
      class="mt-8 md:mt-10.5"
    />
    <InvestVoucherAllocation :fundraisers="fundraisers" class="mt-7 md:mt-9" />
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
            v-for="(fundraiser, key) in fundraisers?.filter((fundraiser) =>
              status
                .toString()
                .toLowerCase()
                .includes(
                  getHumanizedAuctionStatus(
                    fundraiser.auction.base_auction.status
                  ).toLowerCase()
                )
            )"
            :key="`fundraisers_${status}_${key}`"
            class="relative z-[1]"
          >
            <InvestCard :fundraiser="fundraiser.auction" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!coordinatorView && fundraisers?.length === 0"
      class="text-center"
    >
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
