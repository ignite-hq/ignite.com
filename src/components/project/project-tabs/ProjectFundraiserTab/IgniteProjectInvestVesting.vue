<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectStatus',
  data() {
    return {
      schedule: [
        {
          dates: 'April 1, 2022',
          time: '9:00 AM UTC',
          percentage: '10%',
          amount: '300000'
        },
        {
          dates: 'May 1, 2022',
          time: '9:00 AM UTC',
          percentage: '10%',
          amount: '300000'
        },
        {
          dates: 'June 1, 2022',
          time: '9:00 AM UTC',
          percentage: '10%',
          amount: '300000'
        },
        {
          dates: 'July 1, 2022',
          time: '9:00 AM UTC',
          percentage: '10%',
          amount: '300000'
        },
        {
          dates: 'August 1, 2022',
          time: '9:00 AM UTC',
          percentage: '10%',
          amount: '300000'
        }
      ]
    }
  }
})
</script>

<script setup lang="ts">
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const curency = 'UST'
</script>

<template>
  <IgniteContainer>
    <IgniteHeading as="div" class="font-title text-5">
      Vesting schedule
    </IgniteHeading>
    <IgniteText as="div" class="mt-5 text-3 text-muted">
      Schedule for fund release for the project’s use
    </IgniteText>

    <div class="mt-7 md:mt-8">
      <!-- table -->
      <div class="">
        <!-- header -->
        <div
          class="igntite-title border-b border-border pb-5 text-2 font-semibold text-muted md:pb-6 md:text-3"
        >
          <div class="-mx-5 flex">
            <div class="w-full px-5">
              <div class="pl-[2.25rem] md:pl-[3rem] lg:pl-[4.25rem]">
                Distribution Date
              </div>
            </div>
            <div
              class="hidden shrink-0 px-5 text-center md:block md:w-[11rem] lg:w-[15rem]"
            >
              Percentage
            </div>
            <div
              class="hidden shrink-0 px-5 text-center md:block md:w-[13rem] lg:w-[15rem]"
            >
              Amount
            </div>
          </div>
        </div>

        <!-- body -->
        <div class="pt-6 md:pt-8">
          <div
            v-for="(item, key) in schedule"
            :key="item.dates"
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
                <div>
                  <span class="font-semibold">{{ item.dates }}</span>
                  <span class="text-muted"> at </span>
                  <span class="font-semibold">{{ item.time }}</span>
                </div>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[11rem] md:shrink-0 md:text-center lg:w-[15rem]"
              >
                <strong class="mr-1 inline-block md:hidden">Percentage:</strong>
                <span>{{ item.percentage }}</span>
              </div>
              <div
                class="mt-4 w-full px-5 text-muted md:mt-0 md:w-[13rem] md:shrink-0 md:text-center lg:w-[15rem]"
              >
                <strong class="mr-1 inline-block md:hidden">Amount:</strong>
                <span class="inline-flex items-center">
                  <IgniteDenom
                    modifier="avatar"
                    denom="denom"
                    title="denom"
                    size="small"
                    class="mr-3 lg:mr-5"
                  />
                  <IgniteNumber :number="item.amount" />
                  <span class="ml-1">{{ curency }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-7 text-center md:mt-8.5">
        <IgniteButton variant="primary" color="primary" size="md">
          View 5 more
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
