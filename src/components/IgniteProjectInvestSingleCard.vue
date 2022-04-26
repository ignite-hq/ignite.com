<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { ProgressBarItem } from '../utils/types'
import IconCanceled from './icons/IconCanceled.vue'
import IconCheckMarkThin from './icons/IconCheckMarkThin.vue'
import IconClock from './icons/IconClock.vue'
import IconDots from './icons/IconDots.vue'
import IconSale from './icons/IconSale.vue'
import IconStack from './icons/IconStack.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteNumber from './IgniteNumber.vue'
import IgniteProgressBar from './IgniteProgressBar.vue'
import IgniteRoadmap from './IgniteRoadmap.vue'
import IgniteScrollableSection from './IgniteScrollableSection.vue'
import IgniteText from './IgniteText.vue'
import IgniteDenom from './ui/IgniteDenom.vue'

defineProps({
  data: { type: Object, required: true }
})

const progressBar = {
  items: [
    {
      value: '2',
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}

const status = 'Sale'

const roadmapItems = [
  {
    status: 'complited',
    name: 'Fundraiser published'
  },
  {
    name: 'Project started',
    date: '03.25'
  },
  {
    name: 'Sale begins',
    date: '04.01 at 9 AM UTC'
  },
  {
    name: 'Sale ends',
    date: '04.01 at 9 AM UTC'
  }
]
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div class="border-b border-border pb-8">
      <div
        class="grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-12"
      >
        <div
          class="md:col-span-8 md:text-center lg:col-span-4 lg:text-left xl:col-span-4"
        >
          <IgniteProgressBar :items="progressBar.items" :label="false" />
          <IgniteHeading
            as="div"
            class="mt-5 font-title text-4 font-semibold md:text-5"
          >
            <IgniteNumber :number="'0'" />
            UST
          </IgniteHeading>
          <IgniteHeading as="div" class="mt-3 text-3 text-muted">
            Raised of
            <strong> <IgniteNumber :number="'3000000'" /> UST </strong>
          </IgniteHeading>
        </div>
        <div class="md:col-span-8 lg:col-span-8 xl:col-span-8">
          <div
            class="grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-7.5 md:text-center lg:justify-end lg:text-left"
          >
            <div class="col-span-1 md:col-auto md:w-[auto!important]">
              <IgniteText as="div" class="text-2 text-muted">Type</IgniteText>
              <IgniteHeading
                as="div"
                class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
              >
                <IconDots v-if="status === 'Ongoing'" class="mr-3" />
                <IconClock v-if="status === 'Upcoming'" class="mr-3" />
                <IconCheckMarkThin v-if="status === 'Funded'" class="mr-3" />
                <IconCanceled v-if="status === 'Canceled'" class="mr-3" />
                <IconSale v-if="status === 'Sale'" class="mr-3" />
                {{ status }}
              </IgniteHeading>
            </div>

            <div class="col-span-1 md:col-auto md:w-[auto!important]">
              <IgniteText as="div" class="text-2 text-muted"
                >Vouchers</IgniteText
              >
              <IgniteHeading
                as="div"
                class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
              >
                <IconStack class="mr-3" />
                6M
                <span class="text-muted">(3%)</span>
              </IgniteHeading>
            </div>

            <div class="col-span-1 md:col-auto md:w-[auto!important]">
              <IgniteText as="div" class="text-2 text-muted">Price</IgniteText>
              <IgniteHeading
                as="div"
                class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
              >
                <IgniteDenom
                  modifier="avatar"
                  denom="denom"
                  title="denom"
                  size="small"
                  class="mr-3"
                />
                0.5 UST
                <span class="ml-1 inline-block text-muted">ea.</span>
              </IgniteHeading>
            </div>
          </div>
          <div class="relative mt-7 lg:flex lg:justify-end">
            <IgniteScrollableSection>
              <IgniteRoadmap
                :items="roadmapItems"
                align="right"
                type="fundraiser"
              />
            </IgniteScrollableSection>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
