<template>
  <div>
    <IgniteProjectHeader />
    <IgniteProjectCards class="mt-8 m:mt-10.5" />
    <!-- <IgniteProjectAbout class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteWhitepaper class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectInfo class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectRoadmap class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectTokenomics class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectSchedule class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectTeam class="mt-8 m:mt-10.5" /> -->
    <!-- <IgniteProjectLinks class="mt-8 m:mt-10.5" /> -->
  </div>
</template>

<script lang="ts">
import IgniteProjectHeader from '../components/IgniteProjectHeader.vue'
import IgniteProjectCards from '../components/IgniteProjectCards.vue'

export default {
  name: 'ProjectView',

  components: { IgniteProjectHeader, IgniteProjectCards }
}
</script>
