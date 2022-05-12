<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InvestVoucherAllocation'
})
</script>

<script lang="ts" setup>
import BigNumber from 'bignumber.js'
import { computed, reactive, watch } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { V1Beta1Coin } from '~/generated/tendermint-spn-ts-client/cosmos.tx.v1beta1/rest'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import { getDenomName, toCompactNumber } from '~/utils/fundraisers'
import { ProgressBarItem } from '~/utils/types'

interface Props {
  fundraisers: any
  totalSupply: V1Beta1Coin[]
}

const props = withDefaults(defineProps<Props>(), {
  fundraisers: () => ({}),
  totalSupply: () => []
})

const selectedVoucher = reactive({ data: { value: '', label: '' } })
const vouchers = computed(() => {
  if (!props.fundraisers?.pages) {
    return []
  }
  return [
    ...new Set(
      props.fundraisers?.pages[0].auctions.map((auctionData: any) =>
        (auctionData.base_auction.selling_coin?.denom ?? '').toUpperCase()
      )
    )
  ]
})

watch(vouchers, (newVal) => {
  if (newVal[0]) {
    selectedVoucher.data.value = newVal[0] as string
    selectedVoucher.data.label = getDenomName(newVal[0] as string)
  }
})

enum AuctionAllocationLabel {
  Fundraising = 'Fundraising',
  Distributed = 'Distributed',
  Undistributed = 'Undistributed'
}

const formatAuctionStatus = (
  auctionType: AuctionStatus
): AuctionAllocationLabel => {
  // @ts-ignore
  switch (AuctionStatus[auctionType] as AuctionStatus) {
    case AuctionStatus.AUCTION_STATUS_VESTING:
    case AuctionStatus.AUCTION_STATUS_STARTED:
    case AuctionStatus.AUCTION_STATUS_STANDBY:
      return AuctionAllocationLabel.Fundraising
    case AuctionStatus.AUCTION_STATUS_FINISHED:
      return AuctionAllocationLabel.Distributed
    case AuctionStatus.AUCTION_STATUS_CANCELLED:
    case AuctionStatus.AUCTION_STATUS_UNSPECIFIED:
      return AuctionAllocationLabel.Undistributed
    default:
      return AuctionAllocationLabel.Undistributed
  }
}

const calculateDistributed = (voucherAuctions: any[]): number => {
  return voucherAuctions
    .filter(
      (auctionData: any) =>
        formatAuctionStatus(auctionData.base_auction.status) ===
          AuctionAllocationLabel.Distributed ||
        formatAuctionStatus(auctionData.base_auction.status) ===
          AuctionAllocationLabel.Fundraising
    )
    .reduce((acc, auctionData: any) => {
      return (
        acc +
        (Number(auctionData.base_auction.selling_coin.amount) -
          Number(auctionData.remaining_selling_coin?.amount ?? 0))
      )
    }, 0)
}

const calculateFundraising = (voucherAuctions: any[]): number => {
  return voucherAuctions
    .filter(
      (auctionData: any) =>
        formatAuctionStatus(auctionData.base_auction.status) ===
        AuctionAllocationLabel.Fundraising
    )
    .reduce((acc, auctionData: any) => {
      return acc + Number(auctionData.remaining_selling_coin?.amount ?? 0)
    }, 0)
}

const progressBars = computed(() => {
  return (vouchers.value || []).map((voucher) => {
    const voucherAuctions = props.fundraisers?.pages[0].auctions.filter(
      (auctionData: any) =>
        auctionData.base_auction.selling_coin.denom.toUpperCase() === voucher
    )
    const distributedAmount = calculateDistributed(voucherAuctions)
    const fundraisingAmount = calculateFundraising(voucherAuctions)
    const token = props.totalSupply?.find(
      (token) => (token.denom ?? '').toUpperCase() === voucher
    )
    const tokenSupply = new BigNumber(token?.amount ?? '0').toNumber()
    const barDistributed: ProgressBarItem = {
      value: (tokenSupply
        ? Math.round((distributedAmount / tokenSupply) * 100)
        : 0
      ).toString(),
      amount: distributedAmount,
      bgColor: 'bg-primary',
      split: true
    }
    const barFundraising: ProgressBarItem = {
      value: (tokenSupply
        ? Math.round((fundraisingAmount / tokenSupply) * 100)
        : 0
      ).toString(),
      amount: fundraisingAmount,
      bgColor: 'bg-secondary'
    }
    const barAvailable: ProgressBarItem = {
      value: (tokenSupply
        ? Math.round(
            ((tokenSupply - distributedAmount - fundraisingAmount) /
              tokenSupply) *
              100
          )
        : 0
      ).toString(),
      amount: tokenSupply
    }
    return {
      denom: getDenomName(voucher as string),
      denomFull: voucher,
      items: [barDistributed, barFundraising, barAvailable] as ProgressBarItem[]
    }
  })
})

const progressBar = computed(() => {
  return progressBars.value.find(
    (voucher) => voucher.denomFull === selectedVoucher.data.value
  )
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div
      v-if="vouchers.length > 0"
      class="relative h-[100%] rounded border border-border bg-white-1000 px-5 py-7 sm:px-7 md:px-9 md:py-8 xl:px-10.5"
    >
      <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div class="">
          <IgniteHeading
            as="div"
            class="font-title text-5 font-semibold md:text-7"
          >
            Voucher allocation
          </IgniteHeading>
          <div class="mt-7">
            <IgniteSelect
              v-model="selectedVoucher.data"
              :name="'Voucher select'"
              :items="
                vouchers.map((voucher) => ({
                  value: voucher,
                  label: getDenomName(voucher)
                }))
              "
            >
              <IgniteDenom
                size="small"
                modifier="avatar"
                :denom="selectedVoucher.data.label"
                :title="selectedVoucher.data.label"
                class="mr-3"
              />
              <IgniteHeading as="div" class="font-title text-3 md:text-4">
                {{ selectedVoucher.data.label }}
              </IgniteHeading>
            </IgniteSelect>
          </div>
        </div>
        <div v-if="progressBar" class="">
          <div class="m-auto max-w-xs">
            <IgniteProgressBar
              :items="progressBar.items"
              :denom="getDenomName(progressBar.denom)"
            />
          </div>
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-center lg:mt-8 lg:flex-nowrap lg:gap-7"
          >
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                {{ toCompactNumber.format(progressBar.items[0].amount) }}
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-primary"
                ></span>
                <span>Distributed</span>
              </IgniteText>
            </div>
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                {{ toCompactNumber.format(progressBar.items[1].amount) }}
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-secondary"
                ></span>
                <span>Fundraising</span>
              </IgniteText>
            </div>
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                {{
                  toCompactNumber.format(
                    progressBar.items[2].amount -
                      progressBar.items[0].amount -
                      progressBar.items[1].amount
                  )
                }}
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-gray-50"
                ></span>
                <span>Undistributed</span>
              </IgniteText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
