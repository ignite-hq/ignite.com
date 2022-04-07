<template>
  <div class="wave__container">
    <div class="wave" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteBgWave'
})
</script>

<style scoped lang="postcss">
.wave__container {
  position: absolute;
  width: 120%;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-60%);
}

.wave,
.wave::before,
.wave::after {
  content: '';
  position: absolute;
  top: 60%;
  left: 50%;
  width: 100%;
  padding-bottom: 100%;
  margin-left: -60%;
  transform-origin: 50% 50%;
  border-radius: 38% 42%;
  background-color: rgba(255, 255, 255, 0.05);
  animation: spin 32s infinite linear;
}

.wave::before {
  width: 105%;
  padding-bottom: 91%;
  margin-top: -60%;
  transform-origin: 49% 51%;
  border-radius: 40% 38%;
  background-color: rgba(255, 255, 255, 0.1);
  animation: spin 26s infinite linear;
}

.wave::after {
  width: 102%;
  padding-bottom: 98%;
  margin-top: -55%;
  transform-origin: 51% 49%;
  border-radius: 48% 42%;
  background-color: rgba(255, 255, 255, 0.16);
  animation: spin 20s infinite linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
