<template>
  <div>
    <IgniteLoader v-if="loading" class="status-loading mx-auto" />
    <IgniteProjectStatus v-if="!loading" class="justify-center" />
  </div>
</template>

<script lang="ts" setup>
import IgniteLoader from '../IgniteLoader.vue'
import IgniteProjectStatus from '../IgniteProjectStatus.vue'

defineProps({
  loading: {
    type: Boolean
  }
})
</script>

<style scoped lang="postcss">
.status-loading {
  height: 1.75rem;
  width: 11.25rem;
}
</style>
