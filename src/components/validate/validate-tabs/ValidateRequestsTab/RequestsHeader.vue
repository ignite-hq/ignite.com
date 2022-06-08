<script lang="ts">
export default {
  name: 'RequestsHeader'
}
</script>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'

import IconCheck from '~/components/icons/IconCheckMarkThin.vue'
import IconFilter from '~/components/icons/IconFilter.vue'
import IconSort from '~/components/icons/IconSort.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import { useRequestsStore } from '~/stores/requests-store'

const store = useRequestsStore()

interface Props {
  projectLength: string
}

defineProps<Props>()

const projectPageFilters = [
  { id: 'all', name: 'All' },
  { id: 'pending', name: 'Pending' },
  { id: 'accepted', name: 'Accepted' },
  { id: 'declined', name: 'Declined' }
]
const selectedProjectSort = [
  { id: 'newest', name: 'Newest' },
  { id: 'requestType', name: 'Request type' },
  { id: 'project', name: 'Project' }
]
</script>

<template>
  <header class="flex flex-col items-center justify-between md:flex-row">
    <div class="space-y-2 text-left">
      <IgniteText class="text-muted">
        <span class="font-semibold">{{ projectLength }}</span> Proposed actions
        submitted across projects</IgniteText
      >
    </div>

    <div class="mt-6 flex space-x-4 md:mt-0">
      <Listbox v-slot="{ open }" v-model="store.selectedPageFilter">
        <div
          class="relative flex flex-col items-end rounded-2sm"
          :class="{ 'shadow-dropdown': open }"
        >
          <ListboxButton
            class="requests-dropdown-button"
            :class="{
              'requests-dropdown-button--active': open
            }"
          >
            <IconFilter />
            <span>All</span>
          </ListboxButton>

          <ListboxOptions class="requests-dropdown-list">
            <ListboxOption
              v-for="page in projectPageFilters"
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

      <Listbox v-slot="{ open }" v-model="store.selectedPageSort">
        <div
          class="relative flex flex-col items-end rounded-2sm"
          :class="{ 'shadow-dropdown': open }"
        >
          <ListboxButton
            class="requests-dropdown-button"
            :class="{
              'requests-dropdown-button--active': open
            }"
          >
            <IconSort />
            <span>Newest</span>
          </ListboxButton>

          <ListboxOptions class="requests-dropdown-list">
            <ListboxOption
              v-for="sort in selectedProjectSort"
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

<style scoped lang="postcss">
.requests-dropdown-button {
  @apply flex items-center space-x-2 rounded-2sm border border-border p-4 hover:bg-gray-30;

  &--active {
    @apply z-10 rounded-b-none border-white-1000 hover:bg-white-1000;
  }
}

.requests-dropdown-list {
  @apply absolute top-full z-50 mt-[-2px] w-screen max-w-[20rem] rounded-b-2sm rounded-tl-2sm bg-white-1000 py-4;
}

.requests-dropdown-item {
  @apply cursor-pointer py-4 px-6;
}
</style>
