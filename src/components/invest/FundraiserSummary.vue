<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserSummary'
})
</script>

<script lang="ts" setup>
import IgniteButton from '../ui/IgniteButton.vue'
import IgniteHeading from '../ui/IgniteHeading.vue'
import IgniteText from '../ui/IgniteText.vue'
import IgniteNumber from '../ui/IgniteNumber.vue'
interface Emits {
  (e: 'publish'): void
}

interface Props {
  totalSaleValue: number
  amountSaleOverTotal: string
  totalSaleAmount: number
  saleDenom: string
  totalFee: number
  feeDenom: string
  totalRaisePotential: number
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()
</script>

<template>
  <div class="mt-10 bg-gray-30 p-9">
    <div class="flex grow flex-row">
      <div class="flex grow flex-col">
        <IgniteHeading class="text-left font-title text-7 font-semibold">
          Fundraiser Summary
        </IgniteHeading>
      </div>
      <div class="flex grow flex-col">
        <div class="flex flex-row items-center justify-between">
          <div class="flex-col">
            <IgniteText class="text-3 font-medium text-gray-660">
              Raising
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-left font-title text-5 font-semibold">
              <IgniteNumber :number="props.totalSaleValue" />
              {{ props.saleDenom }}
            </IgniteText>
          </div>
        </div>
        <div class="mt-6 flex flex-row items-center justify-between">
          <div class="flex-col">
            <IgniteText class="text-3 font-medium text-gray-660">
              Fee
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-4 font-normal text-gray-660">
              - <IgniteNumber :number="props.totalFee" />
              {{ props.saleDenom }}
            </IgniteText>
          </div>
        </div>
        <div class="mt-6 flex flex-row items-center justify-between">
          <div class="flex-col">
            <IgniteText class="text-3 font-medium text-gray-660">
              Total raise potential
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-4 font-normal text-gray-660">
              <IgniteNumber :number="props.totalRaisePotential" />
              {{ props.saleDenom }}
            </IgniteText>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-9 flex grow flex-row justify-between">
      <div class="flex w-1/2">
        <div class="flex grid-cols-3 gap-6">
          <div class="flex-col">
            <IgniteText class="text-2 text-gray-660"> Type </IgniteText>
            <IgniteText class="mt-1 text-3 font-medium text-gray-0">
              Sale
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-2 text-gray-660"> Vouchers </IgniteText>
            <IgniteText class="mt-1 text-3 font-medium text-gray-0">
              <IgniteNumber :number="props.totalSaleAmount" />

              ({{ amountSaleOverTotal }}%)
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-2 text-gray-660"> Dates </IgniteText>
            <IgniteText class="mt-1 text-3 font-medium text-gray-0">
              March 16-17, 2022
            </IgniteText>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 place-content-end">
        <IgniteButton class="px-6">
          <span>Cancel</span>
        </IgniteButton>
        <IgniteButton
          variant="primary"
          color="primary"
          class="px-6"
          @click="emit('publish')"
        >
          <span>Publish</span>
        </IgniteButton>
      </div>
    </div>
  </div>
</template>
