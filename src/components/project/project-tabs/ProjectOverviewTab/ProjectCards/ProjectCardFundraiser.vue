<script lang="ts">
export enum ProjectCardFundraiserState {
  Upcoming,
  Ongoing,
  RegistrationOpen
}

export default {
  name: 'ProjectCardFundraiser'
}
</script>

<script setup lang="ts">
import Countdown from '@chenfengyuan/vue-countdown'
import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { computed, ref, watchEffect } from 'vue'

import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { amountOfDaysFromNow, amountOfMillisecondsFromNow } from '~/utils/date'
import { getDenomName } from '~/utils/fundraising'
import { ProgressBarItem } from '~/utils/types'

interface ProjectCardAuctions {
  current: FixedPriceAuction[]
  upcoming: FixedPriceAuction[]
}

interface Props {
  isWide?: boolean
  state?: ProjectCardFundraiserState
  projectName: string
  coordinatorId?: string
  auctions: ProjectCardAuctions
}

const props = withDefaults(defineProps<Props>(), {
  isWide: false,
  coordinatorId: '',
  state: ProjectCardFundraiserState.Upcoming,
  projectName: ''
})

const countdown = ref<number>()

function sortByStartDate(auctions: FixedPriceAuction[]) {
  return auctions.sort((a, b) => {
    return (
      dayjs(a?.base_auction?.start_time).unix() -
      dayjs(b?.base_auction?.start_time).unix()
    )
  })
}

function displayTimeLeft(date?: string | Date) {
  if (!date) return ''

  const daysUntilAuction = amountOfDaysFromNow(date)

  if (daysUntilAuction > 7) {
    return dayjs(date).format('MMMM DD')
  }

  if (daysUntilAuction > 0) {
    return `${dayjs(date).format('DD')} days`
  }

  return dayjs(date).format('HH:MM:ss')
}

const isOngoing = computed(() => {
  return props.state === ProjectCardFundraiserState.Ongoing
})

const isUpcoming = computed(() => {
  return props.state === ProjectCardFundraiserState.Upcoming
})

const isRegistrationOpen = computed(() => {
  return props.state === ProjectCardFundraiserState.RegistrationOpen
})

const currentAuction = computed(() => {
  const { current } = props.auctions
  const [currentAuction] = sortByStartDate(current)

  return currentAuction
})

const upcomingAuction = computed(() => {
  const { upcoming } = props.auctions
  const [upcomingAuction] = sortByStartDate(upcoming)

  return upcomingAuction
})

const raisedCoins = computed(() => {
  const totalSupply = new BigNumber(
    currentAuction.value.base_auction?.selling_coin?.amount ?? ''
  )
  const coinsLeft = new BigNumber(
    currentAuction.value.remaining_selling_coin?.amount ?? ''
  )
  const raisedAmount = totalSupply.minus(coinsLeft).abs()

  return {
    amount: raisedAmount.toString(),
    percentage: raisedAmount.dividedBy(totalSupply).times(100).toString()
  }
})

const remainingCoinProgressBar = computed<ProgressBarItem[]>(() => {
  return [
    {
      value: raisedCoins.value.percentage,
      bgColor: 'bg-primary'
    }
  ]
})

const timeDescription = computed(() => {
  if (isUpcoming.value) {
    const { upcoming } = props.auctions
    const [upcomingAuction] = sortByStartDate(upcoming)

    if (!upcomingAuction) {
      return ''
    }

    return amountOfDaysFromNow(upcomingAuction?.base_auction?.start_time) > 7
      ? 'Registration opens'
      : 'Registration begins in'
  }

  if (isRegistrationOpen.value) {
    // TODO: Make sure we are using the correct auction
    const { current } = props.auctions
    const [currentAuction] = sortByStartDate(current)

    if (!currentAuction) {
      return ''
    }

    // TODO: Check if we should use the end date or the start date
    return amountOfDaysFromNow(currentAuction?.base_auction?.start_time) > 7
      ? 'Registration ends'
      : 'Registration ends in'
  }

  if (isOngoing.value) {
    return 'Sale ends in'
  }

  return ''
})

const timeLeft = computed(() => {
  const auction = isUpcoming.value
    ? upcomingAuction.value
    : currentAuction.value
  const startTime = auction.base_auction?.start_time
  const endTime = auction?.base_auction?.end_times?.[0]

  return displayTimeLeft(isUpcoming.value ? startTime : endTime)
})

watchEffect(() => {
  if (isUpcoming.value) {
    const startTime = upcomingAuction.value?.base_auction?.start_time

    if (amountOfDaysFromNow(startTime) === 0) {
      countdown.value = amountOfMillisecondsFromNow(startTime)
    }
  }

  if (isOngoing.value) {
    const endTime = currentAuction.value?.base_auction?.end_times?.[0]

    if (amountOfDaysFromNow(endTime) === 0) {
      countdown.value = amountOfMillisecondsFromNow(endTime)
    }
  }
})
</script>

<template>
  <IgniteCard
    :shadow="true"
    class="flex flex-col justify-between gap-9 px-5 pt-8 pb-7.5 sm:px-7 md:px-8 md:pt-9"
    :class="isWide && 'sm:flex-row'"
  >
    <div v-if="isOngoing" class="w-full">
      <IgniteProgressBar :items="remainingCoinProgressBar" :label="false" />
      <IgniteHeading
        as="div"
        class="mt-6 font-title text-5 font-semibold md:text-7"
      >
        <IgniteNumber :number="raisedCoins.amount" />
        {{
          getDenomName(currentAuction.base_auction?.selling_coin?.denom ?? '')
        }}
      </IgniteHeading>
      <IgniteText as="div" class="mt-5 text-3 text-muted">
        raised of
        <IgniteNumber :number="currentAuction.remaining_selling_coin?.amount" />
        {{ getDenomName(currentAuction.remaining_selling_coin?.denom ?? '') }}
      </IgniteText>
    </div>

    <div v-else-if="isUpcoming" class="w-full" :class="isWide && 'xl:flex'">
      <IgniteHeading
        as="div"
        class="mr-8 max-w-sm font-title text-5 font-semibold md:text-7"
      >
        Upcoming fundraiser
      </IgniteHeading>
      <div class="mt-6 w-full" :class="isWide && 'xl:mt-2'">
        <IgniteText
          as="div"
          class="text-3 text-muted"
          :class="isWide && 'max-w-md'"
        >
          Register to participate in the upcoming {{ projectName }} fundraiser.
          The more IGNT you stake, the bigger your investment opportunity.
        </IgniteText>
      </div>
    </div>

    <div
      v-else-if="isRegistrationOpen"
      class="w-full"
      :class="isWide && 'xl:flex'"
    >
      <IgniteHeading
        as="div"
        class="mr-8 max-w-sm font-title text-5 font-semibold md:text-7"
      >
        Registration now open
      </IgniteHeading>
      <div class="mt-6 w-full" :class="isWide && 'xl:mt-2'">
        <IgniteText
          as="div"
          class="text-3 text-muted"
          :class="isWide && 'max-w-md'"
        >
          Register to participate in the upcoming {{ projectName }} fundraiser.
          The more IGNT you stake, the bigger your investment opportunity.
        </IgniteText>
      </div>
    </div>

    <div
      class="shrink-0 sm:flex"
      :class="
        !isWide ? ['mt-8'] : ['flex-col', 'justify-end', 'xl:justify-start']
      "
    >
      <div
        class="flex flex-col justify-center"
        :class="!isWide && ['sm:order-last', 'sm:h-[100%]']"
      >
        <IgniteText as="div" class="mb-2 text-2 text-muted">{{
          timeDescription
        }}</IgniteText>

        <IgniteHeading v-if="Boolean(countdown)" class="font-title text-4">
          <Countdown v-slot="{ hours, minutes, seconds }" :time="countdown">
            {{ hours.toString().padStart(2, '0') }}:{{
              minutes.toString().padStart(2, '0')
            }}:{{ seconds.toString().padStart(2, '0') }}
          </Countdown>
        </IgniteHeading>

        <IgniteHeading v-else as="p" class="font-title text-4">{{
          timeLeft
        }}</IgniteHeading>
      </div>
      <div class="mt-4" :class="!isWide ? ['sm:mt-0', 'sm:mr-6'] : 'sm:mt-6'">
        <IgniteButton
          variant="primary"
          color="primary"
          class="w-full sm:w-auto"
          >{{
            isUpcoming || isRegistrationOpen
              ? 'View details'
              : 'View fundraiser'
          }}</IgniteButton
        >
      </div>
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
