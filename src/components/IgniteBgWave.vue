<template>
  <div class="wave" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IgniteBgWave',
})
</script>

<style scoped lang="scss">
.wave,
.wave::before,
.wave::after {
  content: '';
  position: absolute;
  top: 60%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-left: -300px;
  transform-origin: 50% 50%;
  border-radius: 38% 42%;
  background-color: rgba(255, 255, 255, 0.05);
  animation: spin 32s infinite linear;
}

.wave::before {
  width: 105%;
  height: 95%;
  margin-top: -300px;
  transform-origin: 49% 51%;
  border-radius: 40% 38%;
  background-color: rgba(255,255,255,0.1);
  animation: spin 26s infinite linear;
}

.wave::after {
  width: 102%;
  height: 98%;
  margin-top: -300px;
  transform-origin: 51% 49%;
  border-radius: 48% 42%;
  background-color: rgba(255,255,255,0.16);
  animation: spin 20s infinite linear;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}
</style>
