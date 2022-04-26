<script lang="ts">
export default {
  name: 'FundraiserView'
}
</script>

<script lang="ts" setup>
import { Coin } from '@cosmjs/amino'
import BigNumber from 'bignumber.js'
import { computed, reactive } from 'vue'

import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteInput from '~/components/IgniteInput.vue'
import IgniteInputAmount from '~/components/IgniteInputAmount.vue'
import IgniteInputDate from '~/components/IgniteInputDate.vue'
import IgniteInputTime from '~/components/IgniteInputTime.vue'
import IgniteText from '~/components/IgniteText.vue'
import FundraiserInputRow from '~/components/invest/FundraiserInputRow.vue'
import type { MsgCreateFixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/tx'

import FundraiserInfoCard from '../components/invest/FundraiserInfoCard.vue'
import FundraiserInputSection from '../components/invest/FundraiserInputSection.vue'
import FundraiserSection from '../components/invest/FundraiserSection.vue'
import FundraiserSummary from '../components/invest/FundraiserSummary.vue'

let today = new Date()
let oneYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
let twoYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
let threeYfromNow = new Date(
  new Date().setFullYear(new Date().getFullYear() + 3)
)
enum UIStates {
  Fresh,
  Success,
  Error
}

interface State {
  currentUIState: UIStates.Fresh
  errorMessage: ''
  isLoading: false
  auction?: MsgCreateFixedPriceAuction
  feeAmount?: Coin
}

const initialState: State = {
  currentUIState: UIStates.Fresh,
  errorMessage: '',
  isLoading: false
}

// state
const totalSupply = 1000
const state = reactive({ ...initialState })

state.auction = {
  auctioneer: 'spn1fpx8hs0xxktelpym44gk3s3mnk8u4p729mlv8q',
  start_price: '10',
  start_time: today,
  end_time: oneYfromNow,
  paying_coin_denom: 'SPN',
  selling_coin: { amount: '200', denom: 'USPN' },
  vesting_schedules: [
    {
      release_time: twoYfromNow,
      weight: '500000000000000000'
    },
    {
      release_time: threeYfromNow,
      weight: '500000000000000000'
    }
  ]
}

// computed
const amountForSaleOverTotal = computed<number>(
  () =>
    new BigNumber(state.auction?.selling_coin?.amount ?? '0').toNumber() /
    totalSupply
)
const totalSaleValue = computed<number>(
  () =>
    new BigNumber(state.auction?.selling_coin?.amount ?? '0').toNumber() *
    new BigNumber(state.auction?.start_price ?? '0').toNumber()
)
const totalFee = computed<number>(() => (0.3 / 100) * totalSaleValue.value)
const totalRaisePotential = computed<number>(
  () => totalSaleValue.value - totalFee.value
)

// handlers
function handleAmountInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newAmount = inputEl.value

  // @ts-ignore
  state.auction.selling_coin.amount = newAmount
}
function handlePricePerVoucher(value: string) {
  // @ts-ignore
  state.auction.start_price = value
}
function handleStartTimeInput(value: string) {
  console.log('handleStartTimeInput', value)
}
function handleEndTimeInput(value: string) {
  console.log('handleEndTimeInput', value)
}
function handleDistributionTimeInput(value: string) {
  console.log('handleDistributionTimeInput', value)
}
function handleStartDateInput(date: string) {
  console.log('handleStartDateInput', date)
}
function handleEndDateInput(date: string) {
  console.log('handleEndDateInput', date)
}
function handleDistributionDateInput(date: string) {
  console.log('handleDistributionDateInput', date)
}

// methods
async function publishAuction() {
  console.log('publishAuction', state.auction)

  // let msg = spn.tendermintFundraising.value.msgCreateFixedPriceAuction({
  //   value: state.auction as MsgCreateFixedPriceAuction
  // })

  // spn.signer.value.client.signAndBroadcast(spn.signer.value.addr, [msg], 20000)
}
</script>

<template>
  <div class="container">
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
            <div class="flex items-center">
              <div class="">
                <IgniteInput
                  :value="state.auction?.selling_coin?.amount"
                  type="number"
                  @input="handleAmountInput"
                />
              </div>
              <div class="ml-6 flex-row">
                <IgniteText as="span" class="font-bold">
                  {{ amountForSaleOverTotal }} % </IgniteText
                >of {{ totalSupply }} total supply
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
            <div class="flex items-center">
              <div class="">
                <IgniteInputAmount
                  :value="state.auction?.start_price"
                  @input="handlePricePerVoucher"
                />
              </div>
              <div class="ml-6 flex-row">
                <IgniteText class="font-bold">
                  {{ totalSaleValue }}
                  {{ state.auction?.selling_coin?.denom }}
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
              <IgniteHeading as="h3"> Start </IgniteHeading>
            </div>
            <div class="grid-cols mt-7 flex flex-row flex-wrap gap-7">
              <!-- Start date -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Date
                  </IgniteText>
                </div>
                <div>
                  <IgniteInputDate
                    :initial-date="today"
                    @input="handleStartDateInput"
                  />
                </div>
              </div>
              <!-- Start time -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Time
                  </IgniteText>
                </div>
                <IgniteInputTime @input="handleStartTimeInput" />
              </div>
            </div>
          </FundraiserInputRow>
          <FundraiserInputRow>
            <div class="flex-row">
              <IgniteHeading as="h3"> End </IgniteHeading>
            </div>
            <div class="col-span-2 mt-7 flex flex-row flex-wrap gap-7">
              <!-- End date -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Date
                  </IgniteText>
                </div>
                <div>
                  <IgniteInputDate
                    :initial-date="oneYfromNow"
                    @input="handleEndDateInput"
                  />
                </div>
              </div>
              <!-- End time -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Time
                  </IgniteText>
                </div>
                <IgniteInputTime @input="handleEndTimeInput" />
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
    <!-- Registration start date -->
    <FundraiserSection>
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Registration start date
      </IgniteHeading>
      <div class="flex grow flex-row">
        <FundraiserInputSection>
          <FundraiserInputRow>
            <div class="flex-col">
              <div>
                <IgniteText
                  class="text-2 font-medium text-gray-0 text-opacity-60"
                >
                  Date
                </IgniteText>
              </div>
              <div class="flex">
                <IgniteInputDate
                  :initial-date="oneYfromNow"
                  @input="handleEndDateInput"
                />
              </div>
            </div>
          </FundraiserInputRow>
        </FundraiserInputSection>
        <FundraiserInfoCard>
          <IgniteHeading class="font-title text-3 font-semibold">
            Need help choosing a date?
          </IgniteHeading>
          <IgniteText class="mt-4 text-3 font-normal text-gray-660">
            Because investors must register to participate in a fundraiser, most
            projects choose at least 7 days prior to the start date to ensure
            that investors have enough time to register.
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
          <FundraiserInputRow>
            <div class="flex-row">
              <IgniteHeading as="h3"> Distribuition 1 </IgniteHeading>
            </div>
            <div class="col-span-2 mt-7 flex flex-row flex-wrap gap-7">
              <!-- Date -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Date
                  </IgniteText>
                </div>
                <div>
                  <IgniteInputDate
                    :initial-date="today"
                    @input="handleDistributionDateInput"
                  />
                </div>
              </div>
              <!-- Time -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Time
                  </IgniteText>
                </div>
                <IgniteInputTime @input="handleDistributionTimeInput" />
              </div>
              <!-- Amount -->
              <div class="flex-col">
                <div>
                  <IgniteText
                    class="text-2 font-medium text-gray-0 text-opacity-60"
                  >
                    Amount
                  </IgniteText>
                </div>
                <div>
                  <IgniteInputAmount value="5" />
                </div>
              </div>
            </div>
          </FundraiserInputRow>
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
      :fee-denom="state.auction?.selling_coin?.denom ?? ''"
      :total-sale-value="totalSaleValue"
      :sale-denom="state.auction?.selling_coin?.denom ?? ''"
      @publish="publishAuction"
    />
  </div>
</template>
