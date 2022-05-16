<script lang="ts">
export default {
  name: 'ProjectInvestFundraiserTab'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import useFundraiser from '~/composables/fundraising/useFundraiser'
import useAddress from '~/composables/wallet/useAddress'

import IgniteProjectInvestCancel from './IgniteProjectInvestCancel.vue'
import IgniteProjectInvestInvestors from './IgniteProjectInvestInvestors.vue'
import IgniteProjectInvestSingleCard from './IgniteProjectInvestSingleCard.vue'
import IgniteProjectInvestValidators from './IgniteProjectInvestValidators.vue'
import IgniteProjectInvestVesting from './IgniteProjectInvestVesting.vue'

const route = useRoute()
const fundraiserId = route.params.fundraiserId.toString() || '0'

// composables
const { fundraiser } = useFundraiser(fundraiserId)
const { address } = useAddress()

const allowCancel = computed(() => {
  return (
    address.value &&
    address.value === fundraiser?.value?.auction?.base_auction?.auctioneer &&
    fundraiser.value?.auction?.base_auction?.status === 'AUCTION_STATUS_STANDBY'
  )
})
</script>

<template>
  <div v-if="fundraiser">
    <IgniteProjectInvestCancel
      v-if="allowCancel"
      :fundraiser="fundraiser"
      class="mt-8 md:mt-10.5"
    />

    <div class="container mt-8 md:mt-10.5">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <IgniteProjectInvestSingleCard
          :auction="fundraiser.auction"
          class="lg:col-span-2"
        />
      </div>
    </div>
    <div class="container mt-8 md:mt-10.5">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <div class="mt-6 md:mt-8 lg:mt-0">
          <IgniteProjectInvest :fundraiser="fundraiser" />
        </div>
      </div>
    </div>

    <div class="container mt-8 md:mt-10.5">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7">
        <div class="lg:col-span-2">
          <IgniteProjectInvestValidators :is-wild="true" />
        </div>
      </div>
    </div>

    <!-- <div class="container mt-8 md:mt-10.5">
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-7">
        <IgniteProjectInvestValidators />
        <div class="">
          <IgniteCard class="px-5 py-7 text-center md:p-8">
            <IgniteHeading as="div" class="font-title text-4 md:text-5">
              Registered investors
            </IgniteHeading>
            <IgniteText
              as="div"
              class="mx-auto mt-5 max-w-[21.5rem] text-muted"
            >
              Don’t miss out. Join the other registered investors supporting
              this project.
            </IgniteText>
            <IgniteHeading
              as="div"
              class="mt-6 flex items-center justify-center font-title text-6 md:mt-8 md:text-8"
            >
              <IconUser class="mr-5 h-6 w-6 md:h-8 md:w-8" />
              <IgniteNumber number="3420" />
            </IgniteHeading>
          </IgniteCard>
        </div>
      </div>
    </div> -->

    <IgniteProjectInvestInvestors class="mt-8 md:mt-10.5" />
    <IgniteProjectInvestVesting
      :vesting-schedules="fundraiser.auction.base_auction.vesting_schedules"
      :curency="fundraiser.auction.base_auction.selling_coin.denom"
      :amount="fundraiser.auction.base_auction.selling_coin.amount"
      class="mt-8 md:mt-10.5"
    />
  </div>
</template>
