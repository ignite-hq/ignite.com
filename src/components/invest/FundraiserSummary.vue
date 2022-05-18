<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserSummary'
})
</script>

<script lang="ts" setup>
import dayjs from 'dayjs'

import useAddress from '~/composables/wallet/useAddress'

import IgniteButton from '../ui/IgniteButton.vue'
import IgniteHeading from '../ui/IgniteHeading.vue'
import IgniteNumber from '../ui/IgniteNumber.vue'
import IgniteText from '../ui/IgniteText.vue'

interface Emits {
  (e: 'publish'): void
  (e: 'cancel'): void
}

interface Props {
  totalSaleValue: number
  amountSaleOverTotal: string
  totalSaleAmount: number
  saleDenom: string | undefined
  startDate: Date
  endDate: Date
  ableToPublish: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

// composables
const { address } = useAddress()

// methods
function formatRange(start: Date, end: Date): string {
  const startAsDayJS = dayjs(start)
  const endAsDayJS = dayjs(end)

  let formatted: string

  const sameYear = startAsDayJS.year() === endAsDayJS.year()

  const sameMonthAndYear =
    sameYear && startAsDayJS.month() === endAsDayJS.month()

  if (sameMonthAndYear) {
    formatted = `${startAsDayJS.format('MMMM')} ${startAsDayJS.format(
      'D'
    )}-${endAsDayJS.format('D')}, ${endAsDayJS.format('YYYY')}`
  } else if (sameYear) {
    formatted = `${startAsDayJS.format('MMMM D')} - ${endAsDayJS.format(
      'MMMM D'
    )}, ${endAsDayJS.format('YYYY')}`
  } else {
    formatted = `${startAsDayJS.format('MMMM D, YYYY')} - ${dayjs(
      endAsDayJS
    ).format('MMMM D, YYYY')}`
  }

  return formatted
}
</script>

<template>
  <div class="mt-10 bg-gray-30 p-9">
    <div class="flex grow flex-row">
      <div class="flex grow flex-col">
        <IgniteHeading class="text-left font-title text-7 font-semibold">
          Fundraiser Summary
        </IgniteHeading>
      </div>
      <div class="flex grow flex-col justify-center">
        <div class="flex flex-row items-center justify-between">
          <div class="flex-col">
            <IgniteText class="text-3 font-medium text-gray-660">
              Total raise potential
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-4 font-normal text-gray-660">
              <IgniteNumber :number="props.totalSaleValue" />
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
            <IgniteText class="text-2 text-gray-660"> Vouchers </IgniteText>
            <IgniteText class="mt-1 text-3 font-medium text-gray-0">
              <IgniteNumber
                :number="props.totalSaleAmount"
                notation="compact"
              />
              ({{ amountSaleOverTotal }}%)
            </IgniteText>
          </div>
          <div class="flex-col">
            <IgniteText class="text-2 text-gray-660"> Dates </IgniteText>
            <IgniteText class="mt-1 text-3 font-medium text-gray-0">
              {{ formatRange(startDate, endDate) }}
            </IgniteText>
          </div>
        </div>
      </div>
      <div class="flex w-1/2 place-content-end">
        <IgniteButton
          variant="primary"
          class="mr-6 ml-6 border border-primary px-4"
          @click="emit('cancel')"
        >
          <span>Cancel</span>
        </IgniteButton>
        <IgniteButton
          variant="primary"
          color="primary"
          class="px-6"
          :disabled="!props.ableToPublish || !address"
          @click="emit('publish')"
        >
          <span>{{ !!address ? 'Publish' : 'Sign in' }}</span>
        </IgniteButton>
      </div>
    </div>
  </div>
</template>
