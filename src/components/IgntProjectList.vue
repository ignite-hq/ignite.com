<template>
  <div class="project-list">
    <MasonryWall
      :items="chains"
      :column-width="columnWidth"
      :gap="gap"
      :rtl="rtl"
    >
      <template #default="{ item: project }">
        <IgntProjectCard :project="project" :loading="!project" />
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

import IgntProjectCard from './IgntProjectCard/index.vue'

interface Props {
  chains: LaunchChain[]
}

const { chains = [] } = defineProps<Props>()
const columnWidth = 330
const gap = 32
const rtl = false
</script>

<style scoped lang="scss">
.col {
  margin-bottom: 32px;
}
</style>
