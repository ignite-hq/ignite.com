<script lang="ts">
export default {
  name: 'IgniteInputDate'
}
</script>

<script lang="ts" setup>
interface Emits {
  (e: 'input', value: string): void
}

const emit = defineEmits<Emits>()

interface Props {
  initialDate: Date
}

defineProps<Props>()

// methods
function handleDateInput(evt: Event) {
  const inputEl = evt.target as HTMLInputElement

  emit('input', inputEl.value)
}
</script>

<template>
  <div>
    <input
      class="h-[3rem] w-full rounded-xs bg-gray-30 px-5 text-3 font-normal"
      type="date"
      :value="initialDate.toISOString().slice(0, 10)"
      @input="handleDateInput"
    />
  </div>
</template>
