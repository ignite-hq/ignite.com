<template>
  <div class="container">
    <IgniteRequestsHeader />
    <IgniteRequestsTable />
    <IgniteSelectedRequests :selected-requests="new Array(3).fill(undefined)" />
  </div>
</template>

<script lang="ts" setup>
import IgniteRequestsHeader from '../components/IgniteRequestsHeader.vue'
import IgniteRequestsTable from '../components/IgniteRequestsTable.vue'
import IgniteSelectedRequests from '../components/IgniteSelectedRequests.vue'
</script>
