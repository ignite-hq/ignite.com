<script lang="ts">
import { computed, ref } from 'vue'

export default {
  name: 'IgniteInputTime'
}
</script>

<script lang="ts" setup>
interface Emits {
  (e: 'input', value: string): void
}

const emit = defineEmits<Emits>()

// state
const hour = ref('10')
const minutes = ref('00')

// computed
const time = computed<string>(() => `${hour.value}:${minutes.value}`)

// methods
function handleHourInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newValue = Math.min(Number(inputEl.value), 24).toString()

  inputEl.value = newValue
  hour.value = newValue

  emit('input', time.value)
}

function handleMinuteInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  const newValue = Math.min(Number(inputEl.value), 59).toString()

  inputEl.value = newValue
  minutes.value = newValue

  emit('input', time.value)
}
</script>

<template>
  <div class="flex grid-cols-2 items-center gap-7">
    <div>
      <input
        class="h-[3rem] w-full rounded-xs bg-gray-30 px-5 text-3 font-normal"
        pattern="[0-9]{2}"
        :value="hour"
        maxlength="2"
        @input="handleHourInput"
      />
    </div>
    <div>:</div>
    <div>
      <input
        class="h-[3rem] w-full rounded-xs bg-gray-30 px-5 text-3 font-normal"
        pattern="[0-9]{2}"
        maxlength="2"
        :value="minutes"
        @input="handleMinuteInput"
      />
    </div>
  </div>
</template>
