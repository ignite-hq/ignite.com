<script lang="ts">
export default {
  name: 'ProjectsListView'
}
</script>

<script lang="ts" setup>
import IgniteProjectList from '~/components/project/ProjectList/index.vue'
import ProjectsHeader from '~/components/project/ProjectsHeader.vue'
</script>

<template>
  <div class="container">
    <ProjectsHeader />
    <IgniteProjectList />
  </div>
</template>
