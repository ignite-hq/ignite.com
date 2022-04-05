<template>
  <textarea
    :value="modelValue"
    class="ignite-textarea"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script lang="ts">
export default {
  name: 'IgniteTextArea'
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

interface Emits {
  (e: 'update:modelValue', value: string): void
}

interface Props {
  modelValue: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: ''
})

const emit = defineEmits<Emits>()
</script>

<style scoped lang="postcss">
.ignite-textarea {
  @apply resize-none rounded-2sm border border-gray-70 p-5;
}
</style>
