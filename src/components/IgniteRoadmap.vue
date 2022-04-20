<script lang="ts">
export default {
  name: 'IgniteRoadmap'
}
</script>

<script lang="ts" setup>
import IconCheck from './icons/IconCheck.vue'
import IgniteText from './IgniteText.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <ul class="whitespace-nowrap">
    <li
      v-for="item in items"
      :key="item.name"
      class="item relative inline-block min-w-[8.625rem] whitespace-normal border-t-4 pt-6 pr-7 align-top last:border-dashed last:pr-0"
      :class="item.status === 'complited' ? 'border-primary' : 'border-border'"
    >
      <IconCheck
        class="absolute left-0 -top-[0.8125rem] h-6 w-6"
        :class="
          item.status === 'complited' || item.status === 'active'
            ? 'text-primary'
            : 'text-border'
        "
      />
      <IgniteText as="div" class="pt-1 text-3 font-medium">
        {{ item.name }}
      </IgniteText>
      <IgniteText as="div" class="text-2 font-normal text-muted">
        {{ item.date }}
      </IgniteText>
      <IgniteText as="div" class="mt-5 max-w-[15rem] text-2 font-normal">
        {{ item.description }}
      </IgniteText>
    </li>
  </ul>
</template>

<style lang="postcss">
.item {
  &:before {
    content: '';
  }
  &:after {
    content: '';
  }
}
</style>
