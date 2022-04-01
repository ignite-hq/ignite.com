<template>
  <div role="table" class="responses-table">
    <!-- Header -->
    <div role="rowgroup">
      <div role="row" class="responses-table-header">
        <div role="columnheader" class="responses-table-column-cell">
          <IgniteCheckbox />
        </div>
        <div role="columnheader" class="flex-1 responses-table-column-cell">
          Action
        </div>
        <div role="columnheader" class="flex-1 responses-table-column-cell">
          Type
        </div>
        <div role="columnheader" class="flex-1 responses-table-column-cell">
          Requestor
        </div>
      </div>
    </div>

    <!-- Body -->
    <div role="rowgroup" class="responses-table-body">
      <div role="row" class="responses-table-row">
        <div role="cell" class="responses-table-cell">
          <IgniteCheckbox />
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          <IgniteRequestsActionIcon /> <span>Add validator to Testnet 0</span>
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          Request to validate
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          <div class="profile-placeholder" />
          <span>Jane Doe</span>
        </div>
      </div>

      <div role="row" class="responses-table-row">
        <div role="cell" class="responses-table-cell">
          <IgniteCheckbox />
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          <IgniteRequestsActionIcon /> <span>Add validator to Testnet 0</span>
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          Request to validate
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          <div class="profile-placeholder" />
          <span>Jane Doe</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsTable'
}
</script>

<script lang="ts" setup>
import IgniteCheckbox from './IgniteCheckbox.vue'
import IgniteRequestsActionIcon from './IgniteRequestsActionIcon.vue'
</script>

<style scoped lang="postcss">
.responses-table {
  @apply w-full mt-7;
}

.responses-table-header {
  @apply flex flex-1;
}

.responses-table-column-cell {
  @apply border-b font-medium px-4 pl-8 py-6 text-left border-gray-70 text-muted;
}

.responses-table-body {
  @apply space-y-3 mt-4;
}

.responses-table-row {
  @apply relative py-2 hover:bg-[#F9F9F9] rounded-[16px] flex;
}

.responses-table-cell {
  @apply p-4 pl-8 py-6 overflow-hidden flex items-center space-x-4;
}

.profile-placeholder {
  @apply h-7.5 w-7.5 rounded-circle bg-secondary;
}
</style>
