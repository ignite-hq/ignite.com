<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="ignite-title font-title text-center text-5">
      Vesting schedule
    </div>
    <div class="ignite-text mt-5 text-center text-3 text-muted">
      Pre-determined schedule for token distribution
    </div>

    <div class="mt-7 m:mt-9">
      <!-- table -->
      <div class="">
        <!-- header -->
        <div
          class="pb-5 m:pb-6 border-b border-border igntite-title text-muted text-2 m:text-3 font-semibold"
        >
          <div class="flex -mx-5">
            <div class="px-5 w-full">
              <div class="pl-[2.25rem] m:pl-[3rem] l:pl-[4.25rem]">
                Category
              </div>
            </div>
            <div class="hidden m:block px-5 shrink-0 w-[11.5rem] text-center">
              Allocation
            </div>
            <div class="hidden m:block px-5 shrink-0 w-[11.5rem] text-center">
              Duration
            </div>
            <div class="hidden m:block px-5 w-full">Dates</div>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 m:pt-8">
          <div
            v-for="(item, key) in schedule"
            :key="item.category"
            class="pt-6 m:pt-0 first:pt-0 mt-6 m:mt-9 first:mt-0 border-t border-border first:border-t-0 m:border-t-0"
          >
            <div
              class="flex items-center flex-wrap m:flex-nowrap -mx-5 igntite-text text-2 m:text-3"
            >
              <div class="flex items-center px-5 w-full">
                <div
                  class="inline-flex justify-center items-center shrink-0 w-[1.75rem] m:w-[2rem] h-[1.75rem] m:h-[2rem] l:ml-[1.25rem] mr-3 m:mr-5 rounded-xs bg-gray-30 font-semibold text-1 m:text-2"
                >
                  {{ key + 1 }}
                </div>
                <div class="font-semibold">{{ item.category }}</div>
              </div>
              <div
                class="px-5 mt-4 m:mt-0 m:shrink-0 w-full m:w-[11.5rem] m:text-center text-muted"
              >
                <strong class="inline-block m:hidden mr-1">Allocation:</strong>
                <span>{{ item.allocation }}</span>
              </div>
              <div
                class="px-5 mt-4 m:mt-0 m:shrink-0 w-full m:w-[11.5rem] m:text-center text-muted"
              >
                <strong class="inline-block m:hidden mr-1">Duration:</strong>
                <span>{{ item.duration }}</span>
              </div>
              <div class="px-5 mt-4 m:mt-0 w-full text-muted">
                <strong class="inline-block m:hidden mr-1">Dates:</strong>
                <span>{{ item.dates }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus',
  data() {
    return {
      schedule: [
        {
          category: 'Marketing',
          allocation: '00.0%',
          duration: '00 Months',
          dates: 'Feb 1, 2022 - Nov 1, 2022'
        },
        {
          category: 'Fundraiser',
          allocation: '00%',
          duration: '1 Day',
          dates: 'March 26, 2022'
        },
        {
          category: 'Airdrop',
          allocation: '0%',
          duration: '1 Month',
          dates: 'July 1, 2022 - July 31, 2022'
        },
        {
          category: 'Community Pool',
          allocation: '00%',
          duration: '1 Year',
          dates: 'May 15, 2022 - May 15, 2023'
        },
        {
          category: 'Public Sale',
          allocation: '00.0%',
          duration: '00 Months',
          dates: 'July 1, 2022 - Dec 1, 2023'
        },
        {
          category: 'Core Team',
          allocation: '00%',
          duration: '0 Years',
          dates: 'September 22, 2022 - September 22, 2028'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts"></script>

<style scoped lang="postcss">
.status {
  @apply flex items-center -mx-3 font-medium text-2;

  &__item {
    @apply flex justify-center items-center px-3;
  }
}

.icon {
  @apply w-5 h-5 text-primary mr-1;
}
</style>
