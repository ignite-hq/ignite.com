<script lang="ts">
export default {
  name: 'IgniteInputWithSwitch'
}
</script>

<script lang="ts" setup>
import IgniteInput from '~/components/ui/IgniteInput.vue'
import IgniteSelect from '~/components/ui/IgniteSelect.vue'

interface Props {
  selectDefault: string
  items: { label: string; value: number }[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex">
    <IgniteSelect
      :value="selectDefault"
      :items="items"
      variants="rounded-r-none"
      :is-mobile-native="false"
    />
    <IgniteInput
      variants="text-center border border-border border-l-0 rounded-l-none"
    />
  </div>
</template>
