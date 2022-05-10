<script lang="ts">
import { defineComponent } from 'vue'

import IconLink from '~/components/icons/IconLink.vue'
import IconStack from '~/components/icons/IconStack.vue'
import IconStage from '~/components/icons/IconStage.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'
import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

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
  <ul class="-m-3 sm:flex md:-m-4">
    <IgniteText as="li" class="p-3 text-3 md:p-4">
      <IgniteLink
        to="https://"
        class="flex items-center text-primary hover:text-title"
      >
        <IconLink class="mr-3 text-title" />
        <span>Project website</span>
      </IgniteLink>
    </IgniteText>
    <IgniteText as="li" class="p-3 text-3 md:p-4">
      <IgniteButton>
        <IconStage class="mr-3 text-title" />
        <span>Validate</span>
      </IgniteButton>
    </IgniteText>
    <IgniteText as="li" class="p-3 text-3 md:p-4">
      <IgniteButton>
        <IconStack class="mr-3 text-title" />
        <span>Request tokens</span>
      </IgniteButton>
    </IgniteText>
  </ul>
</template>

<style scoped lang="postcss"></style>
