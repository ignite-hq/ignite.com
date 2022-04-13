<template>
  <div class="container-full container px-5 sm:px-5.5 l:px-7">
    <div class="grid grid-cols-1 l:grid-cols-12 xl:grid-cols-2 gap-6 m:gap-7">
      <div
        class="l:col-start-3 xl:col-start-auto l:col-span-8 xl:col-span-1 px-0"
      >
        <ProjectCardFundraiser :is-ongoing="false" />
      </div>

      <div
        class="l:col-start-3 xl:col-start-auto l:col-span-8 xl:col-span-1 px-0"
      >
        <ProjectCardValidator />
      </div>

      <div class="l:col-span-12 xl:col-span-2 px-0">
        <ProjectCardFundraiser :is-ongoing="true" :is-wide="true" />
      </div>
      <div class="l:col-span-12 xl:col-span-2 px-0">
        <ProjectCardValidator :is-wide="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProjectCards'
})
</script>

<script setup lang="ts">
import ProjectCardFundraiser from './ProjectCardFundraiser.vue'
import ProjectCardValidator from './ProjectCardValidator.vue'
</script>

<style scoped lang="postcss"></style>
