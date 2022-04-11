<template>
  <ul class="ignite-breadcrumbs flex items-center">
    <li class="ignite-breadcrumbs__item ignite-text text-2">
      <IgniteLink
        to="/"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        Explore
      </IgniteLink>
    </li>
    <li class="ignite-breadcrumbs__item ignite-text text-2">
      <IgniteLink
        to="/projects"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        Strange Clan
      </IgniteLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteLink from './IgniteLink.vue'

export default defineComponent({
  name: 'IgniteBreadcrumbs',

  components: { IgniteLink }
})
</script>

<style scoped lang="postcss">
.ignite-breadcrumbs {
  &__item {
    @apply flex items-center justify-center;

    &:not(:last-child) {
      &:after {
        content: '/';
        @apply mx-1 text-inactive;
      }
    }
  }
}
</style>
