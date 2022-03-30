<template>
  <div class="flex items-center">
    <IconGithub class="text-title mr-1" />
    <span class="ignt-text font-medium text-2 text-muted">fadeev</span>
    <span class="ignt-text font-medium text-2 text-inactive mx-1">/</span>
    <span class="ignt-text font-medium text-2 text-muted">ignition-1</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IconGithub from './icons/IconGithub.vue'

export default defineComponent({
  name: 'IgniteGithub',
  components: { IconGithub }
})
</script>

<style scoped lang="postcss"></style>
