<template>
  <ul class="items-center sm:flex">
    <IgniteText
      v-for="item in items"
      :key="item.link"
      as="li"
      class="mb-6 text-3 last:m-0 sm:mb-0 sm:mr-7"
    >
      <IgniteLink
        :to="item.link"
        class="flex items-center"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        <span>{{ item.title }}</span>
      </IgniteLink>
    </IgniteText>
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

import IgniteLink from './IgniteLink.vue'
import IgniteText from './IgniteText.vue'

interface NavLink {
  title: string
  link: string
}

defineProps({
  activeTab: String,
  items: {
    type: Array as PropType<NavLink[]>,
    requred: true,
    default: () => []
  }
})
</script>

<style scoped lang="postcss"></style>
