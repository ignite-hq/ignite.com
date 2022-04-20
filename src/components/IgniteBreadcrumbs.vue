<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteBreadcrumbs'
})
</script>

<script lang="ts" setup>
import IgniteLink from './IgniteLink.vue'
import IgniteText from './IgniteText.vue'
</script>

<template>
  <ul class="flex items-center">
    <IgniteText as="li" class="item flex items-center justify-center text-2">
      <IgniteLink
        to="/"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        Explore
      </IgniteLink>
    </IgniteText>
    <IgniteText as="li" class="item flex items-center justify-center text-2">
      <IgniteLink
        to="/projects"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        Strange Clan
      </IgniteLink>
    </IgniteText>
  </ul>
</template>

<style scoped lang="postcss">
.item {
  &:not(:last-child) {
    &:after {
      content: '/';
      @apply mx-1 text-inactive;
    }
  }
}
</style>
