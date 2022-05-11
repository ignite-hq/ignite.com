<script lang="ts">
export default {
  name: 'ProjectsListView'
}
</script>

<script lang="ts" setup>
import IgniteContainer from '~/components/ui/IgniteContainer.vue'
import IgniteProjectList from '~/components/project/ProjectList/index.vue'
import ProjectsHeader from '~/components/project/ProjectsHeader.vue'
</script>

<template>
  <IgniteContainer>
    <ProjectsHeader />
    <IgniteProjectList />
  </IgniteContainer>
</template>
