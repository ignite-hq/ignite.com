<template>
  <IgniteCard
    :shadow="true"
    class="flex flex-col justify-between gap-9 px-5 pt-8 pb-7.5 sm:px-7 md:px-8 md:pt-9"
    :class="isWide && 'sm:flex-row'"
  >
    <div v-if="!isOngoing" class="w-full">
      <IgniteProgressBar :items="progressBar.items" :label="false" />
      <div class="ignite-title mt-6 font-title text-5 font-semibold md:text-7">
        300,000 UST
      </div>
      <div class="ignite-text mt-5 text-3 text-muted">
        raised of 3,000,000 UST
      </div>
    </div>
    <div v-else class="w-full" :class="isWide && 'xl:flex'">
      <div
        class="ignite-title mr-8 max-w-sm font-title text-5 font-semibold md:text-7"
      >
        Registration open now
      </div>
      <div class="mt-6 w-full" :class="isWide && 'xl:mt-2'">
        <div
          class="ignite-text text-3 text-muted"
          :class="isWide && 'max-w-md'"
        >
          Register to participate in the upcoming Project Name fundraiser. The
          more IGNT you stake, the bigger your investment opportunity.
        </div>
      </div>
    </div>
    <div
      class="shrink-0 sm:flex"
      :class="
        !isWide ? ['mt-8'] : ['flex-col', 'justify-end', 'xl:justify-start']
      "
    >
      <div
        class="flex flex-col justify-center"
        :class="!isWide && ['sm:order-last', 'sm:h-[100%]']"
      >
        <div class="ignite-text mb-2 text-2 text-muted">Sale ends in</div>
        <div class="ignite-title font-title text-4">3 days</div>
      </div>
      <div class="mt-4" :class="!isWide ? ['sm:mt-0', 'sm:mr-6'] : 'sm:mt-6'">
        <IgniteButton variant="primary" class="w-full sm:w-auto"
          >View fundraiser</IgniteButton
        >
      </div>
    </div>
  </IgniteCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCardFundraiser'
})
</script>

<script setup lang="ts">
import { ProgressBarItem } from '../../utils/types'
import IgniteButton from '../IgniteButton.vue'
import IgniteCard from '../IgniteCard.vue'
import IgniteProgressBar from '../IgniteProgressBar.vue'

const progressBar = {
  items: [
    {
      value: '10',
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}

defineProps({
  isWide: {
    type: Boolean,
    default: false
  },
  isOngoing: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="postcss"></style>
