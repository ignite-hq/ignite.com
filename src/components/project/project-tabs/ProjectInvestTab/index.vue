<script lang="ts">
export default {
  name: 'InvestTab'
}
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import InvestCard from './InvestCard.vue'
import InvestStart from './InvestStart.vue'
import InvestTitle from './InvestTitle.vue'
import InvestVoucherAllocation from './InvestVoucherAllocation.vue'
import useFundraisersAll from '~/composables/fundraising/useFundraisersAll'

let { fundraisers, isFetching } = useFundraisersAll()
console.log(fundraisers)

const fundraisers2 = [
  {
    title: 'Current',
    items: [
      {
        raised: '300000',
        goal: '3000000',
        curency: 'UST',
        status: 'Ongoing',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      }
    ]
  },
  {
    title: 'Current and upcoming',
    items: [
      {
        raised: '300000',
        goal: '3000000',
        curency: 'UST',
        status: 'Ongoing',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      },
      {
        raised: '0',
        goal: '3000000',
        curency: 'UST',
        status: 'Upcoming',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      }
    ]
  },
  {
    title: 'Previous',
    items: [
      {
        raised: '3000000',
        goal: '3000000',
        curency: 'UST',
        status: 'Funded',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '02.14.2022'
      },
      {
        raised: '1500000',
        goal: '3000000',
        curency: 'UST',
        status: 'Funded',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '11.07.2021'
      }
    ]
  },
  {
    title: 'Canceled',
    items: [
      {
        raised: '0',
        goal: '3000000',
        curency: 'UST',
        status: 'Canceled',
        vouchers: '6M (3%)',
        investors: '0',
        ends: '03.25.2022'
      }
    ]
  }
]
</script>

<template>
  <div>
    <InvestTitle class="mt-8 md:mt-10.5" />
    <InvestVoucherAllocation class="mt-7 md:mt-9" />
    <InvestStart class="mt-8 md:mt-10.5" />

    <div class="container-full container px-5 sm:px-5.5 lg:px-7">
      <div v-for="row in fundraisers" :key="row.title" class="mt-8 md:mt-10.5">
        <IgniteHeading
          as="div"
          class="font-title text-4 font-semibold md:text-5"
        >
          {{ row.title }}
        </IgniteHeading>
        <div
          class="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:gap-7 lg:grid-cols-2"
        >
          <div
            v-for="(item, key) in row.items"
            :key="`fundraisers_${row.title}_${key}`"
            class="relative z-[1]"
          >
            <InvestCard :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
