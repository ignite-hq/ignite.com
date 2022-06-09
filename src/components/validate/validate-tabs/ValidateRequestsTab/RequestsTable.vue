<script lang="ts">
export default {
  name: 'RequestsTable',
  components: { IconCanceled }
}
</script>

<script lang="ts" setup>
import { computed } from 'vue'

import IconCanceled from '~/components/icons/IconCanceled.vue'
import IconCheckMarkThin from '~/components/icons/IconCheckMarkThin.vue'
import IconClock from '~/components/icons/IconClock.vue'
import IgniteBgWave from '~/components/ui/IgniteBgWave.vue'
import IgniteLoader from '~/components/ui/IgniteLoader.vue'
import IgniteText from '~/components/ui/IgniteText.vue'

import RequestsAction from './RequestsAction.vue'

interface Props {
  requests: object
  loading: boolean
  showHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  showHeader: true
})

// computed
const isLoading = computed(() => {
  return props.loading
})
</script>

<template>
  <div role="table" class="responses-table">
    <!-- Header -->
    <div v-if="showHeader" role="rowgroup">
      <div role="row" class="responses-table-header">
        <div role="columnheader" class="responses-table-column-cell flex-1">
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Project</IgniteText>
        </div>

        <div
          role="columnheader"
          class="responses-table-column-cell hidden flex-1 md:block"
        >
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Type</IgniteText>
        </div>

        <div
          role="columnheader"
          class="responses-table-column-cell hidden flex-1 md:block"
        >
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Action</IgniteText>
        </div>

        <div
          role="columnheader"
          class="responses-table-column-cell hidden flex-1 md:block"
        >
          <IgniteLoader v-if="isLoading" class="h-5" />
          <IgniteText v-if="!isLoading" as="span">Status</IgniteText>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div role="rowgroup" class="responses-table-body">
      <div
        v-for="(request, index) in requests"
        :key="request?.requestID || index"
        role="row"
        class="responses-table-row"
      >
        <!-- Project  -->
        <div role="cell" class="responses-table-cell w-full md:flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <span v-if="!isLoading" class="flex items-center">
            <div
              class="relative mr-5 h-7 w-7 overflow-hidden rounded-xs bg-primary"
            >
              <IgniteBgWave />
            </div>
            <IgniteText as="span" class="font-semibold">{{
              request.name
            }}</IgniteText>
          </span>
        </div>

        <!-- Type -->
        <div role="cell" class="responses-table-cell w-full md:flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <IgniteText
            v-if="!isLoading"
            as="div"
            class="text-2 font-semibold text-muted md:hidden"
            >Type:</IgniteText
          >
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="text-muted md:font-medium"
          >
            {{ request.type }}
          </IgniteText>
        </div>

        <!-- Action -->
        <div role="cell" class="responses-table-cell w-full md:flex-1">
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="text-2 font-semibold text-muted md:hidden"
            >Action:</IgniteText
          >
          <RequestsAction v-if="!isLoading" :request="request" />
        </div>

        <!-- Status -->
        <div
          role="cell"
          class="responses-table-cell w-full flex-col !items-start justify-center md:flex-1"
        >
          <IgniteLoader v-if="isLoading" class="h-5 w-full" />
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="text-2 font-semibold text-muted md:hidden"
            >Status:</IgniteText
          >
          <IgniteText
            v-if="!isLoading"
            as="span"
            class="flex items-center text-muted"
            :class="[
              request.status === 'Accepted' && 'text-primary',
              request.status === 'Declined' && 'text-error'
            ]"
          >
            <IconCheckMarkThin
              v-if="request.status === 'Accepted'"
              class="mr-3"
            />
            <IconCanceled v-if="request.status === 'Declined'" class="mr-3" />
            <IconClock v-if="request.status === 'Pending'" class="mr-3" />
            {{ request.status }}
          </IgniteText>
          <IgniteText
            v-if="!isLoading && request.statusReason"
            as="span"
            class="ml-6 text-muted"
          >
            Reason: {{ request.statusReason }}
          </IgniteText>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.responses-table {
  @apply mt-7 w-full;
}

.responses-table-header {
  @apply flex flex-1;
}

.responses-table-column-cell {
  @apply border-b border-border px-3 py-6 text-left font-semibold text-muted first:pl-4 md:px-5 md:first:pl-6;
}

.responses-table-body {
  @apply mt-4 space-y-3;
}

.responses-table-row {
  @apply relative flex flex-wrap border-b border-border py-2 transition-colors md:flex-nowrap md:border-b-0;
}

.responses-table-cell {
  @apply items-center overflow-hidden px-3 py-3 text-left first:pl-4 md:flex md:px-5 md:py-6 md:first:pl-6;
}
</style>
