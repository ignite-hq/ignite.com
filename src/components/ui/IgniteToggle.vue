<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteToggle',
  data() {
    return {
      currentState: false
    }
  },
  computed: {
    isActive() {
      return this.currentState
    },

    checkedValue: {
      get() {
        return this.currentState
      },
      set(newValue) {
        this.currentState = newValue
      }
    }
  }
})
</script>

<script lang="ts" setup>
import IgniteText from '~/components/ui/IgniteText.vue'

defineProps({
  label: {
    type: String
  },
  activeLabel: {
    type: String
  }
})
</script>

<template>
  <label class="flex items-center">
    <IgniteText
      as="span"
      class="mr-3 text-2 transition-colors"
      :class="isActive ? 'text-primary' : 'text-inactive'"
    >
      {{ isActive ? activeLabel : label }}
    </IgniteText>
    <input v-model="checkedValue" type="checkbox" class="h-0 w-0 opacity-0" />
    <span
      class="relative block h-6 w-8 cursor-pointer rounded-[100px] transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-circle after:border after:bg-white-1000 after:transition-all"
      :class="[
        isActive ? 'bg-primary' : 'bg-inactive',
        isActive ? 'after:border-primary' : 'after:border-inactive',
        isActive ? 'after:translate-x-[1.5rem]' : 'after:translate-x-0'
      ]"
    ></span>
  </label>
</template>
