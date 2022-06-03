<script lang="ts">
export default {
  name: 'RequestsTableHeader'
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
import SlideDown from '~/components/transitions/SlideDown.vue'
import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import {
  requestPageFilters,
  requestPageSorts,
  useRequestsStore
} from '~/stores/requests-store'

interface Props {
  projectName: string
}

defineProps<Props>()

const store = useRequestsStore()
</script>

<template>
  <header class="flex flex-col items-center justify-between md:flex-row">
    <div class="space-y-2 text-left">
      <IgniteHeading class="font-title text-5">Requests</IgniteHeading>
      <IgniteText class="mt-5 text-muted"
        >Proposed actions submitted to {{ projectName }}</IgniteText
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
            <span>{{ store.selectedPageFilter.displayName }}</span>
          </ListboxButton>

          <SlideDown>
            <ListboxOptions class="requests-dropdown-list">
              <ListboxOption
                v-for="page in requestPageFilters"
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
          </SlideDown>
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
            <span>{{ store.selectedPageSort.name }}</span>
          </ListboxButton>

          <SlideDown>
            <ListboxOptions class="requests-dropdown-list">
              <ListboxOption
                v-for="sort in requestPageSorts"
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
          </SlideDown>
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
