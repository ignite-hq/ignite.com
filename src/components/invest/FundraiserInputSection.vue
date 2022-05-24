<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FundraiserInputSection'
})
</script>

<template>
  <div class="md:col-span-7 lg:col-span-8">
    <slot />
  </div>
</template>
