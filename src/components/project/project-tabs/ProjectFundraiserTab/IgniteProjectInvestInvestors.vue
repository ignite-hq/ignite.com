<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestInvestors',
  data() {
    return {
      investors: [
        {
          dates: 'April 1, 2022',
          time: '9:00 AM UTC',
          investor: 'ignite103...a34h',
          status: 'Tier 1',
          purchased: '1000',
          purchasedPercentage: '0.017%',
          investment: '500'
        },
        {
          dates: 'May 1, 2022',
          time: '9:00 AM UTC',
          investor: 'ignite193...a42v',
          status: 'Tier 2',
          purchased: '5000',
          purchasedPercentage: '0.083%',
          investment: '2500'
        },
        {
          dates: 'June 1, 2022',
          time: '9:00 AM UTC',
          investor: 'ignite1x3...a88l',
          status: 'Tier 3',
          purchased: '20000',
          purchasedPercentage: '0.33%',
          investment: '10000'
        },
        {
          dates: 'July 1, 2022',
          time: '9:00 AM UTC',
          investor: 'ignite1j3...ar14',
          status: 'Tier 1',
          purchased: '1000',
          purchasedPercentage: '0.017%',
          investment: '20000'
        },
        {
          dates: 'August 1, 2022',
          time: '9:00 AM UTC',
          investor: 'ignite113...ax00',
          status: 'Tier 3',
          purchased: '600000',
          purchasedPercentage: '10%',
          investment: '300000'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts">
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IconOrder from '~/components/icons/IconOrder.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const curency = 'UST'
</script>

<template>
  <IgniteContainer>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-7 lg:grid-cols-12">
      <div class="px-0 md:col-span-3 lg:col-span-10">
        <IgniteHeading as="div" class="font-title text-5">
          Investors
        </IgniteHeading>
        <IgniteText as="div" class="mt-5 text-3 text-muted">
          <IgniteNumber number="2340" as="strong" /> Active investors
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
            <IgniteText
              as="div"
              class="hidden w-full shrink-0 px-5 md:block md:w-[25%] xl:w-[18.75rem]"
            >
              Purchase Date
            </IgniteText>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 md:pt-8">
          <div
            v-for="item in investors"
            :key="item.dates"
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
                  >{{ item.investor }}</IgniteText
                >
                <IgniteText
                  as="span"
                  class="ignite-badge ml-5 md:ml-0 md:mt-3 lg:ml-5 lg:mt-0"
                  >{{ item.status }}</IgniteText
                >
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[15%] md:shrink-0 xl:w-[15rem]"
              >
                <IgniteText as="strong" class="mr-1 inline-block md:hidden"
                  >Vouchers Purchased:</IgniteText
                >
                <span class="font-medium">
                  <IgniteNumber as="span" :number="item.purchased" />
                  <IgniteText as="span">
                    ({{ item.purchasedPercentage }})</IgniteText
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
                    denom="denom"
                    title="denom"
                    size="small"
                    class="mr-3 lg:mr-5"
                  />
                  <IgniteNumber :number="item.investment" />
                  <IgniteText as="span" class="ml-1">{{ curency }}</IgniteText>
                </span>
              </div>
              <div
                class="mt-4 w-full px-5 md:mt-0 md:w-[25%] md:shrink-0 xl:w-[18.75rem]"
              >
                <IgniteText
                  as="strong"
                  class="mr-1 inline-block text-muted md:hidden"
                  >Purchase Date:</IgniteText
                >
                <span>
                  <IgniteText
                    as="span"
                    class="font-semibold md:block lg:inline"
                    >{{ item.dates }}</IgniteText
                  >
                  <IgniteText as="span" class="text-muted"> at </IgniteText>
                  <IgniteText as="span" class="font-semibold">{{
                    item.time
                  }}</IgniteText>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-7 text-center md:mt-8.5">
        <IgniteButton variant="primary" color="primary" size="md">
          View 40 more
        </IgniteButton>
      </div>
    </div>
  </IgniteContainer>
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
