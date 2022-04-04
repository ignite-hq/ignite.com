<template>
  <IgniteCard
    :shadow="true"
    class="flex justify-between flex-col pt-8 m:pt-9 px-5 sm:px-7 m:px-8 pb-7.5"
    :class="
      isWide && [
        'l:flex-row',
        'l:items-center',
        'l:flex-wrap',
        'xl:flex-nowrap'
      ]
    "
  >
    <div
      class="ignt-title font-semibold text-title font-title text-center text-3"
      :class="isWide ? ['l:text-7', 'l:max-w-sm', 'l:text-left'] : ['m:text-4']"
    >
      Validator Incentives
    </div>
    <div
      class="sm:flex justify-center w-[100%] mt-8"
      :class="
        isWide && [
          'xl:mt-0',
          'l:order-last',
          'xl:order-none',
          'l:justify-start',
          'xl:justify-center'
        ]
      "
    >
      <div class="">
        <div class="flex items-center justify-center">
          <SpDenom modifier="avatar" denom="denom" title="denom" class="mr-3" />
          <div class="ignt-title font-title text-5 m:text-6">000%</div>
        </div>
        <div class="mt-5 ignt-text text-muted text-center">Chain Vouchers</div>
      </div>
      <div class="my-3 sm:my-0 sm:mx-6 text-5 text-inactive text-center">+</div>
      <div class="">
        <div class="flex items-center justify-center">
          <SpDenom modifier="avatar" denom="denom" title="denom" class="mr-3" />
          <div class="ignt-title font-title text-5 m:text-6">00M UST</div>
        </div>
        <div class="mt-5 ignt-text text-muted text-center">
          Testnet Incentives
        </div>
      </div>
    </div>
    <div
      class="m:shrink-0 flex items-center justify-center mt-8.5"
      :class="isWide && 'l:mt-0'"
    >
      <IgniteButton variant="primary" class="w-full sm:w-auto"
        >Become a validator</IgniteButton
      >
    </div>
  </IgniteCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCardValidator'
})
</script>

<script setup lang="ts">
import SpDenom from '@starport/vue/src/components/SpDenom/SpDenom.vue'

import { ProgressBarItem } from '../../utils/types'
import IgniteButton from '../IgniteButton.vue'
import IgniteCard from '../IgniteCard.vue'

defineProps({
  isWide: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="postcss"></style>
