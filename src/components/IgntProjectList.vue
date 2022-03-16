<template>
  <div class="project-list">
    <MasonryWall
      :items="items"
      :column-width="columnWidth"
      :gap="gap"
      :rtl="rtl"
    >
      <template #default="{ item }">
        <IgntProjectCard :project="{}" :loading="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MasonryWall from '@yeger/vue-masonry-wall'

import IgntProjectCard from './IgntProjectCard/index.vue'

export default defineComponent({
  name: 'IgntProjectList',

  components: { MasonryWall, IgntProjectCard },

  data() {
    return {
      columnWidth: 330,
      gap: 32,
      items: [false, true, false, false, true],
      rtl: false,
    }
  },

  setup() {}
})
</script>

<style scoped lang="scss">
.col {
  margin-bottom: 32px;
}
</style>
