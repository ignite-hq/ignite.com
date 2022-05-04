<script lang="ts">
export default {
  name: 'IgniteSelect',
  props: {
    name: String,
    modelValue: String,
    items: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      opened: false
    }
  },
  methods: {
    toggle() {
      this.opened = !this.opened
    },
    hide() {
      this.opened = false
    }
  }
}
</script>

<script lang="ts" setup>
import IconCaret from '~/components/icons/IconCaret.vue'
</script>

<template>
  <div class="z-1 relative">
    <button
      v-click-outside="hide"
      class="flex h-8.5 w-full items-center rounded-xs border border-border px-5"
      @click="toggle"
    >
      <span class="whitespace-nowrap">{{ items[modelValue] }}</span>
      <IconCaret class="ml-3" :class="opened && 'rotate-180'" />
    </button>
    <select
      :value="modelValue"
      class="absolute inset-0 opacity-0 md:hidden"
      @input="$emit('update:modelValue', $event.target.value)"
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
      class="z-1 translate-0 shadow-select absolute left-0 top-[100%] max-h-[20rem] min-w-full overflow-auto rounded-xs transition-transform"
      :class="opened ? 'hidden translate-y-3 md:block' : 'hidden'"
      @click="hide"
    >
      <li
        v-for="(item, key) in items"
        :key="`list_${name}_${item}`"
        class="cursor-pointer border-b border-border px-7 py-5 transition-opacity last:border-0 hover:opacity-70"
        :class="modelValue === key && 'pointer-events-none bg-border'"
        @click="$emit('update:modelValue', key)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="postcss"></style>
