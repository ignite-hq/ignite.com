<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserInfoCard'
})
</script>

<template>
  <div class="mt-7 md:col-span-5 md:row-span-2 md:mt-0 lg:col-span-4">
    <div
      class="ml-auto max-w-[25rem] rounded-xs border border-border p-5 md:p-6"
    >
      <slot />
    </div>
  </div>
</template>
