<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'InvestVoucherAllocation'
})
</script>

<script lang="ts" setup>
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteProgressBar from '~/components/common/IgniteProgressBar.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'
import { ProgressBarItem } from '~/utils/types'
import { computed, ref, watch } from 'vue'
import { FixedPriceAuction } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising'
import { AuctionStatus } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/types/fundraising/fundraising'
import BigNumber from 'bignumber.js'
import { numberFormatter, formatVoucherDenom } from '~/utils/fundraisers'

const props = defineProps({
  fundraisers: { type: Object, required: false },
  totalSupply: { type: Object, required: false }
})

const selectedVoucher = ref({ value: '', label: '' })
const vouchers = computed(() => {
  return [
    ...new Set(
      props.fundraisers?.pages[0].auctions.map(
        (auctionData: FixedPriceAuction) =>
          auctionData.base_auction.selling_coin.denom.toUpperCase()
      )
    )
  ]
})

watch(vouchers, (newVal) => {
  if (newVal[0])
    selectedVoucher.value = {
      value: newVal[0],
      label: formatVoucherDenom(newVal[0])
    }
})

const formatAuctionStatus = (auctionType: AuctionStatus): string => {
  if (auctionType == 'AUCTION_STATUS_VESTING') return 'Fundraising'
  if (auctionType == 'AUCTION_STATUS_STARTED') return 'Fundraising'
  if (auctionType == 'AUCTION_STATUS_STANDBY') return 'Fundraising'
  if (auctionType == 'AUCTION_STATUS_FINISHED') return 'Distributed'
  if (auctionType == 'AUCTION_STATUS_CANCELLED') return 'Undistributed'
  if (auctionType == 'AUCTION_STATUS_UNSPECIFIED') return 'Undistributed'
  return 'Undistributed'
}

const calculateDistributed = (voucherAuctions: FixedPriceAuction[]): number => {
  return voucherAuctions
    .filter(
      (auctionData: FixedPriceAuction) =>
        formatAuctionStatus(auctionData.base_auction.status) ===
          'Distributed' ||
        formatAuctionStatus(auctionData.base_auction.status) === 'Fundraising'
    )
    .reduce((acc, auctionData: FixedPriceAuction) => {
      return (
        acc +
        (parseInt(auctionData.base_auction.selling_coin.amount) -
          parseInt(auctionData.base_auction.remaining_selling_coin.amount))
      )
    }, 0)
}

const calculateFundraising = (voucherAuctions: FixedPriceAuction[]): number => {
  return voucherAuctions
    .filter(
      (auctionData: FixedPriceAuction) =>
        formatAuctionStatus(auctionData.base_auction.status) === 'Fundraising'
    )
    .reduce((acc, auctionData: FixedPriceAuction) => {
      return (
        acc + parseInt(auctionData.base_auction.remaining_selling_coin.amount)
      )
    }, 0)
}

const progressBars = computed(() => {
  return (vouchers.value || []).map((voucher) => {
    const voucherAuctions = props.fundraisers?.pages[0].auctions.filter(
      (auctionData: FixedPriceAuction) =>
        auctionData.base_auction.selling_coin.denom.toUpperCase() === voucher
    )
    const distributedAmount = calculateDistributed(voucherAuctions)
    const fundraisingAmount = calculateFundraising(voucherAuctions)
    const token = props.totalSupply?.find(
      (token) => token.denom.toUpperCase() === voucher
    )
    const tokenSupply = new BigNumber(token?.amount ?? '0').toNumber()
    return {
      denom: formatVoucherDenom(voucher),
      denomFull: voucher,
      items: [
        {
          value: tokenSupply
            ? Math.round((distributedAmount / tokenSupply) * 100)
            : 0,
          amount: distributedAmount,
          bgColor: 'bg-primary',
          split: true
        },
        {
          value: tokenSupply
            ? Math.round((fundraisingAmount / tokenSupply) * 100)
            : 0,
          amount: fundraisingAmount,
          bgColor: 'bg-secondary'
        },
        {
          value: tokenSupply
            ? Math.round(
                ((tokenSupply - distributedAmount - fundraisingAmount) /
                  tokenSupply) *
                  100
              )
            : 0,
          amount: tokenSupply
        }
      ] as ProgressBarItem[]
    }
  })
})

const progressBar = computed(() => {
  return progressBars.value.find(
    (voucher) => voucher.denomFull === selectedVoucher.value.value
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
              name="Voucher select"
              v-model="selectedVoucher"
              :items="
                vouchers.map((voucher) => ({
                  value: voucher,
                  label: formatVoucherDenom(voucher)
                }))
              "
            >
              <IgniteDenom
                size="small"
                modifier="avatar"
                :denom="selectedVoucher.label"
                :title="selectedVoucher.label"
                class="mr-3"
              />
              <IgniteHeading as="div" class="font-title text-3 md:text-4">
                {{ selectedVoucher.label }}
              </IgniteHeading>
            </IgniteSelect>
          </div>
        </div>
        <div v-if="progressBar" class="">
          <div class="m-auto max-w-xs">
            <IgniteProgressBar
              :items="progressBar.items"
              :denom="formatVoucherDenom(progressBar.denom)"
            />
          </div>
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-center lg:mt-8 lg:flex-nowrap lg:gap-7"
          >
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                {{ numberFormatter.format(progressBar.items[0].amount) }}
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
                {{ numberFormatter.format(progressBar.items[1].amount) }}
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
                  numberFormatter.format(
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
