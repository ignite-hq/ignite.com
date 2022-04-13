<template>
  <IgniteCard class="p-6">
    <div class="relative h-9.5 w-9.5 overflow-hidden rounded-circle bg-primary">
      <IgniteBgWave />
    </div>
    <div class="ignite-title mt-6 text-4 font-semibold">{{ member.name }}</div>
    <div class="ignite-text mt-5 text-2 text-muted">{{ member.company }}</div>
    <div class="ignite-text mt-1 text-2 font-medium text-title">
      {{ member.title }}
    </div>
    <div class="ignite-text mt-5 text-3 text-muted">{{ member.info }}</div>
  </IgniteCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectTeamMember'
})
</script>

<script setup lang="ts">
import IgniteBgWave from '../IgniteBgWave.vue'
import IgniteCard from '../IgniteCard.vue'

defineProps({
  member: {
    type: Object,
    reqired: true
  }
})
</script>

<style scoped lang="postcss"></style>
