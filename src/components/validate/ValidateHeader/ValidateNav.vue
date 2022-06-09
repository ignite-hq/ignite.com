<script lang="ts">
export default {
  name: 'ValidateNav'
}
</script>

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
      class="relative mr-8.5 text-3 last:m-0 md:pb-3"
    >
      <IgniteLink
        :to="item.link"
        class="flex items-center after:absolute after:inset-x-0 after:-bottom-[1px] after:h-1 after:rounded-t-[2px] after:bg-primary after:opacity-0 after:transition-opacity"
        inactive-class="text-inactive hover:text-title"
        active-class="font-medium text-title pointer-events-none md:after:opacity-100"
      >
        <IgniteText as="span" class="font-title text-5 md:text-7">{{
          item.title
        }}</IgniteText>
      </IgniteLink>
    </IgniteText>
  </ul>
</template>

<style scoped lang="postcss"></style>
