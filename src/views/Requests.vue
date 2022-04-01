<template>
  <div class="container">
    <IgniteRequestsHeader />
    <IgniteRequestsTable />
    <IgniteSelectedRequests :selected-requests="new Array(3).fill(undefined)" />
    <IgniteRequestsDeclineModal />
  </div>
</template>

<script lang="ts" setup>
import IgniteRequestsDeclineModal from '../components/IgniteRequestsDeclineModal.vue'
import IgniteRequestsHeader from '../components/IgniteRequestsHeader.vue'
import IgniteRequestsTable from '../components/IgniteRequestsTable.vue'
import IgniteSelectedRequests from '../components/IgniteSelectedRequests.vue'
</script>
