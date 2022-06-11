<script lang="ts">
export default {
  name: 'ProjectFundraiserCreate'
}

enum UIStates {
  Fresh,
  Creating,
  Created,
  Error
}

export { UIStates }
</script>

<script lang="ts" setup>
import { Coin } from '@cosmjs/amino'
import { DeliverTxResponse } from '@cosmjs/stargate'
import BigNumber from 'bignumber.js'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash'
import type { MsgCreateFixedPriceAuction } from 'tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/tx'
import { useSpn } from 'tendermint-spn-vue-client'
import { computed, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

import IgniteBreadcrumbs from '~/components/common/IgniteBreadcrumbs.vue'
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import FundraiserCreateModal from '~/components/invest/FundraiserCreateModal.vue'
import FundraiserInfoCard from '~/components/invest/FundraiserInfoCard.vue'
import FundraiserInputRow from '~/components/invest/FundraiserInputRow.vue'
import FundraiserInputSection from '~/components/invest/FundraiserInputSection.vue'
import FundraiserSection from '~/components/invest/FundraiserSection.vue'
import FundraiserSummary from '~/components/invest/FundraiserSummary.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteFeedback from '~/components/ui/IgniteFeedback.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteInput from '~/components/ui/IgniteInput.vue'
import IgniteInputDate from '~/components/ui/IgniteInputDate.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useTotalSupply from '~/composables/fundraising/useTotalSupply'
import useBalances from '~/composables/wallet/useBalances'
import { getDenomName } from '~/utils/fundraising'
import { percentageToCosmosDecimal } from '~/utils/number'

// types
type FixedPriceAuction = MsgCreateFixedPriceAuction

// utils
function dateAsUTC(date: Date): Date {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      0,
      0
    )
  )
}
const TODAY = new Date()
function getWeeksLater(date: Date, amountOfWeeks = 1): Date {
  return dayjs(date).add(amountOfWeeks, 'week').toDate()
}
function coinToSelectOption(c: Coin): { label: string; value: string } {
  return { label: c.denom.toUpperCase(), value: c.denom }
}

// spn
const { spn } = useSpn()

// composables
const router = useRouter()
const {
  balances,
  isFetching: isFetchingBalances,
  isFetched: isFetchedBalances
} = useBalances(spn.signer.value.addr)

const {
  totalSupply,
  isFetching: isFetchingTotalSupply,
  isFetched: isFetchedTotalSupply
} = useTotalSupply()

const breadcrumbsLinks = computed(() => {
  return [
    {
      link: `/`, // ToDo: update link
      title: 'Project Name'
    },
    {
      link: `/create-fundraiser`,
      title: 'Create fundraiser'
    }
  ]
})

// state
interface State {
  currentUIState: UIStates
  auction: FixedPriceAuction
  feeAmount?: Coin
  errorMsg?: string
}

const initialSellingCoin =
  isFetchedBalances.value && balances.value && balances.value.length > 0
    ? {
        amount: '0',
        denom: balances.value[0].denom as string
      }
    : undefined

const filteredInitalTotalSupply: Coin[] = isFetchedTotalSupply.value
  ? (totalSupply.value?.supply?.filter(
      (i) => i.denom !== initialSellingCoin?.denom
    ) as Coin[])
  : []

const initialPayingDenom =
  isFetchedTotalSupply.value && filteredInitalTotalSupply.length > 0
    ? filteredInitalTotalSupply[0].denom
    : ''

const initialState: State = {
  currentUIState: UIStates.Fresh,
  auction: {
    auctioneer: '',
    start_price: '1',
    start_time: TODAY,
    end_time: getWeeksLater(TODAY, 1),
    paying_coin_denom: initialPayingDenom,
    selling_coin: initialSellingCoin,
    vesting_schedules: []
  }
}
const state = reactive(initialState)

// lifecycles
onMounted(() => {
  // if (!spn.signer.value.addr) {
  //   router.push(`sign-in`)
  // }
})

// computed
const filterdTotalSupplyCoins = computed<Coin[]>(() => {
  const filtered = totalSupply.value?.supply?.filter(
    (i) => i.denom !== state.auction.selling_coin?.denom
  ) as Coin[]

  return filtered ?? []
})
const amountForSale = computed<number>(() =>
  new BigNumber(state.auction.selling_coin?.amount ?? '0').toNumber()
)
const amountForSaleOverTotal = computed<string>(() =>
  new BigNumber(amountForSale.value)
    .dividedBy(voucherTotalSupply.value)
    .multipliedBy(100)
    .decimalPlaces(5)
    .toString()
)
const totalSaleValue = computed<number>(
  () =>
    new BigNumber(state.auction.selling_coin?.amount ?? '0').toNumber() *
    new BigNumber(state.auction.start_price ?? '0').toNumber()
)
const showModal = computed<boolean>(() =>
  [UIStates.Creating, UIStates.Created, UIStates.Error].includes(
    state.currentUIState
  )
)
const nextMinDateForSchedule = computed<Date>(() => {
  const penultimateScheduleDate: number =
    state.auction.vesting_schedules.at(-2)?.release_time?.getTime() ?? 0

  const auctionEndDate: number = state.auction.end_time?.getTime() ?? 0

  const today = new Date().getTime()

  return new Date(Math.max(penultimateScheduleDate, auctionEndDate, today))
})
const allVestingWeightsGreaterThanZero = computed<boolean>(() => {
  return state.auction.vesting_schedules.every((schedule) => {
    return new BigNumber(schedule.weight).isGreaterThan(0)
  })
})
const isVestingTotalSale = computed<boolean>(() => {
  if (state.auction.vesting_schedules.length === 0) {
    return true
  }

  const totalWeight: number = new BigNumber(
    state.auction.vesting_schedules
      .map((i) => new BigNumber(i.weight).toNumber())
      .reduce((acc, cur) => new BigNumber(acc).plus(cur).toNumber(), 0)
  ).toNumber()

  return totalWeight === 100
})
const isEndAfterStart = computed<boolean>(() => {
  const auction = state.auction

  const startAsMilli = (auction.start_time as Date).getTime()
  const endAsMilli = (auction.end_time as Date).getTime()

  return endAsMilli > startAsMilli
})
const isReleaseTimeAfterEnd = computed<boolean>(() => {
  const auction = state.auction
  const endAsMilli = (auction.end_time as Date).getTime()

  return auction.vesting_schedules.every((schedule) => {
    const scheduleAsMilli = (schedule.release_time as Date).getTime()

    return scheduleAsMilli > endAsMilli
  })
})
const isSellingDenomSameAsPayingDenom = computed<boolean>(() => {
  return (
    state.auction.selling_coin?.denom.toUpperCase() ===
    state.auction.paying_coin_denom.toUpperCase()
  )
})
const balanceFromSellingCoin = computed<number>(() => {
  const sellingDenom = state.auction.selling_coin?.denom

  const balance = balances.value?.find((i) => i.denom === sellingDenom) as Coin

  return balance ? new BigNumber(balance.amount).toNumber() : 0
})
const voucherTotalSupply = computed<number>(() => {
  const totalSupplyAsString = balanceFromSellingCoin.value

  return new BigNumber(totalSupplyAsString ?? '0').toNumber()
})
const isSellingAmountGreaterThanBalance = computed<boolean>(() => {
  return new BigNumber(
    state.auction.selling_coin?.amount as string
  ).isGreaterThan(balanceFromSellingCoin.value)
})
const isSellingAmountGreaterThan33Pct = computed<boolean>(() =>
  new BigNumber(amountForSaleOverTotal.value).isGreaterThan(33)
)
const isSellingAmountGreaterThanZero = computed<boolean>(() =>
  new BigNumber(state.auction.selling_coin?.amount as string).isGreaterThan(0)
)
const isVoucherPriceGreaterThanZero = computed<boolean>(() =>
  new BigNumber(state.auction.start_price).isGreaterThan(0)
)
const hasAnyBalance = computed<boolean>(
  () =>
    (isFetchedBalances.value && balances.value && balances.value.length > 0) ||
    false
)
const isLoadingCriticalData = computed<boolean>(
  () => isFetchingBalances.value || isFetchingTotalSupply.value
)
const ableToPublish = computed<boolean>(
  () =>
    !isLoadingCriticalData.value &&
    isEndAfterStart.value &&
    isReleaseTimeAfterEnd.value &&
    isVestingTotalSale.value &&
    allVestingWeightsGreaterThanZero.value &&
    !isSellingDenomSameAsPayingDenom.value &&
    !isSellingAmountGreaterThanBalance.value &&
    isSellingAmountGreaterThanZero.value &&
    isVoucherPriceGreaterThanZero.value
)

// handlers
function handleAmountInput(evt: Event) {
  if (!state.auction.selling_coin) return

  const inputEl = evt.target as HTMLInputElement
  const raw = inputEl.value
  const numbersOnly = raw.replace(/\D/g, '')

  const formatted =
    numbersOnly.length > 0 ? new BigNumber(numbersOnly).toString() : '0'

  inputEl.value = formatted
  state.auction.selling_coin.amount = formatted
}

function handlePricePerVoucher(evt: Event) {
  const inputEl = evt.target as HTMLInputElement
  const raw = inputEl.value
  const numbersOnly = raw.replace(/\D/g, '')

  const formatted =
    numbersOnly.length > 0 ? new BigNumber(numbersOnly).toString() : '0'

  inputEl.value = formatted
  state.auction.start_price = formatted
}
function handleSellingDenomChange(value: string) {
  state.auction.selling_coin = balances.value?.find(
    (i) => i.denom === value
  ) as Coin
}
function handlePayingDenomChange(value: string) {
  state.auction.paying_coin_denom = (
    totalSupply.value?.supply?.find((i) => i.denom === value) as Coin
  ).denom
}
function handleStartDateInput(date: Date) {
  state.auction.start_time = date
}
function handleEndDateInput(date: Date) {
  state.auction.end_time = date
}
function handleDistributionDateInput(date: Date, index: number) {
  state.auction.vesting_schedules[index].release_time = date
}
function handleDistributionWeightInput(evt: Event, index: number) {
  const inputEl = evt.target as HTMLInputElement
  const raw = inputEl.value
  const numbersOnly = raw.replace(/\D/g, '')

  const formatted =
    numbersOnly.length > 0 ? new BigNumber(numbersOnly).toString() : '0'

  inputEl.value = formatted

  state.auction.vesting_schedules[index].weight = formatted
}
function handleAddDistributionClick() {
  const lastSchedule = state.auction.vesting_schedules.at(-1)

  const newSchedules = [
    ...state.auction.vesting_schedules,
    {
      release_time: getWeeksLater(
        lastSchedule
          ? (lastSchedule?.release_time as Date)
          : (state.auction.end_time as Date),
        1
      ),
      weight: '0'
    }
  ]

  state.auction.vesting_schedules = newSchedules
}
function handleDeleteDistributionClick(index: number) {
  state.auction.vesting_schedules = state.auction.vesting_schedules.filter(
    (_, i) => i !== index
  )
}

function handleModalAck() {
  router.push('/')
}

// methods
function normalizeAuction(
  auction: FixedPriceAuction
): MsgCreateFixedPriceAuction {
  const normalized: MsgCreateFixedPriceAuction = cloneDeep(auction)

  normalized.vesting_schedules.forEach((schedule) => {
    schedule.weight = percentageToCosmosDecimal(schedule.weight)
    schedule.release_time = dateAsUTC(schedule.release_time as Date)
  })

  normalized.start_time = dateAsUTC(auction.start_time as Date)
  normalized.end_time = dateAsUTC(auction.end_time as Date)

  normalized.auctioneer = spn.signer.value.addr

  return normalized
}

async function publish() {
  const payload = normalizeAuction(state.auction)
  let response: DeliverTxResponse

  if (!ableToPublish.value) {
    throw new Error('Not able to publish: ' + state.auction)
  }

  try {
    const msg = spn.tendermintFundraising.value.msgCreateFixedPriceAuction({
      value: payload
    })

    state.currentUIState = UIStates.Creating

    response = await spn.signer.value.client.signAndBroadcast(
      spn.signer.value.addr,
      [msg],
      'auto'
    )

    if (response.code) {
      throw new Error(`Errored: ${response.code}`)
    }

    state.errorMsg = ''
    state.currentUIState = UIStates.Created
  } catch (err) {
    console.error(err)
    state.errorMsg = `${err}`
    state.currentUIState = UIStates.Error
  }
}

function cancel() {
  router.push('/')
}
</script>

<template>
  <div>
    <div class="container">
      <!-- Modal -->
      <FundraiserCreateModal
        :visible="showModal"
        :current-ui-state="state.currentUIState"
        :error-msg="state.errorMsg"
        @ack="handleModalAck"
      />
      <!-- Breadcrumbs -->
      <div class="py-7.5">
        <IgniteBreadcrumbs :links="breadcrumbsLinks" />
      </div>
      <!-- Header -->
      <header class="mt-6 pb-5 md:mt-8">
        <IgniteHeading
          class="text-left font-title text-5 font-semibold md:text-7"
        >
          Create fundraiser
        </IgniteHeading>
        <IgniteText class="mt-5 max-w-lg text-3 text-muted">
          Create a fundraiser for your project. Once a fundraiser has been
          published, it cannot be edited. A fundraiser may be cancelled at any
          time prior to the start date and time of the fundraiser.
        </IgniteText>
      </header>
      <!-- Vouchers offered -->
      <FundraiserSection>
        <IgniteHeading
          class="text-left font-title text-4 font-semibold md:col-span-7 lg:col-span-8"
        >
          Vouchers offered
        </IgniteHeading>
        <FundraiserInfoCard>
          <IgniteHeading class="text-2 font-semibold md:text-3">
            Need help determining how many?
          </IgniteHeading>
          <IgniteText class="mt-4 text-2 font-normal text-muted md:text-3">
            <p>
              Projects typically reserve 2-3% of their total voucher supply for
              fundraising efforts.
            </p>
            <p class="mt-4">
              Accepting a stablecoin such as UST is a popular way to reduce
              exposure to price volatility over the course of vesting.
            </p>
          </IgniteText>
          <IgniteLink
            class="mt-4 text-2 text-primary hover:text-title md:text-3"
            to="/"
          >
            Learn about tokenomics
          </IgniteLink>
        </FundraiserInfoCard>
        <FundraiserInputSection>
          <!-- Selling coin -->
          <FundraiserInputRow>
            <div>
              <IgniteText
                class="text-2 font-medium text-gray-0 text-opacity-60"
              >
                Total quantity for sale
              </IgniteText>
            </div>

            <div v-if="hasAnyBalance" class="mt-3 flex items-center">
              <div class="flex max-w-[14.5rem]">
                <!-- Skeleton loading balances -->
                <div
                  v-if="isFetchingBalances"
                  class="w-1/2 rounded-xs rounded-r-none border border-r-0 border-border p-2"
                >
                  <IgniteLoader class="h-full w-full rounded-xs" />
                </div>
                <!-- Input -->
                <div v-else class="flex w-1/2">
                  <IgniteSelect
                    :model-value="
                      coinToSelectOption({
                        amount: '',
                        denom: state.auction.selling_coin?.denom as string
                      })
                    "
                    :items="(balances as Coin[]).map(i => coinToSelectOption(i as Coin))"
                    variants="rounded-r-none"
                    class="w-full"
                    :is-mobile-native="false"
                    @update:model-value="handleSellingDenomChange"
                  >
                    <template
                      v-for="i in (balances as Coin[])"
                      :key="i.denom"
                      #[i.denom]
                    >
                      <IgniteDenom
                        v-if="i.denom"
                        modifier="avatar"
                        :denom="i.denom"
                        :title="i.denom"
                        size="small"
                        class="mr-3"
                      />
                      {{ i.denom?.toUpperCase() }}
                    </template>
                  </IgniteSelect>
                </div>
                <div class="flex w-1/2">
                  <IgniteInput
                    :value="(state.auction.selling_coin?.amount as string)"
                    variants="text-center border border-border border-l-0 rounded-l-none"
                    @input="handleAmountInput"
                  />
                </div>
              </div>
              <div class="ml-6">
                <IgniteText as="span" class="font-bold">
                  {{ amountForSaleOverTotal }} % </IgniteText
                >of <IgniteNumber :number="voucherTotalSupply" /> total supply
              </div>
            </div>
            <div v-else>Your balance is empty.</div>
            <!-- Feedbacks -->
            <div class="mt-4 flex-row">
              <IgniteFeedback
                v-if="
                  isSellingAmountGreaterThan33Pct &&
                  !isSellingAmountGreaterThanBalance
                "
                text="It is not advised to offer more than 33% of total supply."
              />
              <IgniteFeedback
                v-if="!isSellingAmountGreaterThanZero"
                text="Total quantity for sale can not be 0"
              />
              <IgniteFeedback
                v-if="isSellingDenomSameAsPayingDenom"
                text="Voucher denom and paying denom must be different"
              />
              <IgniteFeedback
                v-if="isSellingAmountGreaterThanBalance"
                text="The amount entered is greater than the total supply"
              />
            </div>
          </FundraiserInputRow>
          <!-- Paying coin -->
          <FundraiserInputRow>
            <div>
              <IgniteText
                class="text-2 font-medium text-gray-0 text-opacity-60"
              >
                Price per voucher
              </IgniteText>
            </div>
            <div class="mt-3 flex items-center">
              <div class="flex max-w-[15.5rem]">
                <!-- Skeleton loading balances -->
                <div
                  v-if="isFetchingTotalSupply"
                  class="w-1/2 rounded-xs rounded-r-none border border-r-0 border-border p-2"
                >
                  <IgniteLoader class="h-full w-full rounded-xs" />
                </div>
                <!-- Input -->
                <div v-else class="flex w-1/2">
                  <IgniteSelect
                    :model-value="
                      coinToSelectOption({
                        amount: '',
                        denom: state.auction.paying_coin_denom
                      })
                    "
                    :items="
                      filterdTotalSupplyCoins.map(i => coinToSelectOption(i as Coin))
                    "
                    variants="rounded-r-none"
                    class="w-full"
                    :is-mobile-native="false"
                    @update:model-value="handlePayingDenomChange"
                  >
                    <template #selected>
                      <IgniteDenom
                        v-if="state.auction.paying_coin_denom"
                        modifier="avatar"
                        :denom="getDenomName(state.auction.paying_coin_denom)"
                        :title="state.auction.paying_coin_denom"
                        size="small"
                        class="mr-3"
                      />
                      {{ getDenomName(state.auction.paying_coin_denom) }}
                    </template>
                    <template
                      v-for="i in filterdTotalSupplyCoins"
                      :key="i.denom"
                      #[i.denom]
                    >
                      <IgniteDenom
                        v-if="i.denom"
                        modifier="avatar"
                        :denom="getDenomName(i.denom)"
                        :title="i.denom"
                        size="small"
                        class="mr-3"
                      />
                      {{ getDenomName(i.denom) }}
                    </template>
                  </IgniteSelect>
                </div>
                <div class="flex w-1/2">
                  <IgniteInput
                    :value="state.auction.start_price"
                    variants="text-center border border-border border-l-0 rounded-l-none"
                    @input="handlePricePerVoucher"
                  />
                </div>
              </div>
              <div class="ml-6 flex-row">
                <IgniteText class="font-bold">
                  <IgniteNumber :number="totalSaleValue" />
                  {{ getDenomName(state.auction.paying_coin_denom) }}
                </IgniteText>
              </div>
            </div>
            <!-- Feedbacks -->
            <div class="mt-4">
              <IgniteText class="text-2 font-light">
                <span class="font-semibold">Note:</span>&nbsp;Price per voucher
                will not be disclosed until fundraiser starts.
              </IgniteText>
              <IgniteFeedback
                v-if="!isVoucherPriceGreaterThanZero"
                text="Price per voucher can not be 0"
                class="mt-2"
              />
            </div>
          </FundraiserInputRow>
        </FundraiserInputSection>
      </FundraiserSection>
      <!-- Date and time -->
      <FundraiserSection>
        <IgniteHeading
          class="text-left font-title text-4 font-semibold md:col-span-7 lg:col-span-8"
        >
          Date and time
        </IgniteHeading>
        <FundraiserInfoCard>
          <IgniteHeading class="text-2 font-semibold md:text-3">
            Need help choosing a date and duration?
          </IgniteHeading>
          <IgniteText class="mt-4 text-2 font-normal text-muted md:text-3">
            <p>
              Most projects choose a fundraising period of just 1 day and
              typically reach their fundraising goal within an hour. A popular
              time to start a fundraiser is 9:00am UTC+0 on a weekday.
            </p>
            <p class="mt-4">
              <span class="text-text">Note:</span> Registration begins 7 days
              prior to the fundraiser start date, unless the fundraiser date is
              fewer than 7 days, to ensure that participants have enough time to
              register.
            </p>
          </IgniteText>
        </FundraiserInfoCard>
        <FundraiserInputSection>
          <FundraiserInputRow>
            <div class="flex-row">
              <IgniteText class="text-3 font-semibold text-gray-0">
                Start
              </IgniteText>
            </div>
            <div class="grid-cols mt-5 flex flex-row flex-wrap gap-7 md:mt-7">
              <!-- Start date -->
              <div class="flex-col">
                <div>
                  <IgniteInputDate
                    :initial-date="(state.auction.start_time as Date)"
                    @input="handleStartDateInput"
                  />
                </div>
              </div>
            </div>
          </FundraiserInputRow>
          <FundraiserInputRow>
            <div class="flex-row">
              <IgniteText class="text-3 font-semibold text-gray-0">
                End
              </IgniteText>
            </div>
            <div
              class="col-span-2 mt-5 flex flex-row flex-wrap items-center gap-7 md:mt-7"
            >
              <!-- End date -->
              <div class="flex-col">
                <div>
                  <IgniteInputDate
                    :min-date="state.auction.start_time"
                    :initial-date="(state.auction.end_time as Date)"
                    @input="handleEndDateInput"
                  />
                </div>
                <!-- Feedbacks -->
                <IgniteText
                  v-if="!isEndAfterStart"
                  class="flex rounded-xs bg-error bg-opacity-70 p-4 text-gray-50"
                >
                  Fundraising end date must be later than start date.
                </IgniteText>
              </div>
            </div>
          </FundraiserInputRow>
        </FundraiserInputSection>
      </FundraiserSection>
      <!-- Vesting schedule -->
      <FundraiserSection>
        <div class="md:col-span-7 lg:col-span-8">
          <div class="flex items-center">
            <IgniteHeading class="text-left font-title text-4 font-semibold">
              Vesting schedule
            </IgniteHeading>
            <IgniteText class="ml-5 text-2 font-medium text-muted">
              Optional
            </IgniteText>
          </div>
        </div>
        <FundraiserInfoCard>
          <IgniteHeading class="text-2 font-semibold md:text-3">
            Need help determining the vesting schedule?
          </IgniteHeading>
          <IgniteText class="mt-4 text-2 font-normal text-muted md:text-3">
            <p>
              Projects usually want to create long-term stability and set a
              vesting schedule aligned with key milestones. Choose a
              distribution schedule that will align with your project’s
              long-term goals.
            </p>
            <p class="mt-4">
              If no vesting schedule is set, the collected funds are
              automatically distributed in full at the close of the fundraiser.
            </p>
          </IgniteText>
        </FundraiserInfoCard>
        <FundraiserInputSection>
          <FundraiserInputRow
            v-for="(schedule, index) in state.auction.vesting_schedules"
            :key="schedule.release_time?.toString()"
          >
            <div>
              <div class="flex-row">
                <IgniteText class="text-3 font-semibold text-gray-0">
                  Distribution {{ index + 1 }}
                </IgniteText>
              </div>
              <div
                class="col-span-2 mt-7 flex flex-row flex-wrap items-start gap-7"
              >
                <!-- Date -->
                <div>
                  <IgniteInputDate
                    :min-date="
                      index === 0
                        ? state.auction.end_time
                        : nextMinDateForSchedule
                    "
                    :initial-date="(schedule.release_time as Date)"
                    @input="(date) => handleDistributionDateInput(date, index)"
                  />
                  <div></div>
                </div>
                <!-- Amount -->
                <div>
                  <div>
                    <IgniteText as="label" class="block text-2 text-muted">
                      Amount %</IgniteText
                    >
                  </div>
                  <div class="mt-3">
                    <div class="flex max-w-[7rem]">
                      <IgniteInput
                        :value="schedule.weight"
                        variants="text-center border border-border"
                        @input="
                          (evt) => handleDistributionWeightInput(evt, index)
                        "
                      />
                    </div>
                    <!-- Feedbacks -->
                    <div class="mt-4">
                      <IgniteFeedback
                        v-if="Number(schedule.weight) === 0"
                        text="Can not be zero"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex self-center">
                  <!-- Add Distribution -->
                  <IgniteButton
                    v-if="state.auction.vesting_schedules.length > 0"
                    class="py-5.5 text-error"
                    @click="() => handleDeleteDistributionClick(index)"
                  >
                    <IconCanceled stroke-width="2" class="transition-color" />
                  </IgniteButton>
                </div>
              </div>
            </div>
          </FundraiserInputRow>
          <FundraiserInputRow>
            <!-- Generic Feedbacks -->
            <IgniteFeedback
              v-if="!isVestingTotalSale"
              class="mb-4"
              text="Total distributed amount should be 100%"
            />
            <IgniteFeedback
              v-if="!isReleaseTimeAfterEnd"
              class="mb-4"
              text=" Vesting distribution can not be earlier than Fundraising end date."
            />
            <!-- Add Distribution -->
            <div>
              <IgniteButton
                variant="primary"
                class="h-8 border border-primary !px-4 font-normal hover:text-primary"
                @click="handleAddDistributionClick"
              >
                <IconPlus
                  aria-hidden
                  class="mr-3 h-[0.625rem] w-[0.625rem]"
                  stroke-width="2"
                />
                <span>Add Distribution</span>
              </IgniteButton>
            </div></FundraiserInputRow
          >
        </FundraiserInputSection>
      </FundraiserSection>
    </div>

    <!-- Fundraiser Summary -->
    <FundraiserSummary
      :total-sale-value="totalSaleValue"
      :total-sale-amount="amountForSale"
      :amount-sale-over-total="amountForSaleOverTotal"
      :sale-denom="state.auction.paying_coin_denom.toUpperCase()"
      :start-date="(state.auction.start_time as Date)"
      :end-date="(state.auction.end_time as Date)"
      :able-to-publish="ableToPublish"
      @publish="publish"
      @cancel="cancel"
    />
  </div>
</template>

<style scoped lang="postcss"></style>
