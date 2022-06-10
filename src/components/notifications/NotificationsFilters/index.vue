<script lang="ts">
export default {
  name: 'NotificationsFilters'
}
</script>

<script lang="ts" setup>
import IgniteHeading from '~/components/ui/IgniteHeading.vue'

import FilterDate from './FilterDate.vue'
import FilterProjects from './FilterProjects.vue'
import FilterRequestTypes from './FilterRequestTypes.vue'
import FilterTypes from './FilterTypes.vue'
</script>

<template>
  <div class="relative">
    <FilterTypes />
    <div class="mt-9.5">
      <IgniteHeading as="div" class="text-5 font-semibold">Date</IgniteHeading>
      <FilterDate class="mt-6" />
    </div>

    <div class="mt-9.5">
      <IgniteHeading as="div" class="text-5 font-semibold"
        >Request types</IgniteHeading
      >
      <FilterRequestTypes class="mt-6" />
    </div>
    <div class="mt-9.5">
      <IgniteHeading as="div" class="text-5 font-semibold"
        >Projects</IgniteHeading
      >
      <FilterProjects class="mt-6" />
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
