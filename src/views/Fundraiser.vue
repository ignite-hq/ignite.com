<script lang="ts">
export default {
  name: 'FundraiserView'
}
</script>

<script lang="ts" setup>
import { Coin } from '@cosmjs/amino'
import BigNumber from 'bignumber.js'
import { computed, reactive, watchEffect } from 'vue'

import type { MsgCreateFixedPriceAuction } from 'tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/tx'
import {
  useCosmosBankV1Beta1,
  useTendermintSpnCampaign
} from 'tendermint-spn-vue-client'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import FundraiserSection from '~/components/invest/FundraiserSection.vue'
import FundraiserInputSection from '~/components/invest/FundraiserInputSection.vue'
import FundraiserInputRow from '~/components/invest/FundraiserInputRow.vue'
import IgniteInput from '~/components/ui/IgniteInput.vue'
import FundraiserInfoCard from '~/components/invest/FundraiserInfoCard.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import FundraiserSummary from '~/components/invest/FundraiserSummary.vue'
import IgniteInputAmount from '../components/ui/IgniteInputAmount.vue'
import IgniteInputDate from '../components/ui/IgniteInputDate.vue'

let today = new Date()
let oneYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
let twoYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
let threeYfromNow = new Date(
  new Date().setFullYear(new Date().getFullYear() + 3)
)

function pctTo18Decimals(pct: number): string {
  return new BigNumber(pct).toPrecision(18).toString().replace('.', '')
}

enum UIStates {
  Fresh,
  Success,
  Error
}

interface ISellingCoin {
  selling_coin: Coin
}

type NonNullableMsgCreateFixedPriceAuction =
  NonNullable<MsgCreateFixedPriceAuction> & ISellingCoin

// state
interface State {
  currentUIState: UIStates.Fresh
  errorMessage: ''
  isLoading: false
  auction: NonNullableMsgCreateFixedPriceAuction
  feeAmount?: Coin
  totalSupply?: Coin[]
  voucherCoin?: Coin
}

const initialState: State = {
  currentUIState: UIStates.Fresh,
  errorMessage: '',
  isLoading: false,
  auction: {
    auctioneer: 'spn1fpx8hs0xxktelpym44gk3s3mnk8u4p729mlv8q',
    start_price: '10',
    start_time: today,
    end_time: oneYfromNow,
    paying_coin_denom: 'SPN',
    selling_coin: { amount: '200', denom: 'USPN' },
    vesting_schedules: [
      {
        release_time: twoYfromNow,
        weight: pctTo18Decimals(50)
      },
      {
        release_time: threeYfromNow,
        weight: pctTo18Decimals(50)
      }
    ]
  }
}

const state = reactive({
  ...initialState,
  totalSupply: [
    {
      amount: '1000',
      denom: 'uspn'
    }
  ],
  voucherCoin: {
    amount: '1000',
    denom: 'uspn'
  }
})

// composables
const { queryTotalSupply } = useCosmosBankV1Beta1()
const { queryCampaignAll } = useTendermintSpnCampaign()

// watch
watchEffect(async () => {
  const campaignAllResponse = await (await queryCampaignAll()).data.campaign
  const totalSupplyResponse = await (await queryTotalSupply()).data.supply

  // state.totalSupply = totalSupplyResponse as Coin[]
  // state.voucherCoin = state.totalSupply[0]
})

// computed
const voucherTotalSupply = computed<number>(() => {
  const totalSupplyAsString = state.totalSupply?.find(
    (i) => i.denom === state.voucherCoin?.denom
  )?.amount

  return new BigNumber(totalSupplyAsString ?? '0').toNumber()
})
const amountForSale = computed<number>(() =>
  new BigNumber(state.auction.selling_coin?.amount ?? '0').toNumber()
)
const amountForSaleOverTotal = computed<number>(
  () => (amountForSale.value / voucherTotalSupply.value) * 100
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

// handlers
function handleAmountInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newAmount = inputEl.value

  state.auction.selling_coin.amount = newAmount
}
function handlePricePerVoucher(value: string) {
  state.auction.start_price = value
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
  state.auction.vesting_schedules = [
    ...state.auction.vesting_schedules,
    {
      release_time: threeYfromNow,
      weight: '2'
    }
  ]
}

// methods
async function publishAuction() {
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
                  :value="state.auction.selling_coin?.amount"
                  type="number"
                  @input="handleAmountInput"
                />
              </div>
              <div class="ml-6 flex-row">
                <IgniteText as="span" class="font-bold">
                  {{ amountForSaleOverTotal }} % </IgniteText
                >of {{ voucherTotalSupply }} total supply
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
                  :value="state.auction.start_price"
                  @input="handlePricePerVoucher"
                />
              </div>
              <div class="ml-6 flex-row">
                <IgniteText class="font-bold">
                  {{ totalSaleValue }}
                  {{ state.auction.selling_coin?.denom }}
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
                <div></div>
                <div>
                  <IgniteInputDate
                    :initial-date="today"
                    @input="handleStartDateInput"
                  />
                </div>
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
                <div></div>
                <div>
                  <IgniteInputDate
                    :initial-date="oneYfromNow"
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
            v-bind:key="schedule.release_time?.toString()"
          >
            <div>
              <div class="flex-row">
                <IgniteText class="text-3 font-semibold text-gray-0">
                  Distribuition {{ index + 1 }}
                </IgniteText>
              </div>
              <div class="col-span-2 mt-7 flex flex-row flex-wrap gap-7">
                <!-- Date -->
                <div class="flex-col">
                  <div></div>
                  <div>
                    <IgniteInputDate
                      :initial-date="(schedule.release_time as Date)"
                      @input="
                        (date) => handleDistributionDateInput(date, index)
                      "
                    />
                  </div>
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
                    <IgniteInputAmount
                      :value="schedule.weight"
                      @input="
                        (amount) => handleDistributionWeightInput(amount, index)
                      "
                    />
                  </div>
                </div>
              </div>
              <div
                class="mt-8 flex-row"
                v-if="index + 1 === state.auction.vesting_schedules.length"
              >
                <IgniteButton class="px-6" @click="handleAddDistributionClick">
                  Add Distribution
                </IgniteButton>
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
      :fee-denom="state.auction.selling_coin?.denom ?? ''"
      :total-sale-value="totalSaleValue"
      :total-sale-amount="amountForSale"
      :amount-sale-over-total="amountForSaleOverTotal"
      :sale-denom="state.auction.selling_coin?.denom ?? ''"
      @publish="publishAuction"
    />
  </div>
</template>
