<script lang="ts">
export default {
  name: 'ProjectCardValidator'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { CampaignCampaignSummary } from '~/generated/tendermint-spn-ts-client/tendermint.spn.campaign/rest'
import { getIncentivesSummary, getVouchersSummary } from '~/utils/reward'

interface Props {
  isWide?: boolean
  loading?: boolean
  campaignSummary?: CampaignCampaignSummary
}

const props = withDefaults(defineProps<Props>(), {
  isWide: false,
  loading: false,
  campaignSummary: () => ({})
})

const vouchersSummary = computed(() => {
  const campaignId = props.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  return getVouchersSummary(campaignId ?? '', rewards)
})

const incentivesSummary = computed(() => {
  const campaignId = props.campaignSummary?.campaign?.campaignID
  const rewards = props.campaignSummary?.rewards
  return getIncentivesSummary(campaignId ?? '', rewards)
})

const showVouchers = computed(() => {
  return Boolean(vouchersSummary.value.denoms.length)
})

const showIncentives = computed(() => {
  return Boolean(incentivesSummary.value.denoms.length)
})
</script>

<template>
  <IgniteCard
    v-if="showIncentives || showVouchers"
    :shadow="true"
    class="flex flex-col justify-between px-5 pt-8 pb-7.5 sm:px-7 md:px-8 md:pt-9"
    :class="
      isWide && [
        'lg:flex-row',
        'lg:items-center',
        'lg:flex-wrap',
        'xl:flex-nowrap'
      ]
    "
  >
    <IgniteHeading
      as="div"
      class="text-center font-title text-3 font-semibold text-title"
      :class="
        isWide ? ['lg:text-7', 'lg:max-w-sm', 'lg:text-left'] : ['md:text-4']
      "
    >
      Validator Incentives
    </IgniteHeading>
    <div
      class="mt-8 w-full justify-center sm:flex"
      :class="
        isWide && [
          'xl:mt-0',
          'lg:order-last',
          'xl:order-none',
          'lg:justify-start',
          'xl:justify-center'
        ]
      "
    >
      <div v-if="showVouchers">
        <IgniteLoader v-if="loading" class="h-8 w-11" />
        <div v-else class="flex items-center justify-center">
          <IgniteDenom
            modifier="avatar"
            :denom="vouchersSummary.denoms[0]"
            :title="vouchersSummary.denoms[0]"
            class="mr-3"
          />
          <IgniteHeading as="div" class="font-title text-5 md:text-6"
            >{{ vouchersSummary.avgSharePercentage }}%</IgniteHeading
          >
        </div>

        <IgniteText as="div" class="mt-5 text-center text-muted">
          Chain Vouchers
        </IgniteText>
      </div>

      <div
        v-if="showIncentives && showVouchers"
        class="my-3 text-center text-5 text-inactive sm:my-0 sm:mx-6"
      >
        +
      </div>

      <div v-if="showIncentives">
        <IgniteLoader v-if="loading" class="h-8 w-full" />
        <div v-else class="flex items-center justify-center">
          <IgniteDenom
            modifier="avatar"
            :denom="incentivesSummary.denoms[0]"
            :title="incentivesSummary.denoms[0]"
            class="mr-3"
          />

          <IgniteHeading as="div" class="font-title text-5 md:text-6">
            <IgniteNumber :number="incentivesSummary.total" />
            {{ incentivesSummary.denoms[0] }}</IgniteHeading
          >
        </div>
        <IgniteText as="div" class="mt-5 text-center text-muted">
          Testnet Incentives
        </IgniteText>
      </div>
    </div>
    <div
      class="mt-8.5 flex items-center justify-center md:shrink-0"
      :class="isWide && 'lg:mt-0'"
    >
      <IgniteButton variant="primary" color="primary" class="w-full sm:w-auto"
        >Become a validator</IgniteButton
      >
    </div>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
