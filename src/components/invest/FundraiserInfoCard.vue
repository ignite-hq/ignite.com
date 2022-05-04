<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserInfoCard'
})
</script>

<template>
  <div class="w-1/4 flex-col">
    <div class="rounded-xs border border-gray-70 p-6">
      <slot />
    </div>
  </div>
</template>
