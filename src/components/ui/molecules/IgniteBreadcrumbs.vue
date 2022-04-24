<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteBreadcrumbs'
})
</script>

<script lang="ts" setup>
import IgniteLink from '../atoms/IgniteLink.vue'
import IgniteText from '../atoms/IgniteText.vue'

defineProps({
  links: {
    type: Array
  },
  projectId: String
})
</script>

<template>
  <ul class="flex items-center">
    <IgniteText
      v-for="item in links"
      :key="`breadcrumb_${item.title}`"
      as="li"
      class="item flex items-center justify-center text-2"
    >
      <IgniteLink
        :to="item.link"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        {{ item.title }}
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
