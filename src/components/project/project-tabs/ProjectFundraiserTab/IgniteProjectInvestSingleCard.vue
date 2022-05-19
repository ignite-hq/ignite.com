<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'IgniteProjectInvestTitle'
}
</script>

<script lang="ts" setup>
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteRoadmap from '~/components/common/IgniteRoadmap.vue'
import IgniteScrollableSection from '~/components/common/IgniteScrollableSection.vue'
import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IconDots from '~/components/icons/IconDots.vue'
import IconGuarantee from '~/components/icons/IconGuarantee.vue'
import IconStack from '~/components/icons/IconStack.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useTotalSupply from '~/composables/fundraising/useTotalSupply'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import { getDenomName, toCompactNumber } from '~/utils/fundraising'
import { AuctionStatusLabels, ProgressBarItem } from '~/utils/types'
import { ProjectMilestone, RoadmapStatus } from '../ProjectOverviewTab/types'
import dayjs from 'dayjs'

interface Props {
  auction: any
  type: string
}

const props = withDefaults(defineProps<Props>(), {
  auction: () => ({}),
  size: ''
})

const { totalSupply } = useTotalSupply()
const supply = computed(() => {
  if (!totalSupply.value?.supply) return 0
  return totalSupply.value?.supply.find(
    (token) => token.denom === props.auction?.base_auction?.selling_coin?.denom
  ).amount
})

const progressBar = computed(() => {
  const items: ProgressBarItem[] = [] as ProgressBarItem[]
  items.push({
    value:
      (
        Number(props.auction?.base_auction.selling_coin.amount) -
        Number(props.auction?.remaining_selling_coin.amount)
      ).toString() ?? '0',
    bgColor: 'bg-primary'
  } as ProgressBarItem)
  items.push({
    value: props.auction?.remaining_selling_coin.amount ?? '0',
    bgColor: ''
  } as ProgressBarItem)
  return { items }
})

function getMilestoneDate(unix: number) {
  if (!unix) return ''
  return dayjs.unix(unix).format('MMM D, YYYY [at] h:mm A [GMT]Z')
}

const roadmapItems = computed<ProjectMilestone[]>(() => {
  const items: ProjectMilestone[] = [] as ProjectMilestone[]
  const TODAY = new Date().getTime()
  /*
  Fundraiser published
  Registration begins
  Fundraiser begins
  Fundraiser ends
  Fundraiser cancelled
  */
  items.push({
    status: RoadmapStatus.Completed,
    title: 'Fundraiser published',
    date: getMilestoneDate(props.auction?.base_auction?.start_time ?? '')
  })
  if (props.auction?.base_auction?.status === 'AUCTION_STATUS_CANCELLED') {
    items.push({
      status: RoadmapStatus.Completed,
      title: 'Fundraiser cancelled',
      date: getMilestoneDate(props.auction?.base_auction?.start_time ?? '')
    })
  } else {
    items.push({
      status:
        Number(props.auction?.base_auction?.end_time) > TODAY
          ? RoadmapStatus.Completed
          : RoadmapStatus.Expected,
      title: 'Fundraiser ends',
      date: getMilestoneDate(props.auction?.base_auction?.end_time ?? '')
    })
  }
  return items
})

const statusDetailed = computed(() => {
  console.log(props.auction)
  return props.auction?.base_auction.status || ''
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
</script>

<template>
  <div
    class="w-full"
    :class="[
      size !== 'sm' && 'border-b border-border pb-8',
      size === 'sm' && 'mx-auto max-w-[28.5rem]'
    ]"
  >
    <div
      :class="[
        size !== 'sm' &&
          'grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-12'
      ]"
    >
      <div
        class="md:col-span-8 md:text-center lg:col-span-4 lg:text-left xl:col-span-4"
      >
        <IgniteProgressBar :items="progressBar.items" :label="false" />
        <IgniteHeading
          as="div"
          class="mt-5 font-title text-4 font-semibold md:text-5"
        >
          <IgniteNumber
            :number="
              Number(auction.base_auction.selling_coin.amount) -
              Number(auction.remaining_selling_coin.amount)
            "
          />
          {{ getDenomName(auction.base_auction.selling_coin.denom) }}
        </IgniteHeading>
        <IgniteHeading as="div" class="mt-3 text-3 text-muted">
          Raised of
          <strong>
            <IgniteNumber :number="auction.base_auction.selling_coin.amount" />
            {{ getDenomName(auction.base_auction.selling_coin.denom) }}
          </strong>
        </IgniteHeading>
      </div>
      <div
        class="md:col-span-8 lg:col-span-8 xl:col-span-8"
        :class="[size === 'sm' && 'mt-7.5 border-t border-border pt-5']"
      >
        <div
          class="grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-7.5 md:text-center lg:text-left"
          :class="[
            size !== 'sm' && 'lg:justify-end',
            size === 'sm' && 'lg:justify-start'
          ]"
        >
          <div
            v-if="size !== 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
            <IgniteText as="div" class="text-2 text-muted">Type</IgniteText>
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
            >
              <IconDots
                v-if="statusDetailed === 'AUCTION_STATUS_VESTING'"
                class="mr-3"
              />
              <IconDots
                v-if="statusDetailed === 'AUCTION_STATUS_STARTED'"
                class="mr-3"
              />
              <IconClock
                v-if="statusDetailed === 'AUCTION_STATUS_STANDBY'"
                class="mr-3"
              />
              <IconCheckMarkThin
                v-if="statusDetailed === 'AUCTION_STATUS_FINISHED'"
                class="mr-3"
              />
              <IconCanceled
                v-if="statusDetailed === 'AUCTION_STATUS_CANCELLED'"
                class="mr-3"
              />
              <IconCanceled
                v-if="statusDetailed === 'AUCTION_STATUS_UNSPECIFIED'"
                class="mr-3"
              />
              {{ formatAuctionStatus(statusDetailed) }}
            </IgniteHeading>
          </div>

          <div class="col-span-1 md:col-auto md:w-[auto!important]">
            <IgniteText as="div" class="text-2 text-muted">Vouchers</IgniteText>
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
            >
              <IconStack class="mr-3" />
              {{
                toCompactNumber.format(
                  auction.base_auction.selling_coin?.amount ?? 0
                )
              }}
              <span class="text-muted"
                >&nbsp;({{
                  Math.round(
                    (Number(auction.base_auction.selling_coin?.amount ?? 0) /
                      supply) *
                      100
                  )
                }}%)</span
              >
            </IgniteHeading>
          </div>

          <div
            v-if="size !== 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
            <IgniteText as="div" class="text-2 text-muted">Price</IgniteText>
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
            >
              <IgniteDenom
                modifier="avatar"
                :denom="getDenomName(auction.base_auction.paying_coin_denom)"
                :title="getDenomName(auction.base_auction.paying_coin_denom)"
                size="small"
                class="mr-3"
              />
              {{ Number(auction.base_auction.start_price) }}
              {{ getDenomName(auction.base_auction.paying_coin_denom) }}
              <span class="ml-1 inline-block text-muted">ea.</span>
            </IgniteHeading>
          </div>

          <div
            v-if="size === 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
            <IgniteText as="div" class="text-2 text-muted"
              >Sale begins</IgniteText
            >
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 md:mt-3 md:text-3"
            >
              <IconCalendar class="mr-3" />
              <div>
                <span class="block sm:inline">April 1, 2022</span>
                <span class="text-muted"> at </span>
                <span class="">9 AM UTC</span>
              </div>
            </IgniteHeading>
          </div>
        </div>
        <div v-if="roadmapItems" class="relative mt-7 lg:flex lg:justify-end">
          <IgniteScrollableSection>
            <IgniteRoadmap
              :items="roadmapItems"
              align="right"
              type="fundraiser"
            />
          </IgniteScrollableSection>
        </div>
      </div>

      <div v-if="size === 'sm'" class="mt-6 md:mt-8.5">
        <IgniteLink
          to="/"
          class="flex w-full items-center justify-between rounded-sm border border-border p-5 text-primary hover:text-title"
        >
          <div class="flex items-center">
            <IconGuarantee class="mr-5" />
            <IgniteText as="span" class="font-normal text-title">
              Your investment is protected by Ignite.
            </IgniteText>
          </div>
          <IgniteText as="span" class="px-1 font-medium">
            Learn more
          </IgniteText>
        </IgniteLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
