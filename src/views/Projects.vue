<script lang="ts">
export default {
  name: 'ProjectsListView'
}
</script>

<script lang="ts" setup>
import IgniteProjectList from '~/components/project/ProjectList/index.vue'
</script>

<template>
  <div class="container mb-10">
    <IgniteProjectList />
  </div>
</template>
