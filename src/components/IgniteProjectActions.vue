<template>
  <ul class="">
    <li class="ignite-text mb-6 text-3 md:mb-7">
      <IgniteButton>
        <IconStage class="mr-3 text-title" />
        <span>Validate</span>
      </IgniteButton>
    </li>
    <li class="ignite-text mb-6 text-3 md:mb-7">
      <IgniteButton>
        <IconStack class="mr-3 text-title" />
        <span>Request tokens</span>
      </IgniteButton>
    </li>
    <li class="ignite-text text-3">
      <IgniteLink
        to="https://"
        class="flex items-center text-primary hover:text-title"
      >
        <IconLink class="mr-3 text-title" />
        <span>Project website</span>
      </IgniteLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconLink from './icons/IconLink.vue'
import IconStack from './icons/IconStack.vue'
import IconStage from './icons/IconStage.vue'
import IgniteButton from './IgniteButton.vue'
import IgniteLink from './IgniteLink.vue'

export default defineComponent({
  name: 'IgniteProjectActions',

  components: { IgniteButton, IgniteLink, IconStage, IconStack, IconLink }
})
</script>

<style scoped lang="postcss"></style>
