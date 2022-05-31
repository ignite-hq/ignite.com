<script lang="ts">
import BigNumber from 'bignumber.js'
import { V1Beta1Coin } from 'node_modules/tendermint-spn-ts-client/tendermint.fundraising/rest'
import { defineComponent, computed, toRefs } from 'vue'

export default defineComponent({
  name: 'ProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IconDots from '~/components/icons/IconDots.vue'
import IconStack from '~/components/icons/IconStack.vue'
import IconUser from '~/components/icons/IconUser.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useTotalSupply from '~/composables/fundraising/useTotalSupply'
import {
  getDenomName,
  getHumanizedAuctionStatus,
  HumanizedAuctionStatus,
  toCompactNumber
} from '~/utils/fundraising'
import { ProgressBarItem } from '~/utils/types'

interface Props {
  fundraiser: FixedPriceAuction
}

const props = defineProps<Props>()

const route = useRoute()
const projectId = route.params.projectId.toString() || '0'

const { totalSupply } = useTotalSupply()

const { base_auction, remaining_selling_coin } = toRefs(props.fundraiser)

const raised = computed<number>(() => {
  return (
    Number(base_auction.selling_coin?.amount ?? 0) -
    Number(remaining_selling_coin?.amount ?? 0)
  )
})

const currency = computed<string>(() => {
  return getDenomName(base_auction.selling_coin?.denom ?? '')
})

const tokenSupply = computed<number>(() => {
  const token = totalSupply.value?.supply?.find(
    (token: V1Beta1Coin) => token.denom === base_auction.selling_coin?.denom
  )
  return new BigNumber(token?.amount ?? '0').toNumber()
})

const relativeSupply = computed<number>(() => {
  return tokenSupply.value
    ? Math.round(
        (Number(base_auction.selling_coin?.amount ?? 0) / tokenSupply.value) *
          100
      )
    : 0
})

const progressBar = {
  items: [
    {
      value: (
        (raised.value / Number(base_auction.selling_coin?.amount ?? 0)) *
        100
      ).toString(),
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}
</script>

<template>
  <IgniteLink
    :to="`/projects/${projectId}/fundraisers/${base_auction.id}`"
    class="w-full"
  >
    <IgniteCard :shadow="true" class="w-full py-6 px-5 md:p-7.5">
      <IgniteProgressBar :items="progressBar.items" :label="false" size="xs" />
      <IgniteHeading
        as="div"
        class="mt-5 font-title text-4 font-semibold md:text-5"
      >
        <IgniteNumber :number="Number(raised)" />
        {{ currency }}
      </IgniteHeading>
      <IgniteHeading as="div" class="mt-3 text-3 text-muted">
        Raised of
        <strong>
          <IgniteNumber
            :number="Number(base_auction.selling_coin?.amount ?? 0)"
          />
          {{ currency }}
        </strong>
      </IgniteHeading>
      <div
        class="mt-7.5 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 xl:pt-7.5"
      >
        <div class="">
          <IgniteText as="div" class="text-2 text-muted"> Status </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconDots
              v-if="base_auction.status === 'AUCTION_STATUS_VESTING'"
              class="mr-3"
            />
            <IconDots
              v-if="base_auction.status === 'AUCTION_STATUS_STARTED'"
              class="mr-3"
            />
            <IconClock
              v-if="base_auction.status === 'AUCTION_STATUS_STANDBY'"
              class="mr-3"
            />
            <IconCheckMarkThin
              v-if="base_auction.status === 'AUCTION_STATUS_FINISHED'"
              class="mr-3"
            />
            <IconCanceled
              v-if="base_auction.status === 'AUCTION_STATUS_CANCELLED'"
              class="mr-3"
            />
            <IconCanceled
              v-if="base_auction.status === 'AUCTION_STATUS_UNSPECIFIED'"
              class="mr-3"
            />
            {{ getHumanizedAuctionStatus(base_auction.status) }}
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted"> Vouchers </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconStack class="mr-3" />
            {{ toCompactNumber.format(tokenSupply) }} ({{ relativeSupply }}%)
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted">
            {{
              getHumanizedAuctionStatus(base_auction.status) ===
              HumanizedAuctionStatus.Upcoming
                ? 'Registrants'
                : 'Participants'
            }}
          </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconUser class="mr-3" />
            <IgniteNumber
              :number="Number(base_auction.allowed_bidders?.length || 0)"
            />
          </IgniteHeading>
        </div>

        <div class="">
          <IgniteText as="div" class="text-2 text-muted">
            {{
              Date.now() < new Date(base_auction.end_times[0]).getTime()
                ? 'Ends'
                : 'Ended'
            }}
          </IgniteText>
          <IgniteHeading
            as="div"
            class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
          >
            <IconCalendar class="mr-3" />
            <span
              :class="
                base_auction.status === 'AUCTION_STATUS_CANCELLED' &&
                'text-inactive line-through'
              "
            >
              {{ new Date(base_auction.end_times[0]).toLocaleDateString() }}
            </span>
          </IgniteHeading>
        </div>
      </div>
    </IgniteCard>
  </IgniteLink>
</template>

<style scoped lang="postcss"></style>
