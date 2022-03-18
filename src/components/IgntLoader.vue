<template>
  <div class="loading" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgntLoader'
})
</script>

<style scoped lang="scss">
$base-color: #f7f7f7;
$animation-duration: 1.8s;
$shine-color: #f0f0f0;

.loading {
  max-width: 180px;
  min-height: 8px;
  background: linear-gradient(
    90deg,
    $base-color 0px,
    $shine-color 40px,
    $base-color 80px
  );
  background-size: 600px;
  animation: shine-lines $animation-duration infinite linear;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }
  40%,
  100% {
    background-position: 180px;
  }
}
</style>
