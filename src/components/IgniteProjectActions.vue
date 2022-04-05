<template>
  <ul class="">
    <li class="ignite-text text-3 mb-6 m:mb-7">
      <IgniteButton>
        <IconStage class="text-title mr-3" />
        <span>Validate</span>
      </IgniteButton>
    </li>
    <li class="ignite-text text-3 mb-6 m:mb-7">
      <IgniteButton>
        <IconStack class="text-title mr-3" />
        <span>Request tokens</span>
      </IgniteButton>
    </li>
    <li class="ignite-text text-3">
      <IgniteLink
        to="https://"
        class="flex items-center text-primary hover:text-title"
      >
        <IconLink class="text-title mr-3" />
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
