<script lang="ts">
export default {
  name: 'IgniteTextArea'
}
</script>

<script lang="ts" setup>
interface Emits {
  (e: 'update:modelValue', value: string): void
}

interface Props {
  modelValue: string
}

withDefaults(defineProps<Props>(), {
  modelValue: ''
})

defineEmits<Emits>()
</script>

<template>
  <textarea
    :value="modelValue"
    class="ignite-textarea"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<style scoped lang="postcss">
.ignite-textarea {
  @apply resize-none rounded-2sm border border-border p-5;
}
</style>
