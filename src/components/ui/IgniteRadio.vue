<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'IgniteRadio'
}
</script>

<script lang="ts" setup>
interface Emits {
  (e: 'update:modelValue', value: string): void
}

interface Props {
  value: string
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  modelValue: ''
})

const emit = defineEmits<Emits>()

// methods
function onChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

// computed
const isChecked = computed(() => {
  return props.value === props.modelValue
})
</script>

<template>
  <label class="flex items-center">
    <span class="relative flex items-center justify-center">
      <input
        v-bind="$attrs"
        :checked="isChecked"
        type="radio"
        class="ignite-radio"
        :value="value"
        @change="onChange"
      />
      <div class="ignite-circle" />
    </span>

    <span :class="[$slots['default'] && 'ml-4']">
      <slot />
    </span>
  </label>
</template>

<style scoped lang="postcss">
.ignite-radio {
  @apply m-0 h-6 w-6 cursor-pointer appearance-none rounded-circle border-2 border-radio;

  &:checked {
    @apply border-gray-0 bg-gray-0;

    & + .ignite-circle {
      @apply visible scale-100;
    }
  }
}

.ignite-circle {
  @apply invisible absolute h-3 w-3 scale-0 cursor-pointer rounded-circle bg-white-1000 transition-transform duration-100 ease-in-out;
}
</style>
