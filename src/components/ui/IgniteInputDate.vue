<script lang="ts">
export default {
  name: 'IgniteInputDate'
}
</script>

<script lang="ts" setup>
import 'v-calendar/dist/style.css'

import IgniteSelect from './IgniteSelect.vue'
import IgniteText from './IgniteText.vue'
import IconCalendar from '../icons/IconCalendar.vue'
import { DatePicker } from 'v-calendar'
import { reactive, ref } from 'vue'

interface Emits {
  (e: 'input', value: Date): void
}

const emit = defineEmits<Emits>()

interface Props {
  initialDate: Date
}

const props = defineProps<Props>()

enum TIMEZONES {
  'Pacific/Niue' = 'UTC-11',
  'US/Hawaii' = 'UTC-10',
  'America/Anchorage' = 'UTC-9',
  'America/Los_Angeles' = 'UTC-8',
  'America/Boise' = 'UTC-7',
  'America/Chicago' = 'UTC-6',
  'America/New_York' = 'UTC-5',
  'America/Aruba' = 'UTC-4',
  'America/Buenos_Aires' = 'UTC-3',
  'Brazil/DeNoronha' = 'UTC-2',
  'Atlantic/Azores' = 'UTC-1',
  UTC = 'UTC+0',
  'Europe/Amsterdam' = 'UTC+1',
  'Europe/Athens' = 'UTC+2',
  'Europe/Moscow' = 'UTC+3',
  'Indian/Mahe' = 'UTC+4',
  'Asia/Ashgabat' = 'UTC+5',
  'Asia/Dhaka' = 'UTC+6',
  'Asia/Bangkok' = 'UTC+7',
  'Asia/Hong_Kong' = 'UTC+8',
  'Asia/Pyongyang' = 'UTC+9',
  'Australia/Sydney' = 'UTC+10',
  'Asia/Magadan' = 'UTC+11'
}

enum TIME_UNITS {
  AM = 'AM',
  PM = 'PM'
}

// state
interface State {
  date: Date
  timezone: TIMEZONES
  timeUnit: TIME_UNITS
}

const initialState: State = {
  date: props.initialDate ?? new Date(),
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone as TIMEZONES,
  timeUnit: TIME_UNITS.AM
}

const state = reactive({
  ...initialState
})
const hour = ref('10')
const minutes = ref('00')

// handlers
function handleHourInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  hour.value = inputEl.value

  state.date.setHours(Number(hour.value), Number(minutes.value))

  emit('input', state.date)
}
function handleMinuteInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  minutes.value = inputEl.value

  state.date.setHours(Number(hour.value), Number(minutes.value))

  emit('input', state.date)
}
function handleDayClick(p: any) {
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
            @dayclick="handleDayClick"
            class="mt-3"
            :input-debounce="500"
            :timezone="state.timezone"
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
            >Time</IgniteText
          >
          <div class="-mx-3 mt-3 flex flex-wrap items-center md:flex-nowrap">
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="hour"
              min="0"
              max="12"
              maxlength="2"
              @input="handleHourInput"
            />
            <span class="text-muted">:</span>
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="minutes"
              @input="handleMinuteInput"
              min="0"
              max="60"
              maxlength="2"
            />
            <IgniteSelect
              v-model="state.timeUnit"
              name="amPm"
              :items="TIME_UNITS"
              class="mx-3"
            />
            <!-- <IgniteSelect
              v-model="state.timezone"
              name="timezone"
              :items="Object.keys(TIMEZONES)"
              class="mx-3 mt-5 w-full md:mt-0 md:w-auto"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
