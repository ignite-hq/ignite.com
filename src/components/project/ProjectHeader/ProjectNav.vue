<script lang="ts" setup>
import { PropType } from 'vue'

import IgniteLink from '~/components/ui/IgniteLink.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

interface NavLink {
  title: string
  link: string
}

defineProps({
  items: {
    type: Array as PropType<NavLink[]>,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <ul class="items-center sm:flex">
    <IgniteText
      v-for="item in items"
      :key="item.link"
      as="li"
      class="relative mb-6 text-3 last:m-0 sm:mb-0 sm:mr-7 md:pt-4 md:pb-5.5"
    >
      <IgniteLink
        :to="item.link"
        class="flex items-center after:absolute after:inset-x-0 after:-bottom-[1px] after:h-1 after:rounded-t-[2px] after:bg-primary after:opacity-0 after:transition-opacity"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none md:after:opacity-100"
      >
        <span>{{ item.title }}</span>
      </IgniteLink>
    </IgniteText>
  </ul>
</template>

<style scoped lang="postcss"></style>
