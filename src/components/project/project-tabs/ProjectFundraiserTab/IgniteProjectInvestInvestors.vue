<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestInvestors'
})
</script>

<script setup lang="ts">
import { computed } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IconOrder from '~/components/icons/IconOrder.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useBids from '~/composables/fundraising/useBids'
import useTotalSupply from '~/composables/fundraising/useTotalSupply'
import {
  FundraisingBid,
  V1Beta1Coin
} from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/rest'
import { mergePages } from '~/utils/array'
import { V1Beta1Coin } from '~/generated/tendermint-spn-ts-client/tendermint.fundraising/rest'
import { getDenomName } from '~/utils/fundraising'

interface Props {
  fundraiserId: string
  currency: string
}

const props = withDefaults(defineProps<Props>(), {
  fundraiserId: '0',
  currency: ''
})

// composables
const { bids, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useBids(props.fundraiserId)
const { totalSupply } = useTotalSupply()

// computed
const bidsAll = computed<FundraisingBid[]>(() => {
  if (isLoading.value) {
    return []
  }

  return mergePages(bids.value?.pages, 'bids')
})

const supply = computed(() => {
  if (!totalSupply.value?.supply || !props.currency) return 0
  return totalSupply.value?.supply.find(
    (token: V1Beta1Coin) => token.denom === props.currency
  ).amount
})
</script>

<template>
  <div class="container">
    <div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-7 lg:grid-cols-12">
      <div class="px-0 md:col-span-3 lg:col-span-10">
        <IgniteHeading as="div" class="font-title text-5">
          Investors
        </IgniteHeading>
        <IgniteText as="div" class="mt-5 text-3 text-muted">
          <IgniteNumber :number="bids.pages?.pagination?.total" as="strong" />
          Active investors
        </IgniteText>
      </div>
      <div
        class="flex px-0 md:col-span-1 md:items-end md:justify-end lg:col-span-2"
      >
        <IgniteButton variant="primary" color="light" size="xs">
          <IconOrder class="mr-3" />
          <span>Newest</span>
        </IgniteButton>
      </div>
    </div>

    <div class="mt-7 md:mt-8">
      <!-- table -->
      <div class="">
        <!-- header -->
        <div
          class="igntite-title border-b border-border pb-5 text-2 font-semibold text-muted md:pb-6 md:text-3"
        >
          <div class="-mx-5 flex justify-between lg:px-5.5">
            <IgniteText as="div" class="w-full px-5 md:w-[30%] xl:w-[18.75rem]">
              Investor
            </IgniteText>
            <IgniteText
              as="div"
              class="hidden shrink-0 px-5 md:block md:w-[15%] xl:w-[15rem]"
            >
              Vouchers Purchased
            </IgniteText>
            <IgniteText
              as="div"
              class="hidden shrink-0 px-5 md:block md:w-[20%] xl:w-[15rem]"
            >
              Investment
            </IgniteText>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 md:pt-8">
          <div
            v-for="bid in bidsAll"
            :key="bid.id"
            class="mt-6 border-t border-border pt-6 first:mt-0 first:border-t-0 first:pt-0 md:mt-9 md:border-t-0 md:pt-0"
          >
            <div
              class="igntite-text -mx-5 flex flex-wrap items-center justify-between text-2 md:flex-nowrap md:text-3 lg:px-5.5"
            >
              <div
                class="flex w-full items-center px-5 md:block md:w-[30%] md:shrink-0 lg:flex xl:w-[18.75rem]"
              >
                <IgniteText
                  as="span"
                  class="font-semibold md:block lg:inline"
                  >{{ bid.bidder }}</IgniteText
                >
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[15%] md:shrink-0 xl:w-[15rem]"
              >
                <IgniteText as="strong" class="mr-1 inline-block md:hidden"
                  >Vouchers Purchased:</IgniteText
                >
                <span class="font-medium">
                  <IgniteNumber as="span" :number="bid.coin?.amount" />
                  <IgniteText as="span">
                    ({{
                      (Number(bid.coin?.amount) / Number(supply.amount)) * 100
                    }}%)</IgniteText
                  >
                </span>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[20%] md:shrink-0 xl:w-[15rem]"
              >
                <IgniteText as="strong" class="mr-1 inline-block md:hidden"
                  >Investment:</IgniteText
                >
                <span class="inline-flex items-center font-medium">
                  <IgniteDenom
                    modifier="avatar"
                    :denom="getDenomName(currency)"
                    :title="getDenomName(currency)"
                    size="small"
                    class="mr-3 lg:mr-5"
                  />
                  <IgniteNumber
                    :number="Number(bid.coin?.amount) * Number(bid.price)"
                  />
                  <IgniteText as="span" class="ml-1">{{ currency }}</IgniteText>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="hasNextPage && !isFetchingNextPage"
        class="mt-7 text-center md:mt-8.5"
      >
        <IgniteButton
          variant="primary"
          color="primary"
          size="md"
          @click="() => fetchNextPage()"
        >
          View more
        </IgniteButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.status {
  @apply -mx-3 flex items-center text-2 font-medium;

  &__item {
    @apply flex items-center justify-center px-3;
  }
}

.icon {
  @apply mr-1 h-5 w-5 text-primary;
}
</style>
