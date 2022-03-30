<template>
  <div class="project-list">
    <MasonryWall
      :items="items"
      :column-width="columnWidth"
      :gap="gap"
      :rtl="rtl"
    >
      <template #default="{ item }">
        <IgniteProjectCard :project="{}" :loading="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script lang="ts">
import MasonryWall from '@yeger/vue-masonry-wall'
import { defineComponent } from 'vue'

import IgniteProjectCard from './IgniteProjectCard/index.vue'

export default defineComponent({
  name: 'IgniteProjectList',

  components: { MasonryWall, IgniteProjectCard },

  data() {
    return {
      columnWidth: 330,
      gap: 32,
      items: [false, true, false, false, true],
      rtl: false
    }
  }
})
</script>

<style scoped lang="postcss"></style>
