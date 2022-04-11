<template>
  <div>
    <IgniteProjectHeader />
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
