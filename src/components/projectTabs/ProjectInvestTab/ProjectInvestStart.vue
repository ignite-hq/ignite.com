<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInvestTitle'
})
</script>

<script lang="ts" setup>
import IgniteHeading from '../../ui/atoms/IgniteHeading.vue'
import IgniteLink from '../../ui/atoms/IgniteLink.vue'
import IgniteText from '../../ui/atoms/IgniteText.vue'
import IconPlus from '../../ui/icons/IconPlus.vue'
</script>

<template>
  <div class="container-full container px-5 sm:px-5.5 lg:px-7">
    <div
      class="rounded bg-bg px-5 py-8 text-center shadow-max md:py-9 lg:py-11"
    >
      <IgniteHeading as="div" class="font-title text-4 font-semibold md:text-5">
        Start a fundraiser
      </IgniteHeading>
      <IgniteText as="div" class="mx-auto mt-3 max-w-sm text-3 text-muted">
        Create one or more fundraisers to put Project Name in front of qualified
        investors.
      </IgniteText>
      <div class="mt-7">
        <IgniteLink to="/create-fundraiser" type="button" color="primary">
          <IconPlus class="ml-2 mr-4" />
          <span>Create fundraiser</span>
        </IgniteLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss"></style>
