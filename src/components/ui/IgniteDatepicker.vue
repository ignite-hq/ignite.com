<script lang="ts">
import { DateTime } from 'luxon'

export default {
  name: 'IgniteDatepicker',
  data() {
    return {
      date: new Date(),
      hours: '00',
      minutes: '00',
      amPm: 'AM',
      amPmItems: {
        AM: 'AM',
        PM: 'PM'
      },
      timezone: 'UTC',
      timezones: {
        'Pacific/Niue': 'UTC-11',
        'US/Hawaii': 'UTC-10',
        'America/Anchorage': 'UTC-9',
        'America/Los_Angeles': 'UTC-8',
        'America/Boise': 'UTC-7',
        'America/Chicago': 'UTC-6',
        'America/New_York': 'UTC-5',
        'America/Aruba': 'UTC-4',
        'America/Buenos_Aires': 'UTC-3',
        'Brazil/DeNoronha': 'UTC-2',
        'Atlantic/Azores': 'UTC-1',
        UTC: 'UTC+0',
        'Europe/Amsterdam': 'UTC+1',
        'Europe/Athens': 'UTC+2',
        'Europe/Moscow': 'UTC+3',
        'Indian/Mahe': 'UTC+4',
        'Asia/Ashgabat': 'UTC+5',
        'Asia/Dhaka': 'UTC+6',
        'Asia/Bangkok': 'UTC+7',
        'Asia/Hong_Kong': 'UTC+8',
        'Asia/Pyongyang': 'UTC+9',
        'Australia/Sydney': 'UTC+10',
        'Asia/Magadan': 'UTC+11'
      }
    }
  },
  computed: {
    result() {
      const year = new Date(this.date).getFullYear()
      const month = new Date(this.date).getMonth() + 1
      const day = new Date(this.date).getDate()
      const hours = this.amPm === 'AM' ? this.hours * 1 : this.hours * 1 + 12
      const minutes = this.minutes * 1

      const specifyZone = DateTime.local(
        year,
        month,
        day,
        hours,
        minutes
      ).setZone(this.timezone)

      return specifyZone
    }
  }
}
</script>

<script lang="ts" setup>
import 'v-calendar/dist/style.css'

import { DatePicker } from 'v-calendar'

import IconCalendar from '~/components/icons/IconCalendar.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
</script>

<template>
  <div class="z-1 relative">
    <div class="text-left md:flex">
      <div class="">
        <IgniteText as="label" class="block text-2 text-muted">Date</IgniteText>
        <DatePicker
          v-model="date"
          class="mt-3"
          :input-debounce="500"
          :timezone="timezone"
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
        <IgniteText as="label" class="block text-2 text-muted">Time</IgniteText>
        <div class="-mx-3 mt-3 flex flex-wrap items-center md:flex-nowrap">
          <input
            v-model.number="hours"
            class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
            min="0"
            max="12"
            maxlength="2"
          />
          <span class="text-muted">:</span>
          <input
            v-model.number="minutes"
            class="mx-3 h-8.5 w-[3.5rem] rounded-xs border border-border bg-white-1000 px-5 text-center"
            min="0"
            max="60"
            maxlength="2"
          />
          <IgniteSelect
            v-model="amPm"
            name="amPm"
            :items="amPmItems"
            class="mx-3"
          />
          <IgniteSelect
            v-model="timezone"
            name="timezone"
            :items="timezones"
            class="mx-3 mt-5 w-full md:mt-0 md:w-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
