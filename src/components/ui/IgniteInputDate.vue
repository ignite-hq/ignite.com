<script lang="ts">
export default {
  name: 'IgniteInputDate'
}
</script>

<script lang="ts" setup>
import 'v-calendar/dist/style.css'

import { DatePicker } from 'v-calendar'
import { reactive } from 'vue'

import IconCalendar from '~/components/icons/IconCalendar.vue'

import IgniteText from './IgniteText.vue'

function initializeDate(date: Date): Date {
  const normalized = date

  normalized.setHours(9, 0, 0, 0)

  return normalized
}

interface Emits {
  (e: 'input', value: Date): void
}

const emit = defineEmits<Emits>()

interface Props {
  minDate?: Date
  maxDate?: Date
  initialDate: Date
  showLabel?: boolean
  showTime?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  minDate: () => new Date(),
  showLabel: true,
  showTime: true
})

// state
interface State {
  date: Date
  hour: string
  minutes: string
}
const initialState: State = {
  date: initializeDate(props.initialDate),
  hour: '09',
  minutes: '00'
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
</script>

<template>
  <div>
    <div class="z-1 relative">
      <div class="items-end text-left md:flex">
        <div class="">
          <IgniteText
            v-if="showLabel"
            as="label"
            class="block text-2 text-muted"
            >Date</IgniteText
          >
          <DatePicker
            v-model="state.date"
            :class="showLabel && 'mt-3'"
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
        <div v-if="showTime" class="mt-6 md:mt-0 md:ml-7.5">
          <IgniteText
            v-if="showLabel"
            as="label"
            class="block text-2 text-muted"
            >Time (24 hr format) UTC</IgniteText
          >
          <div
            :class="showLabel && 'mt-3'"
            class="-mx-3 flex flex-wrap items-center md:flex-nowrap"
          >
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="state.hour"
              maxlength="2"
              @input="handleHourInput"
            />
            <span class="text-muted">:</span>
            <input
              class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
              :value="state.minutes"
              maxlength="2"
              @input="handleMinuteInput"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
