<template>
  <div>
    <div class="flex justify-between items-center mb-7.5">
      <div class="font-medium ignite-text text-2 text-muted">Invest</div>
      <div class="font-medium ignite-text text-2 text-title">
        <b>$1M</b> of <b>$2M</b>
      </div>
    </div>

    <IgniteProgressBar :items="progressBar.items" :inverse="true" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProjectCardIncentives'
}
</script>

<script setup lang="ts">
import { ProgressBarItem } from '../../utils/types'
import IgniteProgressBar from '../IgniteProgressBar.vue'

const progressBar = {
  items: [
    {
      value: '50',
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}
</script>
