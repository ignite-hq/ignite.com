<script lang="ts">
export default {
  title: 'IgniteRoadmap'
}
</script>

<script lang="ts" setup>
import IconCheck from '~/components/icons/IconCheck.vue'
import IconCircleCanceled from '~/components/icons/IconCircleCanceled.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { arrayNSize } from '~/utils/array'

import {
  ProjectMilestone,
  RoadmapStatus
} from '../project/project-tabs/ProjectOverviewTab/types'

interface Props {
  items: ProjectMilestone[]
  align?: 'right' | 'default'
  type?: 'fundraiser' | 'overview'
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  items: () => [],
  align: 'default',
  type: 'overview',
  loading: false
})

const SKELETON_MOCK_DATA: ProjectMilestone[] = arrayNSize(4).map(() => ({
  date: '',
  status: RoadmapStatus.Expected,
  title: '',
  description: ''
}))
</script>

<template>
  <ul class="whitespace-nowrap">
    <li
      v-for="(item, key) in loading ? SKELETON_MOCK_DATA : items"
      :key="item.title"
      class="item relative inline-block min-w-[8.625rem] whitespace-normal border-t-4 pt-6 pr-7 align-top last:pr-0"
      :class="[
        item.status === RoadmapStatus.Completed ||
        item.status === RoadmapStatus.Cancelled
          ? 'border-primary'
          : 'border-border',
        align === 'right' ? 'last:text-right' : 'last:border-dashed'
      ]"
    >
      <IconCircleCanceled
        v-if="item.status === RoadmapStatus.Cancelled"
        class="absolute -top-[0.8125rem] h-6 w-6"
        :class="[
          'text-primary',
          align === 'right' && key === items.length - 1 ? 'right-0' : 'left-0'
        ]"
      />
      <IconCheck
        v-else
        class="absolute -top-[0.8125rem] h-6 w-6"
        :class="[
          item.status === RoadmapStatus.Completed ||
          item.status === RoadmapStatus.Active
            ? 'text-primary'
            : 'text-border',
          align === 'right' && key === items.length - 1 ? 'right-0' : 'left-0'
        ]"
      />

      <IgniteLoader v-if="loading" class="h-6 w-11" />
      <IgniteText
        v-else-if="item.title"
        as="div"
        class="pt-1"
        :class="[
          type === 'fundraiser' && 'text-2 font-normal text-muted',
          type !== 'fundraiser' && 'text-3 font-medium'
        ]"
      >
        {{ item.title }}
      </IgniteText>

      <IgniteLoader v-if="loading" class="mt-2 h-3 w-9" />
      <IgniteText
        v-else-if="item.date"
        as="div"
        :class="[
          type === 'fundraiser' && 'text-3 font-medium',
          type !== 'fundraiser' && 'text-2 font-normal text-muted'
        ]"
      >
        {{ item.date }}
      </IgniteText>

      <IgniteLoader v-if="loading" class="mt-2 h-7 w-12" />
      <IgniteText
        v-else-if="item.description"
        as="div"
        class="mt-5 max-w-[15rem] text-2 font-normal"
      >
        {{ item.description }}
      </IgniteText>
    </li>
  </ul>
</template>

<style lang="postcss">
.item {
  &:before {
    content: '';
  }
  &:after {
    content: '';
  }
}
</style>
