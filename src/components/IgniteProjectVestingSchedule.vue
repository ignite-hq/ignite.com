<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="ignite-title text-center font-title text-5">
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
          class="igntite-title border-b border-border pb-5 text-2 font-semibold text-muted m:pb-6 m:text-3"
        >
          <div class="-mx-5 flex">
            <div class="w-full px-5">
              <div class="pl-[2.25rem] m:pl-[3rem] l:pl-[4.25rem]">
                Category
              </div>
            </div>
            <div class="hidden w-[11.5rem] shrink-0 px-5 text-center m:block">
              Allocation
            </div>
            <div class="hidden w-[11.5rem] shrink-0 px-5 text-center m:block">
              Duration
            </div>
            <div class="hidden w-full px-5 m:block">Dates</div>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 m:pt-8">
          <div
            v-for="(item, key) in schedule"
            :key="item.category"
            class="mt-6 border-t border-border pt-6 first:mt-0 first:border-t-0 first:pt-0 m:mt-9 m:border-t-0 m:pt-0"
          >
            <div
              class="igntite-text -mx-5 flex flex-wrap items-center text-2 m:flex-nowrap m:text-3"
            >
              <div class="flex w-full items-center px-5">
                <div
                  class="mr-3 inline-flex h-[1.75rem] w-[1.75rem] shrink-0 items-center justify-center rounded-xs bg-gray-30 text-1 font-semibold m:mr-5 m:h-[2rem] m:w-[2rem] m:text-2 l:ml-[1.25rem]"
                >
                  {{ key + 1 }}
                </div>
                <div class="font-semibold">{{ item.category }}</div>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted m:mt-0 m:w-[11.5rem] m:shrink-0 m:text-center"
              >
                <strong class="mr-1 inline-block m:hidden">Allocation:</strong>
                <span>{{ item.allocation }}</span>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted m:mt-0 m:w-[11.5rem] m:shrink-0 m:text-center"
              >
                <strong class="mr-1 inline-block m:hidden">Duration:</strong>
                <span>{{ item.duration }}</span>
              </div>
              <div class="mt-4 w-full px-5 text-muted m:mt-0">
                <strong class="mr-1 inline-block m:hidden">Dates:</strong>
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
  @apply -mx-3 flex items-center text-2 font-medium;

  &__item {
    @apply flex items-center justify-center px-3;
  }
}

.icon {
  @apply mr-1 h-5 w-5 text-primary;
}
</style>
