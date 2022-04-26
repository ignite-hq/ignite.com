<script lang="ts">
import { computed, ref } from 'vue'

export default {
  name: 'IgniteInputAmount'
}
</script>

<script lang="ts" setup>
interface Emits {
  (e: 'input', value: string): void
}

const emit = defineEmits<Emits>()

interface Props {
  value?: string
  maxDecimals?: number
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  maxDecimals: 0,
  placeholder: '0'
})

// state
const inputRef = ref(null)

// methods
function format(value: string): string {
  let newValue: string = value

  // Replace commas
  newValue = newValue.replace(',', '.')

  // Disallow decimals if wished for
  newValue = props.maxDecimals > 0 ? newValue : newValue.replace('.', '')

  // Only numbers
  newValue = newValue.replace(/[^0-9.]/g, '')

  if (newValue.startsWith('.')) {
    newValue = '0' + newValue
  }

  if (newValue.split('').filter((char) => char === '.').length > 1) {
    // Remove subsequent separators
    newValue = newValue.replace(/(?<=\..*)\./g, '')
  }

  let [integerDigits, fractionDigits] = newValue.split('.')

  if (fractionDigits?.length > props.maxDecimals) {
    newValue = `${integerDigits}.${fractionDigits.slice(0, props.maxDecimals)}`
  }

  return newValue
}

// computed
const model = computed({
  get: () => props.value.toString(),
  set: (value) => {
    if (!inputRef.value) {
      return
    }

    let currentValue = value

    while (parseFloat(currentValue) > Number.MAX_SAFE_INTEGER) {
      currentValue = currentValue.slice(0, -1)
    }

    let formatted = format(currentValue)

    emit('input', formatted)

    let inputHTMLEl = inputRef.value as HTMLInputElement

    inputHTMLEl.value = formatted
  }
})
</script>

<template>
  <input
    class="h-[3rem] w-full rounded-xs bg-gray-30 px-5 text-3 font-normal"
    ref="inputRef"
    v-model="model"
    :placeholder="placeholder"
    type="text"
    inputmode="decimal"
    pattern="^[0-9]*[.,]?[0-9]*$"
    autocomplete="off"
    minlength="1"
    spellcheck="false"
  />
</template>
