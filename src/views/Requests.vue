<template>
  <div class="container">
    <IgniteRequestsHeader />
    <IgniteRequestsTable />
    <IgniteSelectedRequests />
  </div>
</template>

<script lang="ts" setup>
import IgniteRequestsHeader from '~/components/requests/IgniteRequestsHeader.vue'
import IgniteRequestsTable from '~/components/requests/IgniteRequestsTable.vue'
import IgniteSelectedRequests from '~/components/requests/IgniteSelectedRequests.vue'
</script>
