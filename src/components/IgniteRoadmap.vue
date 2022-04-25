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
  },
  align: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <ul class="whitespace-nowrap">
    <li
      v-for="(item, key) in items"
      :key="item.name"
      class="item relative inline-block min-w-[8.625rem] whitespace-normal border-t-4 pt-6 pr-7 align-top last:pr-0"
      :class="[
        item.status === 'complited' ? 'border-primary' : 'border-border',
        align === 'right' ? 'last:text-right' : 'last:border-dashed'
      ]"
    >
      <IconCheck
        class="absolute -top-[0.8125rem] h-6 w-6"
        :class="[
          item.status === 'complited' || item.status === 'active'
            ? 'text-primary'
            : 'text-border',
          align === 'right' && key === items.length - 1 ? 'right-0' : 'left-0'
        ]"
      />
      <IgniteText
        v-if="item.name"
        as="div"
        class="pt-1"
        :class="[
          type === 'fundraiser' && 'text-2 font-normal text-muted',
          type !== 'fundraiser' && 'text-3 font-medium'
        ]"
      >
        {{ item.name }}
      </IgniteText>
      <IgniteText
        v-if="item.date"
        as="div"
        :class="[
          type === 'fundraiser' && 'text-3 font-medium',
          type !== 'fundraiser' && 'text-2 font-normal text-muted'
        ]"
      >
        {{ item.date }}
      </IgniteText>
      <IgniteText
        v-if="item.description"
        as="div"
        class="mt-5 max-w-[15rem] text-2 font-normal"
      >
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
