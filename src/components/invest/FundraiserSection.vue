<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserSection'
})
</script>

<template>
  <div class="mt-10 px-9">
    <div class="flex grow flex-col">
      <slot />
    </div>
  </div>
</template>
