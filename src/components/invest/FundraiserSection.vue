<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserSection'
})
</script>

<template>
  <div
    class="border-b border-border pt-8 pb-9 last:border-0 last:pb-0 md:pt-9.5 md:pb-10"
  >
    <div class="grid grid-cols-1 gap-6 md:grid-cols-12">
      <slot />
    </div>
  </div>
</template>
