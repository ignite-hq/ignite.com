<script lang="ts">
export default {
  name: 'FilterRequestTypes'
}
</script>

<script lang="ts" setup>
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCheckbox from '~/components/ui/IgniteCheckbox.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const requestTypes = [
  {
    name: 'Validator requests',
    value: 'validator',
    counter: '68'
  },
  {
    name: 'Token requests',
    value: 'token',
    counter: '128'
  },
  {
    name: 'Parameter change request',
    value: 'change',
    counter: '90'
  }
]
</script>

<template>
  <div>
    <IgniteButton>Select all categories</IgniteButton>
    <ul class="mt-6 select-none">
      <li v-for="type in requestTypes" :key="type.value" class="">
        <IgniteText as="label" class="flex items-center py-4 px-3">
          <IgniteCheckbox :is-checked="true" class="mr-5 text-white-1000" />
          <span>{{ type.name }} ({{ type.counter }})</span>
        </IgniteText>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped></style>
