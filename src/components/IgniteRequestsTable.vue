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
          Add validator to Testnet 0
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          Request to validate
        </div>
        <div role="cell" class="flex-1 responses-table-cell">Jane Doe</div>
      </div>

      <div role="row" class="responses-table-row">
        <div role="cell" class="responses-table-cell">
          <IgniteCheckbox />
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          Add validator to Testnet 0
        </div>
        <div role="cell" class="flex-1 responses-table-cell">
          Request to validate
        </div>
        <div role="cell" class="flex-1 responses-table-cell">Jane Doe</div>
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
</script>

<style scoped lang="postcss">
.responses-table {
  @apply w-full mt-7;
}

.responses-table-header {
  @apply flex flex-1;
}

.responses-table-column-cell {
  @apply border-b font-medium px-4 pl-8 py-6 text-left border-gray-70;
}

.responses-table-body {
  @apply space-y-3 mt-4;
}

.responses-table-row {
  @apply relative py-2 hover:bg-[#F9F9F9] rounded-[16px] flex;
}

.responses-table-cell {
  @apply p-4 pl-8 py-6 overflow-hidden;
}
</style>
