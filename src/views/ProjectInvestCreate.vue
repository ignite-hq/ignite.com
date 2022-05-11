<script lang="ts">
export default {
  name: 'ProjectInvestCreate'
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
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'

import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconPlus from '~/components/icons/IconPlus.vue'
import FundraiserCreateModal from '~/components/invest/FundraiserCreateModal.vue'
import FundraiserInfoCard from '~/components/invest/FundraiserInfoCard.vue'
import FundraiserInputRow from '~/components/invest/FundraiserInputRow.vue'
import FundraiserInputSection from '~/components/invest/FundraiserInputSection.vue'
import FundraiserSection from '~/components/invest/FundraiserSection.vue'
import FundraiserSummary from '~/components/invest/FundraiserSummary.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import IgniteInputDate from '../components/ui/IgniteInputDate.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'
import IgniteInput from '~/components/ui/IgniteInput.vue'
import IgniteDenom from '~/components/common/IgniteDenom.vue'

const TODAY = new Date()

const MICRO_CONVERSION_RATE = 1000000

function getWeeksLater(date: Date, amountOfWeeks = 1): Date {
  return dayjs(date).add(amountOfWeeks, 'week').toDate()
}

const DUMMY_VOUCHERS: Coin[] = [
  toMacro({
    amount: '100000000000000000',
    denom: 'uspn'
  }),
  toMacro({
    amount: '100000000000000000',
    denom: 'utoken'
  })
]

const DUMMY_DENOMS: Coin[] = [
  toMacro({
    amount: '100000000000000000',
    denom: 'uspn'
  }),
  {
    amount: '10000000000',
    denom: 'UST'
  }
]

function pctToDecimals(pct: string, decimals = 18): string {
  return new BigNumber(pct).toPrecision(decimals).toString().replace('.', '')
}

function toMicro(amount: Coin): Coin {
  return {
    amount: new BigNumber(amount.amount)
      .multipliedBy(MICRO_CONVERSION_RATE)
      .toString(),
    denom: `u${amount.denom}`
  }
}

function toMacro(amount: Coin): Coin {
  return {
    amount: new BigNumber(amount.amount)
      .dividedBy(MICRO_CONVERSION_RATE)
      .toString(),
    denom: amount.denom.slice(1)
  }
}

function coinToSelectOption(c: Coin): { label: string; value: string } {
  return { label: c.denom.toUpperCase(), value: c.denom }
}

interface ISellingCoin {
  selling_coin: Coin
}

type NonNullableMsgCreateFixedPriceAuction =
  NonNullable<MsgCreateFixedPriceAuction> & ISellingCoin

// state
interface State {
  currentUIState: UIStates
  auction: NonNullableMsgCreateFixedPriceAuction
  feeAmount?: Coin
  vouchersAvailable: Coin[]
  payingDenomsAvailable: Coin[]
  errorMsg?: string
}

const initialState: State = {
  currentUIState: UIStates.Fresh,
  auction: {
    auctioneer: '',
    start_price: '10',
    start_time: TODAY,
    end_time: getWeeksLater(TODAY, 1),
    paying_coin_denom: 'spn',
    selling_coin: {
      amount: new BigNumber(DUMMY_VOUCHERS[0].amount).dividedBy(20).toString(),
      denom: DUMMY_VOUCHERS[0].denom
    },
    vesting_schedules: []
  },
  vouchersAvailable: DUMMY_VOUCHERS,
  payingDenomsAvailable: DUMMY_DENOMS
}
const state = reactive(initialState)

// spn
const { spn } = useSpn()

// composables
const router = useRouter()

// computed
const voucherTotalSupply = computed<number>(() => {
  const totalSupplyAsString = state.vouchersAvailable.find(
    (i) => i.denom === state.auction.selling_coin?.denom
  )?.amount

  return new BigNumber(totalSupplyAsString ?? '0').toNumber()
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
const totalFee = computed<number>(() => (0.3 / 100) * totalSaleValue.value)
const totalRaisePotential = computed<number>(
  () => totalSaleValue.value - totalFee.value
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

// handlers
function handleAmountInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newAmount = inputEl.value

  state.auction.selling_coin.amount = newAmount
}
function handlePricePerVoucher(value: string) {
  state.auction.start_price = value
}
function handlePayingDenomChange(value: string) {
  state.auction.paying_coin_denom = (
    state.payingDenomsAvailable.find((i) => i.denom === value) as Coin
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
function handleDistributionWeightInput(weight: string, index: number) {
  state.auction.vesting_schedules[index].weight = weight
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
  location.reload()
}

// methods
function normalizeToAmount(evt: Event, maxDecimals = 0): string {
  function format(value: string): string {
    let newValue: string = value

    // Replace commas
    newValue = newValue.replace(',', '.')

    // Disallow decimals if wished for
    newValue = maxDecimals > 0 ? newValue : newValue.replace('.', '')

    // Only numbers
    newValue = newValue.replace(/[^0-9.]/g, '')

    if (newValue.startsWith('.')) {
      newValue = '0' + newValue
    }

    if (newValue.split('').filter((char) => char === '.').length > 1) {
      // Remove subsequent separators
      newValue = newValue.replace(/(?<=\..*)\./g, '')
    }

    let [integerDigits, fractionDigits] = newValue.split('.')

    if (fractionDigits?.length > maxDecimals) {
      newValue = `${integerDigits}.${fractionDigits.slice(0, maxDecimals)}`
    }

    return newValue
  }

  const inputEl = evt.target as HTMLInputElement
  const value = inputEl.value

  if (!value) {
    return ''
  }

  let currentValue = value

  while (parseFloat(currentValue) > Number.MAX_SAFE_INTEGER) {
    currentValue = currentValue.slice(0, -1)
  }

  return format(currentValue)
}
function normalizeAuction(
  auction: MsgCreateFixedPriceAuction
): MsgCreateFixedPriceAuction {
  const normalized = cloneDeep(auction)

  normalized.vesting_schedules.forEach((schedule) => {
    schedule.weight = pctToDecimals(schedule.weight)
  })

  const isSellingCoinInMicroFormat = normalized.selling_coin?.denom[0] === 'u'

  if (!isSellingCoinInMicroFormat) {
    normalized.selling_coin = toMicro(normalized.selling_coin as Coin)
  }

  normalized.auctioneer = spn.signer.value.addr

  return normalized
}
function assertAuction(auction: MsgCreateFixedPriceAuction) {
  const startAsMilli = (auction.start_time as Date).getTime()
  const endAsMilli = (auction.end_time as Date).getTime()

  const isEndAfterStart = endAsMilli > startAsMilli
  const isReleaseTimeAfterEnd = auction.vesting_schedules.every((schedule) => {
    const scheduleAsMilli = (schedule.release_time as Date).getTime()

    return scheduleAsMilli > endAsMilli
  })

  if (!isEndAfterStart) {
    throw new Error('Start date must be after end date')
  }
  if (!isReleaseTimeAfterEnd) {
    throw new Error('Release date must be after end date')
  }
}
async function publish() {
  const payload = normalizeAuction(state.auction)
  let response: DeliverTxResponse

  try {
    assertAuction(payload)

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
  <div class="container">
    <!-- Modal -->
    <FundraiserCreateModal
      :visible="showModal"
      :current-ui-state="state.currentUIState"
      @ack="handleModalAck"
      :error-msg="state.errorMsg"
    />
    <!-- Header -->
    <div class="flex flex-col">
      <div class="mt-11 px-9">
        <IgniteHeading class="text-left font-title text-7 font-semibold">
          Create fundraiser
        </IgniteHeading>
        <IgniteText class="mt-5 max-w-lg text-3 text-muted">
          Create a fundraiser for your project. Once a fundraiser has been
          published, it cannot be edited. A fundraiser may be cancelled at any
          time prior to the start date and time of the fundraiser.
        </IgniteText>
      </div>
    </div>
    <!-- Vouchers offered -->
    <FundraiserSection>
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Vouchers offered
      </IgniteHeading>
      <div class="flex grow flex-row">
        <FundraiserInputSection>
          <FundraiserInputRow>
            <div>
              <IgniteText
                class="text-2 font-medium text-gray-0 text-opacity-60"
              >
                Total quantity for sale
              </IgniteText>
            </div>
            <div class="mt-3 flex items-center">
              <div class="flex max-w-[14.5rem]">
                <IgniteInput
                  :value="state.auction.selling_coin?.amount"
                  variants="text-center border border-border"
                  @input="(evt) => handleAmountInput(evt)"
                />
              </div>
              <div class="ml-6 flex-row">
                <IgniteText as="span" class="font-bold">
                  {{ amountForSaleOverTotal }} % </IgniteText
                >of <IgniteNumber :number="voucherTotalSupply" /> total supply
              </div>
            </div>
          </FundraiserInputRow>
          <FundraiserInputRow>
            <div>
              <IgniteText
                class="text-2 font-medium text-gray-0 text-opacity-60"
              >
                Price per voucher
              </IgniteText>
            </div>
            <div class="mt-3 flex items-center">
              <div class="">
                <div class="flex max-w-[14.5rem]">
                  <IgniteSelect
                    :selected="
                      coinToSelectOption({
                        amount: '',
                        denom: state.auction.paying_coin_denom
                      })
                    "
                    :items="state.payingDenomsAvailable.map(coinToSelectOption)"
                    variants="rounded-r-none"
                    :is-mobile-native="false"
                    @input="handlePayingDenomChange"
                  >
                    <template
                      v-for="i in state.payingDenomsAvailable"
                      :key="i.denom"
                      v-slot:[i.denom]
                    >
                      <IgniteDenom
                        v-if="i.denom"
                        modifier="avatar"
                        :denom="i.denom"
                        :title="i.denom"
                        size="small"
                        class="mr-3"
                      />
                      {{ i.denom.toUpperCase() }}
                    </template>
                  </IgniteSelect>
                  <IgniteInput
                    :value="state.auction.start_price"
                    variants="text-center border border-border border-l-0 rounded-l-none"
                    @input="
                      (evt) => handlePricePerVoucher(normalizeToAmount(evt))
                    "
                  />
                </div>
              </div>
              <div class="ml-6 flex-row">
                <IgniteText class="font-bold">
                  <IgniteNumber :number="totalSaleValue" />
                  {{ state.auction.selling_coin?.denom.toUpperCase() }}
                </IgniteText>
              </div>
            </div>
          </FundraiserInputRow>
        </FundraiserInputSection>
        <FundraiserInfoCard>
          <IgniteHeading class="font-title text-3 font-semibold">
            Need help determining how many?
          </IgniteHeading>
          <IgniteText class="mt-4 text-3 font-normal text-gray-660">
            Projects typically reserve 2-3% of their total voucher supply for
            fundraising efforts. Accepting a stablecoin such as UST is a popular
            way to reduce exposure to price volatility over the course of
            vesting.
          </IgniteText>
        </FundraiserInfoCard>
      </div>
    </FundraiserSection>
    <!-- Date and time -->
    <FundraiserSection>
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Date and time
      </IgniteHeading>
      <div class="flex grow flex-row">
        <FundraiserInputSection>
          <FundraiserInputRow>
            <div class="flex-row">
              <IgniteText class="text-3 font-semibold text-gray-0">
                Start
              </IgniteText>
            </div>
            <div class="grid-cols mt-7 flex flex-row flex-wrap gap-7">
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
              class="col-span-2 mt-7 flex flex-row flex-wrap items-center gap-7"
            >
              <!-- End date -->
              <div class="flex-col">
                <div>
                  <IgniteInputDate
                    :min-date="state.auction.start_time"
                    :max-date="getWeeksLater(state.auction.start_time as Date, 1)"
                    :initial-date="(state.auction.end_time as Date)"
                    @input="handleEndDateInput"
                  />
                </div>
              </div>
            </div>
          </FundraiserInputRow>
        </FundraiserInputSection>
        <FundraiserInfoCard>
          <IgniteHeading class="font-title text-3 font-semibold">
            Need help choosing a date and duration?
          </IgniteHeading>
          <IgniteText class="mt-4 text-3 font-normal text-gray-660">
            Most projects choose a fundraising period of just 1 day and
            typically reach their fundraising goal within an hour. A popular
            time to start a fundraiser is 9:00am UTC+0 on a weekday.
          </IgniteText>
        </FundraiserInfoCard>
      </div>
    </FundraiserSection>
    <!-- Vesting schedule -->
    <FundraiserSection>
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Vesting schedule
      </IgniteHeading>
      <div class="flex grow flex-row">
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
                class="col-span-2 mt-7 flex flex-row flex-wrap items-end gap-7"
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
                </div>
                <!-- Amount -->
                <div>
                  <div>
                    <IgniteText as="label" class="block text-2 text-muted">
                      Amount</IgniteText
                    >
                  </div>
                  <div class="mt-3">
                    <div class="flex max-w-[14.5rem]">
                      <IgniteInput
                        :value="schedule.weight"
                        variants="text-center border border-border"
                        @input="
                          (evt) =>
                            handleDistributionWeightInput(
                              normalizeToAmount(evt),
                              index
                            )
                        "
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <IgniteButton
                    v-if="index > 0"
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
            <!-- Add Distribution -->
            <div class="mt-8 flex-row">
              <IgniteButton
                variant="light"
                class="border border-primary px-4"
                @click="handleAddDistributionClick"
              >
                <IconPlus
                  class="mr-3 h-[0.625rem] w-[0.625rem]"
                  stroke-width="2"
                />
                <span>Add Distribution</span>
              </IgniteButton>
            </div></FundraiserInputRow
          >
        </FundraiserInputSection>
        <FundraiserInfoCard>
          <IgniteHeading class="font-title text-3 font-semibold">
            Need help determining the vesting schedule?
          </IgniteHeading>
          <IgniteText class="mt-4 text-3 font-normal text-gray-660">
            Projects usually want to create long-term stability and set a
            vesting schedule aligned with key milestones. Choose a distribution
            schedule that will align with your project’s long-term goals.
          </IgniteText>
        </FundraiserInfoCard>
      </div>
    </FundraiserSection>
    <!-- Fundraiser Summary -->
    <FundraiserSummary
      :total-raise-potential="totalRaisePotential"
      :total-fee="totalFee"
      :fee-denom="state.auction.selling_coin?.denom.toUpperCase()"
      :total-sale-value="totalSaleValue"
      :total-sale-amount="amountForSale"
      :amount-sale-over-total="amountForSaleOverTotal"
      :sale-denom="state.auction.selling_coin?.denom.toUpperCase()"
      :start-date="(state.auction.start_time as Date)"
      :end-date="(state.auction.end_time as Date)"
      @publish="publish"
      @cancel="cancel"
    />
  </div>
</template>

<style scoped lang="postcss"></style>
