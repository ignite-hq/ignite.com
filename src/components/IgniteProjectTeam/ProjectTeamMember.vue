<template>
  <IgniteCard class="p-6">
    <div class="overflow-hidden relative rounded-circle w-9.5 h-9.5 bg-primary">
      <IgniteBgWave />
    </div>
    <div class="mt-6 ignt-title font-semibold text-4">{{ member.name }}</div>
    <div class="mt-5 ignt-text text-muted text-2">{{ member.company }}</div>
    <div class="mt-1 ignt-text text-title font-medium text-2">
      {{ member.title }}
    </div>
    <div class="mt-5 ignt-text text-muted text-3">{{ member.info }}</div>
  </IgniteCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectTeamMember'
})
</script>

<script setup lang="ts">
import IgniteCard from '../IgniteCard.vue'
import IgniteBgWave from '../IgniteBgWave.vue'

defineProps({
  member: {
    type: Object,
    reqired: true
  }
})
</script>

<style scoped lang="postcss"></style>
