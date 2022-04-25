<script lang="ts">
export default {
  name: 'FundraiserView'
}
</script>

<script lang="ts" setup>
import IgniteButton from '~/components/IgniteButton.vue'
import IgniteHeading from '~/components/IgniteHeading.vue'
import IgniteText from '~/components/IgniteText.vue'
import IgniteInput from '~/components/IgniteInput.vue'
import { computed, reactive } from 'vue'
import type { MsgCreateFixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/tx'
import BigNumber from 'bignumber.js'
import { Coin } from '@cosmjs/amino'

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

let today = new Date()
let oneYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
let twoYfromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
let threeYfromNow = new Date(
  new Date().setFullYear(new Date().getFullYear() + 3)
)

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
  start_price: '9',
  start_time: today,
  end_time: oneYfromNow,
  paying_coin_denom: 'spn',
  selling_coin: { amount: '200', denom: 'uspn' },
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

// methods
async function publishAuction() {
  console.log('publishAuction', state.auction)

  // let msg = spn.tendermintFundraising.value.msgCreateFixedPriceAuction({
  //   value: state.auction as MsgCreateFixedPriceAuction
  // })

  // spn.signer.value.client.signAndBroadcast(spn.signer.value.addr, [msg], 20000)
}

function handleAmountInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newAmount = inputEl.value

  // @ts-ignore
  state.auction.selling_coin.amount = newAmount
}

function handlePricePerVoucher(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newPrice = inputEl.value

  // @ts-ignore
  state.auction.start_price = newPrice
}
</script>

<template>
  <div class="container py-10 px-4">
    <div class="md:flex-column flex flex-col">
      <IgniteHeading class="text-left font-title text-7 font-semibold">
        Create fundraiser
      </IgniteHeading>
      <IgniteText class="mt-5 max-w-lg text-3 text-muted">
        Create a fundraiser for your project. Once a fundraiser has been
        published, it cannot be edited. A fundraiser may be cancelled at any
        time prior to the start date and time of the fundraiser.
      </IgniteText>
    </div>
    <!-- Vouchers offered -->
    <div class="mt-10 flex grow flex-col">
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Vouchers offered
      </IgniteHeading>
      <div class="flex grow flex-row">
        <div class="flex flex-1 flex-col">
          <div class="mt-1 flex-row">
            <IgniteText> Amount for sale </IgniteText>

            <IgniteInput
              :value="state.auction?.selling_coin?.amount"
              @input="handleAmountInput"
              type="number"
            />

            <IgniteText>
              {{ amountForSaleOverTotal }} % of {{ totalSupply }} total supply
            </IgniteText>
          </div>
          <div class="mt-1 flex-row">
            <IgniteText> Price p voucher </IgniteText>
            <IgniteInput
              :value="state.auction?.start_price"
              @input="handlePricePerVoucher"
            />
            <IgniteText>
              {{ totalSaleValue }} {{ state.auction?.selling_coin?.denom }}
            </IgniteText>
          </div>
        </div>
        <div class="ml-8 flex-1">
          <div class="flex-col border-radio">
            <IgniteHeading class="text-left font-title text-2 font-semibold">
              Need help choosing a date?
            </IgniteHeading>
            <IgniteText>
              Because investors must register to participate in a fundraiser,
              most projects choose at least 7 days prior to the start date to
              ensure that investors have enough time to register.
            </IgniteText>
          </div>
        </div>
      </div>
    </div>
    <!-- Date and time -->
    <div class="mt-10 flex grow flex-col">
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Date and time
      </IgniteHeading>
      <div class="flex grow flex-row">
        <div class="flex flex-1 flex-col">
          <div class="mt-1 flex-row">
            <IgniteText> Start date </IgniteText>

            <IgniteInput placeholder="start date" />
          </div>
          <div class="mt-1 flex-row">
            <IgniteText> Start time </IgniteText>

            <IgniteInput placeholder="start time" />
          </div>
          <div class="mt-6 flex-row">
            <IgniteText> End date </IgniteText>

            <IgniteInput placeholder="start date" />
          </div>
          <div class="mt-1 flex-row">
            <IgniteText> End time </IgniteText>

            <IgniteInput placeholder="start time" />
          </div>
        </div>
        <div class="ml-8 flex-1">
          <div class="flex-col border-radio">
            <IgniteHeading class="text-left font-title text-2 font-semibold">
              Need help choosing a date?
            </IgniteHeading>
            <IgniteText>
              Because investors must register to participate in a fundraiser,
              most projects choose at least 7 days prior to the start date to
              ensure that investors have enough time to register.
            </IgniteText>
          </div>
        </div>
      </div>
    </div>
    <!-- Registration start date -->
    <div class="mt-10 flex grow flex-col">
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Registration start date
      </IgniteHeading>
      <div class="flex grow flex-row">
        <div class="flex flex-1 flex-col">
          <div class="mt-1 flex-row">
            <IgniteText> Start time </IgniteText>
            <IgniteInput placeholder="registration star date" />
          </div>
        </div>
        <div class="ml-8 flex-1">
          <div class="flex-col border-radio">
            <IgniteHeading class="text-left font-title text-2 font-semibold">
              Need help choosing a date?
            </IgniteHeading>
            <IgniteText>
              Because investors must register to participate in a fundraiser,
              most projects choose at least 7 days prior to the start date to
              ensure that investors have enough time to register.
            </IgniteText>
          </div>
        </div>
      </div>
    </div>
    <!-- Vesting schedule -->
    <div class="mt-10 flex grow flex-col">
      <IgniteHeading class="text-left font-title text-4 font-semibold">
        Vesting schedule
      </IgniteHeading>
      <div class="flex grow flex-row">
        <div class="flex flex-1 flex-col">
          <div class="mt-1 flex-row">
            <IgniteText> Distribuition #1 date </IgniteText>

            <IgniteInput placeholder="distribuition #1" />
          </div>
          <div class="mt-1 flex-row">
            <IgniteText> Distribuition #1 time </IgniteText>

            <IgniteInput placeholder="distribuition #1" />
          </div>
          <div class="mt-1 flex-row">
            <IgniteText> Distribuition #1 amount % </IgniteText>

            <IgniteInput placeholder="amount #1" />
          </div>
        </div>
        <div class="ml-8 flex-1">
          <div class="flex-col border-radio">
            <IgniteHeading class="text-left font-title text-2 font-semibold">
              Need help choosing a date?
            </IgniteHeading>
            <IgniteText>
              Because investors must register to participate in a fundraiser,
              most projects choose at least 7 days prior to the start date to
              ensure that investors have enough time to register.
            </IgniteText>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 flex grow flex-row">
      <div class="flex grow flex-col">
        <IgniteHeading class="text-left font-title text-4 font-semibold">
          Fundraiser Summary
        </IgniteHeading>
      </div>
      <div class="flex grow flex-col">
        <div class="flex flex-row justify-between">
          <div class="flex-col">
            <IgniteText> Raising </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText>
              {{ totalSaleValue }} {{ state.auction?.selling_coin?.denom }}
            </IgniteText>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex-col">
            <IgniteText> Fee </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText>
              {{ totalFee }} {{ state.auction?.selling_coin?.denom }}
            </IgniteText>
          </div>
        </div>
        <div class="flex flex-row justify-between">
          <div class="flex-col">
            <IgniteText> Total raise potential </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText>
              {{ totalRaisePotential }} {{ state.auction?.selling_coin?.denom }}
            </IgniteText>
          </div>
        </div>
        <div class="flex-row text-right">
          <IgniteButton class="px-6">
            <span>Cancel</span>
          </IgniteButton>
          <IgniteButton
            variant="primary"
            color="primary"
            class="px-6"
            @click="publishAuction"
          >
            <span>Publish</span>
          </IgniteButton>
        </div>
      </div>
    </div>
  </div>
</template>
