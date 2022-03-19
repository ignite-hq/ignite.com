<template>
  <div class="container">
    <IgniteProjectList :loading="isLoading" :chains="allChains" />
  </div>
</template>

<script lang="ts" setup>
import IgniteProjectList from '../components/IgniteProjectList.vue'
import useLaunchChains from '../composables/useLauchChains'

const { isLoading, allChains } = useLaunchChains()
</script>
