<template>
  <div class="project-list">
    <MasonryWall
      :items="loading ? skeletons : chains"
      :column-width="columnWidth"
      :gap="gap"
      :rtl="rtl"
    >
      <template #default="{ item: project }">
        <IgniteProjectCard :project="project" :loading="loading" />
      </template>
    </MasonryWall>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgntProjectList'
}
</script>

<script lang="ts" setup>
import MasonryWall from '@yeger/vue-masonry-wall'
import { LaunchChain } from 'tendermint-spn-ts-client/tendermint.spn.launch/rest'
import { PropType } from 'vue'

import IgniteProjectCard from './IgniteProjectCard/index.vue'

defineProps({
  loading: {
    type: Boolean,
    default: true
  },
  chains: {
    type: Array as PropType<LaunchChain[]>,
    default: () => []
  }
})

const columnWidth = 330
const gap = 32
const rtl = false
const skeletons = new Array(6).fill(undefined)
</script>

<style scoped lang="postcss"></style>
