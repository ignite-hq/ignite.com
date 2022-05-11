<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCards'
})
</script>

<script setup lang="ts">
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import ProjectCardFundraiser from './ProjectCardFundraiser.vue'
import ProjectCardValidator from './ProjectCardValidator.vue'
</script>

<template>
  <IgniteContainer>
    <div class="grid grid-cols-1 gap-6 md:gap-7 lg:grid-cols-12 xl:grid-cols-2">
      <div
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardFundraiser :is-ongoing="false" />
      </div>

      <div
        class="px-0 lg:col-span-8 lg:col-start-3 xl:col-span-1 xl:col-start-auto"
      >
        <ProjectCardValidator />
      </div>

      <div class="px-0 lg:col-span-12 xl:col-span-2">
        <ProjectCardFundraiser :is-ongoing="true" :is-wide="true" />
      </div>
      <div class="px-0 lg:col-span-12 xl:col-span-2">
        <ProjectCardValidator :is-wide="true" />
      </div>
    </div>
  </IgniteContainer>
</template>

<style scoped lang="postcss"></style>
