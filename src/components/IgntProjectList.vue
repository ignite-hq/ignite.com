<template>
  <div class="project-list">
    <div class="row">
      <div class="col col-sm-6 col-md-6 col-lg-4">
        <IgntProjectCard :project="{}" />
      </div>
      <div class="col col-sm-6 col-md-6 col-lg-4">
        <IgntProjectCard :loading="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgntProjectCard from './IgntProjectCard/index.vue'

export default defineComponent({
  name: 'IgntProjectList',

  components: { IgntProjectCard },

  setup() {}
})
</script>

<style scoped lang="scss">
.col {
  margin-bottom: 32px;
}
</style>
