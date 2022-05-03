<script lang="ts">
export default {
  name: 'IgniteCheckbox'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconBaseline from '~/components/icons/IconBaseline.vue'
import IconCheck from '~/components/icons/IconCheckMark.vue'

interface Emits {
  (e: 'update:modelValue', value: boolean | string | any[]): void
}

interface Props {
  value?: string
  modelValue?: string | string[]
  isChecked?: boolean
  isIndeterminate?: boolean
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
  if (props.isChecked) return props.isChecked

  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value)
  }

  return props.value === props.modelValue
})
</script>

<template>
  <label class="relative flex items-center">
    <span class="relative flex items-center justify-center">
      <input
        :checked="isChecked"
        type="checkbox"
        class="ignite-checkbox"
        :class="{
          'ignite-checkbox--indeterminate': isIndeterminate
        }"
        @change="onChange"
      />
      <div class="ignite-checkbox-icon">
        <IconCheck v-if="isChecked" />
        <IconBaseline v-else-if="isIndeterminate" />
      </div>
    </span>

    <span :class="[$slots['default'] && 'ml-4']">
      <slot />
    </span>
  </label>
</template>

<style scoped lang="postcss">
.ignite-checkbox {
  @apply m-0 h-6 w-6 cursor-pointer appearance-none rounded-[6px] border-2 border-current border-checkbox;

  &:checked,
  &--indeterminate {
    @apply border-gray-0 bg-gray-0;

    & + .ignite-checkbox-icon {
      @apply visible scale-100;
    }
  }
}

.ignite-checkbox-icon {
  @apply invisible absolute scale-0 cursor-pointer transition-transform duration-100 ease-in-out;
}
</style>
