<script lang="ts">
export default {
  name: 'IgniteInputDate'
}
</script>

<script lang="ts" setup>
import 'v-calendar/dist/style.css'

import BigNumber from 'bignumber.js'
import { DatePicker } from 'v-calendar'
import { reactive } from 'vue'

import IconCalendar from '../icons/IconCalendar.vue'
import IgniteSelect from './IgniteSelect.vue'
import IgniteText from './IgniteText.vue'

interface Emits {
  (e: 'input', value: Date): void
}

const emit = defineEmits<Emits>()

interface Props {
  minDate?: Date
  maxDate?: Date
  initialDate: Date
}

const props = withDefaults(defineProps<Props>(), {
  minDate: () => new Date()
})

const UTC_ZONES: Readonly<number[]> = [
  -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14
]

function formatOffsetToUTC(offset: number): string {
  return `UTC${offset > -1 ? '+' : ''}${offset}`
}

// state
interface State {
  date: Date
  timezone: number
  hour: string
  minutes: string
}

const initialState: State = {
  date: props.initialDate ?? new Date(),
  hour: props.initialDate ? props.initialDate.getHours().toString() : '10',
  minutes: props.initialDate ? props.initialDate.getMinutes().toString() : '00',
  timezone: new BigNumber(new Date().getTimezoneOffset())
    .dividedBy(60)
    .toNumber()
}

const state = reactive({
  ...initialState
})

// handlers
function handleHourInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  state.hour = inputEl.value

  state.date.setHours(Number(state.hour), Number(state.minutes))

  emit('input', state.date)
}
function handleMinuteInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  state.minutes = inputEl.value

  state.date.setHours(Number(state.hour), Number(state.minutes))

  emit('input', state.date)
}
function handleDayClick() {
  emit('input', state.date)
}
function handleTimezoneInput(value: string) {
  state.timezone = new BigNumber(value).dividedBy(60).toNumber()

  emit('input', state.date)
}
</script>

<template>
  <div>
    <div class="z-1 relative">
      <div class="text-left md:flex">
        <div class="">
          <IgniteText as="label" class="block text-2 text-muted"
            >Date</IgniteText
          >
          <DatePicker
            v-model="state.date"
            class="mt-3"
            :min-date="props.minDate"
            :max-date="props.maxDate"
            :input-debounce="500"
            @dayclick="handleDayClick"
          >
            <template #default="{ inputValue, inputEvents }">
              <div class="relative flex items-center">
                <IconCalendar class="absolute left-5" />
                <input
                  class="h-8.5 w-full min-w-[10rem] appearance-none rounded-xs border border-border bg-white-1000 pl-8 pr-4"
                  :value="inputValue"
                  v-on="inputEvents"
                />
              </div>
            </template>
          </DatePicker>
        </div>
        <div class="mt-6 md:mt-0 md:ml-7.5">
          <IgniteText as="label" class="block text-2 text-muted"
            >Time (24 hr format)</IgniteText
          >
          <div class="-mx-3 mt-3 flex flex-wrap items-center md:flex-nowrap">
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="state.hour"
              min="0"
              max="12"
              maxlength="2"
              @input="handleHourInput"
            />
            <span class="text-muted">:</span>
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="state.minutes"
              min="0"
              max="60"
              maxlength="2"
              @input="handleMinuteInput"
            />
            <IgniteSelect
              name="timezone"
              :selected="{
                label: formatOffsetToUTC(state.timezone),
                value: `${state.timezone * 60}`
              }"
              :items="
                UTC_ZONES.map((i) => ({
                  label: formatOffsetToUTC(i),
                  value: String(i)
                }))
              "
              class="md:mt- mx-3 w-full md:w-auto"
              @input="handleTimezoneInput"
            >
              <template v-for="i in UTC_ZONES" v-slot:[String(i)]>
                {{ formatOffsetToUTC(i) }}
              </template></IgniteSelect
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
