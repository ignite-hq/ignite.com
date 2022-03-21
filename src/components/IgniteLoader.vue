<template>
  <div class="loading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteLoader',
})
</script>

<style scoped lang="postcss">
/* // .loading {
//   max-width: 180px;
//   min-height: 8px;
//   background: linear-gradient(
//     90deg,
//     #f7f7f7 0px,
//     #f0f0f0 40px,
//     #f7f7f7 80px
//   );
//   background-size: 600px;
//   animation: shine-lines 1.8s infinite linear;
// }

// @keyframes shine-lines {
//   0% {
//     background-position: -100px;
//   }
//   40%,
//   100% {
//     background-position: 180px;
//   }
// } */
</style>
