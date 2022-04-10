<template>
  <label class="relative flex items-center">
    <span class="relative flex items-center justify-center">
      <input
        :checked="isChecked"
        type="checkbox"
        class="ignite-checkbox"
        @change="onChange"
      />
      <div class="ignite-check"><IconCheck /></div>
    </span>

    <span :class="[$slots['default'] && 'ml-4']">
      <slot />
    </span>
  </label>
</template>

<script lang="ts">
export default {
  name: 'IgniteCheckbox'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconCheck from './icons/IconCheckMark.vue'

interface Emits {
  (e: 'update:modelValue', value: boolean | any[]): void
}

interface Props {
  value: string
  modelValue: string | string[]
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  modelValue: ''
})

const emit = defineEmits<Emits>()

// methods
function onChange(event: Event) {
  const isChecked = (event.target as HTMLInputElement).checked
  const modelValue = props.modelValue
  const value = props.value

  if (Array.isArray(modelValue)) {
    const newValue = [...modelValue]
    if (isChecked) {
      newValue.push(value)
    } else {
      newValue.splice(newValue.indexOf(value), 1)
    }
    emit('update:modelValue', newValue)
  } else {
    emit('update:modelValue', isChecked)
  }
}

// computed
const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }

  return props.value === props.modelValue
})
</script>

<style scoped lang="postcss">
.ignite-checkbox {
  @apply m-0 h-6 w-6 cursor-pointer appearance-none rounded-[6px] border-2 border-current border-checkbox;

  &:checked {
    @apply border-gray-0 bg-gray-0;

    & + .ignite-check {
      @apply visible scale-100;
    }
  }
}

.ignite-check {
  @apply invisible absolute scale-0 cursor-pointer bg-gray-0 transition-transform duration-100 ease-in-out;
}
</style>
