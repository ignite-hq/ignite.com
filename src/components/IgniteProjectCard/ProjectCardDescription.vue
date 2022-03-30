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
    <IgniteGithub v-if="!loading" class="justify-center mb-7" />

    <div v-if="!loading" class="ignt-text text-2 m:text-3 text-muted">
      A blockchain built with the Cosmos SDK and launched on the Ignite Network.
    </div>
  </div>
</template>

<script lang="ts" setup>
import IgniteGithub from '../IgniteGithub.vue'
import IgniteLoader from '../IgniteLoader.vue'

defineProps({
  loading: {
    type: Boolean
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
