<template>
  <div>
    <IgniteProjectHeader />
    <IgniteProjectCards class="mt-8 m:mt-10.5" />
    <IgniteProjectDescription class="mt-8 m:mt-10.5" />
    <!-- <IgniteWhitepaper class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectRoadmap class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectTokenomics class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectSchedule class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectTeam class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectLinks class="mt-8 m:mt-10.5" /> -->
    <div class="mt-8 m:mt-10.5"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import IgniteProjectCards from '../components/IgniteProjectCards/index.vue'
import IgniteProjectHeader from '../components/IgniteProjectHeader.vue'
import IgniteProjectDescription from '../components/IgniteProjectDescription.vue'
</script>
