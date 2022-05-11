<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteContainer'
})
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <slot />
  </div>
</template>

<style scoped lang="postcss"></style>
