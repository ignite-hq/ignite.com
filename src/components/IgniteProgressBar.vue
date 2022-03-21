<template>
  <div class="ignt-progress__container">
    <div v-if="logo" class="logo mr-3" />
    <div class="ignt-progress" :class="inverse && '_white'">
      <div
        v-for="item in items"
        :key="item.name"
        class="ignt-progress__inner text-center"
        :class="item.split && '_no-radius'"
        :style="{ 'width': item.value + '%', 'background-color': item.bgColor, 'color': item.color }"
      >
        <span class="ignt-label xs">
          <b>{{ item.value }}%</b>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteProgressBar',

  props: {
    inverse: {
      type: Boolean
    },
    items: {
      type: Array,
      required: true
    },
    logo: {
      type: String
    },
  },

  setup(props) {
    const { items, logo } = props;

    return {
      items,
      logo
    }
  }
})
</script>

<style scoped lang="postcss">
/* // .logo {
//   width: var(--spacing-6);
//   height: var(--spacing-6);
//   flex-shrink: 0;
//   border-radius: 100%;
//   background-color: var(--gray-50);
//   box-shadow: inset 0px 0px px2rem(4) var(--black-660);
// }

// .ignt-progress {
//   overflow: hidden;
//   position: relative;
//   display: flex;
//   width: 100%;
//   border-radius: px2rem(100);
//   background: var(--gray-50);
//   font-size: 0;
//   &._white {
//     background-color: var(--white);
//   }

//   &__container {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   &__inner {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: px2rem(20);
//     border-radius: 0px px2rem px2rem 0px;
//     &._no-radius {
//       border-radius: 0;
//     }
//   }
// } */
</style>
