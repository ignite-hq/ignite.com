<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectWhitepaper'
})
</script>

<script lang="ts" setup>
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteImage from '~/components/ui/IgniteImage.vue'
</script>

<template>
  <IgniteContainer>
    <div
      class="relative h-[100%] rounded border border-border bg-white-1000 px-5 pt-7 pb-0 sm:px-7 md:px-9 md:pt-8 lg:py-8.5 xl:px-10"
    >
      <IgniteHeading as="div" class="font-title text-4 font-semibold md:text-5">
        Whitepaper
      </IgniteHeading>
      <div class="mt-3 text-2 text-muted">
        Learn about the vision for the project in the whitepaper.
      </div>
      <div class="mt-6">
        <IgniteButton variant="primary" size="sm">Read whitepaper</IgniteButton>
      </div>

      <IgniteImage
        class="mt-3 block h-auto w-auto lg:absolute lg:bottom-0 lg:left-auto lg:right-7 lg:mt-0 lg:max-w-[50%] xl:right-9"
        name="paper"
        alt="whitepaper"
      />
    </div>
  </IgniteContainer>
</template>

<style scoped lang="postcss"></style>
