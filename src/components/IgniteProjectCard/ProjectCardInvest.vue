<script lang="ts">
export default {
  name: 'ProjectCardIncentives'
}
</script>

<script setup lang="ts">
import { ProgressBarItem } from '../../utils/types'
import IgniteProgressBar from '../IgniteProgressBar.vue'
import IgniteText from '../IgniteText.vue'

const progressBar = {
  items: [
    {
      value: '50',
      bgColor: 'bg-primary'
    }
  ] as ProgressBarItem[]
}
</script>

<template>
  <div>
    <div class="mb-7.5 flex items-center justify-between">
      <IgniteText class="text-2 font-medium text-muted">Invest</IgniteText>
      <IgniteText class="text-2 font-medium text-title">
        <b>$1M</b> of <b>$2M</b>
      </IgniteText>
    </div>

    <IgniteProgressBar :items="progressBar.items" :inverse="true" />
  </div>
</template>
