<script lang="ts">
export default {
  name: 'IgniteSelect'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
import IconCaret from '~/components/icons/IconCaret.vue'

interface Emits {
  (e: 'update:modelValue', value: boolean | string | any[]): void
}

interface Item {
  value: string
  label: string
}

interface Props {
  modelValue: {
    type: Item
    required: true
  }
  items: {
    type: Item[]
    required: true
  }
}

withDefaults(defineProps<Props>(), {
  value: { value: '', label: '' } as Item,
  items: () => [] as Item[]
})

const opened = ref(false)

defineEmits<Emits>()

const toggle = () => {
  opened.value = !opened.value
}

const hide = () => {
  opened.value = false
}
</script>

<template>
  <div class="z-1 relative">
    <button
      v-click-outside="hide"
      class="flex h-8.5 w-full items-center rounded-xs border border-border px-5"
      @click="toggle"
    >
      <slot>
        <span class="whitespace-nowrap">{{ modelValue.label }}</span>
      </slot>
      <IconCaret class="ml-3" :class="opened && 'rotate-180'" />
    </button>
    <select
      :value="modelValue"
      class="absolute inset-0 opacity-0 md:hidden"
      @input="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="item in items"
        :key="`select_${modelValue.value}_${item.value}`"
        :value="item"
      >
        {{ item.label }}
      </option>
    </select>
    <ul
      class="z-1 translate-0 shadow-select absolute left-0 top-[100%] max-h-[20rem] min-w-full overflow-auto rounded-xs border border-border bg-white-1000 transition-transform"
      :class="opened ? 'hidden translate-y-3 md:block' : 'hidden'"
      @click="hide"
    >
      <li
        v-for="item in items"
        :key="`list_${modelValue.value}_${item.value}`"
        class="cursor-pointer border-b border-border px-7 py-5 transition-opacity last:border-0 hover:opacity-70"
        :class="
          modelValue.value === item.value && 'pointer-events-none bg-border'
        "
        @click="$emit('update:modelValue', item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss"></style>
