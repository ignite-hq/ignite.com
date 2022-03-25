<template>
  <div>
    <IgniteLoader v-if="loading" class="title-loading mx-auto mb-4" />
    <div
      v-if="!loading"
      class="ignt-title text-4 m:text-5 font-semibold text-center mb-4"
    >
      Ignition #1
    </div>

    <IgniteLoader v-if="loading" class="github-loading mx-auto" />
    <div v-if="!loading" class="flex items-center justify-center mb-7">
      <IconGithub class="text-title mr-1" />
      <span class="ignt-text font-medium text-2 text-muted">fadeev</span>
      <span class="ignt-text font-medium text-2 text-border mx-1">/</span>
      <span class="ignt-text font-medium text-2 text-muted">ignition-1</span>
    </div>

    <div v-if="!loading" class="ignt-text text-2 m:text-3 text-muted">
      A blockchain built with the Cosmos SDK and launched on the Ignite Network.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgniteLoader from '../IgniteLoader.vue'
import IconGithub from '../icons/IconGithub.vue'

export default defineComponent({
  name: 'ProjectCardDescription',

  props: {
    loading: {
      type: Boolean
    }
  },

  components: { IgniteLoader, IconGithub },

  setup(props) {
    const { loading } = props;

    return {
      loading
    }
  }
})
</script>

<style scoped lang="postcss">
.title-loading {
  width: 11.25rem;
  height: 1.625rem;
}

.github-loading {
  width: 9.375rem;
  height: 1.5rem;
}
</style>
