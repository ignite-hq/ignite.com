<script lang="ts">
export default {
  name: 'FilterProjects'
}
</script>

<script lang="ts" setup>
import IconSearch from '~/components/icons/IconSearch.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteCheckbox from '~/components/ui/IgniteCheckbox.vue'
import IgniteInput from '~/components/ui/IgniteInput.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

const projects = [
  'Archway',
  'Akash',
  'Cosmos',
  'Chihuahua',
  'Kava',
  'Luna',
  'Osmosis'
]
</script>

<template>
  <div>
    <div>
      <IgniteInput
        type="text"
        placeholder="Find a project"
        variants="bg-gray-30"
        :icon="IconSearch"
      />
    </div>
    <IgniteButton class="mt-5">Select all projects</IgniteButton>
    <ul class="mt-6 select-none">
      <li v-for="project in projects" :key="project" class="">
        <IgniteText as="label" class="flex items-center py-4 px-3">
          <IgniteCheckbox :is-checked="true" class="mr-5 text-white-1000" />
          <span>{{ project }}</span>
        </IgniteText>
      </li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped></style>
