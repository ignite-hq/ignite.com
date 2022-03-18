<template>
  <div>
    <IgniteLoader v-if="loading" class="title-loading mx-auto mb-4" />
    <div v-if="!loading" class="ignt-title sm md-l-up text-center mb-4">
      Ignition #1
    </div>

    <IgniteLoader v-if="loading" class="github-loading mx-auto" />
    <div v-if="!loading" class="github mb-7">
      <IconGithub class="ignt-title mr-1" />
      <span class="ignt-label sm ignt-muted">fadeev</span>
      <span class="ignt-label sm ignt-border mx-1">/</span>
      <span class="ignt-label sm ignt-muted">ignition-1</span>
    </div>

    <div v-if="!loading" class="ignt-content sm md-l-up ignt-muted">
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

<style scoped lang="scss">
.title-loading {
  width: px2rem(180);
  height: px2rem(26);
  @media #{$breakpoint-large} {
    height: px2rem(36);
  }
}

.github {
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-loading {
  width: px2rem(150);
  height: px2rem(24);
}
</style>
