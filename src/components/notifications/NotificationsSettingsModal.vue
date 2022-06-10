<script lang="ts">
export default {
  name: 'NotificationsSettingsModal'
}
</script>

<script lang="ts" setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
import { ref } from 'vue'

import IgniteHeading from '~/components/ui/IgniteHeading.vue'
import IgniteModal from '~/components/ui/IgniteModal.vue'
import IgniteText from '~/components/ui/IgniteText.vue'
import IgniteToggle from '~/components/ui/IgniteToggle.vue'
import IgniteButton from '~/components/ui/IgniteButton.vue'

interface Emits {
  (e: 'close'): void
}

const emit = defineEmits<Emits>()

// handlers
function onClose() {
  emit('close')
}

const categories = ref({
  Projects: [
    {
      name: 'Projects',
      items: [
        {
          title: 'Archway',
          value: true
        },
        {
          title: 'Akash',
          value: true
        },
        {
          title: 'Cosmos',
          value: true
        },
        {
          title: 'Chihuahua',
          value: true
        },
        {
          title: 'Kava',
          value: true
        },
        {
          title: 'Luna',
          value: true
        },
        {
          title: 'Osmosis',
          value: true
        }
      ]
    }
  ],
  Types: [
    {
      name: 'Fundraisers',
      items: [
        {
          title: 'Contribution status updates',
          value: true
        },
        {
          title: 'Fundraiser status updates',
          value: true
        },
        {
          title: 'Voucher status updates',
          value: true
        }
      ]
    },
    {
      name: 'Requests',
      items: [
        {
          title: 'Parameter change requests',
          value: true
        },
        {
          title: 'Token requests',
          value: true
        },
        {
          title: 'Validation requests',
          value: true
        }
      ]
    },
    {
      name: 'Validation',
      items: [
        {
          title: 'Genesis file updates',
          value: true
        },
        {
          title: 'Project source code updates',
          value: true
        },
        {
          title: 'Project status updates',
          value: true
        },
        {
          title: 'Rewards updates',
          value: true
        },
        {
          title: 'Voucher updates',
          value: true
        }
      ]
    },
    {
      name: 'Coordination',
      items: [
        {
          title: 'ID updates and transfers',
          value: true
        },
        {
          title: 'Fundraiser updates',
          value: true
        },
        {
          title: 'Mainnet updates',
          value: true
        },
        {
          title: 'Project updates',
          value: true
        },
        {
          title: 'Testnet updates',
          value: true
        },
        {
          title: 'User participation updates',
          value: true
        },
        {
          title: 'Validator participation updates',
          value: true
        }
      ]
    }
  ]
})
</script>

<template>
  <IgniteModal @after-leave="resetState" @close="onClose">
    <template #title>
      <IgniteHeading as="div" class="text-center text-5 font-semibold"
        >Settings</IgniteHeading
      >
    </template>
    <template #description>
      <IgniteText as="div" class="mt-5 text-center text-muted"
        >Notification types to be alerted about</IgniteText
      >
    </template>

    <template #body>
      <TabGroup>
        <TabList class="mt-6 flex rounded bg-gray-30">
          <Tab
            v-for="category in Object.keys(categories)"
            :key="category"
            v-slot="{ selected }"
            as="template"
          >
            <button
              :class="[
                'w-full rounded py-4 px-5 transition-colors',
                selected ? 'bg-gray-0 text-white-1000' : 'hover:text-primary'
              ]"
            >
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel
            v-for="(sections, idx) in Object.values(categories)"
            :key="idx"
            class="pt-7"
          >
            <ul class="-mr-7 max-h-[22.5rem] overflow-auto">
              <li
                v-for="section in sections"
                :key="section.name"
                class="mt-7 pr-7 first:mt-0"
              >
                <IgniteHeading
                  v-if="section.name !== Object.keys(categories)[idx]"
                  class="relative flex items-center text-2 font-semibold"
                >
                  <span>{{ section.name }}</span>
                  <span class="ml-3 w-full border-b border-border" />
                </IgniteHeading>
                <ul class="">
                  <li
                    v-for="item in section.items"
                    :key="item.title"
                    class="relative py-5"
                  >
                    <label
                      class="text-sm flex w-full select-none items-center justify-between"
                    >
                      <span class="mr-3">{{ item.title }}</span>
                      <IgniteToggle :defaultState="item.value" />
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </template>

    <template #footer>
      <div class="flex items-center justify-between">
        <IgniteButton
          @click="onClose"
          color="inherit"
          variant="primary"
          class="w-full"
          >Cancel</IgniteButton
        >
        <IgniteButton
          @click="onClose"
          color="gray-dark"
          variant="primary"
          class="w-full"
          >Save</IgniteButton
        >
      </div>
    </template>
  </IgniteModal>
</template>
