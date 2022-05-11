<script lang="ts">
export default {
  name: 'IgniteSelect'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'

import IgniteDenom from '~/components/common/IgniteDenom.vue'
import IconCaret from '~/components/icons/IconCaret.vue'

interface Emits {
  (e: 'input', value: string): void
}

const emit = defineEmits<Emits>()

interface Props {
  name: string
  value: string
  variants?: string
  items: { labelDenom?: string; label: string; value: number }[]
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
      <span class="whitespace-nowrap">{{ value }}</span>
      <IconCaret class="ml-3" :class="opened && 'rotate-180'" />
    </button>
    <select
      :value="value"
      class="absolute inset-0 opacity-0 md:hidden"
      :class="isMobileNative ? 'md:hidden' : 'hidden'"
    >
      <option
        v-for="(item, key) in items"
        :key="`select_${name}_${item}`"
        :value="key"
      >
        {{ item }}
      </option>
    </select>
    <ul
      class="z-1 translate-0 absolute left-0 top-[100%] max-h-[20rem] min-w-full overflow-auto rounded-xs shadow-select transition-transform"
      :class="[
        opened && isMobileNative && 'mt-2 hidden md:block',
        opened && !isMobileNative ? 'mt-2 block' : 'hidden'
      ]"
      @click="hide"
    >
      <li
        v-for="(item, key) in items"
        :key="`list_${name}_${item}`"
        class="flex cursor-pointer items-center border-b border-border px-7 py-5 transition-opacity last:border-0 hover:opacity-70"
        :class="value === key && 'pointer-events-none bg-border'"
        @click="() => handleInput(item.value)"
      >
        <IgniteDenom
          v-if="item.labelDenom"
          modifier="avatar"
          :denom="item.labelDenom"
          :title="item.labelDenom"
          size="small"
          class="mr-3"
        />
        <span v-if="typeof item.label === 'string'">
          {{ item.label }}
        </span>
        <component :is="item.label" v-else />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss"></style>
