<template>
  <ul class="sm:flex items-center">
    <li
      v-for="item in items"
      :key="item.link"
      class="ignite-text text-3 mb-6 last:m-0 sm:mb-0 sm:mr-7"
    >
      <IgniteLink
        :to="item.link"
        class="flex items-center"
        inactive-class="text-muted hover:text-title"
        active-class="font-medium text-primary pointer-events-none"
      >
        <span>{{ item.title }}</span>
      </IgniteLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import IgniteLink from './IgniteLink.vue'

defineProps({
  items: {
    type: Array,
    requred: true
  }
})
</script>

<style scoped lang="postcss"></style>
