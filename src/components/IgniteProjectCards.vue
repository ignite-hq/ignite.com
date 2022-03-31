<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="grid grid-cols-1 l:grid-cols-12 xl:grid-cols-2 gap-6 m:gap-7">
      <div
        class="l:col-start-3 xl:col-start-auto l:col-span-8 xl:col-span-1 px-0"
      >
        <IgniteCard :shadow="true" class="flex flex-col justify-between">
          <IgniteProgressBar
            :items="progressBar.items"
            :label="false"
            class="mt-2"
          />
          <div class="mt-6 ignt-title font-semibold font-title text-5 m:text-7">
            300,000 UST
          </div>
          <div class="mt-4 ignt-text text-muted text-3">
            raised of 3,000,000 UST
          </div>
          <div class="mt-7 m:mt-8 sm:flex items-center justify-between">
            <div class="flex items-center">
              <div class="mr-5 ignt-title font-title text-5 m:text-6">25</div>
              <div class="ignt-text text-3 text-muted">Days remaining</div>
            </div>
            <div class="mt-4 sm:mt-0">
              <IgniteButton variant="primary" class="w-full sm:w-auto"
                >Invest</IgniteButton
              >
            </div>
          </div>
        </IgniteCard>
      </div>

      <div
        class="l:col-start-3 xl:col-start-auto l:col-span-8 xl:col-span-1 px-0"
      >
        <IgniteCard :shadow="true" class="flex flex-col justify-between">
          <div
            class="ignt-title font-semibold text-center text-muted text-3 m:text-4"
          >
            Validator Incentives
          </div>
          <div class="sm:flex justify-between mt-6">
            <div class="">
              <div class="flex items-center justify-center">
                <SpDenom
                  modifier="avatar"
                  denom="denom"
                  title="denom"
                  class="mr-3"
                />
                <div class="ignt-title font-title text-5 m:text-6">000%</div>
              </div>
              <div class="mt-4 ignt-text text-muted text-center">
                Chain Vouchers
              </div>
            </div>
            <div class="my-3 sm:my-0 sm:mx-3 text-5 text-inactive text-center">
              +
            </div>
            <div class="">
              <div class="flex items-center justify-center">
                <SpDenom
                  modifier="avatar"
                  denom="denom"
                  title="denom"
                  class="mr-3"
                />
                <div class="ignt-title font-title text-5 m:text-6">00M UST</div>
              </div>
              <div class="mt-4 ignt-text text-muted text-center">
                Testnet Incentives
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center mt-7.5">
            <IgniteButton variant="primary" class="w-full sm:w-auto"
              >Become a Validator</IgniteButton
            >
          </div>
        </IgniteCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectHeader'
})
</script>

<script setup lang="ts">
import SpDenom from '@starport/vue/src/components/SpDenom/SpDenom.vue'

import { ProgressBarItem } from '../utils/types'
import IgniteCard from './IgniteCard.vue'
import IgniteProgressBar from './IgniteProgressBar.vue'
import IgniteButton from './IgniteButton.vue'

const progressBar = {
  items: [
    {
      value: '10',
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}
</script>

<style scoped lang="postcss"></style>
