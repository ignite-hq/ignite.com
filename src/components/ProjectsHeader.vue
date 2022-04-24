<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsHeader'
})
</script>

<script lang="ts" setup>
import IconSearch from './ui/icons/IconSearch.vue'
import IgniteHeading from './ui/atoms/IgniteHeading.vue'
import IgniteInput from './ui/atoms/IgniteInput.vue'
import IgniteText from './ui/atoms/IgniteText.vue'
</script>

<template>
  <div
    class="mx-auto max-w-[34rem] py-8 text-center md:py-10.5 xl:pt-[8.5rem] xl:pb-[12.5rem]"
  >
    <IgniteHeading as="h1" class="font-title text-7 font-semibold md:text-8">
      Explore projects
    </IgniteHeading>
    <IgniteText as="p" class="mt-7 text-3 text-muted">
      Discover unique blockchain projects and ideas built with Ignite, from
      simple applications to smart contracts to games and NFTs.
    </IgniteText>
    <div class="mx-auto mt-7 max-w-[25rem]">
      <IgniteInput
        type="text"
        placeholder="Find a project"
        :icon="IconSearch"
      />
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
