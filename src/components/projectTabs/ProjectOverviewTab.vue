<script lang="ts" setup>
import IgniteProjectCards from '../IgniteProjectCards/index.vue'
import IgniteProjectDescription from '../IgniteProjectDescription.vue'
import IgniteProjectLinks from '../IgniteProjectLinks/index.vue'
import IgniteProjectRoadmap from '../IgniteProjectRoadmap.vue'
import IgniteProjectTeam from '../IgniteProjectTeam/index.vue'
import IgniteProjectTokenomics from '../IgniteProjectTokenomics.vue'
import IgniteProjectVestingSchedule from '../IgniteProjectVestingSchedule.vue'
import IgniteWhitepaper from '../IgniteWhitepaper.vue'
</script>

<template>
  <div>
    <IgniteProjectCards class="mt-8 md:mt-10.5" />
    <IgniteProjectDescription class="mt-8 md:mt-10.5" />
    <IgniteWhitepaper class="mt-8 md:mt-10.5" />
    <IgniteProjectRoadmap class="mt-8 md:mt-12" />
    <IgniteProjectTokenomics class="mt-8 md:mt-12" />
    <IgniteProjectVestingSchedule class="mt-8 md:mt-10.5" />
    <IgniteProjectTeam class="mt-8 md:mt-11" />
    <IgniteProjectLinks class="mt-8 mb-10 md:mt-11" />
  </div>
</template>
