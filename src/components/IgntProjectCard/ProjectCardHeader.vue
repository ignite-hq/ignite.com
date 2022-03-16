<template>
  <div class="header" :class="loading && '_loading'">
    <div class="background">
      <IgntBgWave />
    </div>
    <IgntLoader v-if="loading" class="logo" />
    <div v-if="!loading" class="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import IgntBgWave from '../IgntBgWave.vue'
import IgntLoader from '../IgntLoader.vue'

export default defineComponent({
  name: 'ProjectCardHeader',

  props: {
    loading: {
      type: Boolean
    }
  },

  components: { IgntBgWave, IgntLoader },

  setup(props) {
    const { loading } = props;

    return {
      loading
    }
  }
})
</script>

<style scoped lang="scss">
.header {
  position: relative;
  height: 0;
  padding-bottom: 50%;
  background-color: var(--primary);
  &._loading {
    background-color: var(--gray-50);
  }
}

.background {
  overflow: hidden;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.logo {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 50%;
  width: px2rem(80);
  height: px2rem(80);
  border-radius: px2rem(16);
  background-color: var(--primary);
  outline: px2rem(4) solid var(--white);
  transform: translate(-50%, 50%);
}
</style>
