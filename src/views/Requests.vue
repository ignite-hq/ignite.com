<template>
  <div class="container">
    <IgniteRequestsHeader />
    <IgniteSelectedRequests :selected-requests="new Array(3).fill(undefined)" />
  </div>
</template>

<script lang="ts" setup>
import IgniteRequestsHeader from '../components/IgniteRequestsHeader.vue'
import IgniteSelectedRequests from '../components/IgniteSelectedRequests.vue'
</script>
