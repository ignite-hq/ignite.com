<template>
  <div>
    <div class="mb-6 ignt-label sm text-center ignt-muted">Incentives</div>
    <div class="rewards mb-6">
      <div class="logo mr-3" />
      <div class="text-center ignt-title md">$40,000</div>
    </div>
    <div class="text-center ignt-content sm ignt-muted">
      Past incentives: $20,000
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectCardIncentives',

  setup(props) {}
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

// .rewards {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// } */
</style>
