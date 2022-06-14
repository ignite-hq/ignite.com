<script lang="ts">
export default {
  name: 'IgniteSelect'
}
</script>

<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/vue'

import IconCaret from '~/components/icons/IconCaret.vue'

import SlideDown from '../transitions/SlideDown.vue'

interface Value {
  label: string
  value: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
}

const emit = defineEmits<Emits>()

interface Props {
  modelValue: Value
  variants?: string
  items: Value[]
  isMobileNative: boolean
}

withDefaults(defineProps<Props>(), {
  isMobileNative: true,
  variants: ''
})

function onChange(newItemValue: string) {
  emit('update:modelValue', newItemValue)
}
</script>

<template>
  <Listbox
    v-slot="{ open }"
    :model-value="modelValue.value"
    @update:model-value="onChange"
  >
    <div class="z-1 relative">
      <ListboxButton
        class="flex h-8.5 w-full items-center justify-between rounded-xs border border-border px-5"
        :class="variants"
      >
        <span class="flex whitespace-nowrap"
          ><slot name="selected">{{ modelValue.label }}</slot></span
        >
        <IconCaret class="ml-3 shrink-0" :class="open && 'rotate-180'" />
      </ListboxButton>

      <SlideDown>
        <ListboxOptions
          class="z-1 translate-0 absolute left-0 top-[100%] z-10 max-h-[20rem] min-w-full overflow-auto rounded-xs bg-white-1000 shadow-select transition-transform"
          :class="[
            isMobileNative && 'mt-2 hidden md:block',
            !isMobileNative ? 'mt-2 block' : 'hidden'
          ]"
        >
          <ListboxOption
            v-for="item in items"
            :key="`list_${item.value}`"
            v-slot="{ active, selected }"
            :value="item.value"
            as="template"
          >
            <li
              class="flex cursor-pointer items-center border-b border-border px-7 py-5 transition-opacity last:border-0"
              :class="{
                'text-primary': selected,
                'bg-gray-30': active
              }"
            >
              <slot :name="item.value"></slot>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </SlideDown>
    </div>
  </Listbox>
</template>

<style scoped lang="postcss"></style>
