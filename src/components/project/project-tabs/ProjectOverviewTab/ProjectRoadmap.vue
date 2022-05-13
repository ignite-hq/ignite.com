<script lang="ts">
export default {
  name: 'ProjectRoadmap'
}
</script>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed } from 'vue'

import IgniteRoadmap from '~/components/common/IgniteRoadmap.vue'
import IgniteScrollableSection from '~/components/common/IgniteScrollableSection.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import { ProjectMilestone, RoadmapStatus } from './types'

interface Props {
  milestones: ProjectMilestone[]
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  milestones: () => [],
  loading: false
})

const roadmapItems = computed<ProjectMilestone[]>(() => {
  const possibleStatuses = Object.values(RoadmapStatus)

  return props.milestones.map(({ description, date, title, status }) => ({
    date: dayjs(date).format('MMMM YYYY'),
    description,
    title,
    status: possibleStatuses.includes(status) ? status : RoadmapStatus.Expected
  }))
})
</script>

<template>
  <div class="container">
    <IgniteHeading as="div" class="text-center font-title text-5 md:text-7">
      Roadmap and history
    </IgniteHeading>
    <IgniteText as="div" class="mt-6 text-center text-3 text-muted">
      Key milestones for the Project Name project
    </IgniteText>

    <div class="relative mt-7 md:mt-9">
      <IgniteScrollableSection>
        <IgniteRoadmap :items="roadmapItems" :loading="loading" />
      </IgniteScrollableSection>
    </div>
  </div>
</template>

<style lang="postcss"></style>
