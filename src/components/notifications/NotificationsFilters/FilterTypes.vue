<script lang="ts">
export default {
  name: 'FilterTypes'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IgniteCard from '~/components/ui/IgniteCard.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const items = [
  {
    name: 'All notifications',
    value: 'all',
    default: true
  },
  {
    name: 'Your projects',
    value: 'your'
  },
  {
    name: 'Validation',
    value: 'validation'
  },
  {
    name: 'Investments',
    value: 'investments'
  },
  {
    name: 'Sent requests',
    value: 'sent-requests'
  }
]

const selectedType = ref('all')
</script>

<template>
  <IgniteCard :shadow="true" class="py-5">
    <IgniteText
      v-for="item in items"
      :key="item.value"
      as="label"
      class="relative flex cursor-pointer py-5 px-6 text-4 font-medium transition-colors before:absolute before:inset-y-0 before:left-0 before:w-3 before:rounded-xs before:bg-primary before:opacity-0 before:transition-opacity hover:text-primary"
      :class="item.value === selectedType && 'text-primary before:opacity-100'"
    >
      <input
        v-model="selectedType"
        type="radio"
        name="FilterTypes"
        :value="item.value"
        class="absolute h-[1px] w-[1px] opacity-0"
      />
      <span>{{ item.name }}</span>
    </IgniteText>
  </IgniteCard>
</template>

<style lang="postcss" scoped></style>
