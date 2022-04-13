<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div
      class="relative h-[100%] rounded border border-border bg-white-1000 px-5 pt-7 pb-0 sm:px-7 m:px-9 m:pt-8 l:py-8.5 xl:px-10"
    >
      <div class="ignite-title font-title text-4 font-semibold m:text-5">
        Whitepaper
      </div>
      <div class="mt-3 text-2 text-muted">
        Learn about the vision for the project in the whitepaper.
      </div>
      <div class="mt-6">
        <IgniteButton variant="primary" size="sm">Read whitepaper</IgniteButton>
      </div>

      <IgniteImage
        class="mt-3 block h-auto w-auto l:absolute l:bottom-0 l:left-auto l:right-7 l:mt-0 l:max-w-[50%] xl:right-9"
        name="paper"
        alt="whitepaper"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteWhitepaper'
})
</script>

<script lang="ts" setup>
import IgniteButton from './IgniteButton.vue'
import IgniteImage from './IgniteImage.vue'
</script>

<style scoped lang="postcss"></style>
