<script lang="ts">
import { defineComponent } from 'vue'

import IconLink from '../ui/icons/IconLink.vue'
import IconStack from '../ui/icons/IconStack.vue'
import IconStage from '../ui/icons/IconStage.vue'
import IgniteButton from '../ui/atoms/IgniteButton.vue'
import IgniteLink from '../ui/atoms/IgniteLink.vue'
import IgniteText from '../ui/atoms/IgniteText.vue'

export default defineComponent({
  name: 'ProjectHeader',

  components: {
    IgniteButton,
    IgniteLink,
    IconStage,
    IconStack,
    IconLink,
    IgniteText
  }
})
</script>

<template>
  <ul class="">
    <IgniteText as="li" class="mb-6 text-3 md:mb-7">
      <IgniteButton>
        <IconStage class="mr-3 text-title" />
        <span>Validate</span>
      </IgniteButton>
    </IgniteText>
    <IgniteText as="li" class="mb-6 text-3 md:mb-7">
      <IgniteButton>
        <IconStack class="mr-3 text-title" />
        <span>Request tokens</span>
      </IgniteButton>
    </IgniteText>
    <IgniteText as="li" class="text-3">
      <IgniteLink
        to="https://"
        class="flex items-center text-primary hover:text-title"
      >
        <IconLink class="mr-3 text-title" />
        <span>Project website</span>
      </IgniteLink>
    </IgniteText>
  </ul>
</template>

<style scoped lang="postcss"></style>
