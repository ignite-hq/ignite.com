<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInvestVoucherAllocation'
})
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/atoms/IgniteHeading.vue'
import IgniteText from '~/components/ui/atoms/IgniteText.vue'
import IgniteDenom from '~/components/ui/molecules/IgniteDenom.vue'
import IgniteProgressBar from '~/components/ui/molecules/IgniteProgressBar.vue'
import { ProgressBarItem } from '~/utils/types'

const progressBar = {
  items: [
    {
      value: '11',
      bgColor: 'bg-primary',
      split: true
    },
    {
      value: '9',
      bgColor: 'bg-secondary'
    },
    {
      value: '80'
    }
  ] as ProgressBarItem[]
}
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div
      class="relative h-[100%] rounded border border-border bg-white-1000 px-5 py-7 sm:px-7 md:px-9 md:py-8 xl:px-10.5"
    >
      <div class="grid grid-cols-1 gap-7 md:grid-cols-2">
        <div class="">
          <IgniteHeading
            as="div"
            class="font-title text-5 font-semibold md:text-7"
          >
            Voucher allocation
          </IgniteHeading>
          <div class="mt-7">
            <div class="flex items-center">
              <IgniteDenom
                size="small"
                modifier="avatar"
                denom="denom"
                title="denom"
                class="mr-3"
              />
              <IgniteHeading as="div" class="font-title text-3 md:text-4"
                >vYAWP</IgniteHeading
              >
            </div>
          </div>
        </div>
        <div class="">
          <div class="m-auto max-w-xs">
            <IgniteProgressBar :items="progressBar.items" denom="denom" />
          </div>
          <div
            class="mt-6 flex flex-wrap items-center justify-center gap-4 text-center lg:mt-8 lg:flex-nowrap lg:gap-7"
          >
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                9M
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-primary"
                ></span>
                <span>Distributed</span>
              </IgniteText>
            </div>
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                6M
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-secondary"
                ></span>
                <span>Fundraising</span>
              </IgniteText>
            </div>
            <div class="p-3">
              <IgniteHeading as="div" class="text-3 font-semibold md:text-4">
                85M
              </IgniteHeading>
              <IgniteText
                as="div"
                class="mt-3 flex items-center text-2 font-medium text-muted"
              >
                <span
                  class="mr-1 inline-block h-3 w-3 rounded-circle bg-gray-50"
                ></span>
                <span>Undistributed</span>
              </IgniteText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
