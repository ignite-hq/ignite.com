<script lang="ts">
export default {
  name: 'IgniteSelect'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IconCaret from '~/components/icons/IconCaret.vue'

interface Emits {
  (e: 'input', value: string): void
}

const emit = defineEmits<Emits>()

interface Props {
  selected: {
    label: string
    value: string
  }
  variants?: string
  items: {
    label: string
    value: string
  }[]
  isMobileNative: boolean
}

withDefaults(defineProps<Props>(), {
  isMobileNative: true
})

// state
const opened = ref(false)

// handlers
function handleInput(value: string) {
  emit('input', value)
}

// methods
function toggle() {
  opened.value = !opened.value
}
function hide() {
  opened.value = false
}
</script>

<template>
  <div class="z-1 relative">
    <button
      v-click-outside="hide"
      class="flex h-8.5 w-full items-center rounded-xs border border-border px-5"
      :class="variants"
      @click="toggle"
    >
      <span class="whitespace-nowrap">{{ selected.label }}</span>
      <IconCaret class="ml-3" :class="opened && 'rotate-180'" />
    </button>
    <select
      :value="selected.label"
      class="absolute inset-0 opacity-0 md:hidden"
      :class="isMobileNative ? 'md:hidden' : 'hidden'"
    >
      <option v-for="i in items" :key="`select_${i.value}`" :value="i.value">
        {{ i.label }}
      </option>
    </select>
    <ul
      class="z-1 translate-0 absolute left-0 top-[100%] z-10 max-h-[20rem] min-w-full overflow-auto rounded-xs bg-white-1000 shadow-select transition-transform"
      :class="[
        opened && isMobileNative && 'mt-2 hidden md:block',
        opened && !isMobileNative ? 'mt-2 block' : 'hidden'
      ]"
      @click="hide"
    >
      <li
        v-for="i in items"
        :key="`list_${i.value}`"
        class="flex cursor-pointer items-center border-b border-border px-7 py-5 transition-opacity last:border-0 hover:opacity-70"
        :class="selected.value === i.value && 'pointer-events-none bg-border'"
        @click="() => handleInput(i.value)"
      >
        <slot :name="i.value"></slot>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss"></style>
