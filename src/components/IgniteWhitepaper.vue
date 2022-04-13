<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div
      class="relative pt-7 pb-0 m:pt-8 l:py-8.5 px-5 sm:px-7 m:px-9 xl:px-10 rounded h-[100%] bg-white-1000 border border-border"
    >
      <div class="ignite-title font-title text-4 m:text-5 font-semibold">
        Whitepaper
      </div>
      <div class="mt-3 text-muted text-2">
        Learn about the vision for the project in the whitepaper.
      </div>
      <div class="mt-6">
        <IgniteButton variant="primary" size="sm">Read whitepaper</IgniteButton>
      </div>

      <IgniteImage
        class="block mt-3 l:mt-0 l:absolute l:bottom-0 l:left-auto l:right-7 xl:right-9 l:max-w-[50%] w-auto h-auto"
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
