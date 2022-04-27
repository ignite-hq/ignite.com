<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { ProgressBarItem } from '../utils/types'
import IconCalendar from './icons/IconCalendar.vue'
import IconCanceled from './icons/IconCanceled.vue'
import IconCheckMarkThin from './icons/IconCheckMarkThin.vue'
import IconClock from './icons/IconClock.vue'
import IconDots from './icons/IconDots.vue'
import IconGuarantee from './icons/IconGuarantee.vue'
import IconSale from './icons/IconSale.vue'
import IconStack from './icons/IconStack.vue'
import IgniteHeading from './IgniteHeading.vue'
import IgniteLink from './IgniteLink.vue'
import IgniteNumber from './IgniteNumber.vue'
import IgniteProgressBar from './IgniteProgressBar.vue'
import IgniteRoadmap from './IgniteRoadmap.vue'
import IgniteScrollableSection from './IgniteScrollableSection.vue'
import IgniteText from './IgniteText.vue'
import IgniteDenom from './ui/IgniteDenom.vue'

defineProps({
  items: { type: Array },
  size: {
    type: String, // sm
    default: ''
  }
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
</script>

<template>
  <div
    class="w-full"
    :class="[
      size !== 'sm' && 'border-b border-border pb-8',
      size === 'sm' && 'mx-auto max-w-[28.5rem]'
    ]"
  >
    <div
      :class="[
        size !== 'sm' &&
          'grid grid-cols-1 gap-6 md:grid-cols-8 md:gap-7 lg:grid-cols-12'
      ]"
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
      <div
        class="md:col-span-8 lg:col-span-8 xl:col-span-8"
        :class="[size === 'sm' && 'mt-7.5 border-t border-border pt-5']"
      >
        <div
          class="grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-7.5 md:text-center lg:text-left"
          :class="[
            size !== 'sm' && 'lg:justify-end',
            size === 'sm' && 'lg:justify-start'
          ]"
        >
          <div
            v-if="size !== 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
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
            <IgniteText as="div" class="text-2 text-muted">Vouchers</IgniteText>
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
            >
              <IconStack class="mr-3" />
              6M
              <span class="text-muted">(3%)</span>
            </IgniteHeading>
          </div>

          <div
            v-if="size !== 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
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

          <div
            v-if="size === 'sm'"
            class="col-span-1 md:col-auto md:w-[auto!important]"
          >
            <IgniteText as="div" class="text-2 text-muted"
              >Sale begins</IgniteText
            >
            <IgniteHeading
              as="div"
              class="mt-2 flex items-center text-2 md:mt-3 md:text-3"
            >
              <IconCalendar class="mr-3" />
              <div>
                <span class="block sm:inline">April 1, 2022</span>
                <span class="text-muted"> at </span>
                <span class="">9 AM UTC</span>
              </div>
            </IgniteHeading>
          </div>
        </div>
        <div v-if="items" class="relative mt-7 lg:flex lg:justify-end">
          <IgniteScrollableSection>
            <IgniteRoadmap :items="items" align="right" type="fundraiser" />
          </IgniteScrollableSection>
        </div>
      </div>

      <div v-if="size === 'sm'" class="mt-6 md:mt-8.5">
        <IgniteLink
          to="/"
          class="flex w-full items-center justify-between rounded-sm border border-border p-5 text-primary hover:text-title"
        >
          <div class="flex items-center">
            <IconGuarantee class="mr-5" />
            <IgniteText as="span" class="font-normal text-title">
              Your investment is protected by Ignite.
            </IgniteText>
          </div>
          <IgniteText as="span" class="px-1 font-medium">
            Learn more
          </IgniteText>
        </IgniteLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
