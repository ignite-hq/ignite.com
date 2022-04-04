<template>
  <header class="flex items-center justify-between">
    <h1>Requests</h1>

    <div class="flex space-x-4">
      <Listbox v-slot="{ open }" v-model="selectedPageFilter">
        <div
          class="relative flex flex-col items-end"
          :class="{ 'shadow-dropdown': open }"
        >
          <ListboxButton
            class="requests-dropdown-button"
            :class="{
              'requests-dropdown-button--active': open
            }"
          >
            <IconFilter />
            <span>{{ selectedPageFilter.displayName }}</span>
          </ListboxButton>

          <ListboxOptions class="requests-dropdown-list">
            <ListboxOption
              v-for="page in pageFilters"
              v-slot="{ active, selected }"
              :key="page.id"
              :value="page"
              class="requests-dropdown-item"
              as="template"
            >
              <li
                class="flex items-center justify-between"
                :class="{ 'text-primary': selected, 'bg-gray-30': active }"
              >
                <span>{{ page.name }}</span>
                <IconCheck v-if="selected" class="text-primary" />
              </li>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>

      <Listbox v-slot="{ open }" v-model="selectedPageSort">
        <div
          class="relative flex flex-col items-end"
          :class="{ 'shadow-dropdown': open }"
        >
          <ListboxButton
            class="requests-dropdown-button"
            :class="{
              'requests-dropdown-button--active': open
            }"
          >
            <IconSort />
            <span>{{ selectedPageSort.name }}</span>
          </ListboxButton>

          <ListboxOptions class="requests-dropdown-list">
            <ListboxOption
              v-for="sort in pageSorts"
              v-slot="{ active, selected }"
              :key="sort.id"
              :value="sort"
              class="requests-dropdown-item"
              as="template"
            >
              <li
                class="flex items-center justify-between"
                :class="{ 'text-primary': selected, 'bg-gray-30': active }"
              >
                <span>{{ sort.name }}</span>
                <IconCheck v-if="selected" class="text-primary" />
              </li>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'IgniteRequestsHeader'
}
</script>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'
import { ref } from 'vue'

import IconCheck from './icons/IconCheckMarkThin.vue'
import IconFilter from './icons/IconFilter.vue'
import IconSort from './icons/IconSort.vue'

const pageFilters = [
  { id: 1, name: 'Pending requests', displayName: 'Pending' },
  { id: 2, name: 'Closed requests', displayName: 'Closed' }
]

const pageSorts = [
  { id: 1, name: 'Newest' },
  { id: 2, name: 'Request type' },
  { id: 2, name: 'Requestor' }
]

// state
const selectedPageFilter = ref(pageFilters[0])
const selectedPageSort = ref(pageSorts[0])
</script>

<style scoped lang="postcss">
.requests-dropdown-button {
  @apply flex space-x-2 rounded-2sm border border-border p-4 hover:bg-gray-30;

  &--active {
    @apply z-10 rounded-b-none border-none hover:bg-white-1000;
  }
}

.requests-dropdown-list {
  @apply absolute top-full z-50 mt-[-2px] w-screen max-w-[20rem] rounded-b-2sm rounded-tl-2sm bg-white-1000 py-4;
}

.requests-dropdown-item {
  @apply cursor-pointer py-4 px-6;
}
</style>
