<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserInputSection'
})
</script>

<template>
  <div class="flex w-3/4 flex-col">
    <slot />
  </div>
</template>
