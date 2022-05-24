<script lang="ts">
export enum ProjectCardFundraiserState {
  Upcoming,
  Ongoing,
  RegistrationOpen,
  Ended
}

export interface ProjectCardAuctions {
  current: FixedPriceAuction[]
  upcoming: FixedPriceAuction[]
  openRegistration: FixedPriceAuction[]
  ended: FixedPriceAuction[]
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
import { useRoute } from 'vue-router'

import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { amountOfDaysFromNow, amountOfMillisecondsFromNow } from '~/utils/date'
import { getDenomName, getRegistrationStartDate } from '~/utils/fundraising'
import { ProgressBarItem } from '~/utils/types'

interface Props {
  isWide?: boolean
  projectName: string
  coordinatorId?: string
  auctions: ProjectCardAuctions
}

const props = withDefaults(defineProps<Props>(), {
  isWide: false,
  coordinatorId: '',
  projectName: ''
})

const countdown = ref<number>()

const route = useRoute()
const projectId = route.params.projectId.toString()

function displayTimeLeft(date?: string | Date) {
  if (!date) return ''

  const daysUntilAuction = amountOfDaysFromNow(date)

  if (daysUntilAuction > 7) {
    return dayjs(date).format('MMMM DD')
  }

  if (daysUntilAuction > 0) {
    return `${daysUntilAuction} day${daysUntilAuction > 1 ? 's' : ''}`
  }

  return dayjs(date).format('HH:MM:ss')
}

const state = computed<ProjectCardFundraiserState>(() => {
  const { current, upcoming, openRegistration, ended } = props.auctions

  if (current.length > 0) {
    return ProjectCardFundraiserState.Ongoing
  }

  if (openRegistration.length > 0) {
    return ProjectCardFundraiserState.RegistrationOpen
  }

  if (upcoming.length > 0) {
    return ProjectCardFundraiserState.Upcoming
  }

  if (ended.length > 0) {
    return ProjectCardFundraiserState.Ended
  }

  return ProjectCardFundraiserState.Upcoming
})

const isOngoing = computed(() => {
  return state.value === ProjectCardFundraiserState.Ongoing
})

const isUpcoming = computed(() => {
  return state.value === ProjectCardFundraiserState.Upcoming
})

const isRegistrationOpen = computed(() => {
  return state.value === ProjectCardFundraiserState.RegistrationOpen
})

const hasEnded = computed(() => {
  return state.value === ProjectCardFundraiserState.Ended
})

const focusedAuction = computed(() => {
  const { upcoming, openRegistration, current, ended } = props.auctions
  const [currentAuction] = current
  const [openRegistrationAuction] = openRegistration
  const [upcomingAuction] = upcoming
  const [endedAuction] = ended

  if (isOngoing.value) {
    return currentAuction
  }

  if (isRegistrationOpen.value) {
    return openRegistrationAuction
  }

  if (isUpcoming.value) {
    return upcomingAuction
  }

  if (hasEnded.value) {
    return endedAuction
  }

  return undefined
})

const raisedCoins = computed(() => {
  const totalSupply = new BigNumber(
    focusedAuction.value?.base_auction?.selling_coin?.amount ?? ''
  )
  const coinsLeft = new BigNumber(
    focusedAuction.value?.remaining_selling_coin?.amount ?? ''
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
    const registrationStartTime = getRegistrationStartDate(
      focusedAuction.value?.base_auction?.start_time ?? ''
    )
    return amountOfDaysFromNow(registrationStartTime) > 7
      ? 'Registration opens'
      : 'Registration begins in'
  }

  if (isRegistrationOpen.value) {
    return 'Registration ends in'
  }

  if (isOngoing.value) {
    return 'Sale ends in'
  }

  if (hasEnded.value) {
    return ''
  }

  return ''
})

const saleDescription = computed(() => {
  const startTime = focusedAuction.value?.base_auction?.start_time
  const registrationStartTime = getRegistrationStartDate(startTime ?? '')
  const endTime = focusedAuction.value?.base_auction?.end_times?.[0]

  let dateToDisplay = startTime

  if (isRegistrationOpen.value) dateToDisplay = startTime
  else if (isUpcoming.value) dateToDisplay = registrationStartTime
  else if (isOngoing.value) dateToDisplay = endTime

  if (hasEnded.value) {
    return raisedCoins.value.percentage === '100' ? 'Sold out' : 'Sale ended'
  }

  return displayTimeLeft(dateToDisplay)
})

watchEffect(() => {
  if (isUpcoming.value) {
    const registrationStartTime = getRegistrationStartDate(
      focusedAuction.value?.base_auction?.start_time ?? ''
    )

    if (amountOfDaysFromNow(registrationStartTime) === 0) {
      countdown.value = amountOfMillisecondsFromNow(registrationStartTime)
    }
  }

  if (isRegistrationOpen.value) {
    const startTime = focusedAuction.value?.base_auction?.start_time

    if (amountOfDaysFromNow(startTime) === 0) {
      countdown.value = amountOfMillisecondsFromNow(startTime)
    }
  }

  if (isOngoing.value) {
    const endTime = focusedAuction.value?.base_auction?.end_times?.[0]

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
          getDenomName(focusedAuction?.base_auction?.selling_coin?.denom ?? '')
        }}
      </IgniteHeading>
      <IgniteText as="div" class="mt-5 text-3 text-muted">
        raised of
        <IgniteNumber
          :number="focusedAuction?.remaining_selling_coin?.amount"
        />
        {{ getDenomName(focusedAuction?.remaining_selling_coin?.denom ?? '') }}
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
          Become eligible to participate in the fundraiser by staking IGNT
          tokens. The more IGNT you stake, the bigger the opportunity to
          participate.
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
          saleDescription
        }}</IgniteHeading>
      </div>
      <div class="mt-4" :class="!isWide ? ['sm:mt-0', 'sm:mr-6'] : 'sm:mt-6'">
        <IgniteLink
          :to="`/projects/${projectId}/fundraisers/${focusedAuction?.base_auction?.id}`"
        >
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
        </IgniteLink>
      </div>
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
