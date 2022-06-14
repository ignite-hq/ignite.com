<script lang="ts">
export default {
  name: 'FilterDate'
}
</script>

<script lang="ts" setup>
import IgniteInputDate from '~/components/ui/IgniteInputDate.vue'

const start_time = new Date(2022, 0, 1)
const end_time = new Date()
</script>

<template>
  <div class="flex flex-col items-center sm:flex-row">
    <IgniteInputDate
      :show-label="false"
      :show-time="false"
      :min-date="start_time"
      :max-date="end_time"
      :initial-date="(start_time as Date)"
    />
    <span class="my-3 sm:my-0 sm:mx-3">–</span>
    <IgniteInputDate
      :show-label="false"
      :show-time="false"
      :min-date="start_time"
      :initial-date="(end_time as Date)"
    />
  </div>
</template>

<style lang="postcss" scoped></style>
