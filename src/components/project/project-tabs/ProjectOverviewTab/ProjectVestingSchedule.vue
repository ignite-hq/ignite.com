<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectStatus',
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

<script setup lang="ts">
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
</script>

<template>
  <IgniteContainer>
    <IgniteHeading as="div" class="text-center font-title text-5">
      Vesting schedule
    </IgniteHeading>
    <IgniteText as="div" class="mt-5 text-center text-3 text-muted">
      Pre-determined schedule for token distribution
    </IgniteText>

    <div class="mt-7 md:mt-9">
      <!-- table -->
      <div class="">
        <!-- header -->
        <div
          class="igntite-title border-b border-border pb-5 text-2 font-semibold text-muted md:pb-6 md:text-3"
        >
          <div class="-mx-5 flex">
            <div class="w-full px-5">
              <div class="pl-[2.25rem] md:pl-[3rem] lg:pl-[4.25rem]">
                Category
              </div>
            </div>
            <div class="hidden w-[11.5rem] shrink-0 px-5 text-center md:block">
              Allocation
            </div>
            <div class="hidden w-[11.5rem] shrink-0 px-5 text-center md:block">
              Duration
            </div>
            <div class="hidden w-full px-5 md:block">Dates</div>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 md:pt-8">
          <div
            v-for="(item, key) in schedule"
            :key="item.category"
            class="mt-6 border-t border-border pt-6 first:mt-0 first:border-t-0 first:pt-0 md:mt-9 md:border-t-0 md:pt-0"
          >
            <div
              class="igntite-text -mx-5 flex flex-wrap items-center text-2 md:flex-nowrap md:text-3"
            >
              <div class="flex w-full items-center px-5">
                <div
                  class="mr-3 inline-flex h-[1.75rem] w-[1.75rem] shrink-0 items-center justify-center rounded-xs bg-gray-30 text-1 font-semibold md:mr-5 md:h-[2rem] md:w-[2rem] md:text-2 lg:ml-[1.25rem]"
                >
                  {{ key + 1 }}
                </div>
                <div class="font-semibold">{{ item.category }}</div>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[11.5rem] md:shrink-0 md:text-center"
              >
                <strong class="mr-1 inline-block md:hidden">Allocation:</strong>
                <span>{{ item.allocation }}</span>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[11.5rem] md:shrink-0 md:text-center"
              >
                <strong class="mr-1 inline-block md:hidden">Duration:</strong>
                <span>{{ item.duration }}</span>
              </div>
              <div class="mt-4 w-full px-5 text-muted md:mt-0">
                <strong class="mr-1 inline-block md:hidden">Dates:</strong>
                <span>{{ item.dates }}</span>
              </div>
            </div>
          </div>
        </div>
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
