<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserSummary'
})
</script>

<script lang="ts" setup>
import dayjs from 'dayjs'

import IconCalendar from '~/components/icons/IconCalendar.vue'
import IconStack from '~/components/icons/IconStack.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteNumber from '~/components/ui/IgniteNumber.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import useAddress from '~/composables/wallet/useAddress'

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
  <div class="mt-9 bg-gray-30 py-8 md:mt-10 md:py-9.5">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-12">
        <div class="flex flex-col justify-between md:col-span-7 lg:col-span-8">
          <IgniteHeading
            class="text-left font-title text-5 font-semibold md:text-7"
          >
            Fundraiser Summary
          </IgniteHeading>

          <div class="mt-7 flex flex-col gap-5 sm:flex-row md:mt-9 md:gap-7">
            <div class="flex-col">
              <IgniteText class="text-2 text-muted"> Vouchers </IgniteText>
              <IgniteText
                class="mt-1 flex items-center text-3 font-medium text-gray-0"
              >
                <IconStack class="mr-3" stroke-width="1.3" />
                <IgniteNumber
                  :number="props.totalSaleAmount"
                  notation="compact"
                />
                ({{ amountSaleOverTotal }}%)
              </IgniteText>
            </div>
            <div class="flex-col">
              <IgniteText class="text-2 text-muted"> Dates </IgniteText>
              <IgniteText
                class="mt-1 flex items-center text-3 font-medium text-gray-0"
              >
                <IconCalendar class="mr-3" stroke-width="1.3" />
                {{ formatRange(startDate, endDate) }}
              </IgniteText>
            </div>
          </div>
        </div>

        <div
          class="mt-7 flex flex-col justify-between md:col-span-5 md:mt-0 lg:col-span-4"
        >
          <div class="flex flex-row items-center justify-between">
            <IgniteText class="text-3 font-medium text-muted">
              Total raise potential
            </IgniteText>
            <IgniteText class="text-4 font-normal text-muted">
              <IgniteNumber :number="props.totalSaleValue" />
              {{ props.saleDenom }}
            </IgniteText>
          </div>
          <div class="mt-7 flex place-content-end md:mt-9">
            <IgniteButton
              variant="primary"
              class="mr-6 !py-4 !px-6 !font-medium"
              @click="emit('cancel')"
            >
              <span>Cancel</span>
            </IgniteButton>
            <IgniteButton
              variant="primary"
              color="primary"
              class="!py-4 !px-6 !font-medium"
              :disabled="!props.ableToPublish || !address"
              @click="emit('publish')"
            >
              <span>{{ !!address ? 'Publish' : 'Sign in' }}</span>
            </IgniteButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
