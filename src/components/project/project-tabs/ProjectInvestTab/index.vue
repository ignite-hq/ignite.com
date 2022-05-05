<script lang="ts">
export default {
  name: 'ProjectInvestTab'
}
</script>

<script lang="ts" setup>
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import ProjectInvestCard from './ProjectInvestCard.vue'
import ProjectInvestStart from './ProjectInvestStart.vue'
import ProjectInvestTitle from './ProjectInvestTitle.vue'
import ProjectInvestVoucherAllocation from './ProjectInvestVoucherAllocation.vue'

const fundraisers = [
  {
    title: 'Current',
    items: [
      {
        id: '1',
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
        id: '2',
        raised: '300000',
        goal: '3000000',
        curency: 'UST',
        status: 'Ongoing',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '03.25.2022'
      },
      {
        id: '3',
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
        id: '4',
        raised: '3000000',
        goal: '3000000',
        curency: 'UST',
        status: 'Funded',
        vouchers: '6M (3%)',
        investors: '3420',
        ends: '02.14.2022'
      },
      {
        id: '5',
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
        id: '6',
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
    <ProjectInvestTitle class="mt-8 md:mt-10.5" />
    <ProjectInvestVoucherAllocation class="mt-7 md:mt-9" />
    <ProjectInvestStart class="mt-8 md:mt-10.5" />

    <IgniteContainer>
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
            <ProjectInvestCard :data="item" />
          </div>
        </div>
      </div>
    </IgniteContainer>
  </div>
</template>
