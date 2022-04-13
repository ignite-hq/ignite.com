<template>
  <div>
    <IgniteProjectHeader />
    <IgniteProjectCards class="mt-8 m:mt-10.5" />
    <IgniteProjectDescription class="mt-8 m:mt-10.5" />
    <IgniteWhitepaper class="mt-8 m:mt-10.5" />
    <IgniteProjectRoadmap class="mt-8 m:mt-12" />
    <IgniteProjectTokenomics class="mt-8 m:mt-12" />
    <IgniteProjectVestingSchedule class="mt-8 m:mt-10.5" />
    <IgniteProjectTeam class="mt-8 m:mt-11" />
    <IgniteProjectLinks class="mt-8 m:mt-11" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectView'
}
</script>

<script lang="ts" setup>
import IgniteProjectCards from '../components/IgniteProjectCards/index.vue'
import IgniteProjectDescription from '../components/IgniteProjectDescription.vue'
import IgniteProjectHeader from '../components/IgniteProjectHeader.vue'
import IgniteProjectLinks from '../components/IgniteProjectLinks/index.vue'
import IgniteProjectRoadmap from '../components/IgniteProjectRoadmap.vue'
import IgniteProjectTeam from '../components/IgniteProjectTeam/index.vue'
import IgniteProjectTokenomics from '../components/IgniteProjectTokenomics.vue'
import IgniteProjectVestingSchedule from '../components/IgniteProjectVestingSchedule.vue'
import IgniteWhitepaper from '../components/IgniteWhitepaper.vue'
</script>
