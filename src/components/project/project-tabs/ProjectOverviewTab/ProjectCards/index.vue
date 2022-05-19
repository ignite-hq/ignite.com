<script lang="ts">
export default {
  name: 'ProjectCards'
}
</script>

<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useCampaignFundraisers from '~/composables/campaign/useCampaignFundraisers'
import useCampaignSummary from '~/composables/campaign/useCampaignSummary'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { amountOfDaysFromNow } from '~/utils/date'
import {
  getAuctionsByStatus,
  HumanizedAuctionStatus
} from '~/utils/fundraising'

import ProjectCardFundraiser, {
  ProjectCardAuctions,
  ProjectCardFundraiserState
} from './ProjectCardFundraiser.vue'
import ProjectCardValidator from './ProjectCardValidator.vue'

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

const { campaignSummary, isLoading: isLoadingCampaignSummaries } =
  useCampaignSummary(projectId)
const { fundraisers } = useCampaignFundraisers(projectId)

function sortByStartDate(auctions: FixedPriceAuction[]) {
  return auctions.sort((a, b) => {
    return (
      dayjs(a?.base_auction?.start_time).unix() -
      dayjs(b?.base_auction?.start_time).unix()
    )
  })
}

const auctions = computed<ProjectCardAuctions>(() => {
  const auctions = (fundraisers.value ?? []) as FixedPriceAuction[]
  const sortedAuctions = sortByStartDate(auctions)

  const currentAuctions = getAuctionsByStatus(
    HumanizedAuctionStatus.Current,
    sortedAuctions
  )
  const auctionsWithUpcomingStatus = getAuctionsByStatus(
    HumanizedAuctionStatus.Upcoming,
    sortedAuctions
  )

  const REGISTRATION_TERM = 7

  const openRegistrationAuctions = auctionsWithUpcomingStatus.filter(
    ({ base_auction }) =>
      amountOfDaysFromNow(base_auction?.start_time) <= REGISTRATION_TERM
  )
  const upcomingAuctions = auctionsWithUpcomingStatus.filter(
    ({ base_auction }) =>
      amountOfDaysFromNow(base_auction?.start_time) > REGISTRATION_TERM
  )

  return {
    all: sortedAuctions,
    current: currentAuctions,
    upcoming: upcomingAuctions,
    openRegistration: openRegistrationAuctions
  }
})

const coordinatorId = computed(() => {
  return campaignSummary.value?.campaign?.coordinatorID
})

const showValidatorCard = computed(() => {
  return Boolean(campaignSummary?.value?.rewards?.length)
})

const showFundraiserCard = computed(() => {
  return (
    Boolean(auctions.value.current.length) ||
    Boolean(auctions.value.upcoming.length) ||
    Boolean(auctions.value.openRegistration.length)
  )
})
</script>

<template>
  <div v-if="showValidatorCard" class="container">
    <div class="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-12 xl:grid-cols-2">
      <div
        v-if="showFundraiserCard && showValidatorCard"
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardFundraiser
          :auctions="auctions"
          :project-name="campaignSummary?.campaign?.campaignName"
          :coordinator-id="coordinatorId"
          :state="
            auctions.current.length > 0
              ? ProjectCardFundraiserState.Ongoing
              : ProjectCardFundraiserState.Upcoming
          "
        />
      </div>

      <div
        v-if="showValidatorCard && showFundraiserCard"
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardValidator
          :campaign-summary="campaignSummary"
          :loading="isLoadingCampaignSummaries"
        />
      </div>

      <div
        v-if="showFundraiserCard && !showValidatorCard"
        class="px-0 lg:col-span-12 xl:col-span-2"
      >
        <ProjectCardFundraiser
          :auctions="auctions"
          :project-name="campaignSummary?.campaign?.campaignName"
          :coordinator-id="coordinatorId"
          :state="
            auctions.current.length > 0
              ? ProjectCardFundraiserState.Ongoing
              : ProjectCardFundraiserState.Upcoming
          "
          is-wide
        />
      </div>
      <div
        v-if="showValidatorCard && !showFundraiserCard"
        class="px-0 lg:col-span-12 xl:col-span-2"
      >
        <ProjectCardValidator
          :campaign-summary="campaignSummary"
          :loading="isLoadingCampaignSummaries"
          :is-wide="true"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
