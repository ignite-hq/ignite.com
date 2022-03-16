<template>
  <div class="ignt-legend">
    <div v-for="item in items" :key="item.name" class="ignt-legend__item">
      <div
        class="ignt-legend__icon mr-1"
        :style="{ 'background-color': item.color }"
      />
      <span class="ignt-content sm ignt-muted">{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgntLegend',

  props: {
    items: {
      type: Array,
      required: true
    }
  },

  setup(props) {
    const { items } = props;

    return {
      items
    }
  }
})
</script>

<style scoped lang="scss">
.ignt-legend {
  display: flex;
  justify-content: center;
  margin-inline: px2rem(-8);

  &__item {
    display: flex;
    align-items: center;
    padding-inline: px2rem(8);
  }

  &__icon {
    width: px2rem(8);
    height: px2rem(8);
    border-radius: 100%;
    background: var(--black-50);
  }
}
</style>
