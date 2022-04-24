<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import { ProgressBarItem } from '../../../utils/types'
import IgniteHeading from '../../ui/atoms/IgniteHeading.vue'
import IgniteNumber from '../../ui/atoms/IgniteNumber.vue'
import IgniteText from '../../ui/atoms/IgniteText.vue'
import IconCalendar from '../../ui/icons/IconCalendar.vue'
import IconCanceled from '../../ui/icons/IconCanceled.vue'
import IconCheckMarkThin from '../../ui/icons/IconCheckMarkThin.vue'
import IconClock from '../../ui/icons/IconClock.vue'
import IconDots from '../../ui/icons/IconDots.vue'
import IconStack from '../../ui/icons/IconStack.vue'
import IconUser from '../../ui/icons/IconUser.vue'
import IgniteProgressBar from '../../ui/molecules/IgniteProgressBar.vue'

const props = defineProps({
  data: { type: Object, required: true }
})

const progressBar = {
  items: [
    {
      value: ((props.data.raised / props.data.goal) * 100).toString(),
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}
</script>

<template>
  <div class="rounded bg-bg py-6 px-5 shadow-max md:p-7.5">
    <IgniteProgressBar :items="progressBar.items" :label="false" size="xs" />
    <IgniteHeading
      as="div"
      class="mt-5 font-title text-4 font-semibold md:text-5"
    >
      <IgniteNumber :number="data.raised" />
      {{ data.curency }}
    </IgniteHeading>
    <IgniteHeading as="div" class="mt-3 text-3 text-muted">
      Raised of
      <strong> <IgniteNumber :number="data.goal" /> {{ data.curency }} </strong>
    </IgniteHeading>
    <div
      class="mt-7.5 grid grid-cols-2 gap-6 border-t border-border pt-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 xl:pt-7.5"
    >
      <div class="">
        <IgniteText as="div" class="text-2 text-muted"> Status </IgniteText>
        <IgniteHeading
          as="div"
          class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
        >
          <IconDots v-if="data.status === 'Ongoing'" class="mr-3" />
          <IconClock v-if="data.status === 'Upcoming'" class="mr-3" />
          <IconCheckMarkThin v-if="data.status === 'Funded'" class="mr-3" />
          <IconCanceled v-if="data.status === 'Canceled'" class="mr-3" />
          {{ data.status }}
        </IgniteHeading>
      </div>

      <div class="">
        <IgniteText as="div" class="text-2 text-muted"> Vouchers </IgniteText>
        <IgniteHeading
          as="div"
          class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
        >
          <IconStack class="mr-3" />
          {{ data.vouchers }}
        </IgniteHeading>
      </div>

      <div class="">
        <IgniteText as="div" class="text-2 text-muted"> Investors </IgniteText>
        <IgniteHeading
          as="div"
          class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
        >
          <IconUser class="mr-3" />
          <IgniteNumber :number="data.investors" />
        </IgniteHeading>
      </div>

      <div class="">
        <IgniteText as="div" class="text-2 text-muted"> Ended </IgniteText>
        <IgniteHeading
          as="div"
          class="mt-2 flex items-center text-2 font-semibold md:mt-3 md:text-3"
        >
          <IconCalendar class="mr-3" />
          <span
            :class="data.status === 'Canceled' && 'text-inactive line-through'"
          >
            {{ data.ends }}
          </span>
        </IgniteHeading>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
