<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectTeamMember'
})
</script>

<script setup lang="ts">
import IgniteBgWave from '../../../ui/atoms/IgniteBgWave.vue'
import IgniteCard from '../../../ui/atoms/IgniteCard.vue'
import IgniteHeading from '../../../ui/atoms/IgniteHeading.vue'
import IgniteText from '../../../ui/atoms/IgniteText.vue'

defineProps({
  member: {
    type: Object,
    reqired: true
  }
})
</script>

<template>
  <IgniteCard class="p-6">
    <div class="relative h-9.5 w-9.5 overflow-hidden rounded-circle bg-primary">
      <IgniteBgWave />
    </div>
    <IgniteHeading as="div" class="mt-6 text-4 font-semibold">{{
      member.name
    }}</IgniteHeading>
    <IgniteText as="div" class="mt-5 text-2 text-muted">{{
      member.company
    }}</IgniteText>
    <IgniteText as="div" class="mt-1 text-2 font-medium text-title">
      {{ member.title }}
    </IgniteText>
    <IgniteText as="div" class="mt-5 text-3 text-muted">{{
      member.info
    }}</IgniteText>
  </IgniteCard>
</template>

<style scoped lang="postcss"></style>
